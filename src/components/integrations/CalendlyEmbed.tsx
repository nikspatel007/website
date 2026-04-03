import { useEffect, useCallback } from 'react'
import { trackCalendlyScheduled } from '@/lib/analytics'
import { cn } from '@/lib/utils'

interface CalendlyEmbedProps {
  url?: string
  className?: string
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string
        parentElement: Element | null
        prefill?: Record<string, string>
        utm?: Record<string, string>
      }) => void
    }
  }
}

export function CalendlyEmbed({
  url = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com',
  className,
}: CalendlyEmbedProps) {
  const handleCalendlyEvent = useCallback((e: MessageEvent) => {
    if (e.data.event && e.data.event === 'calendly.event_scheduled') {
      trackCalendlyScheduled()
    }
  }, [])

  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    // Load Calendly styles
    const link = document.createElement('link')
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    // Listen for Calendly events
    window.addEventListener('message', handleCalendlyEvent)

    return () => {
      window.removeEventListener('message', handleCalendlyEvent)
      // Cleanup script and link
      document.body.removeChild(script)
      document.head.removeChild(link)
    }
  }, [handleCalendlyEvent])

  useEffect(() => {
    // Initialize widget after script loads
    const initWidget = () => {
      const container = document.getElementById('calendly-embed')
      if (window.Calendly && container) {
        window.Calendly.initInlineWidget({
          url,
          parentElement: container,
          prefill: {},
          utm: {},
        })
      }
    }

    // Wait for Calendly to load
    const checkCalendly = setInterval(() => {
      if (window.Calendly) {
        initWidget()
        clearInterval(checkCalendly)
      }
    }, 100)

    return () => clearInterval(checkCalendly)
  }, [url])

  return (
    <div
      id="calendly-embed"
      className={cn('min-h-[650px] w-full', className)}
      data-url={url}
    />
  )
}
