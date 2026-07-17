"use client"

import { motion } from "framer-motion"
import { 
  Camera, 
  MessageCircle, 
  Brain, 
  Clock, 
  Calendar, 
  Users,
  ArrowRight
} from "lucide-react"
import { ServicesScene } from "@/components/3d/scenes"

const services = [
  {
    icon: Camera,
    title: "Automatización de Instagram",
    description: "Responde DMs, comentarios y stories automáticamente con IA entrenada para tu marca.",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: MessageCircle,
    title: "Automatización de WhatsApp",
    description: "Gestiona conversaciones de WhatsApp Business con respuestas inteligentes 24/7.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Brain,
    title: "Respuestas inteligentes con IA",
    description: "Nuestra IA aprende de tu negocio para dar respuestas personalizadas y naturales.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Clock,
    title: "Atención automática 24/7",
    description: "Nunca pierdas un cliente. Tu negocio responde incluso cuando estás durmiendo.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Calendar,
    title: "Agenda automática",
    description: "Programa citas y reservaciones automáticamente sin intervención manual.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Users,
    title: "Derivación a humano",
    description: "Detecta cuando un cliente necesita atención humana y lo deriva al equipo correcto.",
    color: "from-rose-500 to-pink-500",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

export function ServicesSection() {
  return (
    <section id="soluciones-principales" className="relative scroll-mt-20 overflow-hidden py-16 md:py-20 lg:py-24">
      <ServicesScene />
      
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
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Todo lo que necesitas para{" "}
            <span className="gradient-text">automatizar</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluciones completas de automatización con IA para transformar la comunicación de tu negocio
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-6 h-full transition-all duration-300 hover:glow-blue">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Link */}
                <div className="flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Saber más</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Hover gradient */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
