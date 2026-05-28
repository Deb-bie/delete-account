import './globals.css'
import type { Metadata } from 'next'
import { AuthProvider } from '@/components/AuthContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'mySkiin – Your Personal Skincare Companion',
  description: 'Track your skincare routine, discover the right products, and understand your skin with mySkiin.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
