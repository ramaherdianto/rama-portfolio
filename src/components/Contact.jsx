// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';

import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';

import React from 'react';
import { ContactData } from '../data/ContactData';
import HeadingSection from './HeadingSection';
import Button from './Button';

const Contact = () => {
    return (
        <section id='contact' className='pt-[100px] pb-0 sm:pb-[50px]'>
            <div className='flex flex-col items-center justify-center gap-y-[50px] sm:gap-y-[100px]'>
                <HeadingSection
                    headingText='Contact'
                    headingDesc='Feel free to reach out for any inquiries.'
                />
                <div className='sm:flex hidden flex-wrap justify-start items-center gap-x-5 gap-y-10'>
                    {ContactData.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className='hover:bg-blue w-[280px] h-auto flex flex-col items-start gap-8 cursor-pointer bg-dark2 rounded-lg p-4 transition-all duration-300 ease-linear'
                                href={item.link}
                                target='_blank'
                            >
                                <div className=''>
                                    <img
                                        src={item.logo}
                                        alt={item.name}
                                        className='w-[60px] h-[50px] object-cover aspect-square '
                                    />
                                </div>
                                <h3 className='text-light text-xl font-semibold'>{item.name}</h3>
                                <Button textBtn={'Contact me'} href={item.link} target='_blank' />
                            </div>
                        );
                    })}
                </div>
                <Swiper
                    className='mySwiper w-full flex sm:hidden items-center justify-around pb-[40px]'
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    breakpoints={{
                        150: {
                            spaceBetween: 180,
                        },
                        200: {
                            spaceBetween: 150,
                        },
                        250: {
                            slidesPerView: 1,
                            spaceBetween: 110,
                        },
                        300: {
                            spaceBetween: 60,
                        },
                        350: {
                            spaceBetween: 20,
                        },
                        400: {
                            slidesPerView: 1,
                            spaceBetween: -50,
                        },
                        450: {
                            slidesPerView: 1,
                            spaceBetween: -90,
                        },
                        500: {
                            slidesPerView: 1,
                            spaceBetween: -130,
                        },
                        550: {
                            slidesPerView: 1,
                            spaceBetween: -170,
                        },
                        600: {
                            slidesPerView: 1,
                            spaceBetween: -170,
                        },
                        630: {
                            slidesPerView: 1,
                            spaceBetween: -250,
                        },
                    }}
                >
                    {ContactData.map((item) => {
                        return (
                            <SwiperSlide
                                key={item.id}
                                className='w-fit flex justify-center items-center sm:justify-start'
                            >
                                <div
                                    key={item.id}
                                    className='hover:bg-blue w-[280px] h-auto flex flex-col items-start gap-8 cursor-pointer bg-dark2 rounded-lg p-4 transition-all duration-300 ease-linear'
                                    href={item.link}
                                    target='_blank'
                                >
                                    <div className=''>
                                        <img
                                            src={item.logo}
                                            alt={item.name}
                                            className='w-[60px] h-[50px] object-cover aspect-square '
                                        />
                                    </div>
                                    <h3 className='text-light text-xl font-semibold'>
                                        {item.name}
                                    </h3>
                                    <Button
                                        textBtn={'Contact me'}
                                        href={item.link}
                                        target='_blank'
                                    />
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
};

export default Contact;
