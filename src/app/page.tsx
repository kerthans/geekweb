'use client'

// import { Header } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/feature-section'
import { BlogPreviewSection } from '@/components/blog-preview-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { CTASection } from '@/components/cta-section'
import { ContactSection } from '@/components/contact-section'
// import { Foot } from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* <Header /> */}
      <HeroSection />
      <FeaturesSection />
      <BlogPreviewSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      {/* <Foot /> */}
    </main>
  )
}
