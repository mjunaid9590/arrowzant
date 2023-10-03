import React from 'react'

const CategoryHeadingLandingPage = (props) => {
  return (
    <div className='category-heading-container mb-4'>
      <div className='flex flex-row md:ml-4'>
        <div className='border-solid border-indigo-600 border-4 h-8 mr-4' />
        <h1 className='text-3xl text-black font-bold'>{props.categoryTitle}</h1>
        <button className='ml-auto mr-10 rounded-md text-lg text-indigo-800 hover:bg-slate-400 p-2'>Show More {`>>`}</button>
      </div>
      <div className='w-full border-solid border-2 border-indigo-300 mt-3' />
    </div>
  )
}

export default CategoryHeadingLandingPage