const colors = require("tailwindcss/colors")

module.exports = {
    content: [],
    theme: {
        extend: {
            colors: {
                gray: colors.trueGray
            }
        },
    },
    plugins: [require("@tailwindcss/line-clamp")],
}
