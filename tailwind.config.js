/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern Deep Purple Theme
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',  // Main primary color
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        // Accent colors
        accent: {
          teal: '#2dd4bf',    // Bright teal for accents
          pink: '#f472b6',    // Soft pink for highlights
          amber: '#fbbf24',   // Warm amber for attention
        },
        // Background colors
        background: {
          light: '#fafafa',   // Light background
          dark: '#18181b',    // Dark background
          card: '#ffffff',    // Card background
        },
        // Text colors
        text: {
          primary: '#1f2937',   // Main text
          secondary: '#4b5563', // Secondary text
          light: '#9ca3af',    // Light text
          accent: '#8b5cf6',    // Accent text (matches primary-500)
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'], // For headings
      },
      screens: {
        'xs': '475px',
        // Other breakpoints are already included by default
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 15px rgba(139, 92, 246, 0.3)',  // Glowing effect using primary color
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(to right, #8b5cf6, #6d28d9)',
      },
    },
  },
  plugins: [],
} 