'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Workflow, MessageSquare, Cog, BarChart3, Code2 } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Strategy & Roadmapping',
    description: 'We assess your operations, identify high-impact AI opportunities, and build a phased roadmap that aligns with your business goals.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Cog,
    title: 'Machine Learning Solutions',
    description: 'Custom ML models for prediction, classification, and optimization. From data pipeline to production deployment.',
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    icon: MessageSquare,
    title: 'LLM & GenAI Integration',
    description: 'Harness GPT, Claude, and open-source LLMs for intelligent assistants, document processing, and content generation.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'Automate repetitive workflows with AI-powered agents that learn, adapt, and scale with your operations.',
    gradient: 'from-pink-500 to-red-500',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & BI',
    description: 'Transform raw data into actionable insights with advanced analytics, dashboards, and predictive intelligence.',
    gradient: 'from-orange-500 to-yellow-500',
  },
  {
    icon: Code2,
    title: 'Custom AI Development',
    description: 'Bespoke AI applications tailored to your unique challenges. We build what off-the-shelf solutions can\'t handle.',
    gradient: 'from-green-500 to-cyan-500',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">What We Do</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-5">
            End-to-End <span className="gradient-text">AI Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From strategy to deployment, we cover every aspect of your AI journey with battle-tested expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative rounded-2xl p-6 sm:p-8 bg-[#0f0f18] border border-white/5 hover:border-white/10 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Hover glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} bg-opacity-10 mb-5`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>

              {/* Bottom gradient line */}
              <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
