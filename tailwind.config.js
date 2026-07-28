/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#021E20',
          primary: '#033B3D',
          secondary: '#D9D6CF',
          accent: '#7FE7E7',
        }
      },
      fontFamily: {
        heading: ['Cinzel', 'Playfair Display', 'serif'],
        body: ['Poppins', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'dark-glass': 'linear-gradient(to bottom, rgba(2, 30, 32, 0.8), rgba(2, 30, 32, 0.95))',
      },
      boxShadow: {
        'glass': '0 4px 16px 0 rgba(0, 0, 0, 0.25)',
        'glow': '0 0 10px rgba(127, 231, 231, 0.3)',
      },
      transitionDuration: {
        '300': '150ms',
        '500': '180ms',
        '700': '200ms',
        '1000': '200ms',
      }
    },
  },
  plugins: [],
}
