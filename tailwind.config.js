/** @type {import("tailwindcss").Config} */
module.exports = {
	content: [
		"./components/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
	],
};
