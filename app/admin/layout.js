"use client"
import Link from "next/link"
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }) {
    const currentRoute = usePathname();  

    // Define a function to check if a link is active and return the appropriate class
    const isActiveClass = (href) => {
        return currentRoute === href ? 'bg-indigo-300' : '';
    };

    return (
        <main className="flex flex-row bg-indigo-50 dark:bg-gray-800 h-full w-full items-center justify-between mt-1 p-0 m-0">
            <div className="adminNav h-full w-1/5 flex flex-col  space-y-3 pl-5 self-start shadow-2xl">
                <aside id="default-sidebar" className="h-full transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                    <div className="h-full px-3 py-4 overflow-y-auto  ">
                        <ul className="space-y-2 font-medium">
                            <li className="border-b-2">
                                <Link href="/admin" className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-200 dark:hover:bg-gray-700 group ${isActiveClass('/admin')}`}>
                                    <span className="ml-3">Dashboard</span>
                                </Link>
                            </li>
                            <li className="border-b-2">
                                <Link href="/admin/novels" className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-200 dark:hover:bg-gray-700 group ${isActiveClass('/admin/novels')}`}>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Novels</span>
                                </Link>
                            </li>
                            <li className="border-b-2">
                                <Link href="/admin/authors" className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover-bg-indigo-200 dark:hover-bg-gray-700 group ${isActiveClass('/admin/authors')}`}>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Authors</span>
                                </Link>
                            </li>
                            <li className="border-b-2">
                                <Link href="/admin/landing-page" className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-200 dark:hover:bg-gray-700 group ${isActiveClass('/admin/landing-page')}`}>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Landing Page</span>
                                </Link>
                            </li>
                            <li className="border-b-2">
                                <Link href="/admin/setting" className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-200 dark:hover-bg-gray-700 group ${isActiveClass('/admin/setting')}`}>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Setting</span>
                                </Link>
                            </li>
                            <li className="border-b-2">
                                <Link href="#" className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-200 dark:hover-bg-gray-700 group ${isActiveClass('/')}`}>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
            <div className="adminMain h-full w-4/5 pb-8 bg-indigo-100">
                {children}
            </div>
        </main>
    )
}
