import Image from 'next/image'
import Link from 'next/link';
const axios = require('axios');



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <section className="text-gray-600 body-font min-w-full">
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
            <div class="p-4 md:w-1/3">
              <Link href="/" class="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:shadow-md">

                <h2 class="text-indigo-800 text-lg title-font font-medium">A MAN LIKE NO OTHER</h2>

                <p class="leading-relaxed text-base">By Ravi Chandran</p>

              </Link>
            </div>



            <div class="p-4 md:w-1/3">
              <Link href="/" class="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:shadow-md">
                <h2 class="text-indigo-800 text-lg title-font font-medium">THE MYSTERY OF MOONLIGHT</h2>
                <p class="leading-relaxed text-base">By Sarah Johnson</p>
              </Link>
            </div>

            <div class="p-4 md:w-1/3">
              <Link href="/" class="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:shadow-md">
                <h2 class="text-indigo-800 text-lg title-font font-medium">SECRET BEHIND THE DOOR</h2>
                <p class="leading-relaxed text-base">By Michael Smith</p>
              </Link>
            </div>
            <div class="p-4 md:w-1/3">
              <Link href="/" class="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:shadow-md">
                <h2 class="text-indigo-800 text-lg title-font font-medium">THE LOST KINGDOM</h2>
                <p class="leading-relaxed text-base">By Emily Davis</p>
              </Link>
            </div>

            <div class="p-4 md:w-1/3">
              <Link href="/" class="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:shadow-md">
                <h2 class="text-indigo-800 text-lg title-font font-medium">UNDER THE STARLIT SKY</h2>
                <p class="leading-relaxed text-base">By David Brown</p>
              </Link>
            </div>

            <div class="p-4 md:w-1/3">
              <Link href="/" class="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:shadow-md">
                <h2 class="text-indigo-800 text-lg title-font font-medium">THE ARTIST'S JOURNEY</h2>
                <p class="leading-relaxed text-base">By Laura Adams</p>
              </Link>
            </div>
            <div class="p-4 md:w-1/3">
              <Link href="/" class="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:shadow-md">
                <h2 class="text-indigo-800 text-lg title-font font-medium">WHISPERS OF THE ENCHANTED FOREST</h2>
                <p class="leading-relaxed text-base">By Aurora Silverleaf</p>
              </Link>
            </div>

            <div class="p-4 md:w-1/3">
              <Link href="/" class="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:shadow-md">
                <h2 class="text-indigo-800 text-lg title-font font-medium">THE CLOCKWORK CONSPIRACY</h2>
                <p class="leading-relaxed text-base">By Victor Sterling</p>
              </Link>
            </div>

            <div class="p-4 md:w-1/3">
              <Link href="/" class="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:shadow-md">
                <h2 class="text-indigo-800 text-lg title-font font-medium">BEYOND THE STARRY VEIL</h2>
                <p class="leading-relaxed text-base">By Celeste Nightshade</p>
              </Link>
            </div>

            <div class="p-4 md:w-1/3">
              <Link href="/" class="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:shadow-md">
                <h2 class="text-indigo-800 text-lg title-font font-medium">THE WHISPERING MAZE</h2>
                <p class="leading-relaxed text-base">By Sebastian Thornfield</p>
              </Link>
            </div>
            <div class="p-4 md:w-1/3">
              <Link href="/" class="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:shadow-md">
                <h2 class="text-indigo-800 text-lg title-font font-medium">ECHOES OF THE LOST KINGDOM</h2>
                <p class="leading-relaxed text-base">By Isabella Ravenwood</p>
              </Link>
            </div>

            <div class="p-4 md:w-1/3">
              <Link href="/" class="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:shadow-md">
                <h2 class="text-indigo-800 text-lg title-font font-medium">THE STEAMPUNK CONUNDRUM</h2>
                <p class="leading-relaxed text-base">By Felix Ironheart</p>
              </Link>
            </div>

            <div class="p-4 md:w-1/3">
              <Link href="/" class="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:shadow-md">
                <h2 class="text-indigo-800 text-lg title-font font-medium">SONGS OF THE SILVER SEA</h2>
                <p class="leading-relaxed text-base">By Seraphina Oceanwind</p>
              </Link>
            </div>

            <div class="p-4 md:w-1/3">
              <Link href="/" class="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:shadow-md">
                <h2 class="text-indigo-800 text-lg title-font font-medium">THE CRYSTAL KEY</h2>
                <p class="leading-relaxed text-base">By Orion Starcaster</p>
              </Link>
            </div>



          </div>

        </div>
      </section>

    </main>
  )
}
