import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Caleb Li',
  description: 'Portfolio of Caleb Li - Business Analytics & Information Systems student.',
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
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              var saved = localStorage.getItem('theme');
              if (saved === 'dark') {
                document.documentElement.classList.add('dark');
              } else if (saved === 'light') {
                document.documentElement.classList.remove('dark');
              } else {
                var hour = new Date().getHours();
                if (hour >= 18 || hour < 6) {
                  document.documentElement.classList.add('dark');
                }
              }
            } catch(e) {}
          })();
        `}} />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
