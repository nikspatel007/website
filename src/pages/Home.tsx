import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, MessageSquare, Target, Hammer, Rocket } from 'lucide-react'
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

const methodology = [
  {
    step: 'A',
    title: 'Advise',
    description:
      'We assess your workflows, data, and operations to find where AI agents can deliver the highest ROI.',
    icon: MessageSquare,
  },
  {
    step: 'B',
    title: 'Build',
    description:
      'Our engineers build, test, and iterate on your AI agents with guardrails and production-grade reliability.',
    icon: Hammer,
  },
  {
    step: 'L',
    title: 'Launch',
    description:
      'We deploy to production with full monitoring, documentation, and seamless integration into your operations.',
    icon: Rocket,
  },
  {
    step: 'E',
    title: 'Evolve',
    description:
      'We continuously improve your agents with new capabilities, better models, and expanding automation across your business.',
    icon: Target,
  },
]

const whyCodeTicks = [
  {
    title: 'We use AI agents to build AI agents.',
    description:
      'Our own operations run on the same technology we sell. If it doesn\'t work for us, we won\'t ship it to you.',
  },
  {
    title: 'Our clients have saved millions.',
    description:
      'Real agents running in production, cutting real costs, replacing real manual work. Not proofs of concept.',
  },
  {
    title: 'Production in weeks.',
    description:
      'Most firms take months to deliver a PDF. We take weeks to deliver a running system.',
  },
  {
    title: 'Opinionated stack. Battle-tested.',
    description:
      'We\'ve tested every major framework and model in production. We know what works because we\'ve shipped it.',
  },
]

export function Home() {
  const featuredCaseStudies = getFeaturedCaseStudies()

  return (
    <>
      <SEO
        title="AI-First Agent Development"
        description="CodeTicks builds autonomous AI agents that handle your workflows, qualify leads, and operate 24/7. From strategy to production — AI-first consulting that delivers."
      />

      {/* Hero */}
      <Hero
        subtitle="AI Consulting for Believers"
        title="Value Delivered in Weeks."
        description="CodeTicks Solutions builds and deploys autonomous AI agents that drive real business results. We advise, align, build, and deliver, turning complex workflows into intelligent systems that operate around the clock."
        primaryCTA={{ text: 'Schedule Consultation', href: '/contact' }}
        secondaryCTA={{ text: 'View Case Studies', href: '/case-studies' }}
        image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
        imageAlt="AI neural network visualization"
      />

      {/* Trust Logos */}
      <TrustLogos />

      {/* How We Work - Advise, Align, Build, Deliver */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700">
                Our Methodology
              </span>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 lg:text-4xl">
                The ABLE Framework
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Advise. Build. Launch. Evolve. A proven methodology for turning AI ambition into production reality.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {methodology.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <div className="relative text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100">
                    <item.icon className="h-7 w-7 text-primary-600" />
                  </div>
                  <span className="mt-4 block text-sm font-bold text-primary-500">
                    STEP {item.step}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <span className="inline-block rounded-full bg-accent-100 px-4 py-1.5 text-sm font-medium text-accent-700">
                What We Build
              </span>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 lg:text-4xl">
                AI Agent Solutions
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                From autonomous agents to RAG pipelines to workflow automation — we build the AI that runs your business.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12">
            <ServicesGrid columns={4} />
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

      {/* Why AI-First */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary-500/10 to-accent-500/10 blur-xl" />
                <img
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80"
                  alt="AI robot representing autonomous agent technology"
                  className="relative rounded-2xl shadow-xl w-full object-cover"
                />
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal direction="right">
                <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700">
                  Why CodeTicks
                </span>
                <h2 className="mt-4 text-3xl font-bold text-gray-900 lg:text-4xl">
                  Why CodeTicks
                </h2>
              </ScrollReveal>

              <div className="mt-8 space-y-6">
                {whyCodeTicks.map((item, index) => (
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
              <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700">
                Results
              </span>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 lg:text-4xl">
                AI Agents in Production
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Real agents delivering real results for real businesses.
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
                What Our Clients Say
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Hear from the businesses running AI agents built by CodeTicks.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-14">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        variant="gradient"
        title="Ready to put AI agents to work?"
        description="Schedule a free consultation. We'll map your workflows and show you exactly where AI agents can drive results."
        primaryCTA={{ text: 'Schedule Consultation', href: '/contact' }}
        secondaryCTA={{ text: 'View Our Work', href: '/case-studies' }}
      />
    </>
  )
}
