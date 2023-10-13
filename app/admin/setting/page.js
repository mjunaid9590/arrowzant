import React from 'react'

const Setting = () => {
  return (
    <div>
      <section className="text-gray-600 body-font relative">
      <h1 className='text-3xl p-5'>Setting</h1>
        <div className="container px-5 py-10 mx-auto">
          {/* <div className="flex flex-col w-full mb-8">
            <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 text-gray-900 dark:text-gray-200">
              Settings
            </h1>
          </div> */}
          <div className='flex flex-col h-full md:flex-row md:space-x-5'>
            <div className="flex flex-col p-5 h-full md:flex-wrap md:w-1/2 md:justify-evenly -m-2 bg-indigo-200 py-10 rounded-2xl ">
              <div className="p-2">
                <div className="flex flex-col">
                  <label htmlFor="name" className="my-auto py-2 text-2xl leading-7 text-gray-600">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value="example"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2">
                <div className="flex flex-col">
                  <label htmlFor="email" className="leading-7 my-auto py-2 text-2xl text-gray-600">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value="example@abc.com"
                    className="w-full pb-3 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <button className='text-end mt-3 mx-auto px-3 my-auto text-lg p-2 px-5 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white'>Save</button>
            </div>
            <div className="flex flex-col p-5 h-full md:flex-wrap md:w-1/2 md:justify-evenly -m-2 bg-indigo-200 py-10 rounded-2xl ">
              <div className="p-2">
                <div className="flex flex-col">
                  <label htmlFor="password" className="my-auto py-2 text-2xl leading-7 text-gray-600">
                    New Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value="***********"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2">
                <div className="flex flex-col">
                  <label htmlFor="repeatPassword" className="leading-7 my-auto py-2 text-2xl text-gray-600">
                    Repeat Password:
                  </label>
                  <input
                    type="password"
                    id="repeatPassword"
                    name="repeatPassword"
                    value="***********"
                    className="w-full pb-3 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <button className='text-end mt-3 mx-auto px-3 my-auto text-lg p-2 px-5 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white'>Save</button>
            </div>
            {/* <div className="flex flex-col p-5 h-full md:flex-wrap md:w-1/2 md:justify-evenly -m-2 bg-indigo-200 py-10 rounded-2xl ">
              <div className="p-2">
                <div className="flex flex-col">
                <label htmlFor="password" className="my-auto py-2 text-2xl leading-7 text-gray-600">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value='jkdfhaskfhjks'
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2">
                <div className="flex flex-col">
                  <label htmlFor="repeatPassword" className="leading-7 my-auto py-2 text-2xl text-gray-600">
                    Repeat Password:
                  </label>
                  <input
                    type="password"
                    id="repeatPassword"
                    name="repeatPassword"
                    value="ksdjhafkdhsj"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <button className='text-end mt-3 mx-auto px-3 my-auto text-lg p-2 px-5 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white'>Change Password</button>
            </div> */}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Setting
