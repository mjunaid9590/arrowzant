import Image from 'next/image'
import Link from 'next/link';
import novelsData from '@/public/data/novels.json'
import MainCarousel from '@/components/MainCarousel';
import CategoryHeadingLandingPage from '@/components/CategoryHeadingLandingPage';
// import CategoryCard from '@/components/BookBasicCard';
import CategoryCard from '@/components/CategoryCard';
const axios = require('axios');



export default function Genre() {
  // console.log(novelsData)
  return (
    <>
      <main className="flex h-full w-full flex-col items-center justify-between md:p-10 pt-4 mb-auto">
        {/* <div className="carousel-container w-full md:px-20">
          <MainCarousel />

        </div> */}
        <section className="text-gray-600 body-font w-full">
          <div className="category-container flex flex-col">
          <h1 className='my-auto text-center text-2xl md:text-4xl text-black dark:text-gray-300 font-bold'>Genres</h1>
          <div className='w-full border-solid border-2 border-indigo-300 dark:border-indigo-500 mt-3' />

            <div className="category-short-list-container w-full pb-10 pt-8 flex flex-wrap flex-grow">
              <div className="flex flex-wrap md:flex-wrap md:justify-evenly w-full" >
                <div className='px-2 p-4 w-1/2 md:w-1/5'>

                  <CategoryCard genreSlug="horror" genreTitle="Horror" imgURL="/genre/horror.png"/>
                </div>
                <div className='px-2 p-4 w-1/2 md:w-1/5'>

                  <CategoryCard genreSlug="horror" genreTitle="Romance" imgURL="/genre/romance.jpg"/>
                </div>
                <div className='px-2 p-4 w-1/2 md:w-1/5'>

                  <CategoryCard genreSlug="horror" genreTitle="Crime" imgURL="/genre/crime.png"/>
                </div>
                <div className='px-2 p-4 w-1/2 md:w-1/5'>

                  <CategoryCard genreSlug="horror" genreTitle="Historical" imgURL="/genre/historical.jpg"/>
                </div>
                <div className='px-2 p-4 w-1/2 md:w-1/5'>

                  <CategoryCard genreSlug="horror" genreTitle="Adventure" imgURL="/genre/adventure.png"/>
                </div>
                <div className='px-2 p-4 w-1/2 md:w-1/5'>

                  <CategoryCard genreSlug="horror" genreTitle="Contemporary" imgURL="/genre/contemporary.png"/>
                </div>
                <div className='px-2 p-4 w-1/2 md:w-1/5'>

                  <CategoryCard genreSlug="horror" genreTitle="Family" imgURL="/genre/family.jpg"/>
                </div>
                <div className='px-2 p-4 w-1/2 md:w-1/5'>

                  <CategoryCard genreSlug="horror" genreTitle="Fantasy" imgURL="/genre/fantasy.png"/>
                </div>
                <div className='px-2 p-4 w-1/2 md:w-1/5'>

                  <CategoryCard genreSlug="horror" genreTitle="Mafia" imgURL="/genre/mafia.jpg"/>
                </div>
                <div className='px-2 p-4 w-1/2 md:w-1/5'>

                  <CategoryCard genreSlug="horror" genreTitle="Mystery" imgURL="/genre/mystery.jpg"/>
                </div>
                <div className='px-2 p-4 w-1/2 md:w-1/5'>

                  <CategoryCard genreSlug="horror" genreTitle="Paranormal" imgURL="/genre/paranormal.jpg"/>
                </div>
                <div className='px-2 p-4 w-1/2 md:w-1/5'>

                  <CategoryCard genreSlug="horror" genreTitle="Royal" imgURL="/genre/royal.jpg"/>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
