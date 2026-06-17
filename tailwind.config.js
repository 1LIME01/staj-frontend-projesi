/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,html,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Arvo', 'serif'],        
        body: ['Fredoka', 'Quicksand', 'sans-serif'],
      },
      
      colors: {
        primary: '#fec20b',      
        madison: '#3eb2cf',      
        malibu: '#79ccf2',       
        purple: '#8668ad',       

        base: '#2d2e2e',          
        darkest: '#212121',       
        darker: '#434345',        
        dark: '#888888',          

        gray: {
          DEFAULT: '#b1b1b1',     
          light: '#e5e5e5', },

        catskill: '#f5f7fa',      
        lighter: '#f6f7f8',       

        error: '#e50a0a',
      },

      backgroundImage: {
        'grad-purple-madison': 'linear-gradient(to right, #8668ad 0%, #3eb2cf 100%)',
        'grad-madison-malibu': 'linear-gradient(to right, #3eb2cf 0%, #79ccf2 100%)',
      }
    },
  },

  plugins: [],
}