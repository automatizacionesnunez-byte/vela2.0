/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        vela: {
          marfil: '#F8F6F0',
          crema: '#F1EBE2',
          arena: '#E8E1D5',
          topo: '#978577',
          topoclaro: '#B2A396',
          chocolate: '#26231F',
          burdeos: '#682D35',
          linea: '#E4DDD3'
        }
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif']
      }
    }
  },
  plugins: [],
};
