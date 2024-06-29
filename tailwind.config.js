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
                'brand-green': '#6ABD86',
                'brand-green-light': '#AFE9AF',
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
                'intro-left': "url('src/assets/intro-hex-grid.png')",
                'intro-right': "url('src/assets/intro-cyber-lines.png')",
                'tech': "url('src/assets/side-background-left.png')",
                'also-tech': "url('src/assets/side-background-right.png'"
            },
            listStyleImage: {
                "checkmark": 'url("./src/assets/check.svg")',
                // "checkmark": 'url("./src/assets/smileyface.svg")',
                // "checkmark": 'url("./src/assets/smileyface-copy.svg")',
                "cross": 'url("./src/assets/cross.svg")',
            },
            strokeWidth: {
                '3': '3px',
                '4': '4px',
                '5': '5px',
            },
            }
        },
    plugins: [
        require("./tailwind/tailwind-plugin-debug-screens"),
    ],
};
