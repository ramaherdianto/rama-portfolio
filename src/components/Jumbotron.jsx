import React from 'react';
import TypewriterClass from 'typewriter-effect';
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
                            delay: 30,
                            strings: ['Front-End Developer', 'UI Engineer'],
                        }}
                    />
                </span>
                <p className='w-[90%] sm:w-[80%] md:w-[95%] lg:w-[90%] xl:w-[80%] text-[12px] md:text-[12px] lg:text-[14px] text-light'>
                    I have a passion for developing user-friendly, accessible and responsive
                    websites. I never stop learning and for me, each new project is another
                    adventure.
                </p>
                <Button id='btn-primary' className='mt-4' textBtn={'Contact Me'} />
            </div>
            <div className='w-full sm:w-full md:w-full lg:w-[80%] xl:w-[80%] 2xl:w-[80%] animation-image'>
                <lottie-player
                    // src='https://assets5.lottiefiles.com/packages/lf20_ecSLfXq2zL.json'
                    src='https://assets5.lottiefiles.com/private_files/lf30_fjln45y5.json'
                    background='transparent'
                    speed='1'
                    loop
                    autoplay
                ></lottie-player>
            </div>
        </div>
    );
};

export default Jumbotron;
