'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-gray-900 dark:text-white text-center">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities, collaborations, or just having a chat. Feel free to reach out!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {/* Email */}
              <motion.a
                href="mailto:caleb.nz.li@gmail.com"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="border border-gray-200 dark:border-gray-800 p-8 rounded-lg hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all text-center group"
              >
                <div className="text-4xl mb-4">✉️</div>
                <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-[#2B5797]">
                  Email
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm break-all">
                  caleb.nz.li@gmail.com
                </p>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/caleb-li-0b3084272/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="border border-gray-200 dark:border-gray-800 p-8 rounded-lg hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all text-center group"
              >
                <div className="text-4xl mb-4">🔗</div>
                <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-[#2B5797]">
                  LinkedIn
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Let's connect professionally
                </p>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/caleb.lii/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="border border-gray-200 dark:border-gray-800 p-8 rounded-lg hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all text-center group"
              >
                <div className="text-4xl mb-4">📸</div>
                <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-[#2B5797]">
                  Instagram
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  @caleb.lii
                </p>
              </motion.a>

              {/* Discord */}
              <motion.a
                href="https://discord.com/users/236757241372475393"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="border border-gray-200 dark:border-gray-800 p-8 rounded-lg hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all text-center group"
              >
                <div className="text-4xl mb-4">💬</div>
                <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-[#2B5797]">
                  Discord
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  @ccbs
                </p>
              </motion.a>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
