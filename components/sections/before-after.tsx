import { Check, X } from "lucide-react"

const before = ["Respuestas tardías", "Prospectos que dejan de contestar", "Preguntas repetitivas", "Citas registradas manualmente", "Falta de seguimiento", "Atención limitada por horarios"]
const after = ["Respuestas automáticas las 24 horas", "Seguimientos personalizados", "Calificación automática de prospectos", "Agendamiento de citas", "Información adaptada al negocio", "Atención simultánea en múltiples conversaciones"]

export function BeforeAfterSection() {
  return (
    <section className="relative border-y border-white/5 bg-slate-950/35 py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">El cambio</span>
          <h2 className="mt-4 text-balance text-3xl font-bold md:text-5xl">De mensajes acumulados a <span className="gradient-text">conversaciones automatizadas</span></h2>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-rose-400/15 bg-rose-950/10 p-6 md:p-8">
            <h3 className="mb-6 text-xl font-semibold text-rose-200">Antes de KEDYP AI</h3>
            <ul className="space-y-4">{before.map((item) => <li key={item} className="flex gap-3 text-slate-300"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-400/10"><X className="h-3.5 w-3.5 text-rose-300" /></span>{item}</li>)}</ul>
          </article>
          <article className="relative overflow-hidden rounded-3xl border border-cyan-400/25 bg-cyan-950/10 p-6 glow-blue md:p-8">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
            <h3 className="relative mb-6 text-xl font-semibold text-cyan-100">Con KEDYP AI</h3>
            <ul className="relative space-y-4">{after.map((item) => <li key={item} className="flex gap-3 text-slate-200"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/15"><Check className="h-3.5 w-3.5 text-emerald-300" /></span>{item}</li>)}</ul>
          </article>
        </div>
      </div>
    </section>
  )
}
