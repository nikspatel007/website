'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { num: '01', title: 'You Tell Us\nThe Problem', color: 'bg-blue-600' },
  { num: '02', title: 'We Build\nThe Agent', color: 'bg-orange-500' },
  { num: '03', title: 'It Works While\nYou Sleep', color: 'bg-blue-600' },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 px-6 sm:px-8 lg:px-16 max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-4"
      >
        How It Works
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl font-bold text-gray-900 mb-20"
      >
        Simple as 1, 2, 3.
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 md:gap-4 relative">
        {/* Connecting line - desktop */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.8, ease: 'easeInOut' }}
          className="hidden md:block absolute top-[44px] left-[16.67%] right-[16.67%] h-[2px] bg-gray-200 origin-left z-0"
        />

        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.25 }}
            className="text-center relative z-10"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.25, type: 'spring', stiffness: 200 }}
              className={`${step.color} w-[88px] h-[88px] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg`}
            >
              <span className="text-white text-2xl font-bold">{step.num}</span>
            </motion.div>
            <h3 className="text-xl font-bold text-gray-900 whitespace-pre-line leading-tight">{step.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
