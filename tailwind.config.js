/** @type {import('tailwindcss').Config} */
const withVar = (name) => `rgb(var(${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: withVar('--bg'),
        surface: withVar('--surface'),
        elevated: withVar('--elevated'),
        line: withVar('--line'),
        ink: withVar('--ink'),
        muted: withVar('--muted'),
        accent: withVar('--accent'),
        'accent-ink': withVar('--accent-ink'),
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};
