module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",   // ✅ scans everything in app/
        "./components/**/*.{js,ts,jsx,tsx}", // if you also use components/
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}