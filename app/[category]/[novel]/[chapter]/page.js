import React from 'react'
import Link from 'next/link'
import chaptersData from '@/public/data/theMysteryOfMoonlight.json'
import novelsData from '@/public/data/novels.json'
// import chaptersData from '@/public/data/chapters.json'
import ChapterPagination from '@/components/ChapterPagination'
import { paginateData } from '@/utils/pagination'

// console.log("pairs: ", pairs)

const Chapter = ({ params, searchParams }) => {
  const {category, novel, chapter } = params
  // console.log("params: ", params)
  
  const currentNovel = novelsData.find((n) => n.slug === novel);
  // console.log("Current Novel",currentNovel)
  const currentChapter = chaptersData.find((n) => n.chapterLink === chapter);

  // console.log("current Novel", novelsData)
  const chaptersPerPage = 1;
  const chapterText = [
    {
      "paragraph_number": 1,
      "text": "The moon hung low in the night sky, a luminous orb bathing the quiet town of Moonville in its silvery radiance. Its light, ethereal and haunting, transformed the familiar cobblestone streets into pathways of enchantment. Every corner seemed to hold a secret, every shadow whispered a tale of ages past."
    },
    {
      "paragraph_number": 2,
      "text": "Sarah stood transfixed by the window, her pulse quickening as she witnessed the moonlight's mesmerizing dance on the still surface of the lake. It was as if the very essence of magic flowed through the shimmering beams, weaving a spell of wonder and intrigue. The stories her grandmother used to tell her about the moon now seemed more than mere tales; they felt like the keys to an undiscovered realm."
    },
    {
      "paragraph_number": 3,
      "text": "Unbeknownst to Sarah, this night marked the inception of an extraordinary odyssey. The air was charged with an otherworldly energy, and the soft murmur of the breeze carried cryptic messages. She felt an irresistible tug toward the lakeshore, as if the moon itself beckoned her. Her heart swelled with curiosity, and her steps were guided by a force beyond her comprehension."
    },
    {
      "paragraph_number": 4,
      "text": "Venturing out into the cool embrace of the night, Sarah was acutely aware that she was on the threshold of revelation. What enigmatic secrets did the moonlight conceal? The world around her underwent a wondrous metamorphosis in the gentle radiance. Shadows stretched into intricate tapestries, and even the most ordinary objects took on an aura of magic. It was as if the moonlight painted reality with its own surreal brush."
    },
    {
      "paragraph_number": 5,
      "text": "With each deliberate step, Sarah embarked on her quest to unravel the mysteries of moonlight. The night itself seemed to hold its breath, waiting for her to decipher the enigma that had enthralled her for so long. She knew, deep in her heart, that this journey would alter the course of her life in ways she could not yet fathom."
    },
    {
      "paragraph_number": 6,
      "text": "The moon hung low in the night sky, a luminous orb bathing the quiet town of Moonville in its silvery radiance. Its light, ethereal and haunting, transformed the familiar cobblestone streets into pathways of enchantment. Every corner seemed to hold a secret, every shadow whispered a tale of ages past."
    },
    {
      "paragraph_number": 7,
      "text": "Sarah stood transfixed by the window, her pulse quickening as she witnessed the moonlight's mesmerizing dance on the still surface of the lake. It was as if the very essence of magic flowed through the shimmering beams, weaving a spell of wonder and intrigue. The stories her grandmother used to tell her about the moon now seemed more than mere tales; they felt like the keys to an undiscovered realm."
    },
    {
      "paragraph_number": 8,
      "text": "Unbeknownst to Sarah, this night marked the inception of an extraordinary odyssey. The air was charged with an otherworldly energy, and the soft murmur of the breeze carried cryptic messages. She felt an irresistible tug toward the lakeshore, as if the moon itself beckoned her. Her heart swelled with curiosity, and her steps were guided by a force beyond her comprehension."
    },
    {
      "paragraph_number": 9,
      "text": "Venturing out into the cool embrace of the night, Sarah was acutely aware that she was on the threshold of revelation. What enigmatic secrets did the moonlight conceal? The world around her underwent a wondrous metamorphosis in the gentle radiance. Shadows stretched into intricate tapestries, and even the most ordinary objects took on an aura of magic. It was as if the moonlight painted reality with its own surreal brush."
    },
    {
      "paragraph_number": 10,
      "text": "With each deliberate step, Sarah embarked on her quest to unravel the mysteries of moonlight. The night itself seemed to hold its breath, waiting for her to decipher the enigma that had enthralled her for so long. She knew, deep in her heart, that this journey would alter the course of her life in ways she could not yet fathom."
    }
  ]
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
      {/* <h1>{params.chapter}</h1> */}
      <div className="container px-5 pt-12 pb-8 mx-auto flex-grow">
        <div className="flex flex-col w-full mb-10">
          <div className=" ml-5 w-full mb-6 lg:mb-0  text-center">
            <div className="flex flex-col">
              <h1 className="chapter-title sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-gray-100">
                {currentNovel ? currentNovel.title : ''}
              </h1>
              <div className="" >
                <h2 className="text-xl w-full leading-relaxed text-gray-500 dark:text-gray-200">
                  {currentNovel ? `By ${currentNovel.author}` : ''}
                </h2>
              </div>
            </div>
          </div>
          <div>
          <h1 className="chapter-title sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-gray-100">
                CHAPTER-{currentChapter.chapterNumber}
              </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded" />
          </div>
        </div>
        <div className="flex mx-5 text-2xl dark:text-gray-400 flex-wrap -m-4 justify-stretch">
      
         {
          chapterText.map((para, index) => {
            return(
          <p key={index} className='text-justify indent-20 pt-5'>{para.text}</p>)
          })
        }
        </div>
      </div>
      <ChapterPagination
        totalPages={totalPages}
        currentPage={currentChapter.chapterNumber}
        resultsPerPage={chaptersPerPage}
        totalResults={chaptersData.length}
        pageLink={`${category}/${currentNovel.slug}`}
        nextPrevButtons={true}
        resultsCount={true}
      />
    </div>
  )
}


export default Chapter

