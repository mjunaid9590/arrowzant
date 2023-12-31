"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const DraftsTable = ({ data }) => {
  const [selectedDraft, setSelectedDraft] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleActionClick = (draft) => {
    setSelectedDraft(draft);
    // Implement modal open logic here
  };

  const handleEditClick = (draft) => {
    setSelectedDraft(draft);
    setIsEditing(true);
  };

  const handleDeleteClick = (draft) => {
    // Implement delete logic here
  };

  const handlePublishClick = (draft) => {
    // Implement publish logic here
  };
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 ">
        <thead className='bg-gray-50 dark:bg-indigo-900 dark:text-indigo-100 text-gray-500'>
          <tr>
            <th className="px-3 py-3 text-left text-xs leading-4 font-medium  uppercase tracking-wider">
              Novel Name
            </th>
            <th className="px-3 py-3 text-left text-xs leading-4 font-medium  uppercase tracking-wider">
              Chapter Name
            </th>
            <th className="px-3 py-3 text-left text-xs leading-4 font-medium  uppercase tracking-wider">
              Last Updated Time
            </th>
            <th className="px-3 py-3"></th>
            <th className="px-3 py-3"></th>
            <th className="px-3 py-3"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:text-indigo-100 text-gray-500">
          {data.map((draft, index) => (
            <tr key={index}>
              <td className="px-3 py-4 whitespace-no-wrap">{draft.novelName}</td>
              <td className="px-3 py-4 whitespace-no-wrap">{draft.chapterName}</td>
              <td className="px-3 py-4 whitespace-no-wrap">{draft.lastUpdatedTime}</td>

              <td className="px-3 py-4 whitespace-no-wrap text-right">
                <Link
                  href='/author/writing-desk/edit'

                  // onClick={() => handleEditClick(draft)}
                  className="p-2 px-4 text-white rounded-lg bg-blue-500 dark:bg-blue-900 hover:bg-blue-700 cursor-pointer"
                >
                  Edit
                </Link>
              </td>
              <td className="px-3 py-4 whitespace-no-wrap text-right">
                <Link
                  href='#'

                  // onClick={() => handleDeleteClick(draft)}
                  className="p-2 text-white rounded-lg bg-red-500 dark:bg-red-900 hover:bg-red-700 cursor-pointer"
                >
                  Delete
                </Link>
              </td>
              <td className="px-3 py-4 whitespace-no-wrap text-right">
                <Link
                  href='#'
                  // onClick={() => handlePublishClick(draft)}
                  className={`p-2 text-white rounded-lg hover:bg-green-700 dark:bg-green-900 cursor-pointer bg-green-500`}
                >
                  Publish
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DraftsTable;
