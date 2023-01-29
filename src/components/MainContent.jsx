import React from 'react';
import Jumbotron from './Jumbotron';
import Navbar from './Navbar';

const MainContent = () => {
    return (
        <>
            <Navbar />
            <header className='bg-light relative bg-cover bg-no-repeat bg-center min-h-screen'>
                <Jumbotron />
            </header>
        </>
    );
};

export default MainContent;
