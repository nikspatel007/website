import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { cn } from '@/lib/utils'

interface NewsletterProps {
  title?: string
  description?: string
  className?: string
}

export function Newsletter({
  title = 'Stay updated',
  description = 'Get the latest insights on AI, data, and software engineering delivered to your inbox.',
  className,
}: NewsletterProps) {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate API call - replace with actual newsletter signup
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsLoading(false)
    setEmail('')
  }

  return (
    <section className={cn('py-16 lg:py-24 bg-gray-50', className)}>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-gray-600">{description}</p>

          {isSubmitted ? (
            <div className="mt-8 flex items-center justify-center gap-2 text-green-600">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">Thanks for subscribing!</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="sm:w-72"
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  'Subscribing...'
                ) : (
                  <>
                    Subscribe
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          )}

          <p className="mt-4 text-xs text-gray-500">
            No spam. Unsubscribe anytime.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
