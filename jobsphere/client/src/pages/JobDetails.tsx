import { ChevronLeft, MapPin, Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DetailCard from '../components/JobDetails/DetailCard'
import RelatedJobs from '../components/RelatedJobs/RelatedJobs'
import type { JobCardProps } from '../interface'
import { getJob } from '../api/jobs.service'

const JobDetails = () => {
  const [job, setJob] = useState<JobCardProps>()
  const { id } = useParams()
  console.log("ID:", id)
  const navigate = useNavigate()


  const fetchJob = async () => {
    const res = await getJob(id as string)
    setJob(res.data.data)
  }

  useEffect(() => {
    fetchJob()
  }, [])
  return (
    <section className='flex flex-col font-sans min-h-screen gap-y-8 bg-gray-100 p-6'>
      <div className='flex flex-col gap-y-4 gap-x-24 lg:flex-row lg:items-center'>
        <div className='flex gap-x-2 cursor-pointer' onClick={() => navigate('/')}>
          <ChevronLeft />
          <h1>Back</h1>
        </div>
        <form className='bg-white p-2 rounded-2xl shadow-xl shadow-blue-900/5 flex flex-col md:flex-row items-center gap-2 w-full border border-gray-100'>
            
            <div className='flex-[1.5] flex items-center gap-x-3 px-4 py-3 w-full'>
              <Search className=' shrink-0' size={20} />
              <input 
                type='text' 
                placeholder='Job title, keyword or company...' 
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
      <div className='flex flex-col gap-y-8 xl:flex-row'>

        {
          job && <DetailCard _id={job._id} company_logo={job.company_logo} applicants={job.applicants} company_name={job.company_name} job_title={job.job_title} job_type={job.job_type} tags={job.tags} description={job.description} detail_desc={job.detail_desc} rating={job.rating} responsibilities={job.responsibilities} location={job.location} experience={job.experience} />
        }
        <div className='place-self-center xl:place-self-auto'>
          <RelatedJobs />
        </div>
      </div>
    </section>
  )
}

export default JobDetails
