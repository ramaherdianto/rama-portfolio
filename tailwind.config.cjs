/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
        colors: {
            dark: '#041E44',
            dark2: '#072852',
            blueDark: '#1E4D85',
            light: '#fff',
            grey: '#6b7688',
            blue: '#3E6296',
            blue1: '#256BF4',
            blue2: '#3AC1DE',
            sky: '#A5CAFF',
            red1: '#FF7686',
            red2: '#D72F93',
        },
        fontFamily: {
            sans: ['Poppins'],
        },
    },
    plugins: [],
};
