/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-blue': '#0077C2',
                'brand-purple': '#9D3BAD',
                'brand-green': '#6ABD86',
                'brand-green-light': '#AFE9AF',
                'brand-teal': '#33AFBC',
                'grad-hero-top': '#004aad',
                'grad-hero-bottom': '#5de0e6',
                'grad-green-top': '#6ABD86',
                'grad-green-bottom': '#a0d48a',
                'grad-blue-top': '#004aad',
                'grad-blue-bottom': '#0584d4',
            }
        },
    },
    plugins: [
        require("./tailwind/tailwind-plugin-debug-screens"),
    ],
}

