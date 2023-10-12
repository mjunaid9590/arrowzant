"use client"
import Link from "next/link"
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }) {
    const currentRoute = usePathname();  

    // Define a function to check if a link is active and return the appropriate class
   

    return (
        <main className="flex flex-row bg-indigo-50 dark:bg-gray-800 h-full w-full items-center justify-between mt-1 p-0 m-0">
            
            <div className="adminMain h-full w-full pb-8">
                {children}
            </div>
        </main>
    )
}
