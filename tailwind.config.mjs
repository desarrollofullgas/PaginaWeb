/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				before: "-10px 10px 0 #0f172a",
				before2: "-10px -10px 0 #0f172a",
				after: "-10px 10px 0 #0f172a",
				after2: "-10px 10px 0 #232949",
			},
			colors: {
				primary: "#232949",
			}
		},
	},
	plugins: [],
}
