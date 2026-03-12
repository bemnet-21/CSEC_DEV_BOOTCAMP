import React from 'react'
import type { JobCardProps } from '../../interface'
import { Bookmark, Share, Star } from 'lucide-react'

const DetailCard = ({ 
  company_logo, 
  company_name, 
  job_title, 
  job_type, 
  rating, 
  location, 
  experience, 
  applicants, 
  detail_desc, 
  responsibilites 
}: JobCardProps) => {
  return (
    <div className='bg-white border border-slate-200 shadow-sm rounded-2xl overflow-hidden max-w-4xl mx-auto'>
      <div className='p-5 md:p-8 border-b border-slate-100'>
        <div className='flex flex-col md:flex-row md:items-start justify-between gap-6'>
          
          <div className='flex flex-col sm:flex-row gap-4 md:gap-6 items-center sm:items-start text-center sm:text-left'>
            <div className='h-20 w-20 shrink-0 bg-slate-50 rounded-2xl border border-slate-100 p-2 flex items-center justify-center shadow-sm'>
                <img src={company_logo} alt={company_name} className="max-h-full max-w-full object-contain" />
            </div>

            <div className='flex flex-col'>
                <h1 className='font-bold text-2xl text-slate-900 leading-tight'>{job_title}</h1>
                <div className='flex items-center justify-center sm:justify-start gap-x-2 mt-1'>
                    <span className='font-medium text-slate-600'>{company_name}</span>
                    <span className='flex items-center gap-1 px-2 py-0.5 bg-amber-50 text-amber-600 rounded-md text-sm font-bold'>
                        <Star size={14} fill="currentColor" />
                        {rating}
                    </span>
                </div>
            </div>
          </div>

          <div className='flex items-center justify-center gap-x-3'>
            <button className='p-2.5 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors'>
                <Share size={20} />
            </button>
            <button className='p-2.5 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors'>
                <Bookmark size={20} />
            </button>
            <button className='flex-1 md:flex-none text-white font-semibold bg-primaryBlue px-8 py-2.5 rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-100'>
                Apply Now
            </button>
          </div>
        </div>
      </div>
      
      <div className='flex flex-col w-full lg:flex-row lg:justify-between'>
        <div className='p-5 w-full lg:w-36 lg:shrink-0 md:p-8 bg-slate-50/50'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4'>
                    <div className='flex items-center gap-x-3'>
                        <div className='flex flex-col min-w-0'>
                            <span className='text-[11px] uppercase tracking-wider font-semibold text-slate-400'>Job-Type</span>
                            <span className='text-sm font-bold text-slate-700 '>{job_type}</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <div className='flex flex-col min-w-0'>
                            <span className='text-[11px] uppercase tracking-wider font-semibold text-slate-400'>Location</span>
                            <span className='text-sm font-bold text-slate-700 '>{location}</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <div className='flex flex-col min-w-0'>
                            <span className='text-[11px] uppercase tracking-wider font-semibold text-slate-400'>Experience</span>
                            <span className='text-sm font-bold text-slate-700 '>{experience}</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <div className='flex flex-col min-w-0'>
                            <span className='text-[11px] uppercase tracking-wider font-semibold text-slate-400'>Number of Applicants</span>
                            <span className='text-sm font-bold text-slate-700 '>{applicants}</span>
                        </div>
                    </div>
            </div>
        </div>
        <div className='p-5 md:p-8 flex flex-col gap-y-8'>
            <section>
                <h2 className='text-lg font-bold text-slate-900 mb-3'>Job Description</h2>
                <p className='text-slate-600 leading-relaxed'>
                    {detail_desc}
                </p>
            </section>

            <section>
                <h2 className='text-lg font-bold text-slate-900 mb-3'>Key Responsibilities</h2>
                <ul className='grid gap-y-3'>
                    {responsibilites.map((res, index) => (
                        <li key={index} className='flex items-start gap-x-3 text-slate-600'>
                            <span className='mt-1.5 h-1.5 w-1.5 rounded-full bg-primaryBlue shrink-0' />
                            <span className='leading-relaxed place-self-start'>{res}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
      </div>
    </div>
  )
}



export default DetailCard