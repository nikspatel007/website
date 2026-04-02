'use client';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "CodeTicks transformed our grid management with AI that actually works in production. Their team understood our operational constraints from day one — no hand-holding needed. The ROI was visible within the first quarter.",
    name: 'Michael Torres',
    role: 'VP of Operations',
    company: 'Midwest Energy Partners',
    industry: 'Utilities',
  },
  {
    quote: "We needed someone who could build AI models that understood real estate at a deep level — not just generic ML. CodeTicks delivered a property valuation system that our entire acquisitions team now depends on daily.",
    name: 'Sarah Chen',
    role: 'Director of Analytics',
    company: 'Apex Home Builders',
    industry: 'Real Estate',
  },
  {
    quote: "After two failed attempts with other consultants, CodeTicks came in and shipped a working predictive maintenance system in 8 weeks. They're the real deal — technical depth with business sense.",
    name: 'James Hartwell',
    role: 'CTO',
    company: 'Cornerstone Construction Group',
    industry: 'Construction',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Testimonials</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 mb-5">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 sm:p-12 min-h-[320px] flex flex-col justify-center">
            <Quote className="w-10 h-10 text-cyan-500/30 mb-6" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed mb-8 font-light italic">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[current].name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonials[current].name}</div>
                    <div className="text-sm text-gray-400">
                      {testimonials[current].role}, {testimonials[current].company}
                    </div>
                  </div>
                  <span className="ml-auto text-xs text-cyan-400/60 font-medium uppercase tracking-wider hidden sm:block">
                    {testimonials[current].industry}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
              className="p-2 rounded-full border border-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-cyan-400' : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
              className="p-2 rounded-full border border-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
