import React from 'react';

const Jumbotron = () => {
    return (
        <div className='hero max-w-7xl mx-auto px-4 sm:px-4 md:px-4 lg:px-4 xl:px-0 2xl:px-0 min-h-screen flex items-center'>
            <h1>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore expedita quos illum
                et, cumque facilis, ipsum accusamus ea obcaecati iste vero? Eius, maxime? Dolorum
                laborum fugit, omnis ratione consectetur voluptatum.
            </h1>
            <div className='w-full animation-image'>
                <lottie-player
                    src='https://assets5.lottiefiles.com/packages/lf20_ecSLfXq2zL.json'
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
