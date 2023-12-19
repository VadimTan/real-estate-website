/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		screens: {
			xsm: { min: '320px' },
			// => @media (min-width: 320px) { ... }
			phone: { max: '576px' },
			smtablet: { max: '768px' },
			tablet: { max: '992px' },
			xltablet: { max: '1280px' },
			// => @media (max-width: 1280px) { ... }
			'3xl': '1920px',
			// => @media (min-width: 1920px) { ... }
		},
		extend: {},
	},
	plugins: [],
};
