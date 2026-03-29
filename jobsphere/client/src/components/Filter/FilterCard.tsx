import React from 'react'

const FilterCard = () => {
  return (
    <div className='bg-white w-72 h-fit flex flex-col rounded-2xl shadow-2xl px-6 py-8 gap-y-4 sm:w-fit'>
      <h1 className='font-bold text-2xl place-self-center'>Filter</h1>
      <div className='grid grid-cols-1 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1'>
        <div className='flex flex-col gap-y-2'>
          <div>Date Posted</div>
          <select className='w-full border border-gray-500 rounded-sm focus:outline-none'>
            <option>Last 24</option>
            <option>Last Month</option>
            <option>Last 3 Month</option>
          </select>
        </div>
        <div className='flex flex-col gap-y-2'>
          <div>Job Type</div>
          <div className='border border-gray-500 rounded-sm p-2 gap-y-3'>
            <label className='flex items-center gap-x-3'>
              <input type='checkbox' />
              <h2>Full-Time</h2>
            </label>
            <label className='flex items-center gap-x-3'>
              <input type='checkbox' />
              <h2>Part-Time</h2>
            </label>
            <label className='flex items-center gap-x-3'>
              <input type='checkbox' />
              <h2>Contract</h2>
            </label>
            <label className='flex items-center gap-x-3'>
              <input type='checkbox' />
              <h2>Volunteer</h2>
            </label>
            <label className='flex items-center gap-x-3'>
              <input type='checkbox' />
              <h2>Internship</h2>
            </label>
            <label className='flex items-center gap-x-3'>
              <input type='checkbox' />
              <h2>Remote</h2>
            </label>
            <label className='flex items-center gap-x-3'>
              <input type='checkbox' />
              <h2>Hybrid</h2>
            </label>
            <label className='flex items-center gap-x-3'>
              <input type='checkbox' />
              <h2>On-Site</h2>
            </label>
          </div>
        </div>
        <div className='flex flex-col gap-y-2'>
          <div>Location</div>
          <input type='text' placeholder='location' className='border border-gray-500 px-2 rounded-sm'/>
        </div>
        <div className='flex flex-col gap-y-2'>
          <div>Experience</div>
          <select className='w-full border border-gray-500 rounded-sm focus:outline-none'>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Expert</option>
          </select>
        </div>
      </div>
      
    </div>
  )
}

export default FilterCard
