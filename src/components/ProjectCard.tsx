'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
  slug: string
}

export default function ProjectCard({
  title,
  description,
  technologies,
  demoUrl,
  githubUrl,
  slug,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-gray-900/50 transition-shadow group"
    >
      <Link href={`/projects/${slug}`} style={{ textDecoration: 'none' }}>
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-[#5B8FA8] transition-colors cursor-pointer">
          {title}
        </h3>
      </Link>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 flex-wrap">
        <Link href={`/projects/${slug}`} className="text-[#5B8FA8] font-semibold hover:text-[#3D6B82] transition-colors">
          View Details →
        </Link>
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5B8FA8] font-semibold hover:text-[#3D6B82] transition-colors"
          >
            Live Demo ↗
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5B8FA8] font-semibold hover:text-[#3D6B82] transition-colors"
          >
            GitHub ↗
          </a>
        )}
      </div>
    </motion.div>
  )
}
