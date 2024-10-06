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
            fontSize: {
                sm: '1rem',
                base: '1.125rem',
                lg: '1.25rem',
                xl: '1.5rem',
            },
            colors: {
                'brand-blue': '#0077C2',
                'brand-purple': '#9D3BAD',
                'brand-purple-light': '#AD5BBA',
                'brand-green': '#6ABD86',
                'brand-green-light': '#AFE9AF',
                'brand-orange': '#FD9D3F',
                'brand-teal': '#33afbc',
                'grad-hero-top': '#004aad',
                'grad-hero-bottom': '#5de0e6',
                'grad-green-top': '#6ABD86',
                'grad-green-bottom': '#a0d48a',
                'grad-blue-top': '#004aad',
                'grad-blue-bottom': '#0584d4',
            },
            content: {
                'arrow-right': 'url("src/assets/arrow-right.png")',
                'arrow-right-purple': 'url("src/assets/arrow-right-purple.png")',
                'arrow-svg': 'url("src/assets/arrow.svg")',
                'empty': '""',
            },
            backgroundImage: {
                "this-image": "var(--this-image)",
            },
            listStyleImage: {
                "checkmark": 'url("./src/assets/check.svg")',
                "cross": 'url("./src/assets/cross.svg")',
            },
            strokeWidth: {
                '3': '3px',
                '4': '4px',
                '5': '5px',
            },
            screens: {
                'xxl': '1280px',
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        }
    },
    plugins: [
        require("./tailwind/tailwind-plugin-debug-screens"),
    ],
};
