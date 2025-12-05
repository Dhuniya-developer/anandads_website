/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#C8102E',
                    light: '#E01E3C',
                    dark: '#A00D24'
                }
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif']
            }
        },
    },
    plugins: [],
}