'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function About() {
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
              About Me
            </h1>

            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                I'm Caleb Li, a penultimate-year Business Analytics & Information Systems student at the University of Auckland.
                 I try to bridge the gap between business needs and tech through thoughtful product thinking and practical solutions.
                 I also like to make websites sometimes.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">
                What I Do
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                <div className="border border-gray-200 dark:border-gray-800 p-6 rounded-lg">
                  <h3 className="font-bold text-[#2B5797] mb-2">Business Analytics</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Data visualization, requirements gathering, and translating business problems into technical solutions.
                  </p>
                </div>
                <div className="border border-gray-200 dark:border-gray-800 p-6 rounded-lg">
                  <h3 className="font-bold text-[#2B5797] mb-2">Building with AI Tools</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Leveraging AI tools to move faster, prototype ideas, and ship functional products without overcomplicating the process.
                  </p>
                </div>
                <div className="border border-gray-200 dark:border-gray-800 p-6 rounded-lg">
                  <h3 className="font-bold text-[#2B5797] mb-2">Full-Stack Development</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Building modern web applications with Next.js, React, and Supabase. Clean code, thoughtful design, real impact.
                  </p>
                </div>
                <div className="border border-gray-200 dark:border-gray-800 p-6 rounded-lg">
                  <h3 className="font-bold text-[#2B5797] mb-2">Computer Technician</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Hands-on experience diagnosing and resolving hardware and software issues. Fast problem solver.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">
                Skills
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3">Backend & Databases</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Next.js, Node.js, Supabase, SQL, TypeScript
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3">Frontend</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    React, HTML/CSS, Tailwind CSS, Responsive Design
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3">Tools & Methods</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Agile/Scrum, Git, Vercel, Firebase, Open To Projects
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3">Analysis & Data</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Tableau, Excel, Data Visualization, Requirements Gathering
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">
                Background
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I'm currently exploring opportunities in business analysis and product management where I can leverage my technical skills and analytical mindset. I use AI tools to prototype and ship faster, moving from idea to working product quickly, and have hands-on experience coordinating large-scale events, building technology solutions from the ground up, and working in agile teams.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                When I'm not feeling productive, you'll find me hiking, running, gymming, playing drums, or running D&D campaigns.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">
                Let's Connect
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Interested in working together? Reach out via email or LinkedIn — I'm always open to new opportunities and conversations.
              </p>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
