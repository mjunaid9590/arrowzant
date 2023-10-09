import React from 'react'
import Link from 'next/link'
import chaptersData from '../../../public/data/theMysteryOfMoonlight.json'
import novelsData from '@/public/data/novels.json'
import Pagination from '@/components/Pagination'
import { paginateData } from '@/utils/pagination'
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';


const Novel = ({ params, searchParams }) => {
    const { novel, category } = params
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
        <div className="text-gray-600 body-font">
            <div className="container flex-col mt-4 p-8 shadow-xl rounded-3xl bg-indigo-50 mx-auto">
                <div className="head flex flex-col md:flex-row">
                    <div className="md:w-1/5">
                        <img src="/genre/horror.png" alt="" />
                    </div>
                    <div className="w-4/5 flex flex-col md:pl-10 space-y-4">
                        <h1 className="text-4xl text-black font-bold">The Mystery of Moonlight</h1>
                        <h2 className="text-2xl">By Sarah Johanson</h2>
                        <h2 className="text-2xl">Horror | Ongoing | Chapters 209</h2>
                        <div className="flex flex-row space-x-1">
                            <div className="flex flex-col p-1 px-10 bg-indigo-200 shadow-lg">
                                <p className='font-semibold text-black text-xl'>44.2k</p>
                                <h2 className='text-xl'>Reads</h2>
                            </div>
                            <div className="flex flex-col p-1 px-10 bg-indigo-200 shadow-lg">
                                <p className='font-semibold text-black text-xl'>12.5k</p>
                                <h2 className='text-xl'>Likes</h2>
                            </div>

                        </div>
                        <div className="flex flex-row space-x-3">
                            <Link href={`/${category}/${novel}/chapters`} className='bg-blue-500 justify-center align-middle text-lg text-white rounded-md p-3'>
                                Start Reading
                            </Link>
                            <button className='border flex flex-row space-x-2 border-red-500 rounded-md p-3'>

                                    <FavoriteIcon />
                                    <p className='text-lg'>Add to Library</p>
                            </button>
                        </div>

                    </div>
                </div>
                <div className="body">
                    <p className='text-lg text-justify mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsam officiis cumque quas neque inventore esse placeat, eum laudantium qui earum eos. Neque consequuntur temporibus voluptate a id ducimus excepturi maxime voluptas laboriosam. Ea est officia fugit, dolores impedit harum atque dolore sequi? Praesentium tempora eum eaque maiores porro fugit accusamus iure velit. Similique delectus dicta dolorem perferendis possimus commodi, autem sunt id quod minima. Dolorem harum iste tempora similique laboriosam maxime illum? Similique voluptas saepe doloribus quo veniam, temporibus omnis ipsa totam nihil reiciendis autem molestias minima facere maiores. Provident error quam natus nobis quae ad sunt. Excepturi, alias nemo! Aliquam ex modi laborum molestiae possimus dicta quibusdam libero neque quo laudantium debitis, eveniet quos similique iste ullam quia, iure cupiditate. Laboriosam expedita assumenda aspernatur est itaque excepturi adipisci dignissimos voluptatem, doloribus laudantium! Natus illum, deleniti quod architecto quia omnis ipsam magnam soluta porro doloremque ea ullam dignissimos culpa eius quas veniam atque quam libero saepe fugiat reprehenderit dolor dolorem nobis sint. Asperiores nihil sed eligendi error nemo est eius expedita officia tenetur perspiciatis, voluptates iure necessitatibus adipisci reprehenderit et quasi ab odio voluptas sit! Quae eveniet beatae, cum, nesciunt assumenda quis, ullam quibusdam itaque sunt debitis voluptatibus nihil.</p>
                </div>
            </div>

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
