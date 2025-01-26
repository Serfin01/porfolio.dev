/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  colors: {
			discord: {
			  primary: '#5865F2',
			  primaryhover: '#4752c4',
			  blurple: '#7289DA',
			  background: '#424549',
			  gray: '#36393e',
			  desc: '#bdbebf',
			  time: '#909aa4',
			  sidebar: '#282b30',
			  playing: '#232528',
			  green: '#23a55a',
			  black: '#111214',
			  white: '#FFFFFF',
			  letter: '#dbdee1',
			},
		  },
		  fontFamily: {
			sans: ['Inter', 'sans-serif'],
		  },
		},
	  },
	plugins: [],
}
