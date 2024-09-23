import Movie from '../assets/project-movie.png';
import Ecommerce from '../assets/ecommerce.png';
import Cashnote from '../assets/project-cashnote.png';
import Page from '../assets/project-landing.png';
import TechU from '../assets/teknologiu.png';
import Creave from '../assets/creave.png';
import LoginWeb from '../assets/loginweb.png';

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
        img: Ecommerce,
        name: 'E-COMMERCE APP',
        desc: 'Simple e-commerce platform featuring API-driven product catalog, shopping cart, and local data.',
        tools: ['React JS', 'Redux', 'Axios', 'JWT-Decode', 'Tailwind CSS'],
        link: {
            github: 'https://github.com/ramaherdianto/fake-store',
            demo: 'https://rams-fake-store.netlify.app/',
        },
    },
    {
        img: LoginWeb,
        name: 'LOGIN & REGISTER',
        desc: 'Simple website that user can register and login.',
        tools: ['React JS', 'Firebase', 'JWT-Decode', 'Toastify', 'Tailwind CSS'],
        link: {
            github: 'https://github.com/ramaherdianto/login-react',
            demo: 'https://ram-react-login.vercel.app/',
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
    {
        img: TechU,
        name: 'TEKNOLOGIU',
        desc: 'Websites that contains information about the company profile',
        tools: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
        link: {
            github: 'https://github.com/ramaherdianto/teknologiu',
            demo: 'https://ramaherdianto.github.io/teknologiu/',
        },
    },
    {
        img: Creave,
        name: 'CREAVE',
        desc: 'Websites that contains information about the company profile',
        tools: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
        link: {
            github: 'https://github.com/ramaherdianto/creave-native',
            demo: 'https://creave.netlify.app/',
        },
    },
];
