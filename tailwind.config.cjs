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
				monserrat: 'monserrat, sans-serif',
			},
			backgroundImage: {
				heroHome: 'url(./src/assets/Imagenes-Optimen/heroHome.jpg)',
				heroAbout: '',
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
		},
	},
	plugins: [],
};
