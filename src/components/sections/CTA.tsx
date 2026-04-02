'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Calendar, ArrowRight, CheckCircle } from 'lucide-react';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.03] to-transparent" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500 blur-[200px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: 'spring' }}
            className="inline-flex p-4 rounded-full bg-cyan-500/10 mb-8"
          >
            <Calendar className="w-8 h-8 text-cyan-400" />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Transform Your{' '}
            <span className="gradient-text">Business with AI?</span>
          </h2>

          <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
            Let&apos;s talk about your challenges. No pitch decks, no fluff — just a real conversation about what AI can do for you.
          </p>

          {!submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              {/* Email form */}
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Let&apos;s Talk
                </button>
              </form>

              <p className="text-sm text-gray-500">
                Or schedule directly:{' '}
                <a href="mailto:contact@codeticks.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  contact@codeticks.com
                </a>
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4"
            >
              <CheckCircle className="w-16 h-16 text-green-400" />
              <p className="text-2xl font-semibold text-white">We&apos;ll be in touch within 24 hours!</p>
              <p className="text-gray-400">Check your inbox at {email}</p>
            </motion.div>
          )}

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-500"
          >
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-500/60" /> Free initial consultation</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-500/60" /> No long-term contracts required</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-cyan-500/60" /> Results in weeks, not months</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
