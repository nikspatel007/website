import { Button } from '@/components/ui/button'
import { industries } from '@/data/navigation'
import { services } from '@/data/services'
import { cn } from '@/lib/utils'

interface CaseStudyFilterProps {
  selectedIndustry: string | null
  selectedService: string | null
  onIndustryChange: (industry: string | null) => void
  onServiceChange: (service: string | null) => void
  className?: string
}

export function CaseStudyFilter({
  selectedIndustry,
  selectedService,
  onIndustryChange,
  onServiceChange,
  className,
}: CaseStudyFilterProps) {
  return (
    <div className={cn('space-y-4', className)}>
      {/* Industry Filter */}
      <div>
        <p className="mb-2 text-sm font-medium text-gray-700">Industry</p>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedIndustry === null ? 'default' : 'outline'}
            size="sm"
            onClick={() => onIndustryChange(null)}
          >
            All
          </Button>
          {industries.map((industry) => (
            <Button
              key={industry.id}
              variant={selectedIndustry === industry.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => onIndustryChange(industry.id)}
            >
              {industry.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Service Filter */}
      <div>
        <p className="mb-2 text-sm font-medium text-gray-700">Service</p>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedService === null ? 'default' : 'outline'}
            size="sm"
            onClick={() => onServiceChange(null)}
          >
            All
          </Button>
          {services.map((service) => (
            <Button
              key={service.id}
              variant={selectedService === service.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => onServiceChange(service.id)}
            >
              {service.shortTitle}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
