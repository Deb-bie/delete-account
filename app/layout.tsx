import './globals.css'
import type { Metadata } from 'next'
import { AuthProvider } from '@/components/AuthContext'

export const metadata: Metadata = {
  title: 'Account Management',
  description: 'Manage your account settings',
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
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}