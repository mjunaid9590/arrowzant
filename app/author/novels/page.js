import React from 'react'
import AuthorNovelsDataTable from '@/components/AuthorNovelsDataTable';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';

const AdminNovels = () => {
    
            
  return (
    <div className="flex flex-col w-full mb-auto  h-full p-5">
      <div className="flex flex-row justify-between">
      <h1 className='text-3xl p-4'>My Novels: </h1>

      <Link href='/author/novels/new' className='text-end my-auto text-md p-3 mr-4 rounded-lg bg-green-500 hover:bg-green-600 text-white'><AddIcon /> Start New Novel</Link>
      </div>
      <AuthorNovelsDataTable  />

      
    </div>
  )
}

export default AdminNovels
