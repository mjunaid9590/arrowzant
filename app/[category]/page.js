import Image from 'next/image'
import Link from 'next/link';
import novelsData from '@/public/data/novels.json'
import MainCarousel from '@/components/MainCarousel';
import CategoryHeadingLandingPage from '@/components/CategoryHeadingLandingPage';
// import CategoryCard from '@/components/BookBasicCard';
import CategoryCard from '@/components/CategoryCard';
import NovelCardLarge from '@/components/NovelCardLarge';
const axios = require('axios');



export default function Home({params}) {

  // console.log(params)
  return (
    <>
      <main className="flex h-full w-full flex-col items-center justify-between md:p-10 pt-4 mb-auto">
        {/* <div className="carousel-container w-full md:px-20">
          <MainCarousel />

        </div> */}
        <section className="text-gray-600 body-font w-full">
          <div className="category-container flex flex-col">
          <h1 className='my-auto uppercase text-center text-2xl md:text-4xl text-black dark:text-gray-300 font-bold'>{params.category}</h1>
          <div className='w-full border-solid border-2 border-indigo-300 dark:border-indigo-500 mt-3' />

            <div className="category-short-list-container w-full pb-10 pt-8 flex flex-wrap flex-grow">
              <div className="flex flex-wrap md:flex-wrap md:justify-evenly w-full" >
                <div className='px-2 p-4'>

                  <NovelCardLarge name="Mysterical Moon" author="James Miller" category={params.category} slug='the-mystery-of-moonlight' imgURL="/genre/horror.png" rating={3} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rerum dolorum veritatis porro? Eos dignissimos assumenda similique illo ut eum?"/>
                </div>
                <div className='px-2 p-4'>

                  <NovelCardLarge name="Mysterical Moon" author="James Miller" category={params.category} slug='the-mystery-of-moonlight' imgURL="/genre/horror.png" rating={3} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rerum dolorum veritatis porro? Eos dignissimos assumenda similique illo ut eum?"/>
                </div>
                <div className='px-2 p-4'>

                  <NovelCardLarge name="Mysterical Moon" author="James Miller" category={params.category} slug='the-mystery-of-moonlight' imgURL="/genre/horror.png" rating={3} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rerum dolorum veritatis porro? Eos dignissimos assumenda similique illo ut eum?"/>
                </div>
                <div className='px-2 p-4'>

                  <NovelCardLarge name="Mysterical Moon" author="James Miller" category={params.category} slug='the-mystery-of-moonlight' imgURL="/genre/horror.png" rating={3} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rerum dolorum veritatis porro? Eos dignissimos assumenda similique illo ut eum?"/>
                </div>
                <div className='px-2 p-4'>

                  <NovelCardLarge name="Mysterical Moon" author="James Miller" category={params.category} slug='the-mystery-of-moonlight' imgURL="/genre/horror.png" rating={3} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rerum dolorum veritatis porro? Eos dignissimos assumenda similique illo ut eum?"/>
                </div>
                <div className='px-2 p-4'>

                  <NovelCardLarge name="Mysterical Moon" author="James Miller" category={params.category} slug='the-mystery-of-moonlight' imgURL="/genre/horror.png" rating={3} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rerum dolorum veritatis porro? Eos dignissimos assumenda similique illo ut eum?"/>
                </div>
                <div className='px-2 p-4'>

                  <NovelCardLarge name="Mysterical Moon" author="James Miller" category={params.category} slug='the-mystery-of-moonlight' imgURL="/genre/horror.png" rating={3} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rerum dolorum veritatis porro? Eos dignissimos assumenda similique illo ut eum?"/>
                </div>
                <div className='px-2 p-4'>

                  <NovelCardLarge name="Mysterical Moon" author="James Miller" category={params.category} slug='the-mystery-of-moonlight' imgURL="/genre/horror.png" rating={3} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rerum dolorum veritatis porro? Eos dignissimos assumenda similique illo ut eum?"/>
                </div>
                <div className='px-2 p-4'>

                  <NovelCardLarge name="Mysterical Moon" author="James Miller" category={params.category} slug='the-mystery-of-moonlight' imgURL="/genre/horror.png" rating={3} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rerum dolorum veritatis porro? Eos dignissimos assumenda similique illo ut eum?"/>
                </div>
                <div className='px-2 p-4'>

                  <NovelCardLarge name="Mysterical Moon" author="James Miller" category={params.category} slug='the-mystery-of-moonlight' imgURL="/genre/horror.png" rating={3} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rerum dolorum veritatis porro? Eos dignissimos assumenda similique illo ut eum?"/>
                </div>
                <div className='px-2 p-4'>

                  <NovelCardLarge name="Mysterical Moon" author="James Miller" category={params.category} slug='the-mystery-of-moonlight' imgURL="/genre/horror.png" rating={3} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rerum dolorum veritatis porro? Eos dignissimos assumenda similique illo ut eum?"/>
                </div>
                <div className='px-2 p-4'>

                  <NovelCardLarge name="Mysterical Moon" author="James Miller" category={params.category} slug='the-mystery-of-moonlight' imgURL="/genre/horror.png" rating={3} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rerum dolorum veritatis porro? Eos dignissimos assumenda similique illo ut eum?"/>
                </div>
                <div className='px-2 p-4'>

                  <NovelCardLarge name="Mysterical Moon" author="James Miller" category={params.category} slug='the-mystery-of-moonlight' imgURL="/genre/horror.png" rating={3} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rerum dolorum veritatis porro? Eos dignissimos assumenda similique illo ut eum?"/>
                </div>
                <div className='px-2 p-4'>

                  <NovelCardLarge name="Mysterical Moon" author="James Miller" category={params.category} slug='the-mystery-of-moonlight' imgURL="/genre/horror.png" rating={3} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rerum dolorum veritatis porro? Eos dignissimos assumenda similique illo ut eum?"/>
                </div>
                
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
