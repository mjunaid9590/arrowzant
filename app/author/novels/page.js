
import React from 'react'
import AuthorNovelsDataTable from '@/components/AuthorNovelsDataTable';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';

const AuthorNovels = () => {


  return (
    <div className="flex flex-col w-full mb-auto  h-full p-5">
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className='text-3xl p-4 text-center'>My Novels: </h1>

        <Link href='/author/novels/new' className='text-end my-auto text-md p-2 md:p-3 px-auto mb-3 md:mb-auto mr-auto md:mr-4 rounded-lg bg-green-500 hover:bg-green-600 text-white'><AddIcon /> Start New Novel</Link>
      </div>
      <AuthorNovelsDataTable />


    </div>
  )
}

export default AuthorNovels
