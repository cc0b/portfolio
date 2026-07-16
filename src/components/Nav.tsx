'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { SERIF, LABEL } from '@/lib/typography'

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [isDark, setIsDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  function toggleTheme() {
    const next = !isDark
    setIsDark(next)
    const root = document.documentElement
    if (next) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const navLinks = LINKS.map((l, i) => {
    const active = pathname === l.href
    return (
      <Link key={l.label} href={l.href} style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 10, color: 'var(--cl-muted)', fontWeight: 300 }}>
          {String(i + 1).padStart(2, '0')}
        </span>
        <span style={{
          fontFamily: SERIF, fontSize: 15,
          color: active ? 'var(--cl-text)' : 'var(--cl-muted)',
          fontWeight: 400, transition: 'color 0.3s',
          borderBottom: active ? '1px solid var(--cl-accent)' : '1px solid transparent',
          paddingBottom: 2,
        }}>
          {l.label}
        </span>
      </Link>
    )
  })

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'var(--cl-bg)',
      display: 'grid', gridTemplateColumns: '1fr auto auto',
      alignItems: 'center', gap: 16,
      padding: '0 56px', height: 76,
      transition: 'background 0.3s',
    }}
    className="nav-outer"
    >
      <Link href="/" style={{ textAlign: 'left' }}>
        <span style={{ fontFamily: SERIF, fontSize: 17, color: 'var(--cl-text)', letterSpacing: '-0.005em' }}>
          Caleb Li
        </span>
      </Link>

      <div className={`nav-links${menuOpen ? ' open' : ''}`}>
        {navLinks}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <span style={{ ...LABEL, color: 'var(--cl-muted)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 5, height: 5, background: 'var(--cl-accent)', borderRadius: '50%', display: 'inline-block' }} />
          Available
        </span>
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: 10 }}
        >
          <span style={{ ...LABEL, color: 'var(--cl-muted)' }}>{isDark ? 'Dark' : 'Light'}</span>
          <span style={{
            position: 'relative', width: 34, height: 18, borderRadius: 999,
            border: '1px solid var(--cl-faint)', background: 'none',
            transition: 'border-color 0.3s', display: 'inline-block', flexShrink: 0,
          }}>
            <span style={{
              position: 'absolute', top: '50%', left: isDark ? 18 : 3,
              transform: 'translateY(-50%)', width: 12, height: 12, borderRadius: '50%',
              background: 'var(--cl-text)', transition: 'left 0.3s cubic-bezier(0.4,0,0.2,1)',
            }} />
          </span>
        </button>

        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          className="nav-hamburger"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: 'var(--cl-text)' }}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </div>
    </nav>
  )
}
