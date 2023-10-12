"use client"
import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

const AuthorDetail = () => {
    const [isEditing, setIsEditing] = useState(false)
    const authorsNovels = [
        {
            name: "The Adventure of Mystery Island",
            chapters: 5,
            published: "published",
            status: 'ongoing'
        },
        {
            name: "Secrets of the Lost Kingdom",
            chapters: 10,
            published: "published",
            status: 'ongoing'
        },
        {
            name: "The Enchanted Forest Chronicles",
            chapters: 7,
            published: "published",
            status: 'completed'
        },
        {
            name: "The Hidden Treasure Hunt",
            chapters: 3,
            published: "unpublished",
            status: 'completed'
        },
        {
            name: "Whispers in the Dark",
            chapters: 2,
            published: "unpublished",
            status: 'completed'
        },
        {
            name: "Quest for the Crystal Skull",
            chapters: 8,
            published: "published",
            status: 'completed'
        },
        {
            name: "The Time Traveler's Dilemma",
            chapters: 12,
            published: "published",
            status: 'ongoing'
        },
        {
            name: "The Haunted Mansion",
            chapters: 4,
            published: "unpublished",
            status: 'completed'
        },
        {
            name: "Lost in the Amazon",
            chapters: 6,
            published: "unpublished",
            status: 'ongoing'
        },
        {
            name: "The Magical Ring of Destiny",
            chapters: 9,
            published: "published",
            status: 'completed'
        },
    ];


    return (
        <div className='container p-5'>
            <div>
                <div className='flex flex-row justify-between'>
                    <h1 className={`${isEditing ? 'hidden' : ''} text-4xl pb-1 font-bold`}>John Doe</h1>
                    <input type="text" className={`${!isEditing ? 'hidden' : ''} bg-indigo-200 border border-gray-400 rounded-lg text-3xl px-2`} value="John Doe" />
                    <button
                        onClick={(e) => { setIsEditing(!isEditing) }}
                        className={`${isEditing ? 'hidden' : ''} text-end ml-10 text-xl p-1 px-5 rounded-lg mb-3 mr-3 bg-blue-500 text-white`}
                    >
                        Edit
                        <EditIcon />

                    </button>
                    <button
                        onClick={(e) => { setIsEditing(!isEditing) }}
                            className={`${!isEditing ? 'hidden' : ''} text-end ml-10 text-xl p-1 px-5 rounded-lg mb-3 mr-3 bg-green-500 text-white`}
                    >
                        Save
                        <SaveIcon />

                    </button>
                    
                </div>
                <p className={`${isEditing ? 'hidden' : ''} text-justify `} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis amet provident doloribus? Maxime, fuga nostrum suscipit repellendus odit placeat voluptate hic explicabo illum aut dolor odio quibusdam? Culpa quibusdam recusandae amet libero ducimus unde quasi autem temporibus corporis molestiae reprehenderit eveniet explicabo ipsam ipsum itaque fugit optio vitae quam, ex cum eum! Aperiam non debitis libero officiis, doloribus pariatur nihil maxime, explicabo nulla dolorem facilis aspernatur dicta! A cum explicabo vel quis architecto nam beatae. Sed officia deleniti laborum, dolorem rem nemo! Quod distinctio labore laborum laboriosam dicta? Architecto ratione voluptatem in inventore quas porro distinctio praesentium similique voluptatibus officia?</p>
                <textarea type="textaria" rows="8"  className={`${!isEditing ? 'hidden' : ''} w-full mt-4 bg-indigo-200 text-lg border border-gray-400 rounded-lg text-3xl px-2`} value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis amet provident doloribus? Maxime, fuga nostrum suscipit repellendus odit placeat voluptate hic explicabo illum aut dolor odio quibusdam? Culpa quibusdam recusandae amet libero ducimus unde quasi autem temporibus corporis molestiae reprehenderit eveniet explicabo ipsam ipsum itaque fugit optio vitae quam, ex cum eum! Aperiam non debitis libero officiis, doloribus pariatur nihil maxime, explicabo nulla dolorem facilis aspernatur dicta! A cum explicabo vel quis architecto nam beatae. Sed officia deleniti laborum, dolorem rem nemo! Quod distinctio labore laborum laboriosam dicta? Architecto ratione voluptatem in inventore quas porro distinctio praesentium similique voluptatibus official" />

            </div>
            <h2 className='text-2xl py-4'>Total Chapters: 10 (completed: 6, ongoing: 4)</h2>
            <div className="container px-4">

                <table className="divide-y divide-gray-200 mx-auto mt-3 w-full">
                    <thead>
                        <tr>
                            <th className="px-3 py-3 bg-indigo-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Novel
                            </th>
                            <th className="px-3 py-3 bg-indigo-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                No of Chapters
                            </th>
                            <th className="px-3 py-3 bg-indigo-200 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-3 py-3 bg-indigo-200"></th>
                            <th className="px-3 py-3 bg-indigo-200"></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 bg-indigo-50">
                        {authorsNovels.map((novel, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-no-wrapn bg-indigo-100">
                                    {novel.name}
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrapn bg-indigo-100">
                                    {novel.chapters}
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrapn bg-indigo-100">
                                    {novel.status}
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap text-right bg-indigo-100">
                                    <button
                                        // onClick={() => handleEditClick(author)}
                                        className={`text-white p-2 ${novel.published == 'published' ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}  rounded-lg cursor-pointer`}
                                    >
                                        {(novel.published == 'published') ? 'Unpublish' : 'Publish'}
                                    </button>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap text-right bg-indigo-100">
                                    <button
                                        // onClick={() => handleEditClick(author)}
                                        className="text-white p-2 bg-red-500 hover:bg-red-600 rounded-lg cursor-pointer"
                                    >
                                        Delete
                                    </button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default AuthorDetail
