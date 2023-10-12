import Image from 'next/image'
import Link from 'next/link';
import novelsData from '@/public/data/novels.json'
import MainCarousel from '@/components/MainCarousel';
import CategoryHeadingLandingPage from '@/components/CategoryHeadingLandingPage';
import BookBasicCard from '@/components/BookBasicCard';
const axios = require('axios');



export default function Admin() {
    // console.log(novelsData)
    return (
        <>
            <div className="flex flex-col w-full mb-auto  h-full">
                <div className="flex flex-row text-center h-40">
                    <div className="flex flex-row w-full p-4 text-center items-center justify-evenly">
                        <div className='bg-green-200 w-1/5 pb-4 rounded-lg border-2 border-gray-300 shadow-lg'>
                            <h4 className='py-2 text-3xl'>View Count</h4>
                            <h2 className=' bg-green-300 text-2xl'>188.1k</h2>
                        </div>
                        <div className='bg-orange-200 w-1/5 pb-4 rounded-lg border-2 border-gray-300 shadow-lg'>
                            <h4 className='py-2 text-3xl px-5'>Likes</h4>
                            <h2 className='px-10 bg-orange-300 text-2xl'>33.2k</h2>
                        </div>
                        <div className='bg-blue-200 w-1/5 pb-4 rounded-lg border-2 border-gray-300 shadow-lg'>
                            <h4 className='py-2 text-3xl'>Stat 1</h4>
                            <h2 className=' bg-blue-300 text-2xl'>xxxxxx</h2>
                        </div>
                        <div className='bg-purple-200 w-1/5 pb-4 rounded-lg border-2 border-gray-300 shadow-lg'>
                            <h4 className='py-2 text-3xl px-5'>Stat 2</h4>
                            <h2 className='px-10 bg-purple-300 text-2xl'>xxxxxx</h2>
                        </div>
                    </div>
                    {/* <div className="flex flex-col w-1/2 p-4 bg-red-300">
                <div>Stat 1</div>
                <div>Stat 2</div>
            </div> */}
                </div>

                    <div className='w-3/4 px-auto mx-auto flex flex-col items-center text-center'>
                        <div className=" w-full bg-red-200 p-4">
                            <h2 className='border-b py-2-b-2 border-gray-400 text-2xl'>My Top Novels</h2>
                            <table className="table-auto w-full border-spacing-y-4 border-collapse ">
                                <thead>
                                    <tr>
                                        <th className='border-b py-2 border-gray-400'>Ser #</th>
                                        <th className='border-b py-2 border-gray-400'>Novel</th>
                                        <th className='border-b py-2 border-gray-400'>Views</th>
                                        <th className='border-b py-2 border-gray-400'>Likes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='border-b py-2 border-gray-400'>1</td>
                                        <td className='border-b py-2 text-start  border-gray-400'>The Other Story</td>
                                        <td className='border-b py-2 border-gray-400'>20.1k</td>
                                        <td className='border-b py-2 border-gray-400'>3.2k</td>
                                    </tr>
                                    <tr>
                                        <td className='border-b py-2 border-gray-400'>2</td>
                                        <td className='border-b py-2 text-start  border-gray-400'>Histroy Repeats</td>
                                        <td className='border-b py-2 border-gray-400'>20.1k</td>
                                        <td className='border-b py-2 border-gray-400'>3.2k</td>
                                    </tr>
                                    <tr>
                                        <td className='border-b py-2 border-gray-400'>3</td>
                                        <td className='border-b py-2 text-start  border-gray-400'>In the Shadow of Evening</td>
                                        <td className='border-b py-2 border-gray-400'>20.1k</td>
                                        <td className='border-b py-2 border-gray-400'>3.2k</td>
                                    </tr>
                                    <tr>
                                        <td className='border-b py-2 border-gray-400'>4</td>

                                        <td className='border-b py-2 text-start  border-gray-400'>Adventureland</td>
                                        <td className='border-b py-2 border-gray-400'>20.1k</td>
                                        <td className='border-b py-2 border-gray-400'>3.2k</td>
                                    </tr>
                                    <tr>
                                        <td className='border-b py-2 border-gray-400'>5</td>

                                        <td className='border-b py-2 text-start  border-gray-400'>Explorations of Dora</td>
                                        <td className='border-b py-2 border-gray-400'>20.1k</td>
                                        <td className='border-b py-2 border-gray-400'>3.2k</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                    
            </div>

        </>
    )
}
