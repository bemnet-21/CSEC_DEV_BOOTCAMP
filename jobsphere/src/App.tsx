import { Bookmark, Filter, MapPin, Search } from 'lucide-react'
import './App.css'
import Hero from './components/Hero/Hero'
import Header from './components/layout/Header'
import JobCard from './components/Job/JobCard'
import { JOBS } from './constants'
import type { JobCardProps } from './interface'

function App() {
  const jobs: JobCardProps[] = JOBS
  return (
    <section className='font-sans min-h-screen bg-gray-100'>
      <Header />
      <Hero />
      
      <main className='max-w-7xl mx-auto flex flex-col gap-y-8 px-4 sm:px-6 py-8'>
        
        <div className='flex flex-col md:flex-row items-center gap-4 w-full'>
          
          <div className='flex items-center gap-x-2 w-full md:w-auto'>
            <div className='bg-white p-4 rounded-2xl shadow-sm border border-gray-200 cursor-pointer hover:bg-gray-50  flex-1 flex justify-center'>
              <Filter className='text-gray-600' size={20} />
            </div>
            
            <div className='bg-white p-4 rounded-2xl shadow-sm border border-gray-200 cursor-pointer hover:bg-gray-50  flex-1 flex justify-center'>
              <Bookmark className='text-gray-600' size={20} />
            </div>
          </div>

          <form className='bg-white p-2 rounded-2xl shadow-xl shadow-blue-900/5 flex flex-col md:flex-row items-center gap-2 w-full border border-gray-100'>
            
            <div className='flex-[1.5] flex items-center gap-x-3 px-4 py-3 w-full'>
              <Search className=' shrink-0' size={20} />
              <input 
                type='text' 
                placeholder='Job title or company...' 
                className='w-full focus:outline-none text-gray-700 placeholder:text-gray-400 font-medium bg-transparent text-sm sm:text-base'
              />
            </div>

            <div className='hidden md:block w-px h-8 bg-gray-200' />

            <div className='flex-1 flex items-center gap-x-3 px-4 py-3 w-full border-t md:border-t-0 border-gray-100'>
              <MapPin className='shrink-0' size={20} />
              <input 
                type='text' 
                placeholder='Location' 
                className='w-full focus:outline-none text-gray-700 placeholder:text-gray-400 font-medium bg-transparent text-sm sm:text-base'
              />
            </div>

            <button className='bg-primaryBlue text-white px-8 py-3 md:py-4 rounded-xl font-bold transition-all w-full md:w-auto hover:brightness-110 active:scale-95 whitespace-nowrap'>
              Search
            </button>
          </form>

          
        </div>

        {/* Jobs Grid/List */}
        <div className='grid grid-cols-1 gap-4'>
          {jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </main>
    </section>
  )
}

export default App
