import Footer from '@/components/Footer'
import { SERIF, LABEL } from '@/lib/typography'

const links = [
  { label: 'Email', value: 'caleb.nz.li@gmail.com', href: 'mailto:caleb.nz.li@gmail.com', action: 'email me →' },
  { label: 'LinkedIn', value: 'linkedin.com/in/caleblii', href: 'https://www.linkedin.com/in/caleblii/', action: 'open →' },
  { label: 'Instagram', value: '@caleb.lii', href: 'https://www.instagram.com/caleb.lii/', action: 'open →' },
]

export default function Contact() {
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

            {links.map((l, i) => (
              <div
                key={l.label}
                className="contact-row"
                style={{
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
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 13, color: 'var(--cl-muted)' }}
                >
                  {l.action}
                </a>
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
