"use client"

import { useEffect, useState } from "react"
import { Play, X } from "lucide-react"

const demos = [
  { channel: "WhatsApp", title: "Atención y calificación", description: "Ejemplo del flujo desde la primera pregunta hasta identificar la necesidad del prospecto." },
  { channel: "Instagram", title: "Respuesta a mensajes", description: "Vista del tipo de atención que puede automatizarse desde mensajes directos." },
  { channel: "Agenda", title: "Agendamiento automático", description: "Recorrido de ejemplo para consultar opciones y confirmar una cita.", video: "/demo-agendamiento.mp4" },
  { channel: "Seguimiento", title: "Continuidad comercial", description: "Ejemplo de seguimiento después de una conversación inicial." },
]

export function VideosSection() {
  const [activeDemo, setActiveDemo] = useState<number | null>(null)

  useEffect(() => {
    if (activeDemo === null) return
    const close = (event: KeyboardEvent) => event.key === "Escape" && setActiveDemo(null)
    document.addEventListener("keydown", close)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", close)
      document.body.style.overflow = ""
    }
  }, [activeDemo])

  const selectedDemo = activeDemo === null ? null : demos[activeDemo]

  return (
    <section id="demostraciones" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Demostraciones</span>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">Míralo en <span className="gradient-text">acción</span></h2>
          <p className="mt-5 text-slate-300">Explora ejemplos visuales de los procesos que KEDYP AI puede automatizar.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {demos.map((demo, index) => (
            <button key={demo.title} type="button" onClick={() => setActiveDemo(index)} className="group overflow-hidden rounded-2xl text-left glass transition duration-300 hover:-translate-y-1 hover:border-primary/40 focus-visible:outline-2 focus-visible:outline-primary">
              <span className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-primary/25 via-slate-950 to-secondary/25">
                <span className="absolute left-3 top-3 z-10 rounded-full border border-white/10 bg-background/70 px-2.5 py-1 text-xs text-blue-100">{demo.channel}</span>
                {demo.video && <video src={demo.video} muted playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover opacity-55" aria-hidden="true" />}
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-xl transition-transform group-hover:scale-110"><Play className="ml-1 h-6 w-6" fill="currentColor" /></span>
              </span>
              <span className="block p-5"><span className="block font-semibold">{demo.title}</span><span className="mt-2 block text-sm leading-relaxed text-slate-300">{demo.description}</span></span>
            </button>
          ))}
        </div>
      </div>

      {selectedDemo && (
        <div role="dialog" aria-modal="true" aria-labelledby="demo-title" onClick={() => setActiveDemo(null)} className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-4 backdrop-blur-md">
          <div onClick={(event) => event.stopPropagation()} className={`relative w-full overflow-hidden rounded-3xl glass text-center glow-purple ${selectedDemo.video ? "max-w-4xl p-3 sm:p-5" : "max-w-2xl p-8"}`}>
            <button type="button" onClick={() => setActiveDemo(null)} className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-background/80 hover:bg-background" aria-label="Cerrar demostración"><X className="h-5 w-5" /></button>
            {selectedDemo.video ? (
              <div className="overflow-hidden rounded-2xl bg-black">
                <video key={selectedDemo.video} controls autoPlay playsInline preload="metadata" className="max-h-[78dvh] w-full object-contain">
                  <source src={selectedDemo.video} type="video/mp4" />
                  Tu navegador no puede reproducir este video.
                </video>
              </div>
            ) : (
              <><div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary"><Play className="ml-1 h-7 w-7" /></div><h3 id="demo-title" className="text-2xl font-semibold">{selectedDemo.title}</h3><p className="mx-auto mt-3 max-w-lg text-slate-300">{selectedDemo.description}</p><p className="mt-6 text-sm text-slate-400">Espacio preparado para insertar el video real de esta demostración.</p></>
            )}
            {selectedDemo.video && <h3 id="demo-title" className="px-2 pb-1 pt-4 text-lg font-semibold">{selectedDemo.title}</h3>}
          </div>
        </div>
      )}
    </section>
  )
}
