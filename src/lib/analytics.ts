// Google Analytics 4 Tracking Helpers

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

// Initialize GA4
export const initGA = () => {
  if (!GA_MEASUREMENT_ID) return

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
  })
}

// Track page views
export const trackPageView = (path: string) => {
  if (!window.gtag || !GA_MEASUREMENT_ID) return
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
  })
}

// Track events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (!window.gtag) return
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

// Track form submissions
export const trackFormSubmit = (formName: string, serviceInterest?: string) => {
  trackEvent('form_submit', 'contact', serviceInterest || formName)
}

// Track CTA clicks
export const trackCTAClick = (ctaName: string, location: string) => {
  trackEvent('cta_click', location, ctaName)
}

// Track Calendly events
export const trackCalendlyScheduled = () => {
  trackEvent('meeting_scheduled', 'calendly', 'consultation_booked')
}
