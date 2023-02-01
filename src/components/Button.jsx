import React from 'react';

const Button = ({ textBtn, className, ...props }) => {
    return (
        <>
            <a
                {...props}
                className={`${className} transition-all duration-300 ease-linear bg-gradient-to-r w-fit rounded-[25px] cursor-pointer text-light from-blue1 to-blue2 py-[10px] px-[32px]`}
            >
                {textBtn}
            </a>
        </>
    );
};

export default Button;
