'use client'

import { useState } from 'react'
import Footer from '@/components/Footer'
import { SERIF, LABEL } from '@/lib/typography'

const links = [
  { label: 'Email', value: 'caleb.nz.li@gmail.com', href: 'mailto:caleb.nz.li@gmail.com', copyable: true },
  { label: 'LinkedIn', value: 'linkedin.com/in/caleblii', href: 'https://www.linkedin.com/in/caleblii/', copyable: false },
  { label: 'Instagram', value: '@caleb.lii', href: 'https://www.instagram.com/caleb.lii/', copyable: false },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  function copy() {
    navigator.clipboard.writeText('caleb.nz.li@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div style={{ paddingTop: 76, minHeight: '100vh' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '120px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 280px', gap: 48, alignItems: 'start' }}>
          <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 13, color: 'var(--cl-muted)', fontWeight: 300, paddingTop: 12 }}>
            § 04
          </span>

          <div>
            <p style={{ ...LABEL, color: 'var(--cl-muted)', marginBottom: 28 }}>Contact</p>
            <h1
              style={{
                fontFamily: SERIF,
                fontWeight: 300,
                fontSize: 64,
                letterSpacing: '-0.022em',
                color: 'var(--cl-text)',
                marginBottom: 64,
                lineHeight: 1.05,
                maxWidth: 720,
              }}
            >
              Get in touch.
            </h1>

            {links.map((l, i) => (
              <div
                key={l.label}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr auto',
                  gap: 32,
                  alignItems: 'baseline',
                  padding: '24px 0',
                  borderTop: i === 0 ? '1px solid var(--cl-border)' : 'none',
                  borderBottom: '1px solid var(--cl-border)',
                }}
              >
                <span style={{ ...LABEL, color: 'var(--cl-muted)' }}>{l.label}</span>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontFamily: SERIF, fontSize: 22, color: 'var(--cl-text)', fontWeight: 400, letterSpacing: '-0.005em' }}
                >
                  {l.value}
                </a>
                {l.copyable ? (
                  <button
                    onClick={copy}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      fontFamily: SERIF,
                      fontStyle: 'italic',
                      fontSize: 13,
                      color: copied ? 'var(--cl-text)' : 'var(--cl-muted)',
                      transition: 'color 0.2s',
                    }}
                  >
                    {copied ? 'copied' : 'copy'}
                  </button>
                ) : (
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 13, color: 'var(--cl-muted)' }}
                  >
                    open →
                  </a>
                )}
              </div>
            ))}
          </div>

          <div style={{ paddingTop: 12 }}>
            <div style={{ borderTop: '1px solid var(--cl-border)', paddingTop: 16 }}>
              <p style={{ ...LABEL, color: 'var(--cl-muted)', marginBottom: 10 }}>Reply time</p>
              <p style={{ fontFamily: SERIF, fontSize: 14, lineHeight: 1.6, color: 'var(--cl-text)' }}>Usually within a day or two.</p>
              <p style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 13, lineHeight: 1.6, color: 'var(--cl-muted)', marginTop: 16, fontWeight: 300 }}>
                Auckland time, NZST (UTC+12).
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
