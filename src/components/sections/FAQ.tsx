import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { cn } from '@/lib/utils'
import type { FAQ as FAQType } from '@/types'

interface FAQProps {
  faqs: FAQType[]
  title?: string
  description?: string
  className?: string
}

export function FAQ({
  faqs,
  title = 'Frequently Asked Questions',
  description,
  className,
}: FAQProps) {
  return (
    <section className={cn('py-16 lg:py-24', className)}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="mt-4 text-lg text-gray-600">{description}</p>
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Accordion type="single" collapsible className="mt-12">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  )
}
