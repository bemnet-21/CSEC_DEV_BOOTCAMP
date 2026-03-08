import React from 'react'

const Hero = () => {
  return (
    <section className='bg-primaryBlue h-130 relative overflow-hidden flex items-center justify-center text-center px-6 sm:justify-start'>
        
        <img src='/assets/pattern.png' className='absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none' />
        
        <img src='/assets/image_coba.png' className='absolute w-96 -right-10 top-10 select-none sm:top-30 sm:w-96 sm:right-22 md:w-130 md:right-25 md:top-20 lg:w-150 lg:right-20 lg:top-15 xl:right-60' />
        
        <img src='/assets/Saly-26.png' className='absolute w-40 bottom-0 left-0  select-none lg:w-80' />

        <div className='relative z-10 p-5 max-w-130 flex flex-col  gap-y-4 sm:text-left sm:max-w-100 md:max-w-130 '>
            <h1 className='font-bold text-4xl md:text-5xl text-white leading-tight '>
                Find Your Dream Job With Ease
            </h1>
            <p className='font-light text-lg md:text-xl text-blue-100/80 max-w-xl'>
                Search, Apply, and Track Job Applications <br className='hidden md:block' /> 
                All in One Place
            </p>
        </div>
        <img src='/assets/hero.png' className='hidden absolute w-96 -right-10 bottom-0 select-none sm:block  lg:w-120 xl:right-30' />
    </section>
  )
}

export default Hero