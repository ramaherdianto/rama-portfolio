import Movie from '../assets/project-movie.png'
import Cashnote from '../assets/project-cashnote.png'
import Page from '../assets/project-landing.png'

export const ProjectData = [
    {
        img: Movie,
        name: 'MOVIE APP',
        desc: 'Discover the most popular, top rated and latest movies. Users can also find a movie based on the movie title.',
        tools: ['React JS', 'API', 'Axios', 'SASS', 'Tailwind CSS'],
        link: {
            github: 'https://github.com/ramaherdianto/tmdb-movies',
            demo: 'https://ramaa-tmdb-movies.netlify.app/',
        },
    },
    {
        img: Cashnote,
        name: 'CASHNOTE APP',
        desc: 'Websites that can record and calculate your money income and expenses.',
        tools: ['React JS', 'SASS', 'Tailwind CSS'],
        link: {
            github: 'https://github.com/ramaherdianto/cashnote-app',
            demo: 'https://cashnoteapps.netlify.app/',
        },
    },
    {
        img: Page,
        name: 'LANDING PAGE',
        desc: 'Websites that contains information about the company profile and products offered.',
        tools: ['React JS', 'SASS', 'Bootstrap', 'Styled Components'],
        link: {
            github: 'https://github.com/ramaherdianto/web-erp',
            demo: 'https://ramaherdianto.github.io/web-erp-page/',
        },
    },
]
