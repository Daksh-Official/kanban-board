import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='w-full h-14 flex justify-between items-center p-6'>
      <Link href="/" className='text-lg font-bold'><span className='text-orange-500'>Kanban</span>-Board</Link>

      <div className='w-1/2'>
        <form className="flex items-center mx-auto space-x-2">
          <label htmlFor="voice-search" className="sr-only">Search</label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
            </div>
            <input type="text" id="voice-search" className="block w-full ps-9 pe-3 py-2.5 
            border-gray-400 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-3xl focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Search Cards..." required />
            <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
              <svg className="w-4 h-4 text-body hover:text-heading" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9v3a5.006 5.006 0 0 1-5 5h-4a5.006 5.006 0 0 1-5-5V9m7 9v3m-3 0h6M11 3h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z" /></svg>
            </button>
          </div>
          <button type="submit" className="inline-flex items-center bg-blue-600 text-white bg-brand hover:bg-brand-strong box-border border border-transparent hover:bg-blue-500 cursor-pointer rounded-md focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
            Search
          </button>
        </form>
      </div>

      <div className='flex items-center gap-3 flex-row'>
        <h2 className='w-fit font-thin text-xl'>Daksh Gupta</h2>
        <div className='w-6 h-6 rounded-full bg-white'></div>
      </div>
    </nav>
  )
}
export default Navbar
