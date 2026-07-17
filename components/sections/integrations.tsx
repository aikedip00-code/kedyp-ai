import { CalendarDays, Camera, CalendarCheck, Code2, Database, MessagesSquare, MessageCircle, Network } from "lucide-react"

const integrations = [
  { icon: MessageCircle, name: "WhatsApp" }, { icon: Camera, name: "Instagram" },
  { icon: MessagesSquare, name: "Messenger" }, { icon: CalendarDays, name: "Google Calendar" },
  { icon: CalendarCheck, name: "Calendly" }, { icon: Database, name: "CRM" },
  { icon: Network, name: "Meta" }, { icon: Code2, name: "Webhooks" },
]

export function IntegrationsSection() {
  return (
    <section id="integraciones" className="relative scroll-mt-20 border-y border-white/5 bg-gradient-to-b from-primary/[.035] to-transparent py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4"><div className="mx-auto mb-14 max-w-3xl text-center"><span className="text-sm font-semibold uppercase tracking-widest text-primary">Ecosistema</span><h2 className="mt-4 text-balance text-3xl font-bold md:text-5xl">Conecta las herramientas que ya utiliza <span className="gradient-text">tu negocio</span></h2><p className="mt-5 text-slate-300">Creamos integraciones posibles según el proceso, las herramientas disponibles y la viabilidad técnica de cada proyecto.</p></div><div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">{integrations.map((item) => <div key={item.name} className="group flex min-h-32 flex-col items-center justify-center gap-3 rounded-2xl glass p-4 text-center transition hover:-translate-y-1 hover:border-primary/40"><item.icon className="h-7 w-7 text-blue-200 transition-transform group-hover:scale-110" /><span className="font-medium">{item.name}</span></div>)}</div><p className="mx-auto mt-8 max-w-3xl text-center text-sm text-slate-400">La disponibilidad depende de las APIs, permisos y herramientas contratadas por cada negocio.</p></div>
    </section>
  )
}
