/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    light: "#fafafa", // Slate 50
                    dark: "#0f172a", // Slate 900
                },
                card: {
                    light: "#ffffff",
                    dark: "#1e293b", // Slate 800
                },
                text: {
                    light: "#1e293b", // Slate 800
                    dark: "#f8fafc", // Slate 50
                },
                muted: {
                    light: "#64748b", // Slate 500
                    dark: "#94a3b8", // Slate 400
                },
                accent: {
                    DEFAULT: "#38bdf8", // Sky 400 (Kept as primary accent)
                    hover: "#0ea5e9", // Sky 500
                    secondary: "#6366f1", // Indigo 500
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            boxShadow: {
                'glow': '0 0 20px rgba(56, 189, 248, 0.15)',
            }
        },
    },
    plugins: [],
}
