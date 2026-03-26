'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Business Analytics <span className="text-[#2B5797]">&</span> Technology Student
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Studying how businesses use data. Building websites for the ones that need them.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/projects"
                className="px-8 py-3 bg-[#2B5797] text-white rounded-lg hover:bg-[#1e4073] transition-colors font-semibold"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-[#2B5797] text-[#2B5797] rounded-lg hover:bg-[#f0f4f8] transition-colors font-semibold dark:hover:bg-gray-900"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>

          {/* Featured Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 sm:gap-8 mt-20 pt-20 border-t border-gray-200 dark:border-gray-800 max-w-sm mx-auto"
          >
            <div className="text-center">
              <p className="text-3xl font-bold text-[#2B5797]">BA&IS</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Business Analytics & Information Systems</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Penultimate Year</p>
            </div>
<div className="text-center">
              <p className="text-3xl font-bold text-[#2B5797]">Open To Projects</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Available for new opportunities</p>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
