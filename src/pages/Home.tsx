import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { Hero } from '@/components/sections/Hero'
import { TrustLogos } from '@/components/sections/TrustLogos'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel'
import { CTABanner } from '@/components/sections/CTABanner'
import { CaseStudyGrid } from '@/components/case-studies/CaseStudyGrid'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Button } from '@/components/ui/button'
import { getFeaturedCaseStudies } from '@/data/caseStudies'

const whyChooseUs = [
  {
    title: 'Agent-First Approach',
    description:
      'We design AI systems as autonomous agents, not just chatbots. They think, decide, and execute.',
  },
  {
    title: 'Production-Ready AI',
    description:
      'Every agent we build ships with monitoring, guardrails, and reliability from day one.',
  },
  {
    title: 'Deep AI Expertise',
    description:
      'Our team works with CrewAI, LangGraph, AutoGen, and every major LLM provider daily.',
  },
  {
    title: 'Measurable Results',
    description:
      'We focus on business outcomes — cost reduction, speed, accuracy — not just technology.',
  },
]

export function Home() {
  const featuredCaseStudies = getFeaturedCaseStudies()

  return (
    <>
      <SEO
        title="AI & Software Consulting"
        description="Transform your business with AI-powered solutions. CodeTicks provides expert consulting in software engineering, data science, ML, and generative AI."
      />

      {/* Hero */}
      <Hero
        subtitle="AI Agent Development"
        title="We Build AI Agents That Work For Your Business"
        description="Autonomous AI agents that handle your workflows, qualify your leads, and operate 24/7. From strategy to production, we build agents that deliver real business results."
        primaryCTA={{ text: 'Schedule Consultation', href: '/contact' }}
        secondaryCTA={{ text: 'View Case Studies', href: '/case-studies' }}
        image="/images/logos/Logo.png"
        imageAlt="CodeTicks AI Logo"
      />

      {/* Trust Logos */}
      <TrustLogos />

      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
                Our Services
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Comprehensive consulting services to transform every aspect of
                your technology stack.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12">
            <ServicesGrid columns={3} />
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">
                  Explore All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary-500/10 to-accent-500/10 blur-xl" />
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                  alt="Team collaboration on AI solutions"
                  className="relative rounded-2xl shadow-xl w-full object-cover"
                />
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal direction="right">
                <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
                  Why Choose CodeTicks?
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  We are not just consultants - we are partners in your success.
                  Our team combines deep technical expertise with business
                  acumen to deliver solutions that drive real results.
                </p>
              </ScrollReveal>

              <div className="mt-8 space-y-6">
                {whyChooseUs.map((item, index) => (
                  <ScrollReveal key={item.title} delay={index * 0.1}>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                          <CheckCircle className="h-5 w-5 text-primary-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={0.4}>
                <div className="mt-8">
                  <Button size="lg" asChild>
                    <Link to="/about">
                      Learn About Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
                Featured Case Studies
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                See how we have helped companies like yours achieve their goals.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12">
            <CaseStudyGrid caseStudies={featuredCaseStudies} />
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

      {/* Testimonials */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/30 to-white" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-primary-300 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700">
                Testimonials
              </span>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 lg:text-4xl">
                Why Our Clients Like Us
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Do not just take our word for it — hear from the companies we
                have worked with.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-14">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* Video Testimonial */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
                Hear From Our Clients
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Real leaders sharing real results from working with CodeTicks Solutions.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mx-auto mt-12 max-w-3xl">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-lg" />
                <video
                  className="relative w-full rounded-2xl"
                  controls
                  poster="/images/video-poster.jpg"
                  preload="metadata"
                >
                  <source src="/videos/CodeTicks Testimonial.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="mt-6 text-center">
                <blockquote className="text-lg italic text-gray-700">
                  "CodeTicks Solutions has helped me to scale our team and reducing the cost by 22% last quarter. Their AI agents have helped us to automate our process."
                </blockquote>
                <div className="mt-4">
                  <p className="font-semibold text-gray-900">CEO, Enterprise Client</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        variant="gradient"
        title="Ready to transform your business?"
        description="Schedule a free consultation to discuss how we can help you achieve your goals."
        primaryCTA={{ text: 'Schedule Consultation', href: '/contact' }}
        secondaryCTA={{ text: 'View Our Work', href: '/case-studies' }}
      />
    </>
  )
}
