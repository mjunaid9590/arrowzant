// components/Pagination.js
import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';


const ChapterPagination = ({ totalPages, currentPage, resultsPerPage, totalResults, pageLink, nextPrevButtons, resultsCount }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const maxVisiblePages = 4;
  const calculateVisiblePages = () => {
    const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);
    const startPage =
      currentPage <= halfMaxVisiblePages ? 1 : currentPage - halfMaxVisiblePages;
    const endPage =
      startPage + maxVisiblePages - 1 <= totalPages
        ? startPage + maxVisiblePages - 1
        : totalPages;
    return { startPage, endPage };
  };
  const { startPage, endPage } = calculateVisiblePages();
  // console.log("chapters per page: ", currentPage)
  return (
    <div>

      <div className="pagination flex-row flex items-center justify-center md:justify-between w-full border-t  px-4 py-3 sm:px-6">
        {/* <div className="flex flex-1 justify-between sm:hidden w-full "> */}
        <Link
          href={`/${pageLink}/chapter-${Number(currentPage) - 1}`}
         
          className={`${(currentPage <= 1) ? "md:pointer-events-none md:opacity-0" : ""} hidden md:inline-flex  relative  items-center rounded-md border border-gray-300 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-medium dark:text-gray-200 text-gray-700 hover:bg-gray-50`}
        >
          Previous
        </Link>

        {/* </div> */}
        <div className="sm:flex sm:items-center sm:justify-between">

          <div className='bg-gray-100 dark:bg-gray-800'>
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              <Link
                href={`/${pageLink}/chapter-${currentPage - 1}`}
                className={`${(Number(currentPage) <= 1) ? "hidden" : ""} relative inline-flex items-center rounded-l-md px-2 py-2 dark:text-gray-200 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
              >
                {/* {console.log("current page: ",currentPage)} */}
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </Link>
              
              {/* Current: "z-10 bg-indigo-600 text-white dark:dark:text-gray-200 text-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "dark:text-gray-200 text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
              {/* {pageNumbers.map((page, index) => (
              
                
                <Link
                  key={index}
                  href={`/${pageLink}?page=${index + 1}`}
                  aria-current="page"
                  className={`
                ${(currentPage == (index + 1)) ?
                      "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white dark:dark:text-gray-200 text-gray-200 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" :
                      "relative inline-flex items-center px-4 py-2 text-sm font-semibold dark:text-gray-200 text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"}
                
                `}>
                  {index + 1}
                </Link>
              ))} */}
             
              {
                (startPage>1)&&
                <Link
                href={`/${pageLink}/chapter-${1}`}
                aria-current="page"
                className={`${
                  currentPage === 1
                    ? 'relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white dark:dark:text-gray-200 text-gray-200 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    : 'relative inline-flex items-center px-4 py-2 text-sm font-semibold dark:text-gray-200 text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                }`}
              >
                {1}
              </Link>
              
              }
               {
                (startPage>2)&&
                 <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold dark:text-gray-200 text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                ...
              </span> 
              
              }
             
               {Array.from({ length: endPage - startPage + 1 }, (_, i) => {
                const page = startPage + i;
                return (
                  <Link
                    key={i}
                    href={`/${pageLink}/chapter-${page}`}
                    aria-current="page"
                    className={`${
                      currentPage == page
                        ? 'relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white dark:dark:text-gray-200 text-gray-200 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                        : 'relative inline-flex items-center px-4 py-2 text-sm font-semibold dark:text-gray-200 text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                    }`}
                  >
                    {page}
                  </Link>
                );
              })}
              {
                ((endPage+1)<totalPages)&&
                 <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold dark:text-gray-200 text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                ...
              </span> 
              
              }
              
              {
                (endPage<totalPages)&&
                <Link
                href={`/${pageLink}/chapter-${totalPages}`}
                aria-current="page"
                className={`${
                  currentPage === totalPages
                    ? 'relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white dark:dark:text-gray-200 text-gray-200 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    : 'relative inline-flex items-center px-4 py-2 text-sm font-semibold dark:text-gray-200 text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                }`}
              >
                {totalPages}
              </Link>
              
              }
              <Link
                href={`/${pageLink}/chapter-${currentPage+1}`}
                className={`${(currentPage >= totalPages) ? "hidden" : ""} relative inline-flex items-center rounded-r-md px-2 py-2 dark:text-gray-200 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </Link>
              {/* <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold dark:text-gray-200 text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                ...
              </span> */}

            </nav>
          </div>
        </div>
        <Link
          href={`/${pageLink}/chapter-${currentPage+1}`}
          className={`${(currentPage >= totalPages) ? "md:pointer-events-none md:opacity-0" : ""} hidden md:inline-flex relative  items-center rounded-md border border-gray-300 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-medium dark:text-gray-200 text-gray-700 hover:bg-gray-50`}
        >
          Next
        </Link>
       
      </div>
      
    </div>
  );
};

export default ChapterPagination;
