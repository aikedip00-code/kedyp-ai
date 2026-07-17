import Image from "next/image"
import Link from "next/link"

const links = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Integraciones", href: "#integraciones" },
  { label: "Demostraciones", href: "#demostraciones" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border py-12">
      <div className="container mx-auto flex flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="#inicio" className="inline-flex items-center gap-2">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-black/20">
              <Image src="/kedyp-ai-logo.png" alt="Logo de KEDYP AI" width={48} height={48} className="h-full w-full object-contain" />
            </span>
            <span className="text-xl font-bold gradient-text">KEDYP AI</span>
          </Link>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">Automatización inteligente para atender conversaciones en WhatsApp e Instagram.</p>
        </div>
        <nav aria-label="Navegación del pie de página" className="flex flex-wrap gap-x-6 gap-y-3">
          {links.map((link) => <Link key={link.href} href={link.href} className="text-sm text-slate-300 hover:text-white">{link.label}</Link>)}
        </nav>
      </div>
      <div className="container mx-auto mt-8 border-t border-border px-4 pt-8 text-sm text-slate-500">© {new Date().getFullYear()} KEDYP AI. Todos los derechos reservados.</div>
    </footer>
  )
}
