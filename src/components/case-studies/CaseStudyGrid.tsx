import { CaseStudyCard } from './CaseStudyCard'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import type { CaseStudy } from '@/types'
import { cn } from '@/lib/utils'

interface CaseStudyGridProps {
  caseStudies: CaseStudy[]
  columns?: 2 | 3
  className?: string
}

export function CaseStudyGrid({
  caseStudies,
  columns = 3,
  className,
}: CaseStudyGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
  }

  return (
    <div className={cn('grid gap-8', gridCols[columns], className)}>
      {caseStudies.map((caseStudy, index) => (
        <ScrollReveal key={caseStudy.id} delay={index * 0.1}>
          <CaseStudyCard caseStudy={caseStudy} />
        </ScrollReveal>
      ))}
    </div>
  )
}
