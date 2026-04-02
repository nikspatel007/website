'use client';
import { Zap, Globe, Link2, Mail } from 'lucide-react';

const footerLinks = {
  Services: ['AI Strategy', 'Machine Learning', 'LLM Integration', 'Process Automation', 'Data Analytics', 'Custom Development'],
  Industries: ['Utilities & Energy', 'Home Builders', 'Real Estate', 'Healthcare', 'Financial Services', 'Manufacturing'],
  Company: ['About Us', 'Case Studies', 'Blog', 'Careers', 'Contact'],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Zap className="w-7 h-7 text-cyan-400" />
              <span className="text-xl font-bold">Code<span className="text-cyan-400">Ticks</span></span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              CodeTicks Solutions transforms businesses with AI that delivers measurable results. From strategy to production, we&apos;re your AI partner.
            </p>
            <div className="flex gap-3">
              {[Globe, Link2, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2.5 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 CodeTicks Solutions, Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="/terms-of-use" className="hover:text-gray-300 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
