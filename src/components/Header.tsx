'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  function toggleTheme() {
    const next = !isDark
    setIsDark(next)
    const root = document.documentElement
    root.classList.add('transitioning')
    if (next) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
    setTimeout(() => root.classList.remove('transitioning'), 300)
  }

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
        <div className="flex-1">
          <Link href="/" className="text-2xl font-bold text-[var(--primary)]">
            Caleb Li
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex gap-8">
          <Link href="/" className="hover:text-[var(--primary)] transition-colors">
            Home
          </Link>
          <Link href="/projects" className="hover:text-[var(--primary)] transition-colors">
            Projects
          </Link>
          <Link href="/about" className="hover:text-[var(--primary)] transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-[var(--primary)] transition-colors">
            Contact
          </Link>
        </div>

        {/* Right side: toggle + mobile menu */}
        <div className="flex-1 flex items-center justify-end gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium text-gray-600 dark:text-gray-400"
          >
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07-6.07-.71.71M6.34 17.66l-.71.71m12.02 0-.71-.71M6.34 6.34l-.71-.71M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

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
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 p-4 sm:hidden">
            <div className="flex flex-col gap-4">
              <Link href="/" className="hover:text-[var(--primary)]" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/projects" className="hover:text-[var(--primary)]" onClick={() => setIsMenuOpen(false)}>
                Projects
              </Link>
              <Link href="/about" className="hover:text-[var(--primary)]" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="hover:text-[var(--primary)]" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
