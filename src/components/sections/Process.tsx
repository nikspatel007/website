'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Map, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discovery',
    description: 'We dive deep into your operations, data landscape, and business objectives to identify the highest-impact AI opportunities.',
    color: 'cyan',
  },
  {
    icon: Map,
    number: '02',
    title: 'Strategy',
    description: 'We design a clear, phased AI roadmap with defined KPIs, timelines, and resource requirements — no buzzword bingo.',
    color: 'blue',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Implementation',
    description: 'Our engineers build, test, and deploy your AI solutions with a focus on reliability, security, and seamless integration.',
    color: 'purple',
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Scale & Optimize',
    description: 'We monitor performance, iterate on models, and expand successful solutions across your organization.',
    color: 'violet',
  },
];

const colorMap: Record<string, string> = {
  cyan: 'bg-cyan-500 shadow-cyan-500/20',
  blue: 'bg-blue-500 shadow-blue-500/20',
  purple: 'bg-purple-500 shadow-purple-500/20',
  violet: 'bg-violet-500 shadow-violet-500/20',
};

const textColorMap: Record<string, string> = {
  cyan: 'text-cyan-400',
  blue: 'text-blue-400',
  purple: 'text-purple-400',
  violet: 'text-violet-400',
};

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="process" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.02] to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Our Process</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-5">
            From Idea to <span className="gradient-text">Production</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A proven four-step methodology that turns AI ambition into business reality.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-[60px] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-[2px]">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 via-purple-500 to-violet-500 origin-left"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
                className="relative text-center"
              >
                {/* Circle */}
                <div className="relative mx-auto mb-6">
                  <div className={`w-[72px] h-[72px] rounded-full ${colorMap[step.color]} shadow-lg flex items-center justify-center mx-auto relative z-10`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <motion.div
                    animate={isInView ? { scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] } : {}}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    className={`absolute inset-0 rounded-full ${colorMap[step.color]} opacity-30`}
                  />
                </div>

                <span className={`text-xs font-bold tracking-widest ${textColorMap[step.color]} mb-2 block`}>
                  STEP {step.number}
                </span>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
