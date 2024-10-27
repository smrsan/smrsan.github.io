/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                blue: "#2997FF",
                gray: {
                    DEFAULT: "#86868b",
                    100: "#94928d",
                    200: "#afafaf",
                    300: "#42424570",
                },
                zinc: "#101010",
                color: {
                    1: "#AC6AFF",
                    2: "#FFC876",
                    3: "#FF776F",
                    4: "#7ADB78",
                    5: "#858DFF",
                    6: "#FF98E2",
                    7: "#44068f",
                },
                stroke: {
                    1: "#26242C",
                },
                n: {
                    1: "#FFFFFF",
                    2: "#CAC6DD",
                    3: "#ADA8C3",
                    4: "#757185",
                    5: "#3F3A52",
                    6: "#252134",
                    7: "#15131D",
                    8: "#0E0C15",
                    9: "#474060",
                    10: "#43435C",
                    11: "#1B1B2E",
                    12: "#2E2A41",
                    13: "#6C7275",
                },
            },
        },
    },
    plugins: [],
};
