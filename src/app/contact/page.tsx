'use client'

import { useState } from 'react'
import Footer from '@/components/Footer'
import { SERIF, LABEL } from '@/lib/typography'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  function copy() {
    navigator.clipboard.writeText('caleb.nz.li@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div style={{ paddingTop: 76, minHeight: '100vh' }}>
      <div className="page-inner">
        <div className="aside-grid">
          <span className="margin-num" style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 13, color: 'var(--cl-muted)', fontWeight: 300, paddingTop: 12 }}>
            § 04
          </span>

          <div>
            <p style={{ ...LABEL, color: 'var(--cl-muted)', marginBottom: 28 }}>Contact</p>
            <h1
              style={{
                fontFamily: SERIF,
                fontWeight: 300,
                fontSize: 'clamp(36px, 5.5vw, 64px)',
                letterSpacing: '-0.022em',
                color: 'var(--cl-text)',
                marginBottom: 64,
                lineHeight: 1.05,
                maxWidth: 720,
              }}
            >
              Get in touch.
            </h1>

            {/* Email row */}
            <div
              className="contact-row"
              style={{ padding: '24px 0', borderTop: '1px solid var(--cl-border)', borderBottom: '1px solid var(--cl-border)' }}
            >
              <span style={{ ...LABEL, color: 'var(--cl-muted)' }}>Email</span>
              <button
                onClick={copy}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left',
                  fontFamily: SERIF, fontSize: 22, color: 'var(--cl-text)', fontWeight: 400, letterSpacing: '-0.005em',
                }}
              >
                {copied ? 'copied!' : 'caleb.nz.li@gmail.com'}
              </button>
              <a
                href="mailto:caleb.nz.li@gmail.com"
                style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 13, color: 'var(--cl-muted)' }}
              >
                email me →
              </a>
            </div>

            {/* LinkedIn row */}
            <div
              className="contact-row"
              style={{ padding: '24px 0', borderBottom: '1px solid var(--cl-border)' }}
            >
              <span style={{ ...LABEL, color: 'var(--cl-muted)' }}>LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/caleblii/"
                target="_blank"
                rel="noreferrer"
                style={{ fontFamily: SERIF, fontSize: 22, color: 'var(--cl-text)', fontWeight: 400, letterSpacing: '-0.005em' }}
              >
                linkedin.com/in/caleblii
              </a>
              <a
                href="https://www.linkedin.com/in/caleblii/"
                target="_blank"
                rel="noreferrer"
                style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 13, color: 'var(--cl-muted)' }}
              >
                open →
              </a>
            </div>

            {/* Instagram row */}
            <div
              className="contact-row"
              style={{ padding: '24px 0', borderBottom: '1px solid var(--cl-border)' }}
            >
              <span style={{ ...LABEL, color: 'var(--cl-muted)' }}>Instagram</span>
              <a
                href="https://www.instagram.com/caleb.lii/"
                target="_blank"
                rel="noreferrer"
                style={{ fontFamily: SERIF, fontSize: 22, color: 'var(--cl-text)', fontWeight: 400, letterSpacing: '-0.005em' }}
              >
                @caleb.lii
              </a>
              <a
                href="https://www.instagram.com/caleb.lii/"
                target="_blank"
                rel="noreferrer"
                style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 13, color: 'var(--cl-muted)' }}
              >
                open →
              </a>
            </div>
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
