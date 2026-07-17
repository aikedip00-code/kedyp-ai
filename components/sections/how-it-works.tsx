"use client"

import { motion } from "framer-motion"
import { Phone, Settings, Sparkles, Rocket } from "lucide-react"

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Tu negocio nos contacta",
    description: "Nos cuentas sobre tu negocio, tus clientes y cómo te comunicas con ellos.",
  },
  {
    icon: Settings,
    number: "02",
    title: "Configuramos la automatización",
    description: "Conectamos tus canales de comunicación y configuramos el flujo de mensajes.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Entrenamos la IA",
    description: "Personalizamos la inteligencia artificial con tu información, productos y estilo.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Tu negocio responde automáticamente",
    description: "La IA comienza a responder por ti, 24/7, mientras tú te enfocas en crecer.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="relative scroll-mt-20 overflow-hidden py-16 md:py-20 lg:py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-primary mb-4">
            Cómo Funciona
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Simple, rápido y{" "}
            <span className="gradient-text">efectivo</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            En solo 4 pasos tu negocio estará respondiendo automáticamente con inteligencia artificial
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Card */}
                <motion.div
                  whileHover={{ y: -10 }}
                  className="glass rounded-2xl p-6 h-full relative group"
                >
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-6 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-sm font-bold">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mt-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Decorative corner */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>

                {/* Arrow (except last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center pulse-x">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
