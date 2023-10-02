import Image from 'next/image'
import Link from 'next/link';
import novelsData from '@/public/data/novels.json'
import MainCarousel from '@/components/MainCarousel';
import CategoryHeadingLandingPage from '@/components/CategoryHeadingLandingPage';
const axios = require('axios');



export default function Home() {
  // console.log(novelsData)
  return (
    <>
    <main className="flex h-full flex-col items-center justify-between p-10 pt-1">
      <div className="carousel-container w-full">
      <MainCarousel />

      </div>
      <section className="text-gray-600 body-font min-w-full">
        <CategoryHeadingLandingPage categoryName="Horror" />
        <div className="container px-5mx-auto">
          <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Free Novels for Everyone..!
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Welcome to our digital library of literary treasures! Dive into a world of captivating stories,
              all at your fingertips. Discover timeless classics, thrilling mysteries, and heartwarming tales - all for free. Start your reading journey today!
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Map over the novelsData and generate links */}
            {novelsData.map((novel, index) => (
              <div key={index} className="p-4 md:w-1/3">
                <Link href={`/${novel.slug}`} className="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:shadow-md hover:shadow-md hover:bg-indigo-100">
                  <h2 className="text-indigo-800 text-lg title-font font-medium">{novel.title}</h2>
                  <p className="leading-relaxed text-base">By {novel.author}</p>
                </Link>
              </div>
            ))}



          </div>

        </div>
      </section>

    </main>
    </>
  )
}
