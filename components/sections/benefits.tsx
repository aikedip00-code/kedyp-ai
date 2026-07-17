import { Brain, Clock, MessageSquare, Shield, TrendingUp, Zap } from "lucide-react"

const benefits = [
  { icon: Zap, title: "Respuestas inmediatas", text: "Atiende consultas sin hacer esperar al cliente ni interrumpir otras tareas del equipo." },
  { icon: TrendingUp, title: "Más oportunidades atendidas", text: "Da continuidad a cada conversación para reducir prospectos olvidados." },
  { icon: Clock, title: "Atención continua", text: "Mantén disponible la información esencial incluso fuera del horario del equipo." },
  { icon: MessageSquare, title: "Menos tareas repetitivas", text: "Automatiza preguntas frecuentes y recopilación inicial de datos." },
  { icon: Brain, title: "IA personalizada", text: "Adapta respuestas, criterios y tono a la información de tu negocio." },
  { icon: Shield, title: "Control del proceso", text: "Define reglas claras y deriva al equipo las conversaciones que necesitan atención humana." },
]

export function BenefitsSection() {
  return (
    <section className="relative border-y border-white/5 bg-primary/[.025] py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4"><div className="mx-auto mb-14 max-w-3xl text-center"><span className="text-sm font-semibold uppercase tracking-widest text-primary">Beneficios</span><h2 className="mt-4 text-3xl font-bold md:text-5xl">Una atención más ágil y <span className="gradient-text">consistente</span></h2><p className="mt-5 text-slate-300">KEDYP AI ayuda a tu equipo a enfocarse en las conversaciones que realmente requieren intervención humana.</p></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{benefits.map((item, index) => <article key={item.title} className={`rounded-2xl glass p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40 ${index === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-secondary/25"><item.icon className="h-6 w-6 text-blue-200" /></div><h3 className="text-xl font-semibold">{item.title}</h3><p className="mt-2 leading-relaxed text-slate-300">{item.text}</p></article>)}</div></div>
    </section>
  )
}
