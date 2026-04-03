import { SEO } from '@/components/SEO'
import { Hero } from '@/components/sections/Hero'
import { Newsletter } from '@/components/sections/Newsletter'
import { BlogGrid } from '@/components/blog/BlogGrid'
import { blogPosts } from '@/data/blog'

export function BlogIndex() {
  return (
    <>
      <SEO
        title="Blog"
        description="Insights on AI, data engineering, software development, and technology trends from the CodeTicks team."
      />

      <Hero
        title="Insights & Articles"
        description="Expert perspectives on AI, data, and software engineering from our team of consultants."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlogGrid posts={blogPosts} showFeatured />
        </div>
      </section>

      <Newsletter />
    </>
  )
}
