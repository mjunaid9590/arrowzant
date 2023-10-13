"use client"
import Link from 'next/link'
import React from 'react'
import { Fragment } from 'react'
import { usePathname } from 'next/navigation';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';


const NavbarAdmin = () => {
    const currentRoute = usePathname();
    // Define a function to check if a link is active
    const isActiveClass = (href) => {
        return currentRoute === href ? 'bg-indigo-300 dark:bg-indigo-800' : '';
    };
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Home'); // Default selected option
    console.log("Running bhai running")
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-xl overflow-visible">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center">
                    <img
                        src="/logo512.png"
                        className="h-8 mr-3"
                        alt="arrowzant Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        ArrozanT
                    </span>
                </Link>
                <div className="flex md:order-2">
                    <div
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-md md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                        <Link href="#" className={`flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-indigo-200 dark:hover-bg-gray-700 group `}>
                            <span className="flex items-center">
                                <LogoutIcon className="w-5 h-5 mr-2" />
                            </span>
                        </Link>
                    </div>
                    <button
                        data-collapse-toggle="navbar-search"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-md md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-search"
                        aria-expanded="false"
                        onClick={() => setDropdownOpen(!isDropdownOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div className="relative hidden md:block">
                        <Link href="#" className={`flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-indigo-200 dark:hover-bg-gray-700 group `}>
                            <span className="flex items-center">
                                <LogoutIcon className="w-5 h-5 mr-2" /> Logout
                            </span>
                        </Link>
                    </div>

                </div>
                {
                    <div className={`items-center justify-between ${((isDropdownOpen) || (isSearchOpen)) ? '' : 'hidden'} w-full md:flex md:w-auto md:order-1" id="navbar-search`}>
                        <div className={`relative mt-3 md:hidden ${!isSearchOpen ? 'hidden' : ''}`}>
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="search-navbar"
                                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search..."
                            />
                        </div>
                        <ul className={`flex flex-col text-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-md bg-gray-50 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ${!isDropdownOpen ? 'hidden md:flex md:flex-row' : ''}`}>
                            <li className='my-auto px-1 border-r border-gray-300'>
                                <Link href="/admin" onClick={()=>{setDropdownOpen(!isDropdownOpen)}} className={`flex text-center items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-indigo-200 dark:hover:bg-gray-700 group ${isActiveClass('/admin')}`}>
                                    <span className="">Dashboard</span>
                                </Link>
                            </li>
                            <li className='my-auto md:px-1 md:border-r md:border-gray-300'>
                                <Link href="/admin/novels" onClick={()=>{setDropdownOpen(!isDropdownOpen)}} className={`flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-indigo-200 dark:hover:bg-gray-700 group ${isActiveClass('/admin/novels')}`}>
                                    <span className="">Novels</span>
                                </Link>
                            </li>
                            <li className='my-auto md:px-1 md:border-r md:border-gray-300'>
                                <Link href="/admin/authors"  onClick={()=>{setDropdownOpen(!isDropdownOpen)}} className={`flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-indigo-200 dark:bg-gray-700 group ${isActiveClass('/admin/authors')}`}>
                                    <span className="">Authors</span>
                                </Link>
                            </li>
                            <li className='my-auto md:px-1 md:border-r md:border-gray-300 border-r border-gray-300 ml-0'>
                                <Link href="/admin/landing-page" onClick={()=>{setDropdownOpen(!isDropdownOpen)}} className={`flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-indigo-200 dark:hover:bg-gray-700 group ${isActiveClass('/admin/landing-page')}`}>
                                    <span className="">Landing Page</span>
                                </Link>
                            </li>
                            <li className='my-auto md:px-1 '>
                                <Link href="/admin/setting" onClick={()=>{setDropdownOpen(!isDropdownOpen)}} className={`flex items-center p-2 text-gray-900 rounded-md dark:text-white hover:bg-indigo-200 dark:hover-bg-gray-700 group ${isActiveClass('/admin/setting')}`}>
                                    <span className="">Setting</span>
                                </Link>
                            </li>

                        </ul>

                    </div>
                }
            </div>
        </nav>

    )
}

export default NavbarAdmin
