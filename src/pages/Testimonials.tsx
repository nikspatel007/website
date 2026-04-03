import { Quote } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { Hero } from '@/components/sections/Hero'
import { CTABanner } from '@/components/sections/CTABanner'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  return (
    <>
      <SEO
        title="Testimonials"
        description="See what our clients have to say about working with CodeTicks. Real feedback from real companies we've helped transform."
      />

      <Hero
        title="Why Our Clients Like Us"
        description="Real feedback from companies we've helped transform through technology."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} delay={index * 0.1}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-primary-200" />
                    <blockquote className="mt-4">
                      <p className="leading-relaxed text-gray-700">
                        "{testimonial.quote}"
                      </p>
                    </blockquote>
                    <div className="mt-6 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                        <span className="text-lg font-semibold text-primary-600">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        variant="gradient"
        title="Ready to become our next success story?"
        description="Let's discuss how we can help transform your business."
        primaryCTA={{ text: 'Get Started', href: '/contact' }}
      />
    </>
  )
}
