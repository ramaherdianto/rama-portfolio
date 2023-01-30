import React from 'react';
import Experience from './Experience';
import Jumbotron from './Jumbotron';
import Navbar from './Navbar';

const MainContent = () => {
    return (
        <>
            <Navbar />
            <header className='relative max-w-7xl mt-[150px] sm:mt-[150px] md:mt-[100px] lg:mt-[100px] xl:mt-0 2xl:mt-[100px] mx-auto px-4 sm:px-4 md:px-4 lg:px-4 xl:px-0 2xl:px-0 min-h-full xl:h-screen 2xl:h-full flex items-center'>
                <Jumbotron />
            </header>
            <main className='max-w-7xl mx-auto px-4 sm:px-4 md:px-4 lg:px-4 xl:px-0 2xl:px-0'>
                <Experience />
            </main>
        </>
    );
};

export default MainContent;
