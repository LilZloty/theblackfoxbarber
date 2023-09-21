import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Black Fox Barber',
  description: 'The Black Fox Barber, C. Aquiles Serdán 495 A, San Juan de Dios, 44380 Guadalajara, Jal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav>
        <link href="/pages/about"></link>
      </nav>
      {children}
      </body>
    </html>
  )
}
