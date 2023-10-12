"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const AuthorsTable = ({ data }) => {
    const [selectedAuthor, setSelectedAuthor] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const handleActionClick = (author) => {
        setSelectedAuthor(author);
        // Implement modal open logic here
    };
    const handleEditClick = (author) => {
        setSelectedAuthor(author);
        setIsEditing(true);
    };

    const handleAuthorizeClick = (author) => {
        // Implement authorization logic here
    };

    return (
        <div className="w-full">
            
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Author
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            No of Novels
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Last Activity Time
                        </th>
                        <th className="px-6 py-3 bg-gray-50"></th>
                        <th className="px-6 py-3 bg-gray-50"></th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((author, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-no-wrap">
                                {author.name}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap">
                                {author.novelsCount}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap">
                                {author.lastActivity}
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap text-right">
                                <Link
                                    href='/admin/authors/detail'
                                    className="text-indigo-600 hover:text-indigo-900 cursor-pointer"
                                >
                                    More Details
                                </Link>
                            </td>
                            
                            <td className="px-6 py-4 whitespace-no-wrap text-right">
                                <button
                                    onClick={() => handleAuthorizeClick(author)}
                                    className={`p-2  text-white rounded-lg text hover:text-red-900 cursor-pointer ${author.isAuthorized ? 'bg-red-500' : 'bg-green-500'}`}
                                >
                                    {author.isAuthorized ? "Unauthorize" : "Authorize"}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
           
        </div>
    );
};

export default AuthorsTable;
