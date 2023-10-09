import React from 'react'
import Link from 'next/link'
import chaptersData from '@/public/data/theMysteryOfMoonlight.json'
import novelsData from '@/public/data/novels.json'
import Pagination from '@/components/Pagination'
import { paginateData } from '@/utils/pagination'

const Novel = ({ params, searchParams }) => {
    const {novel, category}=params
    const currentNovel = novelsData.find((n) => n.slug === novel);
    // console.log("params: ", params)
    const chaptersPerPage = 12;
    const currentPage = searchParams["page"] || 1; // Get the current page from query parameters
    const paginatedChapters = paginateData(chaptersData, chaptersPerPage);
    // console.log("current page chapters:", paginatedChapters[currentPage-1])
    // Calculate total pages
    const totalPages = paginatedChapters.length;

    // Get the chapters for the current page
    const currentPageChapters = paginatedChapters[currentPage - 1];

    // const {slug} = params   
    // console.log("chapters data: ", chaptersData)
    const handlePageChange = (pageNumber) => {
        // Handle page change here (e.g., updating the URL)
    };
    return (
        <div className="text-gray-600 body-font flex flex-col flex-grow">
            {/* <h1>{params.novel}</h1> */}
            <div className="container px-5 pt-12 pb-8 mx-auto flex-grow">
                <div className="flex flex-wrap w-full mb-10">
                    <div className="lg:w-1/2 ml-5 w-full mb-6 lg:mb-0">
                        <h1 className="novel-title sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                        {currentNovel ? currentNovel.title : ''}
                        </h1>
                        <div className="h-1 w-40 bg-indigo-500 rounded" />
                        <div className="" >
                            <h2 className="text-xl lg:w-1/2 w-full leading-relaxed text-gray-500">
                            {currentNovel ? `By ${currentNovel.author}` : ''}
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -m-4">
                    {
                        currentPageChapters.map((chapter, index) => (
                            <div key={index} className="p-4 md:w-1/3">
                                {/* {console.log(chaptersData)} */}
                                <Link href={`../${currentNovel.slug}/${chapter.chapterLink}`} className="flex rounded-lg h-full bg-gray-100 p-3 flex-col hover:shadow-md hover:bg-indigo-100">
                                    <h2 className="text-indigo-800 text-lg title-font font-medium">CHAPTER-{chapter.chapterNumber}</h2>
                                    <p className="leading-relaxed text-sm">{chapter.chapterTitle}</p>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                resultsPerPage={chaptersPerPage}
                totalResults={chaptersData.length}
                pageLink={`${category}/${novel}`}
                nextPrevButtons={true}
                resultsCount={true}
            />
            </div>
    )
}


export default Novel


// import React from 'react'
// export function generateStaticParams() {
//     return [
//       { novel: 'abc', product: '123' },
//       { novel: 'b', product: '2' },
//       { novel: 'c', product: '3' },
//     ]
//   }
// const Page = ({params}) => {
//     const {novel} = params
//     const currentNovel = novelsData.find((n) => n.slug === novel);
//   return (
//     <div>
//       Novel: {novel}
//       Title: {currentNovel.title}
//     </div>
//   )
// }

// export default Page
