"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Play, ShoppingBag, Calendar, MessageSquare } from "lucide-react"
import { getWhatsAppUrl } from "@/lib/contact"

const chatMessages = [
  { from: "user", text: "Hola, quiero pedir una pizza 🍕", time: "9:40 a.m." },
  {
    from: "bot",
    text: "¡Perfecto! Estoy preparado para agendar tu cita o hacer un pedido. Estamos ubicados en Tlalnepantla 📍",
    time: "9:40 a.m.",
  },
  { from: "user", text: "Quiero una pizza grande de pepperoni", time: "9:41 a.m." },
  {
    from: "bot",
    text: "🍕 Perfecto, ya tengo tu pedido. Solo bríndame estos datos por favor 📋",
    time: "9:41 a.m.",
  },
  { from: "user", text: "Calle 1, número 23", time: "9:41 a.m." },
]

const features = [
  { icon: ShoppingBag, text: "Toma pedidos automáticamente" },
  { icon: Calendar, text: "Agenda citas sin intervención" },
  { icon: MessageSquare, text: "Da seguimiento a cada conversación" },
]

function PhoneMockup() {
  return (
    <div className="relative mx-auto fade-in-up">
      {/* Glow behind phone */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl rounded-full scale-90" />

      <div className="float-y relative w-full max-w-[300px] h-[580px] sm:h-[610px] mx-auto rounded-[3rem] border-[10px] border-foreground/90 bg-black overflow-hidden shadow-2xl glow-purple">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground/90 rounded-b-2xl z-20" />

        {/* Status bar */}
        <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[10px] text-white">
          <span>9:41</span>
          <span>5G</span>
        </div>

        {/* Chat header */}
        <div className="flex items-center gap-3 px-4 py-3 bg-card border-b border-border">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary" />
          <div className="flex-1">
            <div className="text-sm font-semibold text-white">pizzeria-kedyp</div>
            <div className="text-[10px] text-green-400">en línea</div>
          </div>
        </div>

        {/* Messages */}
        <div className="px-3 py-4 space-y-3 overflow-hidden h-[calc(100%-180px)] bg-[#0d0d1a]">
          {chatMessages.map((msg, i) => (
            <div
              key={i}
              className={`flex fade-in ${msg.from === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-3 py-2 ${
                  msg.from === "user"
                    ? "bg-primary/25 rounded-tr-sm"
                    : "bg-card rounded-tl-sm border border-border"
                }`}
              >
                <p className="text-xs text-white leading-relaxed">{msg.text}</p>
                <span className="text-[9px] text-muted-foreground block text-right mt-1">{msg.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Payment method bottom sheet */}
        <div className="absolute bottom-0 left-0 right-0 bg-card border-t border-border rounded-t-2xl p-4">
          <div className="text-xs font-semibold text-white text-center mb-3">Método de pago</div>
          <div className="flex items-center justify-between text-xs text-white py-2 border-b border-border">
            <span>Efectivo</span>
            <Check className="w-4 h-4 text-green-400" />
          </div>
          <button className="w-full mt-3 bg-green-500 text-white text-sm font-semibold py-2.5 rounded-lg">
            Enviar
          </button>
        </div>
      </div>
    </div>
  )
}

export function ShowcaseSection() {
  return (
    <section id="demo" className="relative overflow-hidden py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold tracking-widest text-primary uppercase">
              Más ventas, menos esfuerzo
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-2 leading-tight">
              Automatiza tu atención
            </h2>
            <p className="text-4xl md:text-5xl font-serif italic gradient-text leading-tight mb-6">
              y convierte conversaciones en ventas
            </p>
            <p className="text-lg text-muted-foreground mb-4 max-w-xl">
              Con KEDYP AI tendrás un asistente virtual que responde en segundos, agenda citas,
              resuelve dudas y sigue a tus clientes hasta cerrar la venta... sin que muevas un dedo.
            </p>
            <p className="text-muted-foreground mb-8 max-w-xl">
              Se adapta a la información y los procesos de tu negocio para mantener una atención
              consistente dentro y fuera del horario de tu equipo.
            </p>

            <div className="space-y-3 mb-8">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center">
                    <f.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{f.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-blue group"><Link href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">Agendar demo<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></Link></Button>
              <Button asChild size="lg" variant="outline" className="border-border hover:bg-muted group"><Link href="#demostraciones"><Play className="w-4 h-4 mr-2" />Cómo funciona</Link></Button>
            </div>
          </motion.div>

          {/* Right phone */}
          <PhoneMockup />
        </div>
      </div>
    </section>
  )
}
