'use client'

import { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'
import { SERIF, LABEL } from '@/lib/typography'

const facts = [
  { k: 'Education', v: 'BCom · Business Analytics & Information Systems' },
  { k: 'University', v: 'The University of Auckland' },
  { k: 'Year', v: 'Second year, 2026' },
  { k: 'Also', v: 'Certificate in Web Development' },
  { k: 'Based', v: 'Auckland, Aotearoa New Zealand' },
]

const stack = ['TypeScript', 'React', 'Next.js', 'Tailwind', 'Supabase', 'Node', 'Postgres', 'SQL', 'Tableau', 'Figma', 'Git']

const off = ['Drumming', 'Guitar', 'Hiking', 'Camping', 'Gym', 'Cooking', 'Reading']

export default function About() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div style={{ paddingTop: 76, minHeight: '100vh' }}>
      <button
        onClick={() => window.scrollBy({ top: window.innerHeight * 0.6, behavior: 'smooth' })}
        style={{
          position: 'fixed', bottom: 40, left: '50%',
          transform: 'translateX(-50%)',
          opacity: visible ? 1 : 0, transition: 'opacity 0.4s ease',
          animation: visible ? 'bounce 1.8s ease-in-out infinite' : 'none',
          background: 'none', border: 'none', cursor: 'pointer', padding: 8,
          zIndex: 50,
        }}
        aria-label="Scroll down"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: 'var(--cl-muted)', display: 'block' }}>
          <path d="M10 3v14M3 10l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className="page-inner">
        <div className="aside-grid" style={{ marginBottom: 120 }}>
          <span className="margin-num" style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 13, color: 'var(--cl-muted)', fontWeight: 300, paddingTop: 12 }}>
            § 03
          </span>

          <div>
            <p style={{ ...LABEL, color: 'var(--cl-muted)', marginBottom: 28 }}>About</p>
            <h1
              style={{
                fontFamily: SERIF,
                fontWeight: 300,
                fontSize: 19,
                letterSpacing: '-0.01em',
                color: 'var(--cl-text)',
                marginBottom: 24,
                lineHeight: 1.7,
                maxWidth: 620,
              }}
            >
              I&apos;m Caleb, a Commerce student at the University of Auckland.
            </h1>
            <p style={{ fontFamily: SERIF, fontSize: 19, lineHeight: 1.7, color: 'var(--cl-text)', fontWeight: 400, maxWidth: 620, marginBottom: 24 }}>
              I&apos;m majoring in Business Analytics &amp; Information Systems, with a Certificate in Web Development on the side.
            </p>
            <p style={{ fontFamily: SERIF, fontSize: 19, lineHeight: 1.7, color: 'var(--cl-text)', fontWeight: 400, maxWidth: 620 }}>
              I build small web tools, play the drums and guitar, and spend most weekends outside the city.
            </p>
          </div>

          <div style={{ paddingTop: 12 }}>
            <img
              src="/caleb.jpg"
              alt="Caleb Li"
              style={{ width: '100%', display: 'block', marginBottom: 24, borderRadius: 3 }}
            />
            <div style={{ borderTop: '1px solid var(--cl-border)', paddingTop: 16 }}>
              <p style={{ ...LABEL, color: 'var(--cl-muted)', marginBottom: 16 }}>Quick facts</p>
              {facts.map((f, i) => (
                <div key={i} style={{ paddingBottom: 12, marginBottom: 12, borderBottom: i < facts.length - 1 ? '1px solid var(--cl-border)' : 'none' }}>
                  <p style={{ ...LABEL, color: 'var(--cl-muted)', fontSize: 10, marginBottom: 4 }}>{f.k}</p>
                  <p style={{ fontFamily: SERIF, fontSize: 13, color: 'var(--cl-text)', lineHeight: 1.5 }}>{f.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="margin-grid" style={{ marginBottom: 100 }}>
          <span className="margin-num" style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 13, color: 'var(--cl-muted)', fontWeight: 300 }}>03</span>
          <div>
            <SectionHeader num="" label="Tools" />
            <div style={{ display: 'flex', flexWrap: 'wrap', columnGap: 36, rowGap: 14 }}>
              {stack.map((s, i) => (
                <span key={s} style={{ fontFamily: SERIF, fontSize: 19, color: 'var(--cl-text)', fontWeight: 400 }}>
                  {s}
                  {i < stack.length - 1 && <span style={{ color: 'var(--cl-muted)' }}>,</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Other interests */}
        <div className="margin-grid" style={{ marginBottom: 100 }}>
          <span className="margin-num" style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 13, color: 'var(--cl-muted)', fontWeight: 300 }}>04</span>
          <div>
            <SectionHeader num="" label="Other interests" />
            <p style={{ fontFamily: SERIF, fontSize: 24, lineHeight: 1.5, color: 'var(--cl-text)', fontWeight: 400, fontStyle: 'italic', maxWidth: 720 }}>
              {off.map((o, i) => (
                <Fragment key={o}>
                  <span style={{ fontStyle: 'normal' }}>{o}</span>
                  {i < off.length - 1 ? <span style={{ color: 'var(--cl-muted)', fontStyle: 'normal' }}>{' · '}</span> : '.'}
                </Fragment>
              ))}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="margin-grid">
          <span className="margin-num" style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 13, color: 'var(--cl-muted)', fontWeight: 300 }}>05</span>
          <div
            style={{
              paddingTop: 32,
              borderTop: '1px solid var(--cl-border)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              flexWrap: 'wrap',
              gap: 24,
            }}
          >
            <p style={{ fontFamily: SERIF, fontSize: 22, color: 'var(--cl-text)', fontWeight: 400, maxWidth: 540 }}>
              Open to internships, freelance, and projects.
            </p>
            <Link
              href="/contact"
              style={{
                fontFamily: SERIF,
                fontStyle: 'italic',
                fontSize: 18,
                color: 'var(--cl-text)',
                borderBottom: '1px solid var(--cl-text)',
                paddingBottom: 4,
              }}
            >
              Get in touch →
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
