import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-4xl">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="space-y-6 text-lg text-slate-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            I'm a software engineer with a passion for building elegant solutions
            to complex problems. When I'm not coding, you'll find me in the cockpit,
            behind the decks, or exploring new places.
          </p>

          <p>
            My journey spans across multiple disciplines—from crafting scalable
            backend systems to creating immersive frontend experiences. I believe
            in writing clean, maintainable code and continuously learning new technologies.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { label: 'Aviation', icon: '✈️' },
            { label: 'Music', icon: '🎧' },
            { label: 'Dance', icon: '💃' },
            { label: 'Travel', icon: '🌍' },
          ].map((hobby) => (
            <div
              key={hobby.label}
              className="p-4 bg-slate-800/50 rounded-lg text-center hover:bg-slate-800 transition-colors"
            >
              <div className="text-3xl mb-2">{hobby.icon}</div>
              <div className="text-sm text-slate-400">{hobby.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
