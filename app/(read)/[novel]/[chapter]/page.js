// import React from 'react'
// import Link from 'next/link'
// import chaptersData from '@/public/data/theMysteryOfMoonlight.json'
// import novelsData from '@/public/data/novels.json'
// // import chaptersData from '@/public/data/chapters.json'
// import ChapterPagination from '@/components/ChapterPagination'
// import { paginateData } from '@/utils/pagination'


// const Chapter = ({ params, searchParams }) => {
//   const { novel, chapter } = params
//   // console.log("params: ", params)
//   const currentNovel = novelsData.find((n) => n.slug === novel);
//   const currentChapter = chaptersData.find((n) => n.chapterLink === chapter);

//   // console.log("current Novel", novelsData)
//   const chaptersPerPage = 1;
//   const chapterText = `Under the luminous gaze of the moon, Crescent Harbor held its breath, a town wrapped in mysteries and legends. The silvery light bathed the cobblestone streets, casting long shadows that seemed to dance with each passing breeze. It was a night like many others, but there was an electric energy in the air, an unspoken anticipation that something extraordinary was about to unfold.

//     In the heart of the town square, where ancient oaks spread their branches like sentinels, a group of townsfolk had gathered. They huddled in small circles, their faces illuminated by the soft, ethereal glow of lanterns. Whispers passed among them like secrets shared with trusted confidants. The townspeople had heard the tales, the ones passed down through generations, about the moon's unique power over Crescent Harbor.
    
//     Evelyn, a young woman with fiery red hair and an insatiable curiosity, stood at the center of one such circle. Her emerald eyes sparkled with excitement as she recounted the story she had heard from her grandmother, a tale that had been woven into the fabric of Crescent Harbor's history.
    
//     "As the legend goes," Evelyn began, her voice barely above a whisper, "on nights like this, when the moon is at its fullest and most radiant, the town's deepest secrets are said to be revealed."
    
//     Her words hung in the air, mingling with the soft sounds of the night—the distant laughter of children, the gentle rustle of leaves, and the distant lullaby of the sea.
    
//     A gray-haired man named Samuel nodded thoughtfully. "I've heard the same, Evelyn. They say that the moonlight can unveil hidden passages beneath the town, leading to treasures long lost."
    
//     The townspeople exchanged knowing glances. Each one held their own interpretation of the legend, each with their own hopes and dreams tied to the mysteries of Crescent Harbor.
    
//     As the moon climbed higher in the sky, bathing the town in an otherworldly radiance, a sense of unity and shared purpose washed over the gathered crowd. They were no longer just individuals living their separate lives but a community bound by a common belief in the moon's magic.
    
//     Evelyn, inspired by the atmosphere of the night, spoke with newfound determination. "Tonight, let's embark on a journey together. Let's follow the moon's guidance and uncover the hidden truths of Crescent Harbor."
    
//     The townsfolk nodded in agreement, their faces reflecting the moon's serene glow. With lanterns in hand and hope in their hearts, they set out into the night, guided by the moon's tender embrace, ready to embrace the secrets that awaited them.
    
//     In the chapters to come, the mysteries of Crescent Harbor would continue to deepen, and the characters would find themselves drawn into a tapestry of intrigue and wonder, forever changed by the moon's enchantment.`
//   const currentPage = searchParams["page"] || 1; // Get the current page from query parameters
//   const paginatedChapters = paginateData(chaptersData, chaptersPerPage);
//   // console.log("current page chapters:", paginatedChapters[currentPage-1])
//   // Calculate total pages
//   const totalPages = paginatedChapters.length;

//   // Get the chapters for the current page
//   const currentPageChapters = paginatedChapters[currentPage - 1];

//   // const {slug} = params   
//   // console.log("chapters data: ", chaptersData)
//   const handlePageChange = (pageNumber) => {
//     // Handle page change here (e.g., updating the URL)
//   };
//   return (
//     <div className="text-gray-600 body-font flex flex-col flex-grow">
//       {/* <h1>{params.chapter}</h1> */}
//       <div className="container px-5 pt-12 pb-8 mx-auto flex-grow">
//         <div className="flex flex-col w-full mb-10">
//           <div className=" ml-5 w-full mb-6 lg:mb-0  text-center">
//             <div className="flex flex-col">
//               <h1 className="chapter-title sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
//                 {currentNovel ? currentNovel.title : ''}
//               </h1>
//               <div className="" >
//                 <h2 className="text-xl w-full leading-relaxed text-gray-500">
//                   {currentNovel ? `By ${currentNovel.author}` : ''}
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div>
//           <h1 className="chapter-title sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
//                 CHAPTER-{currentChapter.chapterNumber}
//               </h1>
//             <div className="h-1 w-20 bg-indigo-500 rounded" />
//           </div>
//         </div>
//         <div className="flex mx-5 text-2xl flex-wrap -m-4 justify-stretch">
//           <p className='text-justify'>{chapterText}</p>
//         </div>
//       </div>
//       <ChapterPagination
//         totalPages={totalPages}
//         currentPage={currentChapter.chapterNumber}
//         resultsPerPage={chaptersPerPage}
//         totalResults={chaptersData.length}
//         pageLink={currentNovel.slug}
//         nextPrevButtons={true}
//         resultsCount={true}
//       />
//     </div>
//   )
// }


// export default Chapter


import React from 'react'
export function generateStaticParams() {
    return [
      { novel: 'abc', chapter: 'abc', product: '123' },
      { novel: 'abc', chapter: 'b', product: '2' },
      { novel: 'abc', chapter: 'c', product: '3' },
    ]
  }
const Chapter = ({params}) => {
    const {chapter, product} = params
  return (
    <div>
      Chapter: {chapter}
      <div>
        Product: {product}
      </div>
    </div>
  )
}

export default Chapter
