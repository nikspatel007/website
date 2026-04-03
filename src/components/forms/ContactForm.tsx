import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { trackFormSubmit } from '@/lib/analytics'
import { cn } from '@/lib/utils'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().optional(),
  serviceInterest: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

const serviceOptions = [
  { value: 'software-engineering', label: 'Software Engineering' },
  { value: 'crm-revops', label: 'CRM & RevOps' },
  { value: 'data-engineering', label: 'Data Engineering' },
  { value: 'data-science-ml', label: 'Data Science & ML' },
  { value: 'ai-generative', label: 'AI & Generative AI' },
  { value: 'other', label: 'Other / Not Sure' },
]

interface ContactFormProps {
  className?: string
}

export function ContactForm({ className }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null)

    try {
      // Option 1: Formspree
      const formspreeId = import.meta.env.VITE_FORMSPREE_ID
      if (formspreeId) {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
        })

        if (!response.ok) {
          throw new Error('Failed to submit form')
        }
      } else {
        // Fallback: log to console for development
        console.log('Form submission:', data)
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000))
      }

      trackFormSubmit('contact', data.serviceInterest)
      setIsSubmitted(true)
      reset()
    } catch {
      setSubmitError('Something went wrong. Please try again or email us directly.')
    }
  }

  if (isSubmitted) {
    return (
      <div className={cn('rounded-xl bg-green-50 p-8 text-center', className)}>
        <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
        <h3 className="mt-4 text-lg font-semibold text-gray-900">
          Message sent!
        </h3>
        <p className="mt-2 text-gray-600">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setIsSubmitted(false)}
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn('space-y-6', className)}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Name *
          </label>
          <Input
            id="name"
            placeholder="Your name"
            {...register('name')}
            className={errors.name ? 'border-red-500' : ''}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Email *
          </label>
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            {...register('email')}
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="company"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Company
        </label>
        <Input
          id="company"
          placeholder="Your company name"
          {...register('company')}
        />
      </div>

      <div>
        <label
          htmlFor="serviceInterest"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Service Interest *
        </label>
        <Select
          id="serviceInterest"
          options={serviceOptions}
          placeholder="Select a service"
          {...register('serviceInterest')}
          className={errors.serviceInterest ? 'border-red-500' : ''}
        />
        {errors.serviceInterest && (
          <p className="mt-1 text-sm text-red-500">
            {errors.serviceInterest.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Message *
        </label>
        <Textarea
          id="message"
          placeholder="Tell us about your project..."
          rows={5}
          {...register('message')}
          className={errors.message ? 'border-red-500' : ''}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {submitError && (
        <div className="flex items-center gap-2 rounded-lg bg-red-50 p-4 text-red-700">
          <AlertCircle className="h-5 w-5" />
          <p className="text-sm">{submitError}</p>
        </div>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          'Sending...'
        ) : (
          <>
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  )
}
