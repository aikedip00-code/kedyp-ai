import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/sections/hero'
import { ServicesSection } from '@/components/sections/services'
import { HowItWorksSection } from '@/components/sections/how-it-works'
import { ShowcaseSection } from '@/components/sections/showcase'
import { BenefitsSection } from '@/components/sections/benefits'
import { BeforeAfterSection } from '@/components/sections/before-after'
import { DifferentiatorsSection } from '@/components/sections/differentiators'
import { IntegrationsSection } from '@/components/sections/integrations'
import { UseCasesSection } from '@/components/sections/use-cases'
import { VideosSection } from '@/components/sections/videos'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { CTASection } from '@/components/sections/cta'
import { Footer } from '@/components/footer'
import { FloatingAssistant } from '@/components/ai-assistant/floating-assistant'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <BeforeAfterSection />
      <ShowcaseSection />
      <BenefitsSection />
      <DifferentiatorsSection />
      <IntegrationsSection />
      <UseCasesSection />
      <VideosSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <FloatingAssistant />
    </main>
  )
}
