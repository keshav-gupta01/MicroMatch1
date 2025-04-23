import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import Hamburger from '../assets/hamburgerMenu.svg'
import Close from '../assets/close.svg'
import { motion } from 'framer-motion'

import UserTypeSelection from './UserTypeSelection'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const [showUserTypeSelection, setShowUserTypeSelection] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const handleGetStarted = () => {
        setShowUserTypeSelection(true)
    }

    const closeUserTypeSelection = () => {
        setShowUserTypeSelection(false)
    }

    return (
        <>
            <div className='w-full h-[96px] bg-white shadow-sm'>
                <div className='p-4 md:max-w-[1080px] max-w-[400px] m-auto w-full h-full flex justify-between items-center'>
                    <img src={Logo} alt="logo" className='h-[25px] cursor-pointer' />
                    <div className="flex items-center">
                        <ul className='hidden md:flex gap-4 '>
                            <li className='cursor-pointer'>Home</li>
                            <li className='cursor-pointer'>About</li>
                            <li className='cursor-pointer'>Support</li>
                        </ul>
                    </div>
                    <div className='md:flex hidden'>
                        <button 
                            onClick={handleGetStarted}
                            className='px-8 py-3 bg-[#104581] text-white rounded-lg hover:bg-[#0d3a6d] transition-all'
                        >
                            Get started
                        </button>
                    </div>
                    <motion.div whileTap={{ scale: 0.6 }} className="md:hidden cursor-pointer" onClick={handleToggle}>
                        <img src={toggle ? Close : Hamburger} alt="hamburger" />
                    </motion.div>
                </div>
                <div>
                    <motion.ul
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className={toggle ? 'absolute z-10 p-4 bg-white w-full px-8 md:hidden' : 'hidden'}>
                        <li className='p-4 hover:bg-gray-50 cursor-pointer'>Home</li>
                        <li className='p-4 hover:bg-gray-50 cursor-pointer'>About</li>
                        <li className='p-4 hover:bg-gray-50 cursor-pointer'>Support</li>
                        <div className='flex flex-col my-4'>
                            <button 
                                onClick={handleGetStarted}
                                className='w-full text-white px-8 py-5 bg-[#104581] rounded-lg hover:bg-[#0d3a6d] transition-all'
                            >
                                Get started
                            </button>
                        </div>
                    </motion.ul>
                </div>
            </div>

            {showUserTypeSelection && (
                <UserTypeSelection onClose={closeUserTypeSelection} />
            )}
        </>
    )
}

export default Navbar