'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Home, Shield, ArrowUpRight } from 'lucide-react';

const cases = [
  {
    icon: Zap,
    title: 'Smart Grid Optimization',
    client: 'Regional Utility Provider',
    industry: 'Utilities',
    gradient: 'from-cyan-500 to-blue-600',
    description: 'Built an ML-powered load forecasting system that dynamically optimizes grid distribution, reducing energy waste and preventing outages before they happen.',
    results: [
      { metric: '40%', label: 'Efficiency Gain' },
      { metric: '67%', label: 'Fewer Outages' },
      { metric: '$2.4M', label: 'Annual Savings' },
    ],
  },
  {
    icon: Home,
    title: 'AI-Powered Property Valuation',
    client: 'National Home Builder',
    industry: 'Real Estate',
    gradient: 'from-purple-500 to-pink-600',
    description: 'Developed a deep learning valuation model processing 50+ data points per property, replacing manual comps and delivering institutional-grade accuracy.',
    results: [
      { metric: '3x', label: 'Faster Valuations' },
      { metric: '94%', label: 'Accuracy Rate' },
      { metric: '180K', label: 'Properties Analyzed' },
    ],
  },
  {
    icon: Shield,
    title: 'Predictive Maintenance Platform',
    client: 'Top 10 Home Builder',
    industry: 'Construction',
    gradient: 'from-orange-500 to-red-600',
    description: 'Created a predictive analytics platform that identifies potential warranty issues during construction, catching problems before homeowners do.',
    results: [
      { metric: '60%', label: 'Fewer Claims' },
      { metric: '$1.8M', label: 'Cost Reduction' },
      { metric: '8 mo', label: 'Time to ROI' },
    ],
  },
];

export default function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="case-studies" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Case Studies</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-5">
            Real Results, <span className="gradient-text">Real Impact</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We don&apos;t just talk about AI — we ship solutions that deliver measurable business outcomes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {cases.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden bg-[#0f0f18] border border-white/5 hover:border-white/10 transition-all duration-500"
            >
              {/* Top gradient bar */}
              <div className={`h-1 bg-gradient-to-r ${cs.gradient}`} />

              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${cs.gradient} shadow-lg`}>
                    <cs.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{cs.industry}</span>
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">{cs.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{cs.client}</p>
                <p className="text-gray-400 leading-relaxed mb-8">{cs.description}</p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5">
                  {cs.results.map((r) => (
                    <div key={r.label}>
                      <div className="text-xl font-bold text-white">{r.metric}</div>
                      <div className="text-xs text-gray-500 mt-1">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover arrow */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5 text-gray-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
