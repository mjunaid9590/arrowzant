import React from 'react'

const AuthorSetting = () => {
  return (
    <div>
      <div className="flex flex-col w-full mb-auto  h-full p-5">
      <h1 className='text-3xl p-5 text-center text-gray-900 dark:text-gray-100'>Settings</h1>
        <div className="container px-5 py-5 mx-auto ">
          
          <div className='flex flex-col h-full md:flex-row md:space-x-5 '>
            <div className="flex flex-col p-5 h-full md:mt-4 md:flex-wrap md:w-1/2 md:justify-evenly -m-2 bg-indigo-200 dark:bg-gray-700 py-10 rounded-2xl ">
              <div className="p-2">
                <div className="flex flex-col">
                  <label htmlFor="name" className="my-auto py-2 text-2xl leading-7 text-gray-600 dark:text-gray-100">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value="example"
                    className="w-full bg-gray-100 dark:bg-gray-800 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-gray-800 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2">
                <div className="flex flex-col">
                  <label htmlFor="email" className="leading-7 my-auto py-2 text-2xl text-gray-600 dark:text-gray-100">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value="example@abc.com"
                    className="w-full pb-3 bg-gray-100 dark:bg-gray-800 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-gray-800 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <button className='text-end mt-3 mx-auto px-3 my-auto text-lg p-2 px-5 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white'>Save</button>
            </div>
            <div className="flex flex-col p-5 h-full mt-4 md:flex-wrap md:w-1/2 md:justify-evenly -m-2 bg-indigo-200 dark:bg-gray-700 py-10 rounded-2xl ">
              <div className="p-2">
                <div className="flex flex-col">
                  <label htmlFor="password" className="my-auto py-2 text-2xl leading-7 text-gray-600 dark:text-gray-100">
                    New Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value="***********"
                    className="w-full bg-gray-100 dark:bg-gray-800 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-gray-800 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2">
                <div className="flex flex-col">
                  <label htmlFor="repeatPassword" className="leading-7 my-auto py-2 text-2xl text-gray-600 dark:text-gray-100">
                    Repeat Password:
                  </label>
                  <input
                    type="password"
                    id="repeatPassword"
                    name="repeatPassword"
                    value="***********"
                    className="w-full pb-3 bg-gray-100 dark:bg-gray-800 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-gray-800 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <button className='text-end mt-3 mx-auto px-3 my-auto text-lg p-2 px-5 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white'>Save</button>
            </div>
            {/* <div className="flex flex-col p-5 h-full md:flex-wrap md:w-1/2 md:justify-evenly -m-2 bg-indigo-200 py-10 rounded-2xl ">
              <div className="p-2">
                <div className="flex flex-col">
                <label htmlFor="password" className="my-auto py-2 text-2xl leading-7 text-gray-600 dark:text-gray-100">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value='jkdfhaskfhjks'
                    className="w-full bg-gray-100 dark:bg-gray-800 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-gray-800 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2">
                <div className="flex flex-col">
                  <label htmlFor="repeatPassword" className="leading-7 my-auto py-2 text-2xl text-gray-600 dark:text-gray-100">
                    Repeat Password:
                  </label>
                  <input
                    type="password"
                    id="repeatPassword"
                    name="repeatPassword"
                    value="ksdjhafkdhsj"
                    className="w-full bg-gray-100 dark:bg-gray-800 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-gray-800 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <button className='text-end mt-3 mx-auto px-3 my-auto text-lg p-2 px-5 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white'>Change Password</button>
            </div> */}
          </div>
        </div>

    </div>

    </div>
  )
}

export default AuthorSetting
