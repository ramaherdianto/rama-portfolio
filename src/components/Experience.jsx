// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { Experiences } from '../data/ExperienceData';
import React from 'react';

const Experience = () => {
    return (
        <section id='experience' className='py-[100px] mb-[100rem]'>
            <div className='bg-dark2 transition-all duraiton-[0.4s] ease-in-out py-8 px-6 hidden sm:flex flex-wrap items-center justify-around rounded-[12px] gap-x-[20px] gap-y-[40px]'>
                {Experiences.map((experience, index) => {
                    return (
                        <div
                            key={index}
                            className='bg-blueDark transition-all duration-[0.4s] ease-linear flex flex-col justify-center w-[250px] sm:w-[200px] md:h-[200px] md:w-[200px] p-4 gap-[10px] rounded-[12px] hover:bg-gradient-to-br from-red1 to-red2 hover:scale-110'
                        >
                            <img src={experience.img} alt='' className='w-fit' />
                            <h2 className='text-light text-[14px] font-semibold mt-4'>
                                {experience.title}
                            </h2>
                            <p className='text-light  text-[10px]'>{experience.company}</p>
                            <span className='text-light font-light text-[8px]'>
                                {experience.date}
                            </span>
                        </div>
                    );
                })}
            </div>
            <Swiper
                className='mySwiper transition-all duraiton-[0.4s] ease-in-out flex sm:hidden bg-dark2 py-8 px-6 flex-wrap items-center justify-around rounded-[12px] gap-x-[20px]'
                breakpoints={{
                    150: {
                        spaceBetween: 180,
                    },
                    200: {
                        spaceBetween: 150,
                    },
                    250: {
                        spaceBetween: 110,
                    },
                    300: {
                        spaceBetween: 60,
                    },
                    350: {
                        spaceBetween: 20,
                    },
                    400: {
                        spaceBetween: -20,
                    },
                    450: {
                        spaceBetween: -70,
                    },
                    500: {
                        spaceBetween: -120,
                    },
                    550: {
                        spaceBetween: -170,
                    },
                    600: {
                        spaceBetween: -230,
                    },
                }}
            >
                {Experiences.map((experience, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div
                                key={index}
                                className='bg-blueDark transition-all duration-[0.4s] ease-linear flex flex-col justify-center w-[250px] sm:w-[200px] md:h-[200px] md:w-[200px] p-4 gap-[10px] rounded-[12px] hover:bg-gradient-to-br from-red1 to-red2 hover:scale-110'
                            >
                                <img src={experience.img} alt='' className='w-fit' />
                                <h2 className='text-light text-[16px] font-semibold mt-4'>
                                    {experience.title}
                                </h2>
                                <p className='text-light  text-[12px]'>{experience.company}</p>
                                <span className='text-light font-light text-[10px]'>
                                    {experience.date}
                                </span>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Experience;
