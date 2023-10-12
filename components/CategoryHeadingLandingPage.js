import Link from 'next/link'
import React from 'react'

const CategoryHeadingLandingPage = (props) => {
  return (
    <div className='category-heading-container mb-4'>
      <div className='flex flex-row md:ml-4'>
        <div className='border-solid border-indigo-600 dark:border-indigo-700 border-4 min-h-full mr-4' />
        <h1 className='my-auto text-xl md:text-3xl text-black dark:text-gray-300 font-bold'>{props.categoryTitle}</h1>
        <Link href={`/${props.categorySlug}`} className='my-auto ml-auto md:mr-10 rounded-md text-lg text-indigo-800 dark:text-indigo-300 hover:bg-slate-400 p-2'>Show More {`>>`}</Link>
      </div>
      <div className='w-full border-solid border-2 border-indigo-300 dark:border-indigo-500 mt-3' />
    </div>
  )
}

export default CategoryHeadingLandingPage
