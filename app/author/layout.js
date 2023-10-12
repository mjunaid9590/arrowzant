"use client"
import Link from "next/link"
import { usePathname } from 'next/navigation';

export default function AuthorLayout({ children }) {
    const currentRoute = usePathname();  
    // Define a function to check if a link is active
    const isActive = (href) => {
        console.log(currentRoute)
      return currentRoute === href ? true : false;
    };
    return (
      <main className="flex flex-row bg-indigo-50 dark:bg-gray-800 h-full w-full items-center justify-between mt-1 p-0 m-0">
        <div className="adminNav h-full w-1/5 flex flex-col space-y-3 pl-5 self-start shadow-2xl">
          <aside id="default-sidebar" className="h-full transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto">
              <ul className="space-y-2 font-medium">
                <li className="border-b-2">
                  <Link href="/author" className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-200 dark:hover-bg-gray-700 group ${isActive('/author')?'bg-indigo-300':''}`}>
                    <span className="ml-3">Dashboard</span>
                  </Link>
                </li>
                <li className="border-b-2">
                  <Link href="/author/novels" className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-200 dark:hover:bg-gray-700 group ${isActive('/author/novels')?'bg-indigo-300':''}`}>
                    <span className="flex-1 ml-3 whitespace-nowrap">My Novels</span>
                  </Link>
                </li>
                <li className="border-b-2">
                  <Link href="/author/writing-desk" className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-200 dark:hover:bg-gray-700 group ${isActive('/author/writing-desk')?'bg-indigo-300':''}`}>
                    <span className="flex-1 ml-3 whitespace-nowrap">Writing Desk</span>
                  </Link>
                </li>
                <li className="border-b-2">
                  <Link href="/author/setting" className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-200 dark:hover-bg-gray-700 group ${isActive('/author/setting')?'bg-indigo-300':''}`}>
                    <span className="flex-1 ml-3 whitespace-nowrap">Setting</span>
                  </Link>
                </li>
                <li className="border-b-2">
                  <Link href="#" className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-200 dark:hover-bg-gray-700 group `}>
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
    );
  }
  
