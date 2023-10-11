
import Link from "next/link"
export default function AdminLayout({ children }) {
    return (
        <main className="flex flex-row bg-indigo-50 dark:bg-gray-800 h-full w-full items-center justify-between mt-1 p-0 m-0">
            <div className="adminNav h-full w-1/5 flex flex-col  space-y-3 pl-5 self-start">
                <aside id="default-sidebar" className="z-40 h-full transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                    <div className="h-full px-3 py-4 overflow-y-auto  ">
                        <ul className="space-y-2 font-medium">
                            <li className="border-b-2">
                                <Link href="/admin" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-200 dark:hover:bg-gray-700 group">
                                    
                                    <span className="ml-3">Dashboard</span>
                                </Link>
                            </li>
                            <li className="border-b-2">
                                <Link href="/admin/novels" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-200 dark:hover:bg-gray-700 group">
                                  
                                    <span className="flex-1 ml-3 whitespace-nowrap">Novels</span>
                                </Link>
                            </li>
                            <li className="border-b-2">
                                <Link href="/admin/authors" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-200 dark:hover:bg-gray-700 group">
                                  
                                    <span className="flex-1 ml-3 whitespace-nowrap">Authors</span>
                                </Link>
                            </li>
                            <li className="border-b-2">
                                <Link href="/admin/landing-page" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-200 dark:hover:bg-gray-700 group">
                                
                                    <span className="flex-1 ml-3 whitespace-nowrap">Landing Page</span>
                                </Link>
                            </li>
                            <li className="border-b-2">
                                <Link href="admin/setting" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-200 dark:hover:bg-gray-700 group">
                                   
                                    <span className="flex-1 ml-3 whitespace-nowrap">Setting</span>
                                </Link>
                            </li>
                            <li className="border-b-2">
                                <Link href="admin/setting" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-indigo-200 dark:hover:bg-gray-700 group">
                                   
                                    <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </aside>
                {/* <div className="navItem text-2xl text-center border-solid border-indigo-500 border-2 rounded-lg">
                    <h1>Dashboard</h1>
                </div>
                <div className="navItem text-2xl text-center border-solid border-indigo-500 border-2 rounded-lg">
                    <h1>Novels</h1>
                </div>
                <div className="navItem text-2xl text-center border-solid border-indigo-500 border-2 rounded-lg">
                    <h1>Authors</h1>
                </div>
                <div className="navItem text-2xl text-center border-solid border-indigo-500 border-2 rounded-lg">
                    <h1>Front Page</h1>
                </div>
                <div className="navItem text-2xl text-center border-solid border-indigo-500 border-2 rounded-lg">
                    <h1>Setting</h1>
                </div> */}
            </div>
            <div className="adminMain h-full w-4/5 pb-8 bg-indigo-100">

                {children}
            </div>
        </main>
    )
}
