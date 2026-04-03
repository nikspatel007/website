import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/animations/FadeIn'

interface HeroProps {
  title: string
  subtitle?: string
  description: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  showPattern?: boolean
  image?: string
  imageAlt?: string
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCTA = { text: 'Get Started', href: '/contact' },
  secondaryCTA,
  showPattern = true,
  image,
  imageAlt = 'AI and human collaboration',
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50 pt-24 lg:pt-32">
      {/* Background Pattern */}
      {showPattern && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary-100 opacity-50 blur-3xl" />
          <div className="absolute top-20 -left-40 h-80 w-80 rounded-full bg-accent-100 opacity-50 blur-3xl" />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-primary-200 opacity-30 blur-3xl"
          />
        </div>
      )}

      <div className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        {image ? (
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              {subtitle && (
                <FadeIn delay={0}>
                  <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700">
                    {subtitle}
                  </span>
                </FadeIn>
              )}

              <FadeIn delay={0.1}>
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  {title}
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 lg:text-xl">
                  {description}
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                  <Button size="lg" asChild>
                    <Link to={primaryCTA.href}>
                      {primaryCTA.text}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  {secondaryCTA && (
                    <Button size="lg" variant="outline" asChild>
                      <Link to={secondaryCTA.href}>
                        <Play className="mr-2 h-4 w-4" />
                        {secondaryCTA.text}
                      </Link>
                    </Button>
                  )}
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-2xl" />
                <img
                  src={image}
                  alt={imageAlt}
                  className="relative rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        ) : (
          <div className="mx-auto max-w-3xl text-center">
            {subtitle && (
              <FadeIn delay={0}>
                <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700">
                  {subtitle}
                </span>
              </FadeIn>
            )}

            <FadeIn delay={0.1}>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                {title}
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 lg:text-xl">
                {description}
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link to={primaryCTA.href}>
                    {primaryCTA.text}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                {secondaryCTA && (
                  <Button size="lg" variant="outline" asChild>
                    <Link to={secondaryCTA.href}>
                      <Play className="mr-2 h-4 w-4" />
                      {secondaryCTA.text}
                    </Link>
                  </Button>
                )}
              </div>
            </FadeIn>
          </div>
        )}
      </div>
    </section>
  )
}
