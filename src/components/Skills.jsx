// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';

import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';

import React from 'react';
import { SkillsData } from '../data/SkillsData';
import HeadingSection from './HeadingSection';

const Skills = () => {
    return (
        <section id='skills' className='pt-[100px] pb-0 sm:pb-[50px]'>
            <div className='flex flex-col items-center justify-center gap-y-[50px] sm:gap-y-[100px]'>
                <HeadingSection
                    headingText='Skills'
                    headingDesc='These are the skills or tools I usually use to create a website'
                />
                <div className='sm:flex hidden flex-wrap justify-center items-center gap-x-10 gap-y-10'>
                    {SkillsData.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className='group flex flex-col items-center justify-center gap-6 cursor-pointer'
                            >
                                <div className='bg-dark2 rounded-[50%] p-5 group-hover:bg-blueDark transition-all duration-[0.4s] ease-linear'>
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className='w-[70px] h-[70px]'
                                    />
                                </div>
                                <h3 className='text-light text-base'>{item.name}</h3>
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
                            slidesPerView: 2,
                            spaceBetween: -80,
                        },
                        450: {
                            slidesPerView: 2,
                            spaceBetween: -70,
                        },
                        500: {
                            slidesPerView: 2,
                            spaceBetween: -120,
                        },
                        550: {
                            slidesPerView: 2,
                            spaceBetween: -170,
                        },
                        600: {
                            slidesPerView: 2,
                            spaceBetween: -230,
                        },
                    }}
                >
                    {SkillsData.map((item, index) => {
                        return (
                            <SwiperSlide
                                key={index}
                                className='w-fit flex justify-center items-center sm:justify-start'
                            >
                                <div className='group flex flex-col w-fit items-center justify-center gap-6 cursor-pointer'>
                                    <div className='bg-dark2 rounded-[50%] p-5 group-hover:bg-blueDark transition-all duration-[0.4s] ease-linear'>
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className='w-[70px] h-[70px]'
                                        />
                                    </div>
                                    <h3 className='text-light text-base'>{item.name}</h3>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
};

export default Skills;
