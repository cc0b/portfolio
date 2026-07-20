import { SERIF, LABEL } from '@/lib/typography'

export default function SectionHeader({ num, label, labelColor }: { num: string; label: string; labelColor?: string }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '60px 1fr',
        gap: 32,
        paddingBottom: 20,
        borderBottom: '1px solid var(--cl-border)',
        alignItems: 'baseline',
        marginBottom: 48,
      }}
    >
      <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 13, color: 'var(--cl-muted)', fontWeight: 300 }}>
        § {num}
      </span>
      <span style={{ ...LABEL, color: labelColor ?? 'var(--cl-muted)' }}>{label}</span>
    </div>
  )
}
