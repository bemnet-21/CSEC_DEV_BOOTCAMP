import React from 'react'
import type { JobCardProps } from '../../interface'
import { Bookmark, Share } from 'lucide-react'

const DetailCard = ({ company_logo, company_name, job_title, job_type, rating, location, experience, applicants, detail_desc, responsibilites } : JobCardProps) => {
  return (
    <div className='bg-white flex flex-col'>
      <div className='flex flex-col'>
        <div>
            <img src={company_logo} />
        </div>
        <div className='flex flex-col'>
            <div>{job_title}</div>
            <div className='flex'>
                <div>{company_name}</div>
                <div>{rating}</div>
            </div>
        </div>
        <div>
            <div className='flex'>
                <Bookmark />
                <Share />
            </div>
            <button>
                Apply Now
            </button>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='grid grid-cols-2'>
            <div className='flex flex-col'>
                <div>Job-Type</div>
                <div>{job_type}</div>
            </div>
            <div className='flex flex-col'>
                <div>Location</div>
                <div>{location}</div>
            </div>
            <div className='flex flex-col'>
                <div>Experience</div>
                <div>{experience}</div>
            </div>
            <div className='flex flex-col'>
                <div>Number of Applicants</div>
                <div>{applicants}</div>
            </div>
        </div>
        <div>
            <div>
                <h1>Job Description</h1>
                <p>{detail_desc}</p>
            </div>
            <div>
                <h1>Key responsibilities</h1>
                <ul>
                    {
                        responsibilites.map((res) => (
                            <li>{res}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DetailCard
