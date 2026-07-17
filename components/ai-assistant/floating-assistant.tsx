"use client"

import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowLeft, BarChart3, Bot, CalendarDays, ChevronRight, Eraser, MessageCircle, Play, Send, Sparkles, X } from "lucide-react"
import { getWhatsAppUrl } from "@/lib/contact"
import { getAssistantResponse } from "./assistant-responses"

type View = "home" | "chat" | "diagnostic"
type Message = { id: number; role: "assistant" | "user"; text: string }
type Diagnostic = { business: string; channel: string; volume: string; problem: string }

const quickQuestions = ["¿Qué servicios ofrecen?", "¿Cómo funciona?", "¿Funciona para mi negocio?", "¿Cuánto cuesta?", "¿Cómo agendo una demo?"]
const channelOptions = ["WhatsApp", "Instagram", "Messenger", "Página web", "Otro"]
const problemOptions = ["Tardo mucho", "Pierdo clientes", "No doy seguimiento", "Preguntas repetitivas", "Agendo manualmente", "Otro"]
const initialMessages: Message[] = [{ id: 1, role: "assistant", text: "Hola 👋 Puedo ayudarte a conocer KEDYP AI." }]

export function FloatingAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [showLauncher, setShowLauncher] = useState(true)
  const [view, setView] = useState<View>("home")
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [step, setStep] = useState(0)
  const [diagnostic, setDiagnostic] = useState<Diagnostic>({ business: "", channel: "", volume: "", problem: "" })
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const requestPendingRef = useRef(false)

  useEffect(() => {
    const target = document.querySelector("#contacto")
    if (!target) return
    const observer = new IntersectionObserver(([entry]) => {
      setShowLauncher(!entry.isIntersecting)
      if (entry.isIntersecting) setIsOpen(false)
    }, { threshold: 0.15 })
    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, isTyping, step, view])

  useEffect(() => {
    if (!isOpen) return
    const close = (event: globalThis.KeyboardEvent) => event.key === "Escape" && setIsOpen(false)
    document.addEventListener("keydown", close)
    return () => document.removeEventListener("keydown", close)
  }, [isOpen])

  const sendQuestion = async (question: string) => {
    const clean = question.trim().slice(0, 300)
    if (!clean || requestPendingRef.current) return
    requestPendingRef.current = true
    const id = Date.now()
    const history = messages.slice(-10).map((message) => ({
      role: message.role,
      content: message.text.slice(0, 300),
    }))
    setMessages((current) => [...current, { id, role: "user", text: clean }])
    setInput("")
    setIsTyping(true)
    try {
      const reply = await getAssistantResponse(clean, history)
      setMessages((current) => [...current, { id: id + 1, role: "assistant", text: reply }])
    } finally {
      setIsTyping(false)
      requestPendingRef.current = false
      inputRef.current?.focus()
    }
  }

  const submit = (event: FormEvent) => { event.preventDefault(); sendQuestion(input) }
  const handleKey = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); sendQuestion(input) }
  }
  const goToDemos = () => {
    setIsOpen(false)
    document.querySelector("#demostraciones")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }
  const resetDiagnostic = () => { setStep(0); setDiagnostic({ business: "", channel: "", volume: "", problem: "" }) }
  const goHome = () => { setView("home"); resetDiagnostic() }

  return (
    <>
      <div className={`fixed z-40 transition-all duration-300 ${showLauncher && !isOpen ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`} style={{ right: "max(1rem, env(safe-area-inset-right))", bottom: "max(1rem, env(safe-area-inset-bottom))" }}>
        <div role="tooltip" className="mb-2 ml-auto hidden w-max max-w-[260px] rounded-xl border border-primary/20 bg-card/95 px-3 py-2 text-xs text-slate-200 shadow-xl sm:block">Hola 👋 ¿Quieres probar nuestra IA?</div>
        <button type="button" onClick={() => setIsOpen(true)} className="assistant-launcher flex min-h-12 items-center gap-2 rounded-full border border-primary/40 bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-3 font-semibold text-white shadow-2xl focus-visible:outline-2 focus-visible:outline-primary sm:px-5" aria-label="Probar KEDYP AI"><Sparkles className="h-5 w-5" /><span className="hidden sm:inline">Probar KEDYP AI</span><span className="sm:hidden">Probar IA</span></button>
      </div>

      {isOpen && <section role="dialog" aria-modal="true" aria-label="KEDYP AI Assistant" className="fixed inset-x-2 bottom-2 z-[70] flex h-[min(760px,calc(100dvh-1rem))] flex-col overflow-hidden rounded-3xl border border-primary/30 bg-[#080d20]/98 shadow-2xl glow-blue sm:inset-x-auto sm:bottom-5 sm:right-5 sm:h-[min(720px,calc(100dvh-2.5rem))] sm:w-[400px]">
        <header className="flex shrink-0 items-center gap-3 border-b border-primary/15 px-4 py-3.5">
          {view !== "home" && <button type="button" onClick={goHome} className="flex h-10 w-10 items-center justify-center rounded-xl hover:bg-white/5" aria-label="Regresar al inicio"><ArrowLeft className="h-5 w-5" /></button>}
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary"><Bot className="h-5 w-5 text-white" /></div>
          <div className="min-w-0 flex-1"><h2 className="truncate font-semibold">KEDYP AI Assistant</h2><p className="flex items-center gap-1.5 text-xs text-emerald-300"><span className="h-2 w-2 rounded-full bg-emerald-400" />En línea</p></div>
          {view === "chat" && <button type="button" onClick={() => setMessages(initialMessages)} className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-300 hover:bg-white/5" aria-label="Limpiar conversación"><Eraser className="h-4 w-4" /></button>}
          <button type="button" onClick={() => setIsOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-300 hover:bg-white/5" aria-label="Cerrar asistente"><X className="h-5 w-5" /></button>
        </header>

        <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-4 sm:p-5">
          {view === "home" && <AssistantHome onChat={() => setView("chat")} onDiagnostic={() => setView("diagnostic")} onDemos={goToDemos} />}
          {view === "chat" && <div className="space-y-4"><div className="flex flex-wrap gap-2">{quickQuestions.map((question) => <button key={question} type="button" onClick={() => sendQuestion(question)} className="rounded-full border border-primary/20 bg-primary/5 px-3 py-2 text-left text-xs text-blue-100 transition hover:border-primary/50 hover:bg-primary/10">{question}</button>)}</div>{messages.map((message) => <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}><p className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${message.role === "user" ? "rounded-br-sm bg-primary text-white" : "rounded-bl-sm border border-primary/15 bg-card text-slate-200"}`}>{message.text}</p></div>)}{isTyping && <div className="flex justify-start"><p className="rounded-2xl rounded-bl-sm border border-primary/15 bg-card px-4 py-3 text-sm text-slate-400">Escribiendo<span className="assistant-dots">...</span></p></div>}</div>}
          {view === "diagnostic" && <BusinessDiagnostic step={step} data={diagnostic} setData={setDiagnostic} setStep={setStep} onReset={resetDiagnostic} />}
        </div>

        {view === "chat" && <form onSubmit={submit} className="shrink-0 border-t border-primary/15 bg-[#080d20] p-3 pb-[max(.75rem,env(safe-area-inset-bottom))]"><div className="flex items-center gap-2 rounded-2xl border border-primary/25 bg-card/70 p-2 focus-within:border-primary/60"><input ref={inputRef} value={input} onChange={(event) => setInput(event.target.value.slice(0, 300))} onKeyDown={handleKey} maxLength={300} placeholder="Escribe tu pregunta..." className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm outline-none placeholder:text-slate-500" aria-label="Escribe tu pregunta" /><span className="text-[10px] text-slate-500">{input.length}/300</span><button type="submit" disabled={!input.trim() || isTyping} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white disabled:cursor-not-allowed disabled:opacity-40" aria-label="Enviar mensaje"><Send className="h-4 w-4" /></button></div></form>}
      </section>}
    </>
  )
}

function AssistantHome({ onChat, onDiagnostic, onDemos }: { onChat: () => void; onDiagnostic: () => void; onDemos: () => void }) {
  const cards = [
    { icon: MessageCircle, title: "Hacer una pregunta", text: "Pregunta cualquier cosa sobre KEDYP AI.", action: onChat },
    { icon: BarChart3, title: "Analizar mi negocio", text: "Obtén recomendaciones rápidas para tu empresa.", action: onDiagnostic },
    { icon: Play, title: "Ver cómo funciona", text: "Ir a las demostraciones de la landing.", action: onDemos },
  ]

  return (
    <div>
      <div className="mb-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-5"><p className="text-2xl font-bold">Hola 👋<br /><span className="gradient-text">Soy KEDYP AI</span></p><p className="mt-3 text-sm leading-relaxed text-slate-300">Explora cómo la inteligencia artificial puede ayudarte a automatizar la atención de tu negocio.</p></div>
      <div className="grid gap-3">
        {cards.map((card) => <button key={card.title} type="button" onClick={card.action} className="group flex items-center gap-4 rounded-2xl border border-primary/20 bg-card/65 p-4 text-left transition hover:-translate-y-0.5 hover:border-primary/45"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20"><card.icon className="h-5 w-5 text-blue-200" /></span><span className="min-w-0 flex-1"><span className="block font-semibold">{card.title}</span><span className="mt-1 block text-xs leading-relaxed text-slate-400">{card.text}</span></span><ChevronRight className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-1" /></button>)}
        <Link href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl border border-primary/20 bg-card/65 p-4 transition hover:-translate-y-0.5 hover:border-primary/45"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20"><CalendarDays className="h-5 w-5 text-blue-200" /></span><span className="min-w-0 flex-1"><span className="block font-semibold">Agendar una demo</span><span className="mt-1 block text-xs text-slate-400">Contacta con nuestro equipo.</span></span><ChevronRight className="h-4 w-4 text-slate-500" /></Link>
      </div>
    </div>
  )
}

function BusinessDiagnostic({ step, data, setData, setStep, onReset }: { step: number; data: Diagnostic; setData: (value: Diagnostic) => void; setStep: (value: number) => void; onReset: () => void }) {
  const update = (key: keyof Diagnostic, value: string) => { setData({ ...data, [key]: value }); setStep(step + 1) }
  if (step >= 4) return <div className="flex min-h-full flex-col justify-center"><div className="rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/10 to-secondary/10 p-6"><Sparkles className="mb-4 h-7 w-7 text-primary" /><p className="text-xs font-semibold uppercase tracking-widest text-primary">Recomendación</p><h3 className="mt-2 text-xl font-semibold">Una automatización adaptada a tu operación</h3><p className="mt-4 text-sm leading-relaxed text-slate-300">Según tus respuestas, KEDYP AI puede ayudar a {data.business || "tu negocio"} a responder más rápido por {data.channel || "sus canales digitales"}, organizar prospectos y automatizar tareas repetitivas relacionadas con “{data.problem || "la atención diaria"}”.</p><p className="mt-3 text-xs text-slate-400">Este diagnóstico es orientativo y no almacena tus respuestas.</p><button type="button" onClick={onReset} className="mt-6 rounded-xl border border-primary/30 px-4 py-2.5 text-sm hover:bg-primary/10">Repetir diagnóstico</button></div></div>
  const titles = ["¿Qué tipo de negocio tienes?", "¿Por qué canal recibes más mensajes?", "¿Cuántos mensajes recibes al día?", "¿Cuál es tu mayor problema?"]
  const options = step === 1 ? channelOptions : step === 3 ? problemOptions : null
  const field = step === 0 ? "business" : step === 2 ? "volume" : null
  return <div><div className="mb-6 flex items-center justify-between"><span className="text-xs font-semibold uppercase tracking-widest text-primary">Diagnóstico</span><span className="text-xs text-slate-400">Paso {step + 1} de 4</span></div><div className="mb-6 h-1.5 overflow-hidden rounded-full bg-white/5"><div className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all" style={{ width: `${(step + 1) * 25}%` }} /></div><h3 className="text-xl font-semibold">{titles[step]}</h3>{options ? <div className="mt-5 grid gap-2">{options.map((option) => <button key={option} type="button" onClick={() => update(step === 1 ? "channel" : "problem", option)} className="rounded-xl border border-primary/20 bg-card/60 p-3 text-left text-sm hover:border-primary/50 hover:bg-primary/5">{option}</button>)}</div> : <DiagnosticInput key={step} placeholder={step === 0 ? "Ej. clínica dental" : "Ej. 30 mensajes"} onContinue={(value) => field && update(field, value)} />}</div>
}

function DiagnosticInput({ placeholder, onContinue }: { placeholder: string; onContinue: (value: string) => void }) {
  const [value, setValue] = useState("")
  return <form className="mt-5" onSubmit={(event) => { event.preventDefault(); if (value.trim()) onContinue(value.trim().slice(0, 100)) }}><input autoFocus value={value} onChange={(event) => setValue(event.target.value.slice(0, 100))} placeholder={placeholder} maxLength={100} className="w-full rounded-xl border border-primary/25 bg-card/70 px-4 py-3 text-sm outline-none focus:border-primary" /><button type="submit" disabled={!value.trim()} className="mt-3 flex min-h-11 w-full items-center justify-center rounded-xl bg-gradient-to-r from-primary to-secondary font-semibold text-white disabled:opacity-40">Continuar <ChevronRight className="ml-1 h-4 w-4" /></button></form>
}
