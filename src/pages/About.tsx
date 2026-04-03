import { SEO } from '@/components/SEO'
import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { TeamGrid } from '@/components/sections/TeamGrid'
import { CTABanner } from '@/components/sections/CTABanner'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const values = [
  {
    title: 'Excellence',
    description:
      'We set high standards and consistently deliver work that exceeds expectations.',
  },
  {
    title: 'Partnership',
    description:
      'We treat every client relationship as a true partnership, invested in mutual success.',
  },
  {
    title: 'Innovation',
    description:
      'We stay at the forefront of technology to bring the best solutions to our clients.',
  },
  {
    title: 'Transparency',
    description:
      'We communicate openly and honestly, building trust through visibility.',
  },
]

export function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about CodeTicks - our mission, values, and the team of experts dedicated to transforming businesses through technology."
      />

      <Hero
        title="About CodeTicks"
        description="We are a team of technologists, strategists, and problem-solvers passionate about helping businesses harness the power of modern technology."
      />

      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
                  Our Mission
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  At CodeTicks, we believe that every business should have access
                  to world-class technology expertise. Our mission is to bridge
                  the gap between cutting-edge technology and practical business
                  outcomes.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  We partner with organizations to design, build, and optimize
                  technology solutions that drive real, measurable results.
                  Whether you're looking to leverage AI, modernize your data
                  infrastructure, or transform your revenue operations, we bring
                  the expertise to make it happen.
                </p>
                <div className="mt-8 relative">
                  <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary-500/10 to-accent-500/10 blur-xl" />
                  <img
                    src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80"
                    alt="AI technology and human innovation"
                    className="relative rounded-2xl shadow-xl w-full object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid gap-6 sm:grid-cols-2">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="rounded-xl border border-gray-200 bg-white p-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-gray-50">
        <Stats />
      </div>

      {/* Team Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
                Meet Our Team
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Experienced professionals from top tech companies and
                consultancies, united by a passion for solving complex problems.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12">
            <TeamGrid />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        variant="dark"
        title="Want to join our team?"
        description="We're always looking for talented individuals who share our passion for technology and excellence."
        primaryCTA={{ text: 'View Open Positions', href: '/contact' }}
      />
    </>
  )
}
