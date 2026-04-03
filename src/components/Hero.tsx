'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const words = ['We', 'Build', 'AI Agents', 'That', 'Work', 'For', 'Your', 'Business.'];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 sm:px-8 lg:px-16 max-w-6xl mx-auto relative">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <Image src="/logo.png" alt="CodeTicks" width={48} height={48} unoptimized />
      </motion.div>

      {/* Main heading - word by word */}
      <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.12, ease: [0.25, 0.4, 0.25, 1] }}
            className={`inline-block mr-[0.25em] ${word === 'AI Agents' ? 'text-blue-600' : 'text-gray-900'}`}
          >
            {word}
          </motion.span>
        ))}
      </h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="text-xl sm:text-2xl text-gray-500 max-w-2xl mb-12 font-light leading-relaxed"
      >
        Autonomous agents that handle your workflows, connect your tools, and operate 24/7.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        <a
          href="#contact"
          className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
        >
          Let&apos;s Talk
          <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </motion.div>

      {/* Animated agent visualization */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <div className="relative w-64 h-64">
          {/* Center node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>
          </div>
          {/* Orbiting nodes */}
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <motion.div
              key={i}
              animate={{ rotate: [angle, angle + 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/2 left-1/2 w-full h-full"
              style={{ transformOrigin: '50% 50%' }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-md ${
                  i % 2 === 0 ? 'bg-blue-500' : 'bg-orange-500'
                }`}
              >
                {['AI', '⚡', '🔗', '📊', '🤖'][i]}
              </motion.div>
            </motion.div>
          ))}
          {/* Pulse ring */}
          <motion.div
            animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 border-2 border-blue-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
