import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Okwor Chukwuemeka Nnajiofor | Flutter Developer & Full-Stack Engineer',
  description: 'Technology enthusiast with 3+ years of experience designing, building, and maintaining user-focused web and mobile applications. Expert in Flutter, React, and modern web technologies.',
  keywords: 'Flutter Developer, Mobile Developer, Full-Stack Developer, React, TypeScript, Web Development',
  authors: [{ name: 'Okwor Chukwuemeka Nnajiofor' }],
  openGraph: {
    title: 'Okwor Chukwuemeka Nnajiofor | Portfolio',
    description: 'Flutter Developer & Full-Stack Engineer',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

