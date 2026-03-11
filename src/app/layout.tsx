import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Caleb Li | AI Solutions Engineer & Web Developer',
  description: 'Portfolio of Caleb Li - AI solutions engineering, full-stack web development, and business analytics.',
  keywords: 'Caleb Li, developer, portfolio, Next.js, React, AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-white`}>
        {children}
      </body>
    </html>
  )
}
