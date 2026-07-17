import { NextResponse } from "next/server"
import { KEDYP_ASSISTANT_SYSTEM_PROMPT } from "@/lib/kedyp-assistant-prompt"

export const runtime = "nodejs"

type ChatRole = "user" | "assistant"
type HistoryMessage = { role: ChatRole; content: string }

const GROQ_ENDPOINT = "https://api.groq.com/openai/v1/chat/completions"
const DEFAULT_MODEL = "openai/gpt-oss-120b"
const MAX_MESSAGE_LENGTH = 300
const MAX_HISTORY_MESSAGES = 10
const REQUEST_TIMEOUT_MS = 20_000

function isHistoryMessage(value: unknown): value is HistoryMessage {
  if (!value || typeof value !== "object") return false
  const item = value as Record<string, unknown>
  return (item.role === "user" || item.role === "assistant")
    && typeof item.content === "string"
    && item.content.trim().length > 0
    && item.content.length <= MAX_MESSAGE_LENGTH
}

function parseBody(value: unknown): { message: string; history: HistoryMessage[] } | null {
  if (!value || typeof value !== "object") return null
  const body = value as Record<string, unknown>
  if (typeof body.message !== "string") return null
  const message = body.message.trim()
  if (!message || message.length > MAX_MESSAGE_LENGTH) return null
  if (body.history !== undefined && !Array.isArray(body.history)) return null
  const history = body.history ?? []
  if (!Array.isArray(history) || history.length > MAX_HISTORY_MESSAGES || !history.every(isHistoryMessage)) return null
  return { message, history }
}

function errorResponse(status: number) {
  return NextResponse.json({ error: "No fue posible generar una respuesta." }, { status })
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return errorResponse(400)
  }

  const input = parseBody(body)
  if (!input) return errorResponse(400)

  const apiKey = process.env.GROQ_API_KEY
  if (!apiKey) return errorResponse(503)

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  try {
    const response = await fetch(GROQ_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || DEFAULT_MODEL,
        messages: [
          { role: "system", content: KEDYP_ASSISTANT_SYSTEM_PROMPT },
          ...input.history,
          { role: "user", content: input.message },
        ],
        temperature: 0.5,
        max_completion_tokens: 350,
      }),
      signal: controller.signal,
      cache: "no-store",
    })

    if (!response.ok) return errorResponse(502)

    const data: unknown = await response.json()
    const reply = (data as { choices?: Array<{ message?: { content?: unknown } }> })
      .choices?.[0]?.message?.content

    if (typeof reply !== "string" || !reply.trim()) return errorResponse(502)
    return NextResponse.json({ reply: reply.trim() })
  } catch (error) {
    return errorResponse(error instanceof DOMException && error.name === "AbortError" ? 504 : 502)
  } finally {
    clearTimeout(timeout)
  }
}
