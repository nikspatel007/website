// Google Form configuration from environment variables
// Entry IDs come from the "Get pre-filled link" feature in Google Forms

// Convert viewform URL to formResponse URL for submission
function getFormResponseUrl(url: string): string {
  if (!url) return ''
  // Remove query params and convert viewform to formResponse
  const baseUrl = url.split('?')[0]
  return baseUrl.replace(/\/viewform$/, '/formResponse')
}

const CONTACT_FORM = {
  url: getFormResponseUrl(import.meta.env.VITE_GOOGLE_FORM_CONTACT_URL as string),
  fields: {
    name: import.meta.env.VITE_GOOGLE_FORM_CONTACT_ENTRY_NAME as string,
    email: import.meta.env.VITE_GOOGLE_FORM_CONTACT_ENTRY_EMAIL as string,
    company: import.meta.env.VITE_GOOGLE_FORM_CONTACT_ENTRY_COMPANY as string,
    serviceInterest: import.meta.env.VITE_GOOGLE_FORM_CONTACT_ENTRY_SERVICE as string,
    message: import.meta.env.VITE_GOOGLE_FORM_CONTACT_ENTRY_MESSAGE as string,
  },
}

const NEWSLETTER_FORM = {
  url: getFormResponseUrl(import.meta.env.VITE_GOOGLE_FORM_NEWSLETTER_URL as string),
  fields: {
    email: import.meta.env.VITE_GOOGLE_FORM_NEWSLETTER_ENTRY_EMAIL as string,
  },
}

// Map form dropdown values to Google Form dropdown labels
const SERVICE_LABELS: Record<string, string> = {
  'software-engineering': 'Software Engineering',
  'crm-revops': 'CRM & RevOps',
  'data-engineering': 'Data Engineering',
  'data-science-ml': 'Data Science & ML',
  'ai-generative': 'AI & Generative AI',
  'other': 'Other / Not Sure',
}

export async function submitContactForm(data: {
  name: string
  email: string
  company?: string
  serviceInterest: string
  message: string
}): Promise<void> {
  const formData = new FormData()
  formData.append(CONTACT_FORM.fields.name, data.name)
  formData.append(CONTACT_FORM.fields.email, data.email)
  formData.append(CONTACT_FORM.fields.company, data.company || '')
  formData.append(
    CONTACT_FORM.fields.serviceInterest,
    SERVICE_LABELS[data.serviceInterest] || data.serviceInterest
  )
  formData.append(CONTACT_FORM.fields.message, data.message)

  await fetch(CONTACT_FORM.url, {
    method: 'POST',
    mode: 'no-cors',
    body: formData,
  })
}

export async function submitNewsletterForm(email: string): Promise<void> {
  const formData = new FormData()
  formData.append(NEWSLETTER_FORM.fields.email, email)

  await fetch(NEWSLETTER_FORM.url, {
    method: 'POST',
    mode: 'no-cors',
    body: formData,
  })
}
