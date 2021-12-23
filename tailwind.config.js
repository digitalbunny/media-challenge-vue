const colors = require("tailwindcss/colors")

module.exports = {
    content: [],
    theme: {
        extend: {
            colors: {
                gray: colors.trueGray
            },
            fontFamily: {
                rubik: ["Rubik"]
            }
        },
    },
    plugins: [require("@tailwindcss/line-clamp")],
}
