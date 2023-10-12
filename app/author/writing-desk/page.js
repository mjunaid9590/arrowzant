import React from 'react'
import NovelsDataTable from '@/components/NovelsDataTable';
import DraftsTable from '@/components/DraftsTable';
import Link from 'next/link';

const WritingDesk = () => {
  const data = [
    {
      id: 1,
      novelName: 'The Adventure Begins',
      chapterName: 'Chapter 1: Into the Unknown',
      lastUpdatedTime: '2023-10-12 10:30 AM',
      isPublished: false,
    },
    {
      id: 2,
      novelName: 'Mystery Manor',
      chapterName: 'Chapter 5: Secrets Unveiled',
      lastUpdatedTime: '2023-10-11 03:45 PM',
      isPublished: true,
    },
    {
      id: 3,
      novelName: 'Sci-Fi Odyssey',
      chapterName: 'Chapter 3: The Alien Encounter',
      lastUpdatedTime: '2023-10-10 08:15 AM',
      isPublished: true,
    },
    {
      id: 4,
      novelName: 'Fantasy Realm',
      chapterName: 'Chapter 7: Battle of the Titans',
      lastUpdatedTime: '2023-10-09 01:20 PM',
      isPublished: false,
    },
  ];
  
  // Pass this sampleData to your DraftsTable component
  
      

    return (
        <div className="flex flex-col w-full mb-auto  h-full p-5">
          <div className='text-end pb-5'>
            <Link href="/author/writing-desk/new" className="text-end text-xl py-2 px-2 rounded-lg mb-3 mr-3 bg-blue-500 text-white">+ Make New Draft</Link>
            </div>
            <DraftsTable data={data} />

        </div>
    )
}

export default WritingDesk
