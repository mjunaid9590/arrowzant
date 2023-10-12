"use client"
import Link from "next/link"
import { usePathname } from 'next/navigation';
import SideNavAuthor from "@/components/SideNavAuthor";
import NavCheck from "@/components/NavCheck";

export default function AuthorLayout({ children }) {
    const currentRoute = usePathname();  
    // Define a function to check if a link is active
    const isActive = (href) => {
        console.log(currentRoute)
      return currentRoute === href ? true : false;
    };
    return (
      <main className="flex flex-row bg-indigo-50 dark:bg-gray-800 h-full w-full items-center justify-between mt-1 p-0 m-0">
        
        <div className="adminMain h-full w-4/5 pb-8 bg-indigo-100">
          {children}
        </div>
      </main>
    );
  }
  
