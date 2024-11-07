import { url } from 'inspector';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
        "c-black":"#222831",
        "c-black-200":"#393E46",
        "c-blue":"#00ADB5",
        "c-white":"#EEEEEE",
        "c-purple":"#A64D79",
        "c-purple-800":"#3B1C32"    
      },
  	}
  },
  plugins: [require("tailwindcss-animate")],
}