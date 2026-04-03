import type { Testimonial } from '@/types'

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'CodeTicks transformed our data infrastructure in just 3 months. Their team integrated seamlessly with ours and delivered a solution that reduced our processing time by 60%. Highly recommend for any data engineering needs.',
    author: 'Sarah Chen',
    role: 'VP of Engineering',
    company: 'TechFlow Solutions',
    image: '/images/team/testimonial-1.jpg',
    featured: true,
  },
  {
    id: '2',
    quote:
      'The AI chatbot CodeTicks built for our customer service has handled over 50,000 conversations with a 94% satisfaction rate. It paid for itself in the first quarter.',
    author: 'Michael Rodriguez',
    role: 'Director of Operations',
    company: 'RetailMax',
    image: '/images/team/testimonial-2.jpg',
    featured: true,
  },
  {
    id: '3',
    quote:
      'Our HubSpot implementation was a game-changer. CodeTicks helped us automate our entire sales process, resulting in a 40% increase in qualified leads and much happier sales reps.',
    author: 'Emily Watson',
    role: 'Chief Revenue Officer',
    company: 'GrowthScale',
    image: '/images/team/testimonial-3.jpg',
    featured: true,
  },
  {
    id: '4',
    quote:
      'The predictive maintenance model they built has prevented over $2M in unplanned downtime. Their ML expertise is exceptional, and they truly understood our manufacturing operations.',
    author: 'James Park',
    role: 'Plant Manager',
    company: 'Precision Manufacturing Inc.',
    image: '/images/team/testimonial-4.jpg',
    featured: false,
  },
  {
    id: '5',
    quote:
      'Working with CodeTicks on our RAG system was incredibly smooth. They turned our 10 years of documentation into an intelligent assistant that our support team now relies on daily.',
    author: 'Lisa Thompson',
    role: 'Head of Customer Success',
    company: 'SaaS Pro',
    image: '/images/team/testimonial-5.jpg',
    featured: false,
  },
  {
    id: '6',
    quote:
      'From architecture to deployment, their software engineering team delivered a robust platform that handles 10x our original traffic projections. The code quality and documentation are outstanding.',
    author: 'David Kim',
    role: 'CTO',
    company: 'FinanceFlow',
    image: '/images/team/testimonial-6.jpg',
    featured: false,
  },
]

export const getFeaturedTestimonials = (): Testimonial[] => {
  return testimonials.filter((t) => t.featured)
}
