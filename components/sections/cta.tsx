import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTAScene } from "@/components/3d/scenes"
import { getWhatsAppUrl } from "@/lib/contact"

export function CTASection() {
  return (
    <section id="contacto" className="relative scroll-mt-20 overflow-hidden py-28 md:py-36">
      <CTAScene />
      <div className="container relative z-10 mx-auto px-4"><div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-primary/25 bg-slate-950/65 px-6 py-14 text-center shadow-2xl glow-blue md:px-14 md:py-20"><div className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" /><div className="mb-7 inline-flex items-center gap-2 rounded-full glass px-4 py-2"><Sparkles className="h-4 w-4 text-primary" /><span className="text-sm text-slate-200">Una solución diseñada para tu operación</span></div><h2 className="mx-auto max-w-4xl text-balance text-3xl font-bold md:text-5xl lg:text-6xl">Descubre cuánto puede automatizar <span className="gradient-text glow-text">KEDYP AI en tu negocio</span></h2><p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">Agenda una demostración y conoce cómo una IA personalizada puede responder mensajes, filtrar prospectos y agendar citas automáticamente.</p><Button asChild size="lg" className="mt-9 min-h-12 bg-gradient-to-r from-primary to-secondary px-8 text-white glow-blue"><Link href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">Agendar demostración <ArrowRight className="ml-2 h-5 w-5" /></Link></Button><p className="mt-6 text-sm text-slate-400">Sin compromiso. Analizamos tu proceso actual y te mostramos una solución adaptada a tu negocio.</p></div></div>
    </section>
  )
}
