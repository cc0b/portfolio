'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { motion } from 'framer-motion'

const projectDetails: { [key: string]: any } = {
  'note-taking-app': {
    title: 'Note-Taking Web App',
    description: 'A full-stack note-taking application with real-time synchronization, user authentication, and a demo mode.',
    fullDescription: `This project showcases modern full-stack development practices using Next.js and Supabase. Built with AI-assisted development, the app includes features like real-time note sync across devices, secure authentication, and a demo mode for trying out the app without signing up.
    
The project demonstrates my ability to:
- Design and implement a complete user authentication system
- Build a responsive, intuitive UI with React and Tailwind CSS
- Integrate real-time database functionality with Supabase
- Deploy and maintain a production-ready application
- Leverage AI tools to accelerate development while maintaining code quality`,
    technologies: ['Next.js', 'React', 'Supabase', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    demoUrl: 'https://goodgoodstudy.com',
    githubUrl: 'https://github.com/calebli/note-app',
    highlights: [
      'Real-time synchronization across devices',
      'Secure user authentication',
      'Demo mode for new users',
      'Responsive design (mobile, tablet, desktop)',
      'Dark mode support',
    ],
    learnings: [
      'Database design and optimization',
      'Real-time data management with Supabase',
      'User authentication best practices',
      'UI/UX for productivity tools',
      'Effective use of AI-assisted development',
    ],
  },
  'manfrd-portfolio': {
    title: "Friend's Portfolio Website",
    description: "A clean, modern portfolio website designed and built for a friend to showcase their work and personal brand.",
    fullDescription: `Designed and built a personal portfolio website for a friend, creating a polished online presence to showcase their work and skills.

The project involved:
- Translating their personal brand and aesthetic into a cohesive web design
- Building a responsive, fast-loading site optimized for all devices
- Crafting a clean, minimal layout that puts the focus on their work
- Deploying and configuring the site for production`,
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    demoUrl: 'https://manfrd.vercel.app',
    highlights: [
      'Clean, minimal design tailored to personal brand',
      'Fully responsive across mobile, tablet, and desktop',
      'Fast performance and production deployment',
      'Custom layout and visual identity',
    ],
    learnings: [
      'Translating a client vision into a working product',
      'Designing for someone else\'s personal brand',
      'Balancing aesthetics with usability',
      'End-to-end ownership of a client project',
    ],
  },
  'velocity-bingo': {
    title: 'Velocity Bingo Networking Game',
    description: 'A mobile-first interactive bingo game built for Velocity\'s 200+ person innovation event.',
    fullDescription: `Built for the Velocity innovation program\'s kick-off event, this web app served 200+ participants and achieved 2,700+ page visits. The project demonstrates my ability to ship fast, optimize for mobile, and handle scale.

Key accomplishments:
- Built and deployed in a tight timeline
- Achieved 2,700+ page visits with zero downtime
- Designed for mobile-first experience (crucial for an event app)
- Client-side only implementation for simplicity and speed
- Contributed to 444 pre-event ticket sales`,
    technologies: ['HTML', 'CSS', 'JavaScript', 'Mobile-First Design'],
    demoUrl: 'https://velocity-bingo.vercel.app',
    githubUrl: 'https://github.com/calebli/velocity-bingo',
    highlights: [
      '400+ page visits',
      'Mobile-first responsive design',
      'Fast, lightweight implementation',
      'Zero runtime dependencies',
      'Real-time interactivity',
    ],
    learnings: [
      'Shipping under pressure and constraints',
      'Mobile optimization techniques',
      'Minimalist design philosophy',
      'Event-driven product thinking',
      'User engagement measurement',
    ],
  },
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projectDetails[params.slug]

  if (!project) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Project not found</h1>
            <Link href="/projects" className="text-[#2B5797] hover:underline">
              ← Back to projects
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <Link href="/projects" className="text-[#2B5797] hover:underline mb-8 inline-block">
            ← Back to projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {project.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              {project.description}
            </p>

            {/* Links */}
            <div className="flex gap-4 mb-12 flex-wrap">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-[#2B5797] text-white rounded-lg hover:bg-[#1e4073] transition-colors font-semibold"
                >
                  Live Demo ↗
                </a>
              )}
            </div>

            {/* Tech Stack */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Full Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Overview
              </h2>
              <p className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Highlights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Key Features & Highlights
              </h2>
              <ul className="space-y-2">
                {project.highlights.map((highlight: string) => (
                  <li key={highlight} className="text-gray-600 dark:text-gray-400 flex items-start">
                    <span className="text-[#2B5797] mr-3 font-bold">✓</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Learnings */}
            <div className="mb-12 p-8 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                What I Learned
              </h2>
              <ul className="space-y-2">
                {project.learnings.map((learning: string) => (
                  <li key={learning} className="text-gray-600 dark:text-gray-400 flex items-start">
                    <span className="text-[#2B5797] mr-3 font-bold">→</span>
                    {learning}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="text-center py-12 border-t border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Interested in working together?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Let's discuss how I can help bring your ideas to life.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-[#2B5797] text-white rounded-lg hover:bg-[#1e4073] transition-colors font-semibold"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
