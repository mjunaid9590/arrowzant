"use client"
import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from 'next/link';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import SaveIcon from '@mui/icons-material/Save';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const EditChapter = () => {
    const [novelText, setNovelText] = useState('');
    const [TitleText, setTitleText] = useState('');


    const handleTextChange = (e) => {
        setNovelText(e.target.value);
    };
    const handleTitleChange = (e) => {
        setTitleText(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            // Prevent the default behavior of the Enter key
            e.preventDefault();

            // Insert a newline character (representing a paragraph)
            setNovelText((prevText) => prevText + '\n');
        }
    };
    return (
        <div>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-col w-full mb-8">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                            Novel: <strong>The Lost Treasure</strong>
                        </h1>
                        <h2 className="sm:text-2xl text-xl font-medium title-font mb-2 text-gray-900">
                            Chapter No: <strong>112</strong>
                        </h2>
                    </div>
                    <div>
                        <div className="flex flex-col justify-evenly -m-2 bg-indigo-200 py-5 px-4 rounded-2xl">


                            <div className="p-2">
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="my-auto py-2 text-2xl leading-7 text-gray-600">
                                        Chapter Title
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={TitleText}
                                        onChange={handleTitleChange}
                                        placeholder='Enter Title of Chapter'
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>

                            <div className="p-2 w-full mx-auto">
                                <div className="flex flex-col">
                                    <label htmlFor="description" className="leading-7 my-auto py-2 text-2xl text-gray-600">
                                        Description:
                                    </label>
                                    <textarea
                                        type="text"
                                        id="description"
                                        name="description"
                                        value={novelText}
                                        onChange={handleTextChange}
                                        onKeyPress={handleKeyPress}
                                        rows="30"
                                        placeholder='Start your writing here. . . .'
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className=' flex space-x-5 justify-end mr-10'>
                                <Link href='/author/writing-desk' className='text-lg p-2 mt-4 rounded-lg bg-red-500 hover:bg-red-600 text-white'><DoDisturbIcon /> Cancel  </Link>
                                <Link href='/author/writing-desk' className='text-lg p-2 px-4 mt-4 rounded-lg bg-green-600 hover:bg-green-700 text-white'><SaveIcon /> Save </Link>
                                <Link href='/author/writing-desk' className='text-lg p-2 mt-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white'><NewspaperIcon /> Publish </Link>
                            </div>


                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default EditChapter
