import React from 'react';
import TypewriterClass from 'typewriter-effect';
import Photo from '../assets/photo-profile.png';
import Button from './Button';

const Jumbotron = () => {
    return (
        <div className='flex flex-col items-center justify-center md:flex-row lg:flex-row xl:flex-row gap-3'>
            <div className='flex flex-col md:w-[70%] lg:w-full justify-around gap-3'>
                <h2 className='text-light text-[18px] md:text-[18px] xl:text-[24px] font-medium'>
                    Ramadhan Herdianto
                </h2>
                <span
                    id='job-title'
                    className='text-[24px] md:text-[32px] xl:text-[42px] font-bold whitespace-pre-wrap'
                >
                    <TypewriterClass
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            strings: ['Front-End Developer', 'UI Engineer'],
                        }}
                    />
                </span>
                <p className='w-[90%] sm:w-[80%] md:w-[95%] lg:w-[90%] xl:w-[80%] text-[12px] md:text-[12px] lg:text-[14px] text-light'>
                    I have a passion for developing user-friendly, accessible and responsive
                    websites. I never stop learning and for me, each new project is another
                    adventure.
                </p>
                <Button
                    id='btn-primary'
                    className='mt-4'
                    textBtn={'Contact Me'}
                    href={'#contact'}
                />
            </div>
            <div className='flex justify-center items-center w-full sm:w-[70%] md:w-[80%] lg:w-full xl:w-[80%] 2xl:w-[80%] animation-image'>
                <svg
                    className='relative w-[300px] sm:w-[400px] drop-shadow-[0px_10px_100px_#D72F93]'
                    viewBox='0 0 479 467'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                >
                    <defs>
                        <linearGradient id='myGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
                            <stop offset='0%' stopColor='#FF7686' />
                            <stop offset='100%' stopColor='#D72F93' />
                        </linearGradient>
                    </defs>
                    <mask id='mask0' mask-type='alpha'>
                        <path d='M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z' />
                    </mask>
                    <g mask='url(#mask0)' fill='url(#myGradient)'>
                        <path d='M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z' />
                        <image className='w-[500px]' x='0' y='85' href={Photo} />
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default Jumbotron;
