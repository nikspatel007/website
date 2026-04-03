import { SEO } from '@/components/SEO'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Learn about how CodeTicks collects, uses, and protects your personal information."
      />

      <section className="pt-24 lg:pt-32">
        <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="text-3xl font-bold text-gray-900 lg:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-gray-600">Last updated: January 2024</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="prose prose-gray mt-12 max-w-none">
              <h2>1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you
                fill out a contact form, subscribe to our newsletter, or communicate
                with us via email.
              </p>
              <p>This information may include:</p>
              <ul>
                <li>Name and email address</li>
                <li>Company name and job title</li>
                <li>Phone number</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>3. Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except as
                described in this policy or as required by law.
              </p>

              <h2>4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to
                protect your personal information against unauthorized access,
                alteration, disclosure, or destruction.
              </p>

              <h2>5. Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to analyze website
                traffic and improve your experience. You can control cookie settings
                through your browser preferences.
              </p>

              <h2>6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of marketing communications</li>
              </ul>

              <h2>7. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us
                at privacy@codeticks.com.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
