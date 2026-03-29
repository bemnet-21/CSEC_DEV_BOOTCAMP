import React from 'react'
import type { SavedJobCardProps } from '../../interface'

const RelatedJobsCard = ({ company_logo, company_name, job_title, tags } : SavedJobCardProps) => {
  return (
    <div className='border border-gray-300 shadow-xl flex items-start gap-x-3 py-3 px-4 rounded-xl'>
      <div className='w-12 h-12 '>
        <img src={company_logo} className='rounded-full grow-0'/>
      </div>
      <div className='flex flex-col gap-y-1'>
        <h1 className='text-md'>{job_title}</h1>
        <h3 className='font-light text-sm'>{company_name}</h3>
        <div className='flex gap-x-3'>
            {
                tags.map((tag) => (
                    <div className='bg-gray-300 w-fit px-1 rounded-md'>{tag}</div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default RelatedJobsCard
