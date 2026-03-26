'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProjectCard from '@/components/ProjectCard'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Good Study',
    description: 'A full-stack note-taking application with real-time synchronization, authentication, and demo mode.',
    technologies: ['Next.js', 'React', 'Supabase', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://goodgoodstudy.vercel.app/demo',
    slug: 'note-taking-app',
  },
  {
    title: 'Velocity Bingo Networking Game',
    description: 'A mobile-first interactive bingo game built for Velocity\'s 200+ person innovation event. Achieved 500+ page visits with client-side only implementation.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Mobile-First'],
    demoUrl: 'https://velocity-bingo.vercel.app',
    slug: 'velocity-bingo',
  },
  {
    title: 'MANFRD Portfolio Website',
    description: 'A portfolio website designed and built for a friend to showcase their work and personal brand.',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    demoUrl: 'https://manfrd.vercel.app',
    slug: 'manfrd-portfolio',
  },
]

export default function Projects() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Projects
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
              A selection of recent projects showcasing full-stack development, open to projects, and rapid prototyping.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                demoUrl={project.demoUrl}
                slug={project.slug}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 p-8 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">More projects coming soon</h2>
            <p className="text-gray-600 dark:text-gray-400">
              I'm actively building new projects and refining existing ones. Check back soon for updates, or reach out if you'd like to collaborate.
            </p>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
