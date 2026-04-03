import type { NavItem } from '@/types'

export const mainNavigation: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'AI Agent Development', href: '/services/ai-agents' },
      { label: 'LLM & RAG Solutions', href: '/services/llm-solutions' },
      { label: 'AI Workflow Automation', href: '/services/ai-automation' },
    ],
  },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
]

export const footerNavigation = {
  services: [
    { label: 'AI Agent Development', href: '/services/ai-agents' },
    { label: 'LLM & RAG Solutions', href: '/services/llm-solutions' },
    { label: 'AI Workflow Automation', href: '/services/ai-automation' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/legal/privacy-policy' },
    { label: 'Terms of Service', href: '/legal/terms' },
  ],
}

export const industries = [
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'finance', label: 'Finance' },
  { id: 'manufacturing', label: 'Manufacturing' },
  { id: 'retail', label: 'Retail & E-commerce' },
  { id: 'technology', label: 'Technology' },
  { id: 'education', label: 'Education' },
  { id: 'logistics', label: 'Logistics' },
  { id: 'energy', label: 'Energy' },
]
