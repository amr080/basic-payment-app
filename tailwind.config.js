const daisyui = require('daisyui')
const forms = require('@tailwindcss/forms')
const typography = require('@tailwindcss/typography')

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/routes/**/*.{svelte,html,js,ts}'],
    theme: {
        extend: {},
    },
    plugins: [forms, typography, daisyui],
}