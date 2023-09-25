import './globals.css'
import { Inter } from 'next/font/google'
import NavbarUnprotected from '@/components/NavbarUnprotected'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ArrowzanT',
  description: 'Book Reading App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarUnprotected />
        {children}
        <Footer />
      </body>
    </html>
  )
}
