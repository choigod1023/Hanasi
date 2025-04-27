/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                },
                romantic: {
                    50: '#fff1f2',
                    100: '#ffe4e6',
                    200: '#fecdd3',
                    300: '#fda4af',
                    400: '#fb7185',
                    500: '#f43f5e',
                    600: '#e11d48',
                    700: '#be123c',
                    800: '#9f1239',
                    900: '#881337',
                    text: '#FF6B95',
                    title: '#FF4778',
                    subtitle: '#FF8AAA',
                    accent: '#FF3366'
                },
                pastel: {
                    pink: '#FFD1DC',
                    peach: '#FFDAB9',
                    lavender: '#E6E6FA',
                    mint: '#98FF98',
                    sky: '#87CEEB',
                    yellow: '#FFFACD',
                },
                accent: {
                    rose: '#FF69B4',
                    coral: '#FF7F50',
                    violet: '#DDA0DD',
                    gold: '#FFD700',
                },
                soft: {
                    pink: '#FFF0F3',
                    rose: '#FFE5E9',
                    peach: '#FFE8E1',
                    lavender: '#F0E6FF',
                    sky: '#E6F4FF',
                    mint: '#E6FFF0',
                },
                muted: {
                    pink: '#FFB3C6',
                    rose: '#FF9EB3',
                    peach: '#FFBDA7',
                    lavender: '#C8B1FF',
                    sky: '#A7D4FF',
                    mint: '#A7FFD1',
                },
                text: {
                    primary: '#4A5568',
                    secondary: '#718096',
                    accent: '#FF6B95',
                }
            },
            backgroundImage: {
                'gradient-romantic': 'linear-gradient(to right, var(--tw-gradient-stops))',
            },
            gradientColorStops: theme => ({
                'romantic-start': '#FFD1DC',
                'romantic-end': '#E6E6FA',
            }),
        },
    },
    plugins: [],
}