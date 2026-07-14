'use client'

import { useState } from 'react'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'
import { SERIF, LABEL } from '@/lib/typography'

const projects = [
  {
    id: 1,
    name: 'Good Study',
    tag: 'Note-taking, real-time sync',
    year: '2025',
    stack: ['Next.js', 'React', 'Supabase', 'TypeScript'],
    role: 'Designed & built end-to-end',
    desc: 'A full-stack note app with real-time sync, auth, and a public demo. Built because my notes were scattered across five apps and I wanted one place to put them.',
    link: 'https://goodgoodstudy.vercel.app/demo',
  },
  {
    id: 2,
    name: 'Form',
    tag: 'AI personal trainer, computer vision',
    year: '2025',
    stack: ['Python', 'MediaPipe'],
    role: 'Lead developer, team of three',
    desc: "Proof of concept for an AI personal trainer — uses MediaPipe to analyse squat form live via webcam, counting reps and flagging good and bad technique. The broader vision: train models on labelled form videos across sports to make coaching accessible and injury prevention more affordable than a human trainer.",
    link: 'https://formchecker-demo.vercel.app/',
  },
  {
    id: 3,
    name: 'Velocity Bingo',
    tag: 'Event networking game',
    year: '2025',
    stack: ['HTML', 'CSS', 'JavaScript'],
    role: 'Solo build over a weekend',
    desc: "An interactive networking bingo game for Velocity's 200-person innovation event. 500+ page visits, no backend, no dependencies — a small thing that just worked.",
    link: 'https://velocity-bingo.vercel.app',
  },
  {
    id: 4,
    name: 'MANFRD',
    tag: 'Personal site for a friend',
    year: '2024',
    stack: ['Next.js', 'React', 'Tailwind'],
    role: 'Visual design + development',
    desc: "A portfolio website for a friend's personal brand. Clean typography, fast performance, considered details.",
    link: 'https://manfrd.vercel.app',
  },
]

export default function Work() {
  const [active, setActive] = useState(1)
  const current = projects.find((p) => p.id === active)!

  return (
    <div style={{ paddingTop: 76, minHeight: '100vh' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '120px 56px' }}>
        <SectionHeader num="01" label="Work · An index" />

        <div style={{ display: 'grid', gridTemplateColumns: '60px 240px 1fr', gap: 48, alignItems: 'start' }}>
          <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 13, color: 'var(--cl-muted)', fontWeight: 300, paddingTop: 8 }}>
            §
          </span>

          <div style={{ position: 'sticky', top: 110 }}>
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                style={{
                  display: 'block',
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: '14px 0',
                  borderTop: i === 0 ? '1px solid var(--cl-border)' : 'none',
                  borderBottom: '1px solid var(--cl-border)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                  <span
                    style={{
                      fontFamily: SERIF,
                      fontStyle: 'italic',
                      fontSize: 12,
                      color: active === p.id ? 'var(--cl-text)' : 'var(--cl-muted)',
                      fontWeight: 300,
                      width: 18,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    style={{
                      fontFamily: SERIF,
                      fontSize: 17,
                      color: active === p.id ? 'var(--cl-text)' : 'var(--cl-muted)',
                      fontWeight: 400,
                      transition: 'color 0.3s',
                      letterSpacing: '-0.005em',
                    }}
                  >
                    {p.name}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div key={current.id} style={{ animation: 'fadeIn 0.6s ease' }}>
            <p style={{ ...LABEL, color: 'var(--cl-muted)', marginBottom: 16 }}>{current.tag}</p>
            <h2
              style={{
                fontFamily: SERIF,
                fontWeight: 400,
                fontSize: 52,
                letterSpacing: '-0.02em',
                color: 'var(--cl-text)',
                marginBottom: 28,
                lineHeight: 1.05,
              }}
            >
              {current.name}
            </h2>
            <p
              style={{
                fontFamily: SERIF,
                fontSize: 19,
                lineHeight: 1.7,
                color: 'var(--cl-text)',
                fontWeight: 400,
                marginBottom: 48,
                maxWidth: 580,
              }}
            >
              {current.desc}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, paddingTop: 32, borderTop: '1px solid var(--cl-border)' }}>
              <div>
                <p style={{ ...LABEL, color: 'var(--cl-muted)', marginBottom: 10 }}>Year</p>
                <p style={{ fontFamily: SERIF, fontSize: 16, color: 'var(--cl-text)' }}>{current.year}</p>
              </div>
              <div>
                <p style={{ ...LABEL, color: 'var(--cl-muted)', marginBottom: 10 }}>Role</p>
                <p style={{ fontFamily: SERIF, fontSize: 16, color: 'var(--cl-text)', fontStyle: 'italic', fontWeight: 400 }}>{current.role}</p>
              </div>
              <div>
                <p style={{ ...LABEL, color: 'var(--cl-muted)', marginBottom: 10 }}>Stack</p>
                <p style={{ fontFamily: SERIF, fontSize: 16, color: 'var(--cl-text)' }}>{current.stack.join(', ')}</p>
              </div>
            </div>

            {current.link && (
              <div style={{ marginTop: 56 }}>
                <a
                  href={current.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontFamily: SERIF,
                    fontStyle: 'italic',
                    fontSize: 17,
                    color: 'var(--cl-text)',
                    borderBottom: '1px solid var(--cl-text)',
                    paddingBottom: 4,
                  }}
                >
                  Visit live site →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
