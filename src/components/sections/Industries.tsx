'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Lightbulb, Home, Stethoscope, Building2, Factory, ShoppingCart } from 'lucide-react';

const industries = [
  {
    id: 'utilities',
    icon: Lightbulb,
    title: 'Utilities & Energy',
    featured: true,
    description: 'We help utility companies harness AI for smarter grid management, predictive maintenance, and customer experience optimization.',
    solutions: [
      'Smart grid load forecasting & optimization',
      'Predictive maintenance for infrastructure assets',
      'AI-powered outage detection & response',
      'Customer usage analytics & demand response',
      'Automated compliance & regulatory reporting',
    ],
    stat: '40%',
    statLabel: 'Avg. efficiency improvement',
  },
  {
    id: 'realestate',
    icon: Home,
    title: 'Home Builders & Real Estate',
    featured: true,
    description: 'From property valuation to construction optimization, we bring AI to every stage of the real estate lifecycle.',
    solutions: [
      'AI-powered property valuation models',
      'Construction scheduling & resource optimization',
      'Market trend prediction & analysis',
      'Automated lead scoring & qualification',
      'Warranty claim prediction & prevention',
    ],
    stat: '3x',
    statLabel: 'Faster market analysis',
  },
  {
    id: 'healthcare',
    icon: Stethoscope,
    title: 'Healthcare',
    featured: false,
    description: 'HIPAA-compliant AI solutions for patient engagement, operational efficiency, and clinical decision support.',
    solutions: ['Patient scheduling optimization', 'Clinical document processing', 'Predictive patient outcomes'],
    stat: '60%',
    statLabel: 'Reduction in admin time',
  },
  {
    id: 'finance',
    icon: Building2,
    title: 'Financial Services',
    featured: false,
    description: 'Risk assessment, fraud detection, and intelligent automation for banks, insurers, and fintech companies.',
    solutions: ['Fraud detection & prevention', 'Credit risk modeling', 'Automated underwriting'],
    stat: '85%',
    statLabel: 'Fraud detection accuracy',
  },
  {
    id: 'manufacturing',
    icon: Factory,
    title: 'Manufacturing',
    featured: false,
    description: 'Optimize production, predict equipment failures, and streamline supply chains with intelligent automation.',
    solutions: ['Predictive maintenance', 'Quality control automation', 'Supply chain optimization'],
    stat: '35%',
    statLabel: 'Downtime reduction',
  },
  {
    id: 'retail',
    icon: ShoppingCart,
    title: 'Retail & E-Commerce',
    featured: false,
    description: 'Personalized customer experiences, inventory optimization, and dynamic pricing powered by machine learning.',
    solutions: ['Recommendation engines', 'Dynamic pricing', 'Demand forecasting'],
    stat: '25%',
    statLabel: 'Revenue increase',
  },
];

export default function Industries() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState('utilities');
  const featured = industries.filter((i) => i.featured);
  const others = industries.filter((i) => !i.featured);
  const activeIndustry = industries.find((i) => i.id === activeTab)!;

  return (
    <section id="industries" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Industries</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-5">
            Deep Expertise Where It <span className="gradient-text">Matters Most</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            While we serve clients across all industries, our deepest roots are in utilities and real estate.
          </p>
        </motion.div>

        {/* Tab buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {industries.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActiveTab(ind.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === ind.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              <ind.icon className="w-4 h-4" />
              {ind.title}
              {ind.featured && activeTab !== ind.id && (
                <span className="ml-1 px-1.5 py-0.5 text-[10px] rounded-full bg-cyan-500/20 text-cyan-300">TOP</span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Active industry detail */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8 sm:p-12"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex p-3 rounded-xl bg-cyan-500/10 mb-5">
                <activeIndustry.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-3xl font-bold mb-4">{activeIndustry.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">{activeIndustry.description}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                Discuss your project →
              </a>
            </div>
            <div>
              <div className="space-y-3 mb-8">
                {activeIndustry.solutions.map((solution, i) => (
                  <motion.div
                    key={solution}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5"
                  >
                    <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                    <span className="text-gray-300 text-sm">{solution}</span>
                  </motion.div>
                ))}
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/10">
                <div className="text-4xl font-bold text-white mb-1">{activeIndustry.stat}</div>
                <div className="text-gray-400 text-sm">{activeIndustry.statLabel}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
