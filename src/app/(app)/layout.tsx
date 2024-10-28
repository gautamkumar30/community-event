import './globals.css'

import { Toaster } from '@/components/ui/sonner'
import { Bricolage_Grotesque } from 'next/font/google'
import { cn } from '@/lib/utils'

const bricolage = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-bricolage' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(bricolage.variable, 'font-bricolage')}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
