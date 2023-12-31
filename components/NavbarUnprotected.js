"use client"
import Link from 'next/link'
import React from 'react'
import { Fragment } from 'react'

import { useState } from 'react';
// import DropDownSimple from './DropDownSimple';
// import { MenuList, StyledListbox, MenuItem } from '@mui/material';
// import { Menu } from '@headlessui/react';

const Navbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Home'); // Default selected option
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
                    <button
                        type="button"
                        data-collapse-toggle="navbar-search"
                        aria-controls="navbar-search"
                        aria-expanded="false"
                        className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                    >
                        <svg
                            className="w-5 h-5"
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
                        <span className="sr-only">Search</span>
                    </button>
                    <div className="relative hidden md:block">
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
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input
                            type="text"
                            id="search-navbar"
                            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search..."
                        />
                    </div>
                    <button
                        data-collapse-toggle="navbar-search"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search..."
                            />
                        </div>
                        <ul className={`flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ${!isDropdownOpen ? 'hidden md:flex md:flex-row' : ''}`}>
                            <li className=' my-auto'>
                                <a
                                    href="#"
                                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <Link
                                    href="/genre"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Category
                                </Link>
                            </li>
                            <li className=' my-auto'>
                                <a
                                    href="/about-us"
                                    className="aligh-middle block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    About
                                </a>
                            </li>
                            <li className=' my-auto'>
                                <a
                                    href="/contact-us"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </nav>

        // <div className='shadow-md md:sticky top-0 backdrop-blur-lg'>
        //     <header className="text-gray-600 body-font">
        //         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center md:justify-between">
        //             <Link
        //                 href="/"
        //                 className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        //                 <svg
        //                     xmlns="http://www.w3.org/2000/svg"
        //                     fill="none"
        //                     stroke="currentColor"
        //                     strokeLinecap="round"
        //                     strokeLinejoin="round"
        //                     strokeWidth={2}
        //                     className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
        //                     viewBox="0 0 24 24"
        //                 >
        //                     <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        //                 </svg>
        //                 <span className="ml-3 text-xl">ArrowzanT</span>
        //             </Link>
        //             <div className='flex flex-row'>
        //                 <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        //                     <Link href="/about-us" className="mr-5 hover:text-gray-900">About Us</Link>
        //                     <Link href="/contact-us" className="mr-5 hover:text-gray-900">Contact Us</Link>
        //                 </nav>
        //                 <button className="inline-flex my-auto items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base ">
        //                     Login
        //                     <svg
        //                         fill="none"
        //                         stroke="currentColor"
        //                         strokeLinecap="round"
        //                         strokeLinejoin="round"
        //                         strokeWidth={2}
        //                         className="w-4 h-4 ml-1"
        //                         viewBox="0 0 24 24"
        //                     >
        //                         <path d="M5 12h14M12 5l7 7-7 7" />
        //                     </svg>
        //                 </button>
        //             </div>
        //         </div>
        //     </header>

        // </div>
    )
}

export default Navbar
