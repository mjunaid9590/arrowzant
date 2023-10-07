import React from 'react'
import { Rating } from '@mui/material'

const NovelCardLarge = () => {
    return (
        <div className='max-h-min relative '>
            <Link href='#' className="flex rounded-lg h-full bg-gray-100 dark:bg-slate-600 p-3 flex-col hover:shadow-md hover:bg-indigo-100">
                <div className="flex flex-row">
                <img src={imgURL} alt="" className="w-full h-auto" />
                <div className="flex flex-col">
                    <h2>Novel Name</h2>
                    <h2>By Author</h2>
                    <Rating />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quia vitae dolorem omnis culpa ut eligendi perspiciatis magnam repellendus inventore?</p>
                </div>
                </div>
                <h2 className="text-indigo-800 dark:text-indigo-300 text-xl mt-2 title-font font-medium flex items-center justify-center">{genreTitle}</h2>
            </Link>
        </div>
    )
}

export default NovelCardLarge
