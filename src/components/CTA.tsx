'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" ref={ref} className="py-32 px-6 sm:px-8 lg:px-16 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="bg-blue-600 rounded-3xl px-8 sm:px-16 py-16 sm:py-20 text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Ready to put AI to work?
        </h2>
        <p className="text-blue-200 text-lg mb-10 max-w-md mx-auto">
          Tell us what you need. We&apos;ll show you what&apos;s possible.
        </p>

        {!sent ? (
          <form
            onSubmit={(e) => { e.preventDefault(); if (email) setSent(true); }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Get Started
            </button>
          </form>
        ) : (
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-xl text-white font-medium"
          >
            ✓ We&apos;ll be in touch at {email}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
