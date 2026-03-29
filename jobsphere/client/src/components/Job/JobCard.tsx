import React from 'react'
import type { JobCardProps } from '../../interface'
import { Bookmark, Share } from 'lucide-react'

const JobCard = ({ company_logo, company_name, job_title, tags, description } : JobCardProps) => {
  return (
    <div className='bg-white max-w-160 h-fit flex rounded-2xl gap-x-4 py-6 px-4'>
      <div>
        <img src={company_logo} className='w-64 sm:w-fit'/>
      </div>
      <div className='flex flex-col gap-y-3'>
        <div className='flex justify-between'>
            <div className='font-bold text-xl'>{job_title}</div>
            <div className='flex gap-x-3'>
                <Bookmark />
                <Share />
            </div>
        </div>
        <div>{company_name}</div>
        <div className='flex flex-col gap-3 sm:flex-row'>
            {
                tags.map((tag) => (
                    <div className='bg-gray-300 w-fit px-2 py-1 rounded-md'>
                        {tag}
                    </div>
                ))
            }
        </div>
        <div>{description}</div>
      </div>
    </div>
  )
}

export default JobCard
