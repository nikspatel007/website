import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  image?: string
  type?: 'website' | 'article'
  publishedAt?: string
  author?: string
}

const siteUrl = import.meta.env.VITE_SITE_URL || 'https://codeticks.com'

export function SEO({
  title,
  description,
  image = '/images/og-default.jpg',
  type = 'website',
  publishedAt,
  author,
}: SEOProps) {
  const fullTitle = `${title} | CodeTicks`
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="CodeTicks" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Article specific */}
      {type === 'article' && publishedAt && (
        <meta property="article:published_time" content={publishedAt} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
    </Helmet>
  )
}
