import React from 'react'
import { Rating } from '@mui/material'
import Link from 'next/link'

const NovelCardLarge = (props) => {
    const { name, author, description, imgURL, rating, category, slug } = props
    return (
        <div className='max-h-min relative max-w-xl'>
            <Link href={`/${category}/${slug}`} className="flex rounded-lg h-full bg-gray-100 dark:bg-slate-600 p-3 flex-col hover:shadow-md hover:bg-indigo-100 dark:hover:bg-slate-700 dark:text-gray-200 dark:hover:text-gray-300">
                <div className="flex flex-row">
                    <img src={imgURL} alt="" className="h-40 w-auto mr-4 rounded-md" />
                    <div className="flex flex-col">
                        <h2 className='text-xl font-bold'>{name}</h2>
                        <h2 >{"By "} <span className='text-lg font-semibold'>{author}</span></h2>
                        <div className="flex flex-row">
                            <Rating defaultValue={rating} />
                            <h4 className='ml-3'>{`(4.1k)`}</h4>
                        </div>
                        <p>{description}</p>
                    </div>
                </div>
                {/* <h2 className="text-indigo-800 dark:text-indigo-300 text-xl mt-2 title-font font-medium flex items-center justify-center">{genreTitle}</h2> */}
            </Link>
        </div>
    )
}

export default NovelCardLarge
