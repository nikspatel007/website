import { useParams, Navigate, Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { Hero } from '@/components/sections/Hero'
import { FAQ } from '@/components/sections/FAQ'
import { CTABanner } from '@/components/sections/CTABanner'
import { CaseStudyGrid } from '@/components/case-studies/CaseStudyGrid'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { getServiceBySlug } from '@/data/services'
import { getCaseStudiesByService } from '@/data/caseStudies'

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const relatedCaseStudies = getCaseStudiesByService(service.id).slice(0, 3)

  return (
    <>
      <SEO
        title={service.title}
        description={service.description}
      />

      <Hero
        subtitle={service.shortTitle}
        title={service.title}
        description={service.description}
        primaryCTA={{ text: 'Get Started', href: '/contact' }}
        secondaryCTA={{ text: 'View Case Studies', href: '/case-studies' }}
      />

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  What We Offer
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Our {service.title.toLowerCase()} services are designed to
                  deliver measurable results for your business.
                </p>
                <ul className="mt-8 space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-600" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Technologies We Use
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Our Process</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                A proven methodology that delivers consistent results.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 0.1}>
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-xl font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900">
                  Related Case Studies
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                  See how we've helped other companies with {service.title.toLowerCase()}.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-12">
              <CaseStudyGrid caseStudies={relatedCaseStudies} />
            </div>

            <ScrollReveal delay={0.3}>
              <div className="mt-12 text-center">
                <Button variant="outline" size="lg" asChild>
                  <Link to="/case-studies">
                    View All Case Studies
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* FAQ */}
      <div className="bg-gray-50">
        <FAQ
          faqs={service.faqs}
          description={`Common questions about our ${service.title.toLowerCase()} services.`}
        />
      </div>

      {/* CTA */}
      <CTABanner
        variant="gradient"
        title={`Ready to get started with ${service.title}?`}
        description="Schedule a free consultation to discuss your project and how we can help."
        primaryCTA={{ text: 'Schedule Consultation', href: '/contact' }}
      />
    </>
  )
}
