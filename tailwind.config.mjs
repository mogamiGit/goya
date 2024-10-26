/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		colors: {
			amazon: {
				'bg': '#00050D',
				'gray': '#33373D',
				'light-gray': '#B4B6B8',
				'accent-yellow': '#FFD62C',
				'accent-blue': '#1A98FF',
				'prime': '#007DFD',
				'green': '#37F1A3',
				'links': '#90DFFE',
				'gray-text': '#8197A4',
			},
		},
		boxShadow: {
			'glow': '0 0 10px rgba(51, 55, 61, 0.8), 0 0 30px rgba(51, 55, 61, 0.5)',
		},
		fontFamily: {
			// Amazon
			'roboto': ['Roboto', 'sans-serif'],
		},
		extend: {
			spacing: {
			  '8xl': '96rem',
			  '9xl': '128rem',
			},
			borderRadius: {
			  'xl': '10px',
			}
		}
	},
	plugins: [
		require('flowbite/plugin'),
		require('tailwindcss-animated')
	],
}
