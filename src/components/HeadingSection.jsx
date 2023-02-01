import React from 'react';

const HeadingSection = ({ headingText, headingDesc, className }) => {
    return (
        <div className='flex flex-col md:flex-row text-center items-center justify-center gap-6'>
            <h2 className='text-[32px] text-light font-bold'>{headingText}</h2>
            <span className={`${className} text-light text-base md:text-left whitespace-pre-wrap`}>
                {headingDesc}
            </span>
        </div>
    );
};

export default HeadingSection;
