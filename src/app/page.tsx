'use client'

import Link from 'next/link'
import { useState } from 'react'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'
import { SERIF, SANS } from '@/lib/typography'

const projects = [
  { id: 1, name: 'Good Study', tag: 'Note-taking, real-time sync', year: '2025' },
  { id: 2, name: 'Form', tag: 'AI personal trainer, computer vision', year: '2025' },
  { id: 3, name: 'Velocity Bingo', tag: 'Event networking game', year: '2025' },
  { id: 4, name: 'MANFRD', tag: 'Personal site for a friend', year: '2024' },
]

export default function Home() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div style={{ paddingTop: 76 }}>
      <section style={{ minHeight: 'calc(100vh - 76px)', padding: '140px 56px 80px', maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 220px', gap: 48, alignItems: 'start' }}>
          <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 13, color: 'var(--cl-muted)', fontWeight: 300, paddingTop: 12 }}>
            § 00
          </span>

          <div>
            <h1
              style={{
                fontFamily: SERIF,
                fontWeight: 300,
                fontSize: 'clamp(56px, 7.4vw, 108px)',
                lineHeight: 1.02,
                letterSpacing: '-0.025em',
                color: 'var(--cl-text)',
                marginBottom: 40,
              }}
            >
              Caleb Li
            </h1>
            <p
              style={{
                fontFamily: SERIF,
                fontSize: 22,
                fontWeight: 400,
                lineHeight: 1.55,
                color: 'var(--cl-text)',
                maxWidth: 560,
                marginBottom: 56,
              }}
            >
              Business Analytics & Information Systems at the University of Auckland
            </p>
            <div style={{ display: 'flex', gap: 28, alignItems: 'baseline' }}>
              <Link
                href="/projects"
                style={{
                  fontFamily: SERIF,
                  fontStyle: 'italic',
                  fontSize: 17,
                  color: 'var(--cl-text)',
                  borderBottom: '1px solid var(--cl-text)',
                  paddingBottom: 4,
                }}
              >
                See work
              </Link>
              <Link href="/contact" style={{ fontFamily: SANS, fontSize: 13, color: 'var(--cl-muted)' }}>
                Get in touch
              </Link>
            </div>
          </div>

          <div style={{ paddingTop: 12 }}>
            <div style={{ borderTop: '1px solid var(--cl-border)', paddingTop: 16 }}>
              <p style={{ fontFamily: SANS, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 400, color: 'var(--cl-muted)', marginBottom: 10 }}>
                Currently
              </p>
              <p style={{ fontFamily: SERIF, fontSize: 14, lineHeight: 1.6, color: 'var(--cl-text)', fontWeight: 400 }}>
                Second-year Commerce student. Seeking internships and freelance opportunities.
              </p>
              <p style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 13, lineHeight: 1.6, color: 'var(--cl-muted)', marginTop: 16, fontWeight: 300 }}>
                Last updated <span style={{ fontStyle: 'normal' }}>May 2026</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 56px 160px', maxWidth: 1180, margin: '0 auto' }}>
        <SectionHeader num="01" label="Selected Work · 2024 – 2025" />

        {projects.map((p, i) => (
          <Link
            key={p.id}
            href="/projects"
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              display: 'grid',
              gridTemplateColumns: '60px 1fr 1fr 100px',
              gap: 32,
              alignItems: 'baseline',
              padding: '32px 0',
              borderBottom: '1px solid var(--cl-border)',
              cursor: 'pointer',
              opacity: hovered !== null && hovered !== p.id ? 0.4 : 1,
              transition: 'opacity 0.5s',
            }}
          >
            <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 13, color: 'var(--cl-muted)', fontWeight: 300 }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <div
              style={{
                fontFamily: SERIF,
                fontSize: 28,
                color: 'var(--cl-text)',
                fontWeight: 400,
                letterSpacing: '-0.01em',
                transform: hovered === p.id ? 'translateX(8px)' : 'none',
                transition: 'transform 0.4s ease',
              }}
            >
              {p.name}
            </div>
            <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 15, color: 'var(--cl-muted)', fontWeight: 400 }}>
              {p.tag}
            </div>
            <span style={{ fontFamily: SERIF, fontSize: 14, color: 'var(--cl-muted)', textAlign: 'right' }}>{p.year}</span>
          </Link>
        ))}
      </section>

      <Footer />
    </div>
  )
}
