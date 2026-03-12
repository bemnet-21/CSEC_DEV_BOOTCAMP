import React from 'react'
import type { SavedJobCardProps } from '../../interface'
import { SAVEDJOBS } from '../../constants'
import SavedJobsCard from './RelatedJobsCard'

const RelatedJobs = () => {
  const savedJobs : SavedJobCardProps[] = SAVEDJOBS
  return (
    <div className='bg-white w-80 h-fit flex flex-col rounded-2xl shadow-2xl px-6 py-8 gap-y-4 sm:w-fit '>
      <h1 className='font-bold text-2xl place-self-center'>Related Jobs</h1>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1'>
        {savedJobs && savedJobs.map((saved) => (
            <SavedJobsCard key={saved.id} id={saved.id} company_logo={saved.company_logo} company_name={saved.company_name} job_title={saved.job_title} tags={saved.tags} />
        ))}
      </div>
    </div>
  )
}

export default RelatedJobs
