/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: ["class", '[data-mode="dark"]'],
	theme: {
		extend: {
			colors: {
				"blue-twiter": "#4D9BF0",
				"blue-twiter-dark": "#4D9BF0",
			},
		},
	},
	plugins: [],
};
