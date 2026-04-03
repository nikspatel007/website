import { Mail, MapPin } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { ContactForm } from '@/components/forms/ContactForm'
import { CalendlyEmbed } from '@/components/integrations/CalendlyEmbed'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@codeticks.com',
    href: 'mailto:info@codeticks.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Chicago, IL',
  },
]

export function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with CodeTicks to discuss your project. Schedule a free consultation or send us a message."
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-primary-50 pt-24 lg:pt-32">
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 lg:text-5xl">
                  Let's Talk
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                  Ready to transform your business? Get in touch to discuss your
                  project or schedule a free consultation.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80"
                  alt="Professional consultation and collaboration"
                  className="relative rounded-2xl shadow-2xl w-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Send us a message
                </h2>
                <p className="mt-2 text-gray-600">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </ScrollReveal>

            {/* Calendly */}
            <ScrollReveal direction="right">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Schedule a consultation
                </h2>
                <p className="mt-2 text-gray-600">
                  Book a free 30-minute call to discuss your project with our
                  team.
                </p>
                <div className="mt-8 rounded-xl border border-gray-200 bg-white">
                  <CalendlyEmbed />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Info */}
          <div className="mt-16 border-t border-gray-200 pt-16">
            <ScrollReveal>
              <div className="grid gap-8 sm:grid-cols-2 max-w-xl mx-auto">
                {contactInfo.map((info) => (
                  <div key={info.label} className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                      <info.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="mt-4 font-semibold text-gray-900">
                      {info.label}
                    </h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="mt-1 text-gray-600 transition-colors hover:text-primary-600"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-gray-600">{info.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
