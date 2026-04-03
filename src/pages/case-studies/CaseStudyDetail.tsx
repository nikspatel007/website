import { useParams, Navigate, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CaseStudyGrid } from '@/components/case-studies/CaseStudyGrid'
import { CTABanner } from '@/components/sections/CTABanner'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { getCaseStudyBySlug, caseStudies } from '@/data/caseStudies'

const industryLabels: Record<string, string> = {
  healthcare: 'Healthcare',
  finance: 'Finance',
  manufacturing: 'Manufacturing',
  retail: 'Retail',
  technology: 'Technology',
  education: 'Education',
  logistics: 'Logistics',
  energy: 'Energy',
}

export function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>()
  const caseStudy = slug ? getCaseStudyBySlug(slug) : undefined

  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />
  }

  const relatedCaseStudies = caseStudies
    .filter(
      (cs) =>
        cs.id !== caseStudy.id &&
        (cs.industry === caseStudy.industry ||
          cs.services.some((s) => caseStudy.services.includes(s)))
    )
    .slice(0, 3)

  return (
    <>
      <SEO
        title={caseStudy.title}
        description={caseStudy.challenge}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-primary-50 pt-24 lg:pt-32">
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Link
              to="/case-studies"
              className="inline-flex items-center text-sm text-gray-600 hover:text-primary-600"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Badge variant="default">
                {industryLabels[caseStudy.industry]}
              </Badge>
              {caseStudy.services.map((service) => (
                <Badge key={service} variant="outline">
                  {service}
                </Badge>
              ))}
            </div>

            <h1 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              {caseStudy.title}
            </h1>

            <p className="mt-4 text-xl text-gray-600">{caseStudy.client}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Results Highlight */}
      <section className="border-b border-gray-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {caseStudy.results.map((result, index) => (
              <ScrollReveal key={result.metric} delay={index * 0.1}>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-600 lg:text-4xl">
                    {result.value}
                  </p>
                  <p className="mt-1 font-medium text-gray-900">
                    {result.metric}
                  </p>
                  {result.description && (
                    <p className="text-sm text-gray-500">{result.description}</p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Challenge */}
          <ScrollReveal>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900">The Challenge</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                {caseStudy.challenge}
              </p>
            </div>
          </ScrollReveal>

          {/* Solution */}
          <ScrollReveal>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900">Our Solution</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                {caseStudy.solution}
              </p>
            </div>
          </ScrollReveal>

          {/* Technologies */}
          <ScrollReveal>
            <Card className="mb-12">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900">Technologies Used</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Testimonial */}
          {caseStudy.testimonial && (
            <ScrollReveal>
              <Card className="mb-12 bg-primary-50">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary-300" />
                  <blockquote className="mt-4">
                    <p className="text-lg italic leading-relaxed text-gray-700">
                      "{caseStudy.testimonial.quote}"
                    </p>
                    <footer className="mt-4">
                      <p className="font-semibold text-gray-900">
                        {caseStudy.testimonial.author}
                      </p>
                      <p className="text-sm text-gray-600">
                        {caseStudy.testimonial.role},{' '}
                        {caseStudy.testimonial.company}
                      </p>
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900">
                  Related Case Studies
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                  Explore more projects in similar industries or services.
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

      <CTABanner
        variant="gradient"
        title="Have a similar challenge?"
        description="Let's discuss how we can help you achieve similar results."
        primaryCTA={{ text: 'Get in Touch', href: '/contact' }}
      />
    </>
  )
}
