import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { PageLayout } from '@/components/layout/PageLayout'
import { GoogleAnalytics } from '@/components/integrations/GoogleAnalytics'

// Pages
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { Contact } from '@/pages/Contact'
import { Testimonials } from '@/pages/Testimonials'

// Service Pages
import { ServicesHub } from '@/pages/services/ServicesHub'
import { ServiceDetail } from '@/pages/services/ServiceDetail'

// Case Study Pages
import { CaseStudiesIndex } from '@/pages/case-studies/CaseStudiesIndex'
import { CaseStudyDetail } from '@/pages/case-studies/CaseStudyDetail'

// Blog Pages
import { BlogIndex } from '@/pages/blog/BlogIndex'
import { BlogPost } from '@/pages/blog/BlogPost'

// Legal Pages
import { PrivacyPolicy } from '@/pages/legal/PrivacyPolicy'
import { Terms } from '@/pages/legal/Terms'

// 404 Page
function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>
      <p className="mt-4 text-xl text-gray-600">Page not found</p>
      <a
        href="/"
        className="mt-8 rounded-lg bg-primary-600 px-6 py-3 text-white transition-colors hover:bg-primary-700"
      >
        Go Home
      </a>
    </div>
  )
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <GoogleAnalytics />
        <PageLayout>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />

            {/* Services */}
            <Route path="/services" element={<ServicesHub />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />

            {/* Case Studies */}
            <Route path="/case-studies" element={<CaseStudiesIndex />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />

            {/* Blog */}
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            {/* Legal */}
            <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/legal/terms" element={<Terms />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
