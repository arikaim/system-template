const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './**/*.html',
        './**/styles.json',
        './themes/default.json'
    ], 
    theme: {
        screens: {
            'xs': '300px',
            ...defaultTheme.screens,
        },
        extend: {},
    },
    darkMode: 'class',
    plugins: [               
        require("@tailwindcss/typography")
    ]
}
