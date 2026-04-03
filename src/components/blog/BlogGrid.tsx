import { BlogCard } from './BlogCard'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import type { BlogPost } from '@/types'
import { cn } from '@/lib/utils'

interface BlogGridProps {
  posts: BlogPost[]
  showFeatured?: boolean
  className?: string
}

export function BlogGrid({
  posts,
  showFeatured = true,
  className,
}: BlogGridProps) {
  const featuredPost = showFeatured ? posts.find((p) => p.featured) : null
  const regularPosts = showFeatured
    ? posts.filter((p) => !p.featured)
    : posts

  return (
    <div className={cn('space-y-8', className)}>
      {/* Featured Post */}
      {featuredPost && (
        <ScrollReveal>
          <BlogCard post={featuredPost} featured />
        </ScrollReveal>
      )}

      {/* Regular Posts Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {regularPosts.map((post, index) => (
          <ScrollReveal key={post.id} delay={index * 0.1}>
            <BlogCard post={post} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
