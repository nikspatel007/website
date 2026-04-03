import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Code2,
  Users,
  Database,
  Brain,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { services } from '@/data/services'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Users,
  Database,
  Brain,
  Sparkles,
}

interface ServicesGridProps {
  showAll?: boolean
  columns?: 2 | 3 | 5
  className?: string
}

export function ServicesGrid({
  showAll = true,
  columns = 3,
  className,
}: ServicesGridProps) {
  const displayedServices = showAll ? services : services.slice(0, 3)

  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    5: 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
  }

  return (
    <div
      className={cn(
        'grid gap-6',
        gridCols[columns],
        className
      )}
    >
      {displayedServices.map((service, index) => {
        const Icon = iconMap[service.icon] || Code2

        return (
          <ScrollReveal key={service.id} delay={index * 0.1}>
            <Link to={`/services/${service.slug}`}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="group h-full cursor-pointer transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex rounded-lg bg-primary-100 p-3 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-gray-600">
                      {service.description}
                    </p>
                    <div className="flex items-center text-sm font-medium text-primary-600 transition-colors group-hover:text-primary-700">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          </ScrollReveal>
        )
      })}
    </div>
  )
}
