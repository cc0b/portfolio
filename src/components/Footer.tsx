import { SERIF } from '@/lib/typography'

export default function Footer() {
  return (
    <footer className="footer-grid" style={{ borderTop: '1px solid var(--cl-border)' }}>
      <span />
      <span style={{ fontFamily: SERIF, fontSize: 13, color: 'var(--cl-muted)', fontStyle: 'italic' }}>
        Ngā mihi nui
      </span>
      <span />
      <span style={{ fontFamily: SERIF, fontSize: 13, color: 'var(--cl-muted)', textAlign: 'right' }}>
        © 2026 · Auckland
      </span>
    </footer>
  )
}
