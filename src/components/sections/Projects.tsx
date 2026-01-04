import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Project One',
    description: 'A full-stack web application built with React and Node.js.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'Mobile-first e-commerce platform with real-time inventory.',
    tags: ['TypeScript', 'Next.js', 'Stripe'],
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'Interactive data visualization dashboard for analytics.',
    tags: ['D3.js', 'Python', 'AWS'],
    link: '#',
  },
  {
    title: 'Project Four',
    description: 'Open-source CLI tool for developer productivity.',
    tags: ['Rust', 'CLI', 'Open Source'],
    link: '#',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-5xl w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.a
              key={project.title}
              href={project.link}
              className="group p-6 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-colors border border-slate-700/50 hover:border-slate-600"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-slate-700/50 rounded-full text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
