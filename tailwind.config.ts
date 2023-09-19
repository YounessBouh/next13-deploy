import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      fontFamily:{
        Lobst:["Lobster","cursive"],
        Ultra:["Ultra","serif"],
        GreatVibes:["Great Vibes","cursive"],
        Arabic:["Lalezar","cursive"],
      },
    },
    
  },
  plugins: [],
}
export default config
