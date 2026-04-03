import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { CaseStudy } from '@/types'
import { cn } from '@/lib/utils'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
  className?: string
}

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

export function CaseStudyCard({ caseStudy, className }: CaseStudyCardProps) {
  return (
    <Link to={`/case-studies/${caseStudy.slug}`}>
      <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
        <Card
          className={cn(
            'group h-full cursor-pointer overflow-hidden transition-shadow hover:shadow-lg',
            className
          )}
        >
          {/* Image placeholder */}
          <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200">
            <div className="flex h-full items-center justify-center">
              <span className="text-4xl font-bold text-primary-300">
                {caseStudy.client.charAt(0)}
              </span>
            </div>
          </div>

          <CardContent className="p-6">
            <div className="mb-3 flex flex-wrap gap-2">
              <Badge variant="default">
                {industryLabels[caseStudy.industry]}
              </Badge>
            </div>

            <h3 className="mb-2 text-lg font-semibold text-gray-900 line-clamp-2">
              {caseStudy.title}
            </h3>

            <p className="mb-4 text-sm text-gray-600">{caseStudy.client}</p>

            {/* Key Result */}
            {caseStudy.results[0] && (
              <div className="mb-4 rounded-lg bg-primary-50 p-3">
                <p className="text-2xl font-bold text-primary-600">
                  {caseStudy.results[0].value}
                </p>
                <p className="text-sm text-primary-700">
                  {caseStudy.results[0].metric}
                </p>
              </div>
            )}

            <div className="flex items-center text-sm font-medium text-primary-600 transition-colors group-hover:text-primary-700">
              Read case study
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  )
}
