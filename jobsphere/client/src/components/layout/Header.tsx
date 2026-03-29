import { Menu } from 'lucide-react'
import React, { useState } from 'react'
import MenuModal from '../Modal/MenuModal'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import { logout } from '../../store/authSlice'

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

    
  return (
    <header className='w-full h-24 flex justify-between items-center px-6 shadow-xl'>
        <h1 className='text-4xl font-bold text-white bg-primaryBlue p-2 rounded-xl cursor-pointer hover:bg-primaryBlue/20 hover:text-primaryBlue sm:hidden'>JS</h1>
        <div className='hidden bg-primaryBlue rounded-xl cursor-pointer sm:block'>
            <img src='/assets/logo.png' />
        </div>
        
        <div className='hidden gap-x-4 text-md md:flex lg:gap-x-8'>
            <div className='transform duration-300 cursor-pointer hover:scale-115 hover:text-primaryBlue/50'>Job Search</div>
            <div className='transform duration-300 cursor-pointer hover:scale-115 hover:text-primaryBlue/50'>My Applications</div>
            <div className='transform duration-300 cursor-pointer hover:scale-115 hover:text-primaryBlue/50'>Companies</div>
            <div className='transform duration-300 cursor-pointer hover:scale-115 hover:text-primaryBlue/50'>Contact Us</div>
        </div>
        {
            (isAuthenticated) ? (
                <div className='hidden items-center gap-x-4 lg:flex'>
                    {
                        (user?.role === 'recruiter') ? (
                            <div className='bg-primaryBlue text-white px-5 py-2 rounded-lg cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-10px_rgba(var(--primary-blue-rgb),0.5)] hover:brightness-110 active:scale-95'>
                                Add Job
                            </div>
                        ) : (
                            <div className='bg-primaryBlue text-white px-5 py-2 rounded-lg cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-10px_rgba(var(--primary-blue-rgb),0.5)] hover:brightness-110 active:scale-95'>
                                My Profile
                            </div>
                        )
                    }
                    
                    <div className='border border-primaryBlue/30 text-primaryBlue px-5 py-2 rounded-lg cursor-pointer transition-all duration-300 ease-out hover:bg-primaryBlue/5 hover:border-primaryBlue active:scale-95' onClick={() => dispatch(logout())}>
                        Logout
                    </div>
                </div>
            ) : (

                <div className='hidden items-center gap-x-4 lg:flex'>
                    <div className='bg-primaryBlue text-white px-5 py-2 rounded-lg cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-10px_rgba(var(--primary-blue-rgb),0.5)] hover:brightness-110 active:scale-95'>
                        Login
                    </div>
                    <div className='border border-primaryBlue/30 text-primaryBlue px-5 py-2 rounded-lg cursor-pointer transition-all duration-300 ease-out hover:bg-primaryBlue/5 hover:border-primaryBlue active:scale-95'>
                        Sign in
                    </div>
                </div>
            )
        }
        <Menu className='text-primaryBlue size-8 cursor-pointer lg:hidden' onClick={() => setIsOpen(!isOpen)} />
        <MenuModal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} />
    </header>
  )
}

export default Header
