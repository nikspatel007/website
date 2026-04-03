import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Github, Mail } from 'lucide-react'
import { footerNavigation } from '@/data/navigation'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-500">
                <span className="text-lg font-bold text-white">C</span>
              </div>
              <span className="text-xl font-bold text-white">CodeTicks</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              AI & Software Consulting services that transform businesses. We
              help companies leverage technology for sustainable growth.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.linkedin.com/company/codeticks-solutions/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-primary-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-primary-400"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/CodeTicks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-primary-400"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@codeticks.com"
                className="text-gray-400 transition-colors hover:text-primary-400"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.services.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-gray-400 transition-colors hover:text-primary-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-gray-400 transition-colors hover:text-primary-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:info@codeticks.com"
                  className="text-sm text-gray-400 transition-colors hover:text-primary-400"
                >
                  info@codeticks.com
                </a>
              </li>
              <li className="text-sm text-gray-400">
                Chicago, IL
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} CodeTicks. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerNavigation.legal.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm text-gray-500 transition-colors hover:text-gray-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
