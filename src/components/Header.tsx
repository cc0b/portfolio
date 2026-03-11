'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-[#2B5797]">
          Caleb Li
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden sm:flex gap-8">
          <Link href="/" className="hover:text-[#2B5797] transition-colors">
            Home
          </Link>
          <Link href="/projects" className="hover:text-[#2B5797] transition-colors">
            Projects
          </Link>
          <Link href="/about" className="hover:text-[#2B5797] transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-[#2B5797] transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 p-4 sm:hidden">
            <div className="flex flex-col gap-4">
              <Link href="/" className="hover:text-[#2B5797]" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/projects" className="hover:text-[#2B5797]" onClick={() => setIsMenuOpen(false)}>
                Projects
              </Link>
              <Link href="/about" className="hover:text-[#2B5797]" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="hover:text-[#2B5797]" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
