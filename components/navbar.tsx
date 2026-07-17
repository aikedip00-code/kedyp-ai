"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getWhatsAppUrl } from "@/lib/contact"

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#soluciones", label: "Soluciones" },
  { href: "#integraciones", label: "Integraciones" },
  { href: "#demostraciones", label: "Demostraciones" },
  { href: getWhatsAppUrl(), label: "Contacto", external: true },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isMobileMenuOpen])

  return (
    <nav aria-label="Navegación principal" className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="#inicio" className="flex items-center gap-2 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"><span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-black/20 glow-blue"><Image src="/kedyp-ai-logo.png" alt="Logo de KEDYP AI" width={44} height={44} priority className="h-full w-full object-contain" /></span><span className="text-xl font-bold gradient-text">KEDYP AI</span></Link>
        <div className="hidden items-center gap-5 lg:flex">{navItems.map((item) => <Link key={item.label} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} className="rounded text-sm text-slate-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-primary">{item.label}</Link>)}</div>
        <Button asChild className="hidden bg-gradient-to-r from-primary to-secondary text-white glow-blue md:inline-flex"><Link href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">Agendar demo</Link></Button>
        <button type="button" onClick={() => setIsMobileMenuOpen((open) => !open)} className="flex h-11 w-11 items-center justify-center rounded-lg text-foreground focus-visible:outline-2 focus-visible:outline-primary lg:hidden" aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={isMobileMenuOpen} aria-controls="menu-movil">{isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
      </div>
      {isMobileMenuOpen && <div id="menu-movil" className="glass mx-4 mt-2 rounded-xl lg:hidden"><div className="flex flex-col gap-1 p-4">{navItems.map((item) => <Link key={item.label} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} onClick={() => setIsMobileMenuOpen(false)} className="min-h-11 rounded-lg px-3 py-3 text-sm text-slate-200 hover:bg-white/5">{item.label}</Link>)}<Button asChild className="mt-3 w-full bg-gradient-to-r from-primary to-secondary text-white"><Link href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>Agendar demo</Link></Button></div></div>}
    </nav>
  )
}
