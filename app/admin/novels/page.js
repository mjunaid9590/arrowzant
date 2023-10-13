import React from 'react'
import NovelsDataTable from '@/components/NovelsDataTable';

const AdminNovels = () => {


  return (
    <div className="flex flex-col w-full mb-auto  h-full p-5">
      <h1 className='text-3xl p-5 text-center text-black'>Novels</h1>
      <NovelsDataTable />


    </div>
  )
}

export default AdminNovels
