import { SEO } from '@/components/SEO'
import { Hero } from '@/components/sections/Hero'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { Stats } from '@/components/sections/Stats'
import { CTABanner } from '@/components/sections/CTABanner'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export function ServicesHub() {
  return (
    <>
      <SEO
        title="Our Services"
        description="Comprehensive AI and software consulting services including software engineering, data engineering, ML/AI, CRM/RevOps, and generative AI solutions."
      />

      <Hero
        title="Our Services"
        description="From software engineering to generative AI, we provide end-to-end consulting services to transform your business with technology."
        image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80"
        imageAlt="AI robot and human collaboration"
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
                What We Do
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Our team of experts brings deep experience across the full
                technology spectrum.
              </p>
            </div>
          </ScrollReveal>

          <ServicesGrid columns={3} />
        </div>
      </section>

      <div className="bg-gray-50">
        <Stats
          title="Our Impact"
          stats={[
            { value: 50, suffix: '+', label: 'Projects Delivered' },
            { value: 30, suffix: '%', label: 'Avg. Efficiency Gain' },
            { value: 98, suffix: '%', label: 'Client Retention' },
            { value: 24, suffix: 'hr', label: 'Response Time' },
          ]}
        />
      </div>

      <CTABanner
        title="Not sure which service you need?"
        description="Schedule a free consultation and we'll help you identify the right solutions for your business."
        primaryCTA={{ text: 'Schedule Consultation', href: '/contact' }}
      />
    </>
  )
}
