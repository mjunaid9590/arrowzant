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
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-3 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Novel Name
            </th>
            <th className="px-3 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Chapter Name
            </th>
            <th className="px-3 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Last Updated Time
            </th>
            <th className="px-3 py-3 bg-gray-50"></th>
            <th className="px-3 py-3 bg-gray-50"></th>
            <th className="px-3 py-3 bg-gray-50"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((draft, index) => (
            <tr key={index}>
              <td className="px-3 py-4 whitespace-no-wrap">{draft.novelName}</td>
              <td className="px-3 py-4 whitespace-no-wrap">{draft.chapterName}</td>
              <td className="px-3 py-4 whitespace-no-wrap">{draft.lastUpdatedTime}</td>

              <td className="px-3 py-4 whitespace-no-wrap text-right">
                <Link
                  href='/author/writing-desk/edit'

                  // onClick={() => handleEditClick(draft)}
                  className="p-2 px-4 text-white rounded-lg bg-blue-500 hover:bg-blue-700 cursor-pointer"
                >
                  Edit
                </Link>
              </td>
              <td className="px-3 py-4 whitespace-no-wrap text-right">
                <Link
                  href='#'

                  // onClick={() => handleDeleteClick(draft)}
                  className="p-2 text-white rounded-lg bg-red-500 hover:bg-red-700 cursor-pointer"
                >
                  Delete
                </Link>
              </td>
              <td className="px-3 py-4 whitespace-no-wrap text-right">
                <Link
                  href='#'
                  // onClick={() => handlePublishClick(draft)}
                  className={`p-2 text-white rounded-lg hover:bg-green-700 cursor-pointer bg-green-500`}
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
