import './globals.css'
import { Inter } from 'next/font/google'
import NavbarUnprotected from '@/components/NavbarUnprotected'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import 'styled-jsx/style'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ArrowzanT',
  description: 'Book Reading App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='main-body min-h-screen h-full flex flex-col justify-between relative pb-36 md:pb-20'>
        <NavbarUnprotected />
        {children}

        <Footer />
        
        </div>
      </body>
    </html>
  )
}
