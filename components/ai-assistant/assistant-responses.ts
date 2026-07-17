export type AssistantHistoryMessage = {
  role: "user" | "assistant"
  content: string
}

const FRIENDLY_ERROR = "En este momento no pude generar una respuesta. Puedes intentar nuevamente o agendar una demostración con nuestro equipo."

function getLocalFallback(question: string): string {
  const value = question.toLocaleLowerCase("es")
  if (/servicio|ofrecen|hacen|whatsapp|instagram/.test(value)) return "KEDYP AI crea asistentes inteligentes para responder mensajes, calificar prospectos, automatizar procesos y agendar citas mediante WhatsApp e Instagram."
  if (/negocio|empresa|clínica|clinica|restaurante|escuela|inmobiliaria|taller|salón|salon/.test(value)) return "Puede adaptarse a clínicas, escuelas, restaurantes, inmobiliarias, talleres, salones de belleza y muchos otros negocios."
  if (/cómo funciona|como funciona|funciona/.test(value)) return "Analizamos tu proceso actual y construimos una automatización adaptada a tu negocio."
  if (/precio|cuesta|costo|plan/.test(value)) return "Cada solución es personalizada. Agenda una demostración para recibir una propuesta."
  if (/demo|demostración|demostracion|agendar|llamada/.test(value)) return "Puedes agendar una llamada desde el botón de demostración."
  return FRIENDLY_ERROR
}

export async function getAssistantResponse(message: string, history: AssistantHistoryMessage[]): Promise<string> {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, history: history.slice(-10) }),
    })
    if (!response.ok) return getLocalFallback(message)
    const data: unknown = await response.json()
    const reply = (data as { reply?: unknown }).reply
    return typeof reply === "string" && reply.trim() ? reply.trim() : getLocalFallback(message)
  } catch {
    return getLocalFallback(message)
  }
}
