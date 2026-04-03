import { useState, useMemo } from 'react'
import { SEO } from '@/components/SEO'
import { Hero } from '@/components/sections/Hero'
import { CTABanner } from '@/components/sections/CTABanner'
import { CaseStudyGrid } from '@/components/case-studies/CaseStudyGrid'
import { CaseStudyFilter } from '@/components/case-studies/CaseStudyFilter'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { caseStudies } from '@/data/caseStudies'

export function CaseStudiesIndex() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter((cs) => {
      if (selectedIndustry && cs.industry !== selectedIndustry) return false
      if (selectedService && !cs.services.includes(selectedService)) return false
      return true
    })
  }, [selectedIndustry, selectedService])

  return (
    <>
      <SEO
        title="Case Studies"
        description="Explore our portfolio of successful projects across industries. See how we've helped companies transform with AI and software solutions."
      />

      <Hero
        title="Case Studies"
        description="Real results from real projects. Explore how we've helped companies across industries achieve their technology goals."
        image="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
        imageAlt="Team analyzing AI project results"
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <ScrollReveal>
            <CaseStudyFilter
              selectedIndustry={selectedIndustry}
              selectedService={selectedService}
              onIndustryChange={setSelectedIndustry}
              onServiceChange={setSelectedService}
              className="mb-12"
            />
          </ScrollReveal>

          {/* Results */}
          {filteredCaseStudies.length > 0 ? (
            <CaseStudyGrid caseStudies={filteredCaseStudies} />
          ) : (
            <ScrollReveal>
              <div className="py-12 text-center">
                <p className="text-lg text-gray-600">
                  No case studies match your current filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedIndustry(null)
                    setSelectedService(null)
                  }}
                  className="mt-4 text-primary-600 hover:text-primary-700"
                >
                  Clear filters
                </button>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      <CTABanner
        title="Have a similar challenge?"
        description="Let's discuss how we can help you achieve similar results."
        primaryCTA={{ text: 'Get in Touch', href: '/contact' }}
      />
    </>
  )
}
