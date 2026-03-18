import type { Metadata } from 'next'
import { Poppins, Inter, Noto_Sans_Devanagari } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

const devanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '500', '700'],
  variable: '--font-hindi',
})

export const metadata: Metadata = {
  title: 'Reliable Diagnostics Centre | Hanumangarh — 4.9★ Medical Lab',
  description: 'Hanumangarh\'s most trusted diagnostic centre. 4.9★ Google rating. Advanced blood tests, thyroid panels, full body health packages. BHARAT MATA CHOWK, Puran Nagar.',
  keywords: ['diagnostic centre hanumangarh', 'blood test hanumangarh', 'lab hanumangarh', 'reliable diagnostics'],
  icons: {
    icon: '/logo.svg',
  },
  openGraph: {
    title: 'Reliable Diagnostics Centre — Hanumangarh',
    description: 'Advanced diagnostics. 4.9★ rated. Trusted by thousands.',
    locale: 'en_IN',
    type: 'website',
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&amp;display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
      </head>
      <body className={`${poppins.variable} ${inter.variable} ${devanagari.variable} font-body antialiased selection:bg-primary/30 selection:text-primary overflow-x-hidden pb-16 lg:pb-0`}>
        {children}
      </body>
    </html>
  )
}

