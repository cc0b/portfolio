import { SERIF } from '@/lib/typography'

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--cl-border)',
        padding: '32px 56px',
        maxWidth: 1180,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '60px 1fr 1fr 1fr',
        gap: 48,
        alignItems: 'baseline',
      }}
    >
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
