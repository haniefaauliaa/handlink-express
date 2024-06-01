import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "blue-100": "#D9E5F8",
                "blue-300": "#98ABEE",
                "blue-400": "#2F38F7",
                "blue-500": "#0E17FD",
                "blue-600": "#1D24CA",
                "blue-800": "#201658",
                "beige-500": "#F9E8C9",
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
export default config;
