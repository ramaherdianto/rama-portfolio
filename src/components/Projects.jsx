import { IconBrandGithub, IconEye } from '@tabler/icons'
import React from 'react'
import { ProjectData } from '../data/ProjectData'
import HeadingSection from './HeadingSection'

const Projects = () => {
    return (
        <section id='projects' className='pt-[100px] pb-0 sm:pb-[50px]'>
            <div className='flex flex-col items-center justify-center gap-y-[50px] sm:gap-y-[100px]'>
                <HeadingSection
                    headingText='Projects'
                    headingDesc='These are my projects created using HTML, CSS, JavaScript, React JS, Bootstrap and Tailwind CSS'
                    className='w-full md:w-[75%]'
                />
                <div className='flex flex-col sm:flex-row flex-wrap items-center justify-center xl:justify-between gap-y-[50px] gap-x-[50px]'>
                    {ProjectData.map((project, index) => {
                        return (
                            <div
                                id='project-card'
                                key={index}
                                className='group flex flex-col gap-[30px] w-full sm:w-[50%] md:w-[45%] lg:w-[30%] xl:w-[30%] h-fit justify-center items-start cursor-pointer'
                            >
                                <div className='bg-blue flex justify-center overflow-hidden items-center p-10 rounded-xl w-full'>
                                    <img
                                        src={project.img}
                                        alt={project.name}
                                        className='w-[350px] h-[200px] sm:w-[250px] sm:h-[150px] rounded-md transition-all duration-[0.4s] ease-linear group-hover:scale-125'
                                    />
                                </div>
                                <div className='flex flex-col items-start gap-y-3'>
                                    <div className='flex flex-col gap-y-3'>
                                        <h2
                                            id='text-project'
                                            className='text-xl'
                                        >
                                            {project.name}
                                        </h2>
                                        <p className='text-light text-xs w-full'>
                                            {project.desc}
                                        </p>
                                    </div>
                                    <div className='flex flex-wrap gap-[5px] justify-start'>
                                        {project.tools.map((tool, index) => {
                                            return (
                                                <span
                                                    key={index}
                                                    className='text-[10px] text-light border border-blueDark rounded-xl py-1 px-2'
                                                >
                                                    {tool}
                                                </span>
                                            )
                                        })}
                                    </div>
                                    <div
                                        className='flex justify-start mt-2 gap-x-3'
                                        id='link'
                                    >
                                        <a
                                            href={project.link.github}
                                            target='_blank'
                                            rel='noreferrer'
                                            className='flex p-2 w-fit h-fit transition-all duration-300 ease-linear rounded-[50%] bg-gradient-to-r from-blue1 to-blue2 hover:-translate-y-[6px]'
                                        >
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                className='icon icon-tabler icon-tabler-brand-github'
                                                width='18'
                                                height='18'
                                                viewBox='0 0 24 24'
                                                strokeWidth='2'
                                                stroke='currentColor'
                                                fill='none'
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                            >
                                                <path
                                                    stroke='none'
                                                    d='M0 0h24v24H0z'
                                                    fill='none'
                                                />
                                                <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
                                            </svg>
                                        </a>
                                        <a
                                            href={project.link.demo}
                                            target='_blank'
                                            rel='noreferrer'
                                            className='flex p-2 w-fit h-fit transition-all duration-300 ease-linear rounded-[50%] bg-gradient-to-r from-blue1 to-blue2 hover:-translate-y-[6px]'
                                        >
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                className='icon icon-tabler icon-tabler-eye'
                                                width='18'
                                                height='18'
                                                viewBox='0 0 24 24'
                                                strokeWidth='2'
                                                stroke='currentColor'
                                                fill='none'
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                            >
                                                <path
                                                    stroke='none'
                                                    d='M0 0h24v24H0z'
                                                    fill='none'
                                                />
                                                <path d='M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' />
                                                <path d='M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7' />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className='flex justify-center items-center'>
                    <a
                        href='https://github.com/ramaherdianto'
                        target='_blank'
                        rel='noreferrer'
                        className='flex items-center group justify-center py-[12px] px-[12px] text-light relative after:absolute after:left-0 after:bottom-1 after:w-full after:scale-0 after:h-[2px] hover:after:scale-100 after:bg-gradient-to-r from-red1 to-red2 after:transition-all after:duration-300 after:ease-linear'
                    >
                        See More on Github
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='icon icon-tabler icon-tabler-arrow-right group-hover:translate-x-2 transition-all duration-300 ease-in-out ml-2'
                            width='22'
                            height='20'
                            viewBox='0 0 24 24'
                            stroke-width='2'
                            stroke='currentColor'
                            fill='none'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                        >
                            <path
                                stroke='none'
                                d='M0 0h24v24H0z'
                                fill='none'
                            ></path>
                            <path d='M5 12l14 0'></path>
                            <path d='M13 18l6 -6'></path>
                            <path d='M13 6l6 6'></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects
