'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const techs = [
  { name: 'OpenAI', cat: 'ai' },
  { name: 'Claude', cat: 'ai' },
  { name: 'LangChain', cat: 'ai' },
  { name: 'LlamaIndex', cat: 'ai' },
  { name: 'CrewAI', cat: 'ai' },
  { name: 'AutoGen', cat: 'ai' },
  { name: 'Python', cat: 'lang' },
  { name: 'FastAPI', cat: 'lang' },
  { name: 'Next.js', cat: 'lang' },
  { name: 'Pinecone', cat: 'infra' },
  { name: 'Weaviate', cat: 'infra' },
  { name: 'AWS', cat: 'infra' },
  { name: 'GCP', cat: 'infra' },
];

const catColors: Record<string, string> = {
  ai: 'border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 hover:border-blue-300',
  lang: 'border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100 hover:border-orange-300',
  infra: 'border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100 hover:border-gray-300',
};

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-32 px-6 sm:px-8 lg:px-16 max-w-6xl mx-auto bg-gray-50/50 rounded-3xl">
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-4"
      >
        Our Stack
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl font-bold text-gray-900 mb-16"
      >
        Built with the best tools.
      </motion.h2>

      <div className="flex flex-wrap gap-3">
        {techs.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: 0.2 + i * 0.06,
              type: 'spring',
              stiffness: 200,
              damping: 15,
            }}
            whileHover={{ scale: 1.08, y: -4 }}
            className={`px-5 py-3 rounded-full border text-sm font-medium cursor-default transition-colors duration-200 ${catColors[tech.cat]}`}
          >
            {tech.name}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2 }}
        className="mt-8 flex gap-6 text-xs text-gray-400"
      >
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-400" /> AI & Agents</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-400" /> Languages & Frameworks</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-gray-400" /> Infrastructure</span>
      </motion.div>
    </section>
  );
}
