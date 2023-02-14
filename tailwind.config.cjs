/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				cobalto: '#28469d',
				gris: 'rgb(0,0,0,0.80)',
				azulito: '#0080FF',
			},
			fontFamily: {
				monserrat: ['Montserrat, sans-serif'],
			},
			backgroundImage: {
				heroHome:
					'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./src/assets/Imagenes-Optimen/heroHome.jpg)',
				heroAbout:
					'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./src/assets/Imagenes-Optimen/ops.png)',
			},
			height: {
				500: '500px',
			},
			maxWidth: {
				1440: '1440px',
				940: '940px',
				900: '900px',
			},
			lineHeight: {
				40: '40px',
			},
			gridTemplateColumns: {
				templateColumns: 'auto auto auto 1fr',
			},
			gridTemplateRows: {
				auto1: 'auto',
				auto2: 'auto auto',
			},
		},
	},
	darkMode: 'class',
	plugins: [],
};
