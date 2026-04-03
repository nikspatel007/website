import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { BlogPost } from '@/types'
import { cn } from '@/lib/utils'

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
  className?: string
}

const categoryLabels: Record<string, string> = {
  'ai-ml': 'AI & ML',
  engineering: 'Engineering',
  data: 'Data',
  crm: 'CRM & RevOps',
  'industry-insights': 'Industry Insights',
  'company-news': 'Company News',
}

export function BlogCard({ post, featured = false, className }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  if (featured) {
    return (
      <Link to={`/blog/${post.slug}`}>
        <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
          <Card
            className={cn(
              'group cursor-pointer overflow-hidden transition-shadow hover:shadow-lg',
              className
            )}
          >
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 md:aspect-auto">
                <div className="flex h-full items-center justify-center">
                  <span className="text-6xl font-bold text-primary-300">
                    {post.title.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <CardContent className="flex flex-col justify-center p-8">
                <div className="mb-3 flex items-center gap-3">
                  <Badge>{categoryLabels[post.category]}</Badge>
                  <span className="flex items-center text-sm text-gray-500">
                    <Calendar className="mr-1 h-4 w-4" />
                    {formattedDate}
                  </span>
                </div>

                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                  {post.title}
                </h2>

                <p className="mb-4 text-gray-600 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100">
                    <span className="text-sm font-semibold text-primary-600">
                      {post.author.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {post.author.name}
                    </p>
                    <p className="text-xs text-gray-500">{post.author.role}</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center text-sm font-medium text-primary-600 transition-colors group-hover:text-primary-700">
                  Read article
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </div>
          </Card>
        </motion.div>
      </Link>
    )
  }

  return (
    <Link to={`/blog/${post.slug}`}>
      <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
        <Card
          className={cn(
            'group h-full cursor-pointer overflow-hidden transition-shadow hover:shadow-lg',
            className
          )}
        >
          {/* Image */}
          <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200">
            <div className="flex h-full items-center justify-center">
              <span className="text-4xl font-bold text-primary-300">
                {post.title.charAt(0)}
              </span>
            </div>
          </div>

          <CardContent className="p-6">
            <div className="mb-3 flex items-center gap-3">
              <Badge variant="secondary">{categoryLabels[post.category]}</Badge>
              <span className="text-xs text-gray-500">{formattedDate}</span>
            </div>

            <h3 className="mb-2 text-lg font-semibold text-gray-900 line-clamp-2">
              {post.title}
            </h3>

            <p className="mb-4 text-sm text-gray-600 line-clamp-2">
              {post.excerpt}
            </p>

            <div className="flex items-center text-sm font-medium text-primary-600 transition-colors group-hover:text-primary-700">
              Read more
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  )
}
