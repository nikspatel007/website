'use client';
import { motion, useInView, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function Counter({ target, suffix, label, delay }: { target: number; suffix: string; label: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const ctrl = animate(0, target, {
        duration: 2,
        delay,
        ease: 'easeOut',
        onUpdate: (v) => setValue(Math.round(v)),
      });
      return ctrl.stop;
    }
  }, [isInView, target, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="text-5xl sm:text-7xl font-bold text-gray-900 tabular-nums">
        {value}{suffix}
      </div>
      <div className="text-gray-500 mt-2 text-lg">{label}</div>
    </motion.div>
  );
}

const stats = [
  { target: 40, suffix: '%', label: 'Cost Reduction' },
  { target: 10, suffix: 'x', label: 'Faster Processing' },
  { target: 24, suffix: '/7', label: 'Autonomous Operation' },
  { target: 98, suffix: '%', label: 'Accuracy' },
];

export default function Results() {
  return (
    <section className="py-32 px-6 sm:px-8 lg:px-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {stats.map((s, i) => (
          <Counter key={s.label} {...s} delay={i * 0.15} />
        ))}
      </div>
    </section>
  );
}
