import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { MenuModalProps } from '../../interface';
import { X } from 'lucide-react';

const MenuModal = ({ isOpen, onClose } : MenuModalProps ) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Job Search', href: '#' },
    { name: 'My Applications', href: '#' },
    { name: 'Companies', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-50 h-full w-70 bg-white p-6 shadow-2xl lg:hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <div className='bg-primaryBlue rounded-xl cursor-pointer'>
                <img src='/assets/logo.png' />
              </div>  
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            <nav className="flex flex-col gap-y-2 md:hidden">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-x-4 px-4 py-3 text-gray-700 rounded-xl transition-all hover:bg-primaryBlue/5 hover:text-primaryBlue group"
                >
                  <span className="font-medium">{link.name}</span>
                </a>
              ))}
            </nav>

            <div className="mt-auto pt-8 flex flex-col gap-y-4">
              <div className='bg-primaryBlue text-white text-center px-2 py-3 rounded-xl cursor-pointer 
                            transition-all duration-300 hover:brightness-110 active:scale-95 font-medium'>
                Login
              </div>
              <div className='border border-primaryBlue/30 text-primaryBlue text-center px-2 py-3 rounded-xl cursor-pointer 
                            transition-all duration-300 hover:bg-primaryBlue/5 active:scale-95 font-medium'>
                Sign in
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MenuModal;