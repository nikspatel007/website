import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getFeaturedTestimonials } from '@/data/testimonials'
import { cn } from '@/lib/utils'

interface TestimonialsCarouselProps {
  autoPlay?: boolean
  interval?: number
  className?: string
}

export function TestimonialsCarousel({
  autoPlay = true,
  interval = 5000,
  className,
}: TestimonialsCarouselProps) {
  const testimonials = getFeaturedTestimonials()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, testimonials.length])

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className={cn('relative', className)}>
      <div className="mx-auto max-w-5xl">
        {/* Main Testimonial Card */}
        <div className="relative">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 blur-lg" />
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-xl md:p-12">
            {/* Decorative Elements */}
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-primary-50 opacity-60" />
            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-accent-50 opacity-40" />
            <Quote className="absolute right-8 top-8 h-16 w-16 text-primary-100/60" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="relative"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="mt-6">
                  <p className="text-xl leading-relaxed text-gray-700 md:text-2xl">
                    "{testimonials[current].quote}"
                  </p>
                  <footer className="mt-8">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
                        <div className="relative h-14 w-14 rounded-full bg-primary-100 flex items-center justify-center">
                          <span className="text-xl font-bold text-primary-600">
                            {testimonials[current].author.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-gray-900">
                          {testimonials[current].author}
                        </p>
                        <p className="text-sm font-medium text-primary-600">
                          {testimonials[current].role}
                        </p>
                        <p className="text-sm text-gray-500">
                          {testimonials[current].company}
                        </p>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            className="h-10 w-10 rounded-full border-gray-300 shadow-sm hover:bg-primary-50 hover:border-primary-300 transition-all"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="flex gap-2.5">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={cn(
                  'h-2.5 rounded-full transition-all duration-300',
                  index === current
                    ? 'w-8 bg-gradient-to-r from-primary-500 to-primary-600 shadow-sm'
                    : 'w-2.5 bg-gray-300 hover:bg-primary-300'
                )}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={next}
            className="h-10 w-10 rounded-full border-gray-300 shadow-sm hover:bg-primary-50 hover:border-primary-300 transition-all"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
