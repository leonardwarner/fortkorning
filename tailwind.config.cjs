const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');

const config = {
	darkMode: false,

	daisyui: {
		themes: false
	},

	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [typography, daisyui],
};

module.exports = config;
