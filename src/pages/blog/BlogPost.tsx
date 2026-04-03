import { useParams, Navigate, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, Linkedin, Twitter } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { BlogContent } from '@/components/blog/BlogContent'
import { BlogCard } from '@/components/blog/BlogCard'
import { Newsletter } from '@/components/sections/Newsletter'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { getBlogPostBySlug, blogPosts } from '@/data/blog'

const categoryLabels: Record<string, string> = {
  'ai-ml': 'AI & ML',
  engineering: 'Engineering',
  data: 'Data',
  crm: 'CRM & RevOps',
  'industry-insights': 'Industry Insights',
  'company-news': 'Company News',
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getBlogPostBySlug(slug) : undefined

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  // Estimate reading time (words / 200 wpm)
  const wordCount = post.content.split(/\s+/).length
  const readingTime = Math.ceil(wordCount / 200)

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2)

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        type="article"
        publishedAt={post.publishedAt}
        author={post.author.name}
      />

      {/* Header */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-primary-50 pt-24 lg:pt-32">
        <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Link
              to="/blog"
              className="inline-flex items-center text-sm text-gray-600 hover:text-primary-600"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Badge>{categoryLabels[post.category]}</Badge>
              <span className="flex items-center text-sm text-gray-500">
                <Calendar className="mr-1 h-4 w-4" />
                {formattedDate}
              </span>
              <span className="flex items-center text-sm text-gray-500">
                <Clock className="mr-1 h-4 w-4" />
                {readingTime} min read
              </span>
            </div>

            <h1 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <p className="mt-6 text-xl text-gray-600">{post.excerpt}</p>

            {/* Author */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100">
                <span className="text-lg font-semibold text-primary-600">
                  {post.author.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{post.author.name}</p>
                <p className="text-sm text-gray-500">{post.author.role}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <BlogContent content={post.content} />
          </ScrollReveal>

          {/* Tags */}
          <ScrollReveal>
            <div className="mt-12 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </ScrollReveal>

          {/* Share */}
          <ScrollReveal>
            <Separator className="my-8" />
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700">Share:</span>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-600"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-600"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </ScrollReveal>

          {/* Author Bio */}
          <ScrollReveal>
            <Card className="mt-12">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary-100">
                    <span className="text-2xl font-semibold text-primary-600">
                      {post.author.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {post.author.name}
                    </h3>
                    <p className="text-sm text-primary-600">{post.author.role}</p>
                    <p className="mt-2 text-gray-600">{post.author.bio}</p>
                    <div className="mt-3 flex gap-3">
                      {post.author.linkedin && (
                        <a
                          href={post.author.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary-600"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {post.author.twitter && (
                        <a
                          href={post.author.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary-600"
                        >
                          <Twitter className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-gray-900">Related Articles</h2>
            </ScrollReveal>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {relatedPosts.map((relatedPost, index) => (
                <ScrollReveal key={relatedPost.id} delay={index * 0.1}>
                  <BlogCard post={relatedPost} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <Newsletter />
    </>
  )
}
