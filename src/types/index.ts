// Shared types

export interface Service {
  id: string
  slug: string
  title: string
  shortTitle: string
  description: string
  icon: string
  features: string[]
  technologies: string[]
  process: ProcessStep[]
  faqs: FAQ[]
}

export interface ProcessStep {
  title: string
  description: string
  icon?: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface CaseStudy {
  id: string
  slug: string
  title: string
  client: string
  industry: Industry
  services: string[]
  challenge: string
  solution: string
  results: Result[]
  technologies: string[]
  testimonial?: Testimonial
  featuredImage: string
  featured?: boolean
}

export interface Result {
  metric: string
  value: string
  description?: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  image?: string
  featured?: boolean
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  linkedin?: string
  twitter?: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: TeamMember
  publishedAt: string
  category: BlogCategory
  tags: string[]
  featuredImage: string
  featured?: boolean
}

export type Industry =
  | 'healthcare'
  | 'finance'
  | 'manufacturing'
  | 'retail'
  | 'technology'
  | 'education'
  | 'logistics'
  | 'energy'

export type BlogCategory =
  | 'ai-ml'
  | 'engineering'
  | 'data'
  | 'crm'
  | 'industry-insights'
  | 'company-news'

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}
