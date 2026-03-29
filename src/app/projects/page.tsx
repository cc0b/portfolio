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
    description: 'A portfolio website designed and built for a creative professional to showcase their work and personal brand.',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    demoUrl: 'https://manfrd.com',
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
        </section>
      </main>
      <Footer />
    </>
  )
}
