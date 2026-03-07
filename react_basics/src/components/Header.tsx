import React from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'

const Header = () => {
  return (
    <section className=' flex flex-col place-self-center gap-y-3 py-6  '>
        <div className='flex items-center gap-x-3'>
            <FaRegCheckCircle className='text-blue-500 text-3xl'/>
            <h1 className='text-4xl'>TO-DO List</h1>
        </div>
        <h3 className='font-light place-self-center'>Stay organized and productive</h3>
    </section>
  )
}

export default Header
