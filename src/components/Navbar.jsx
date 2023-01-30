import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { navlinks } from '../data/Navlink';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.onscroll = function () {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
    }, []);

    return (
        <>
            <nav
                className={
                    scrolled
                        ? 'bg-dark fixed active top-0 w-full z-10 transition-all duration-300 ease-out'
                        : 'bg-transparent fixed top-0 w-full z-10 transition-all duration-300 ease-out'
                }
            >
                <div className='max-w-7xl mx-auto'>
                    <div className='flex items-center h-16 px-4 sm:px-4 md:px-4 lg:px-4 xl:px-0 2xl:px-0'>
                        <div className='flex items-center w-full justify-between gap-16'>
                            <div className='flex-shrink-0'>
                                <svg
                                    width='50'
                                    height='50'
                                    viewBox='0 0 81 54'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M58.6875 0.796875H62.2031C71.7865 0.796875 77.5156 4.05208 79.3906 10.5625C79.9896 12.6719 80.2891 15.1068 80.2891 17.8672V54H58.6875V0.796875ZM29.7031 0.796875H51.4219V54H29.7031V0.796875ZM0.640625 0.796875H22.3594V54H0.640625V0.796875Z'
                                        fill='url(#paint0_linear_1_426)'
                                    />
                                    <defs>
                                        <linearGradient
                                            id='paint0_linear_1_426'
                                            x1='-6'
                                            y1='11.1563'
                                            x2='44.8044'
                                            y2='72.4311'
                                            gradientUnits='userSpaceOnUse'
                                        >
                                            <stop stopColor='#FF7686' />
                                            <stop offset='1' stopColor='#D72F93' />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className='hidden sm:hidden md:hidden lg:block xl:block 2xl:block ml-auto'>
                                <div className='flex items-center justify-end md:pl-[4rem] lg:pl-[4rem] xl:pl-[4rem] 2xl:pl-[4rem] space-x-3'>
                                    {navlinks.map((item, index) => {
                                        return (
                                            <a
                                                key={index}
                                                href={item.link}
                                                className='relative text-light transition-all duration-300 ease-in-out after:transition-all after:duration-300 after:ease-in-out after:absolute after:left-[13px] after:bottom-1 after:w-0 after:h-[2.5px] hover:after:w-[50%] hover:after:h-[2.5px] after:bg-gradient-to-r from-red1 to-red2 hover:text-white px-3 py-2 rounded-md text-[14px]'
                                            >
                                                {item.text}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 lg:hidden xl:hidden 2xl:hidden'>
                            <a
                                href='#'
                                className='relative text-lg after:absolute after:top-[7px] after:right-0 after:w-[6px] after:h-[6px] after:bg-primary after:rounded-[50%]'
                            >
                                <i className='ri-shopping-bag-line'></i>
                            </a>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type='button'
                                className='bg-gradient-to-br from-red1 to-red2 rounded-[50%] p-2'
                                aria-controls='mobile-menu'
                                aria-expanded='false'
                            >
                                <span className='sr-only'>Open main menu</span>

                                <svg
                                    className='block h-6 w-6 text-light'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='3'
                                        d='M4 6h16M4 12h16M4 18h16'
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {!isOpen ? (
                    false
                ) : (
                    <div
                        className='block z-20 relative transition-all duration-300 ease-in-out sm:block lg:hidden xl:hidden 2xl:hidden shadow-sm'
                        id='mobile-menu'
                    >
                        <motion.div
                            animate={{ x: [500, 0], y: 0 }}
                            transition={{ duration: 0.45, ease: 'easeOut' }}
                            className='inner__mobile__menu bg-dark fixed'
                        >
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type='button'
                                className='p-2 absolute right-5 bg-gradient-to-br from-red1 to-red2 rounded-[50%]'
                                aria-controls='mobile-menu'
                                aria-expanded='false'
                            >
                                <span className='sr-only'>Open main menu</span>

                                <svg
                                    className='block h-6 w-6 text-light'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='3'
                                        d='M6 18L18 6M6 6l12 12'
                                    />
                                </svg>
                            </button>
                            <div className='flex flex-col mt-10 px-2 pt-2 pb-3 space-y-3 sm:px-3'>
                                {navlinks.map((item, index) => {
                                    return (
                                        <a
                                            key={index}
                                            href={item.link}
                                            className='transition duration-300 ease-in-out hover:text-red1 text-light relative px-3 py-2 rounded-md text-lg'
                                        >
                                            {item.text}
                                        </a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
