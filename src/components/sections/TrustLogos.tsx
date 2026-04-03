import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { cn } from '@/lib/utils'

interface TrustLogosProps {
  title?: string
  className?: string
}

// Placeholder company logos - in production, these would be actual client logos
const companies = [
  { name: 'TechFlow', initials: 'TF' },
  { name: 'RetailMax', initials: 'RM' },
  { name: 'GrowthScale', initials: 'GS' },
  { name: 'FinanceFlow', initials: 'FF' },
  { name: 'HealthFirst', initials: 'HF' },
  { name: 'ShopSmart', initials: 'SS' },
]

export function TrustLogos({
  title = 'Trusted by innovative companies',
  className,
}: TrustLogosProps) {
  return (
    <section className={cn('py-12', className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-sm font-medium uppercase tracking-wider text-gray-500">
            {title}
          </p>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {companies.map((company, index) => (
            <ScrollReveal key={company.name} delay={index * 0.05}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center"
              >
                <div className="flex h-12 w-28 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 transition-all hover:border-gray-300 hover:bg-white">
                  <span className="text-lg font-bold text-gray-400 hover:text-gray-600">
                    {company.initials}
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
