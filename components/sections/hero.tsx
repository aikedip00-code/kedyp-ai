import Link from "next/link"
import { ArrowRight, Bot, MessageSquare, Play, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroScene } from "@/components/3d/scenes"
import { getWhatsAppUrl } from "@/lib/contact"

export function HeroSection() {
  return (
    <section id="inicio" className="relative flex scroll-mt-20 items-center overflow-hidden pt-24 sm:pt-28 lg:pt-24">
      <HeroScene />
      <div className="container relative z-10 mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_.92fr] lg:gap-12">
          <div className="text-center fade-in-up lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm text-slate-300">Atención inteligente para WhatsApp e Instagram</span>
            </div>
            <h1 className="mb-6 text-balance text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl xl:text-[4rem]">
              Automatiza WhatsApp e Instagram con una <span className="gradient-text glow-text">IA que vende por ti 24/7</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-300 lg:mx-0 lg:text-xl">
              Responde clientes al instante, agenda citas y realiza seguimientos automáticos sin aumentar la carga de trabajo de tu equipo.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button asChild size="lg" className="min-h-12 bg-gradient-to-r from-primary to-secondary text-white glow-blue">
                <Link href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">Agendar demostración <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="min-h-12 border-primary/30 bg-background/30 hover:bg-muted">
                <Link href="#demostraciones"><Play className="mr-2 h-4 w-4" />Ver cómo funciona</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 border-t border-primary/15 pt-6 text-sm text-slate-300 lg:justify-start">
              <span>Respuestas inmediatas</span><span>Seguimiento automático</span><span>IA adaptada a tu negocio</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg fade-in-right">
            <div className="absolute inset-6 -z-10 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl" />
            <div className="relative rounded-3xl glass p-5 shadow-2xl glow-blue sm:p-7">
              <div className="mb-6 flex items-center gap-3 border-b border-border pb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary"><Bot className="h-5 w-5 text-white" /></div>
                <div><div className="font-semibold">Asistente KEDYP AI</div><div className="flex items-center gap-1.5 text-xs text-emerald-300"><span className="h-2 w-2 rounded-full bg-emerald-400" />Disponible</div></div>
                <span className="ml-auto rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">WhatsApp</span>
              </div>
              <div className="space-y-4" aria-label="Ejemplo de conversación automatizada">
                <div className="ml-auto max-w-[82%] rounded-2xl rounded-tr-sm bg-primary/20 px-4 py-3 text-sm">Hola, ¿tienen disponibilidad para una cita esta semana?</div>
                <div className="max-w-[88%] rounded-2xl rounded-tl-sm border border-primary/15 bg-card/80 px-4 py-3 text-sm leading-relaxed">¡Hola! Claro. Puedo ayudarte a encontrar un horario. ¿Qué día te funciona mejor?</div>
                <div className="ml-auto max-w-[82%] rounded-2xl rounded-tr-sm bg-primary/20 px-4 py-3 text-sm">El jueves por la tarde.</div>
                <div className="max-w-[88%] rounded-2xl rounded-tl-sm border border-primary/15 bg-card/80 px-4 py-3 text-sm leading-relaxed">Perfecto. Tengo opciones disponibles. Te muestro los horarios para confirmar tu cita.</div>
              </div>
              <div className="mt-5 flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-sm text-emerald-200"><MessageSquare className="h-4 w-4" />Conversación atendida automáticamente</div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
