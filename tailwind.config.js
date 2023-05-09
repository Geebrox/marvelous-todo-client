import forms from '@tailwindcss/forms';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', ...defaultTheme.fontFamily.sans] },
      boxShadow: {
        next: '0 0 0 1px rgba(0,0,0,.03), 0 2px 4px rgba(0,0,0,.05), 0 12px 24px rgba(0,0,0,.05)',
      },
      colors: {
        accent: [
          '#fafafa',
          '#eaeaea',
          '#999',
          '#888',
          '#666',
          '#444',
          '#333',
          '#111',
        ],
      },
      keyframes: {
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(80%)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          from: { opacity: '0', transform: 'translateY(-80%)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-out-up': {
          from: { opacity: '1', transform: 'translateY(0)' },
          to: { opacity: '0', transform: 'translateY(-80%)' },
        },
        'fade-out-down': {
          from: { opacity: '1', transform: 'translateY(0)' },
          to: { opacity: '0', transform: 'translateY(80%)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up .3s ease-out',
        'fade-in-down': 'fade-in-down .3s ease-out',
        'fade-out-up': 'fade-out-up .3s ease-out',
        'fade-out-down': 'fade-out-down .3s ease-out',
      },
    },
  },
  plugins: [forms],
};
