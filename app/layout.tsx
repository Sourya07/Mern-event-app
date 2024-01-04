import type { Metadata } from 'next'
import { Poppins,  } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { UserButton } from "@clerk/nextjs";

import './globals.css'
const poppins = Poppins({ subsets: ['latin'],
weight:['400','500','600','700'],
variable: '--font-poopins',
 })

export const metadata: Metadata = {
  title: 'Stringx',
  description: 'A Decentralised Notes ',
  icons:{
    icon:''
  }

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
     
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
    
    </ClerkProvider>

  )
}
