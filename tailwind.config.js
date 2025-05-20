/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: 'var(--breakpoint-xs)',
      '2xs': 'var(--breakpoint-2xs)',
      sm: 'var(--breakpoint-sm)',
      md: 'var(--breakpoint-md)',
      lg: 'var(--breakpoint-lg)',
      xl: 'var(--breakpoint-xl)',
      '2xl': 'var(--breakpoint-2xl)',
    },
    extend: {},
  },
  plugins: [],
}
