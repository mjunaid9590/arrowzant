import React from 'react'

const CategoryHeadingLandingPage = (categoryTitle) => {
  return (
    <div className='category-heading-container mb-4'>
      <div className='flex flex-row'>
        <div className='border-solid border-indigo-600 border-4 h-8 mr-4' />
        <h1 className='text-2xl'>Horror</h1>
      </div>
      <div className='w-full border-solid border-2 border-gray-600 mt-3' />
    </div>
  )
}

export default CategoryHeadingLandingPage
