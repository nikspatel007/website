import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { AnimatedCounter } from '@/components/animations/AnimatedCounter'
import { cn } from '@/lib/utils'

interface Stat {
  value: number
  suffix?: string
  prefix?: string
  label: string
}

interface StatsProps {
  stats?: Stat[]
  title?: string
  description?: string
  className?: string
}

const defaultStats: Stat[] = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 25, suffix: '+', label: 'Team Members' },
]

export function Stats({
  stats = defaultStats,
  title,
  description,
  className,
}: StatsProps) {
  return (
    <section className={cn('py-16 lg:py-24', className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(title || description) && (
          <ScrollReveal>
            <div className="mb-12 text-center">
              {title && (
                <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
                  {title}
                </h2>
              )}
              {description && (
                <p className="mt-4 text-lg text-gray-600">{description}</p>
              )}
            </div>
          </ScrollReveal>
        )}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary-600 lg:text-5xl">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="mt-2 text-sm font-medium text-gray-600">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
