import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  metadataBase: new URL('https://kedypai.com'),
  title: 'KEDYP AI | Automatización de WhatsApp e Instagram con Inteligencia Artificial',
  description:
    'Automatiza la atención de tu negocio con inteligencia artificial. Responde mensajes, califica prospectos, agenda citas y realiza seguimientos en WhatsApp e Instagram.',
  keywords: ['IA', 'inteligencia artificial', 'automatización', 'WhatsApp', 'Instagram', 'chatbot', 'KEDYP AI'],
  icons: { icon: '/kedyp-ai-logo.png', apple: '/kedyp-ai-logo.png' },
  openGraph: {
    title: 'KEDYP AI | Automatización de WhatsApp e Instagram con IA',
    description: 'Responde mensajes, califica prospectos, agenda citas y realiza seguimientos automáticamente.',
    type: 'website', locale: 'es_MX', siteName: 'KEDYP AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KEDYP AI | Automatización con Inteligencia Artificial',
    description: 'Automatiza la atención de tu negocio en WhatsApp e Instagram.',
  },
}

export const viewport: Viewport = { themeColor: '#050817' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`dark bg-background ${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="antialiased font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
