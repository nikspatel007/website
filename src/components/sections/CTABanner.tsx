import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { cn } from '@/lib/utils'

interface CTABannerProps {
  title?: string
  description?: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  variant?: 'default' | 'gradient' | 'dark'
  className?: string
}

export function CTABanner({
  title = 'Ready to transform your business?',
  description = 'Schedule a free consultation to discuss how we can help you achieve your goals.',
  primaryCTA = { text: 'Schedule Consultation', href: '/contact' },
  secondaryCTA,
  variant = 'default',
  className,
}: CTABannerProps) {
  const variants = {
    default: 'bg-primary-50',
    gradient: 'bg-gradient-to-r from-primary-600 to-primary-800 text-white',
    dark: 'bg-gray-900 text-white',
  }

  const isLight = variant === 'default'

  return (
    <section className={cn('py-16 lg:py-24', className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
            className={cn(
              'relative overflow-hidden rounded-2xl p-8 lg:p-12',
              variants[variant]
            )}
          >
            {/* Background decoration */}
            {variant !== 'default' && (
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              </div>
            )}

            <div className="relative flex flex-col items-center text-center lg:flex-row lg:justify-between lg:text-left">
              <div className="mb-6 lg:mb-0 lg:max-w-xl">
                <h2
                  className={cn(
                    'text-2xl font-bold lg:text-3xl',
                    isLight ? 'text-gray-900' : 'text-white'
                  )}
                >
                  {title}
                </h2>
                <p
                  className={cn(
                    'mt-2 text-lg',
                    isLight ? 'text-gray-600' : 'text-white/80'
                  )}
                >
                  {description}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  variant={isLight ? 'default' : 'secondary'}
                  asChild
                >
                  <Link to={primaryCTA.href}>
                    {primaryCTA.text}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                {secondaryCTA && (
                  <Button
                    size="lg"
                    variant={isLight ? 'outline' : 'ghost'}
                    className={!isLight ? 'text-white hover:bg-white/10' : ''}
                    asChild
                  >
                    <Link to={secondaryCTA.href}>{secondaryCTA.text}</Link>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
