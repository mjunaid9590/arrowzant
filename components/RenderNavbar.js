"use client"
import React from 'react'
import Navbar from '@/components/Navbar'
import NavbarAdmin from '@/components/NavbarAdmin'
import NavbarAuthor from '@/components/NavbarAuthor'

import { usePathname } from 'next/navigation';

const RenderNavbar = () => {
    const getNavbarComponent = () => {
        const pathname = usePathname();
    
        if (pathname.startsWith('/admin')) {
          return <NavbarAdmin />;
        } else if (pathname.startsWith('/author')) {
          return <NavbarAuthor />;
        } else {
          return <Navbar />;
        }
      };
  return getNavbarComponent()
}

export default RenderNavbar
