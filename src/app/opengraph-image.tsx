import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Caleb Li'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0e0e0d',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '80px 88px',
        }}
      >
        <div
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 108,
            fontWeight: 300,
            color: '#e8e4d8',
            letterSpacing: '-4px',
            lineHeight: 1,
            marginBottom: 28,
          }}
        >
          Caleb Li
        </div>
        <div
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 18,
            color: 'rgba(232, 228, 216, 0.42)',
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
          }}
        >
          Business Analytics &amp; Information Systems · Auckland
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
