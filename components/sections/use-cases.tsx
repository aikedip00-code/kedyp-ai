import { Building2, Car, GraduationCap, HeartPulse, Scissors, Utensils } from "lucide-react"

const cases = [
  { icon: HeartPulse, title: "Clínicas", text: "Responder dudas frecuentes y facilitar el agendamiento de consultas." },
  { icon: GraduationCap, title: "Escuelas", text: "Informar sobre inscripciones y recopilar datos de personas interesadas." },
  { icon: Utensils, title: "Restaurantes", text: "Gestionar reservaciones, horarios y preguntas frecuentes." },
  { icon: Building2, title: "Inmobiliarias", text: "Calificar prospectos y ayudar a programar visitas." },
  { icon: Car, title: "Talleres", text: "Recopilar datos del vehículo y preparar solicitudes de servicio." },
  { icon: Scissors, title: "Salones de belleza", text: "Mostrar servicios disponibles y facilitar el agendamiento de citas." },
]

export function UseCasesSection() {
  return (
    <section className="relative py-24 md:py-32"><div className="container mx-auto px-4"><div className="mx-auto mb-14 max-w-3xl text-center"><span className="text-sm font-semibold uppercase tracking-widest text-secondary">Casos de uso</span><h2 className="mt-4 text-balance text-3xl font-bold md:text-5xl">Automatización adaptada a <span className="gradient-text">cada negocio</span></h2><p className="mt-5 text-slate-300">Ejemplos de procesos que pueden diseñarse según la operación y necesidades de cada empresa.</p></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{cases.map((item) => <article key={item.title} className="rounded-2xl border border-primary/15 bg-card/45 p-6 transition duration-300 hover:-translate-y-1 hover:bg-card/70"><item.icon className="mb-5 h-7 w-7 text-primary" /><h3 className="text-lg font-semibold">{item.title}</h3><p className="mt-2 leading-relaxed text-slate-300">{item.text}</p></article>)}</div></div></section>
  )
}
