import React from 'react';
import Link from 'next/link';

const CategoryCard = (props) => {
    const {genreTitle, imgURL, genreSlug} = props
  return (
    <div className='max-h-min relative '>
      <Link href={`/${genreSlug}`} className="flex rounded-lg h-full bg-gray-100 dark:bg-slate-600 p-3 flex-col hover:shadow-md hover:bg-indigo-100">
        <img src={imgURL} alt="" className="w-full h-auto" />
        <h2 className="text-indigo-800 dark:text-indigo-300 text-xl mt-2 title-font font-medium flex items-center justify-center">{genreTitle}</h2>
      </Link>
    </div>
  );
};

export default CategoryCard;
