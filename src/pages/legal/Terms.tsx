import { SEO } from '@/components/SEO'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

export function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Terms and conditions for using CodeTicks services and website."
      />

      <section className="pt-24 lg:pt-32">
        <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="text-3xl font-bold text-gray-900 lg:text-4xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-gray-600">Last updated: January 2024</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="prose prose-gray mt-12 max-w-none">
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing or using our website and services, you agree to be
                bound by these Terms of Service. If you do not agree to these
                terms, please do not use our services.
              </p>

              <h2>2. Services</h2>
              <p>
                CodeTicks provides consulting services in software engineering,
                data engineering, data science, CRM/RevOps, and AI/generative AI.
                The specific scope of services will be defined in individual
                agreements with clients.
              </p>

              <h2>3. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and
                software, is the property of CodeTicks and is protected by
                intellectual property laws. You may not reproduce, distribute, or
                create derivative works without our express permission.
              </p>

              <h2>4. User Responsibilities</h2>
              <p>When using our website and services, you agree to:</p>
              <ul>
                <li>Provide accurate and complete information</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not interfere with the proper functioning of our website</li>
              </ul>

              <h2>5. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, CodeTicks shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages arising from your use of our services.
              </p>

              <h2>6. Confidentiality</h2>
              <p>
                Both parties agree to maintain the confidentiality of any
                proprietary or confidential information shared during the course of
                our engagement, subject to the terms of any applicable
                non-disclosure agreement.
              </p>

              <h2>7. Termination</h2>
              <p>
                We reserve the right to terminate or suspend your access to our
                services at any time, with or without cause, and with or without
                notice.
              </p>

              <h2>8. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in
                accordance with the laws of the State of California, without regard
                to its conflict of law provisions.
              </p>

              <h2>9. Changes to Terms</h2>
              <p>
                We may update these Terms of Service from time to time. We will
                notify you of any changes by posting the new Terms on this page and
                updating the "Last updated" date.
              </p>

              <h2>10. Contact Us</h2>
              <p>
                If you have questions about these Terms of Service, please contact
                us at legal@codeticks.com.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
