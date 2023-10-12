import React from 'react'
import NovelsDataTable from '@/components/NovelsDataTable';
import AuthorsTable from '@/components/AuthorsTable';

const AdminAuthors = () => {
    const sampleAuthorsData = [
        {
          name: "John Doe",
          novelsCount: 5,
          lastActivity: "2023-10-12 14:30:00",
          isAuthorized: true,
        },
        {
          name: "Jane Smith",
          novelsCount: 10,
          lastActivity: "2023-10-11 16:45:00",
          isAuthorized: false,
        },
        {
          name: "Alice Johnson",
          novelsCount: 7,
          lastActivity: "2023-10-10 12:15:00",
          isAuthorized: true,
        },
        {
          name: "Bob Brown",
          novelsCount: 3,
          lastActivity: "2023-10-09 18:20:00",
          isAuthorized: true,
        },
        {
          name: "Eve Wilson",
          novelsCount: 2,
          lastActivity: "2023-10-08 09:55:00",
          isAuthorized: false,
        },
      ];
      

    return (
        <div className="flex flex-col w-full mb-auto  h-full p-5">
            <AuthorsTable data={sampleAuthorsData} />

        </div>
    )
}

export default AdminAuthors
