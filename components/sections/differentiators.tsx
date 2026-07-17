import { Bot, CalendarCheck, GitBranch, Headphones, MessagesSquare, SlidersHorizontal } from "lucide-react"

const items = [
  { icon: Bot, title: "IA personalizada", text: "Se configura con la información, el tono y las reglas de atención de cada negocio." },
  { icon: GitBranch, title: "Procesos reales", text: "Los flujos siguen pasos concretos para atender, recopilar datos y mover cada conversación." },
  { icon: MessagesSquare, title: "Canales conectados", text: "La experiencia puede adaptarse a conversaciones en WhatsApp e Instagram." },
  { icon: CalendarCheck, title: "Agenda y seguimiento", text: "La automatización acompaña al prospecto después de la primera respuesta y facilita la cita." },
  { icon: Headphones, title: "Implementación y soporte", text: "Acompañamos la configuración para que la solución responda a la operación del negocio." },
  { icon: SlidersHorizontal, title: "Flujos flexibles", text: "Cada recorrido se ajusta según el tipo de cliente, solicitud o etapa de atención." },
]

export function DifferentiatorsSection() {
  return (
    <section id="soluciones" className="relative scroll-mt-20 py-16 md:py-20 lg:py-24">
      <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-secondary/10 blur-[120px]" />
      <div className="container relative mx-auto px-4">
        <div className="mb-14 max-w-3xl"><span className="text-sm font-semibold uppercase tracking-widest text-secondary">Diferenciadores</span><h2 className="mt-4 text-3xl font-bold md:text-5xl">Mucho más que un <span className="gradient-text">chatbot</span></h2><p className="mt-5 text-lg leading-relaxed text-slate-300">KEDYP AI se adapta a los procesos reales de tu negocio para atender, organizar y convertir conversaciones automáticamente.</p></div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{items.map((item, index) => <article key={item.title} className={`group relative overflow-hidden rounded-2xl glass p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40 ${index === 0 || index === 5 ? "lg:col-span-2" : ""}`}><div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-secondary/25"><item.icon className="h-6 w-6 text-blue-200" /></div><h3 className="text-xl font-semibold">{item.title}</h3><p className="mt-2 max-w-xl leading-relaxed text-slate-300">{item.text}</p></article>)}</div>
      </div>
    </section>
  )
}
