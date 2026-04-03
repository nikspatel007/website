'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bot, Workflow, MessageSquare } from 'lucide-react';

const items = [
  {
    icon: Bot,
    title: 'Autonomous Agents',
    description: 'AI agents that handle entire tasks end-to-end. No babysitting. They research, decide, execute, and report back.',
    color: 'bg-blue-600',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Connect your tools. Automate your processes. Your team focuses on what matters while agents handle the rest.',
    color: 'bg-orange-500',
  },
  {
    icon: MessageSquare,
    title: 'Custom LLM Solutions',
    description: 'Fine-tuned models, RAG pipelines, intelligent assistants. Built on your data, for your specific needs.',
    color: 'bg-blue-600',
  },
];

export default function WhatWeBuild() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 px-6 sm:px-8 lg:px-16 max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-4"
      >
        What We Build
      </motion.p>

      <div className="space-y-16 mt-12">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16 group"
          >
            <div className="flex items-center gap-5 md:w-1/2">
              <div className={`${item.color} p-3 rounded-2xl text-white shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">{item.title}</h3>
            </div>
            <p className="text-lg text-gray-500 leading-relaxed md:w-1/2">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
