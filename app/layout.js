import './globals.css'
import { Inter } from 'next/font/google'
// import NavbarUnprotected from '@/components/NavbarUnprotected'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
// import NavCheck from '@/components/NavCheck'
import NavbarAdmin from '@/components/NavbarAdmin'
import NavbarAuthor from '@/components/NavbarAuthor'
import RenderNavbar from '@/components/RenderNavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ArrowzanT',
  description: 'Book Reading App',
}

export default function RootLayout({ children }) {
  

  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col relative pb-36 md:pb-20`}>
        <div className="flex-grow h-full">
          {/* <NavbarUnprotected /> */}
          {/* {getNavbarComponent()} */}
          {/* <Navbar /> */}
          <RenderNavbar />
          {children}
        </div>

        <Footer />
        
      </body>
    </html>
  )
}
