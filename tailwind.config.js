/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Raleway'],
                'logo': ['Inter'],
                'headings': ['Montserrat'],
            },
        },
    },
    plugins: [
        require("./tailwind/tailwind-plugin-debug-screens"),
    ],
}

