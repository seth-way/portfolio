/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        primary_C: {
          DEFAULT: 'var(--primary_C)',
        },
        secondary_C: {
          DEFAULT: 'var(--secondary_C)',
        },
        accent_C: {
          DEFAULT: 'var(--accent_C)',
        },
        alt_C: {
          DEFAULT: 'var(--alt_C)',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      gridTemplateRows: {
        16: 'repeat(16, minmax(0, 1fr))',
      },
      gridTemplateColumns: {
        24: 'repeat(24, minmax(0, 1fr))',
        48: 'repeat(48, minmax(0, 1fr))',
      },
      textStrokeWidth: {
        1: '1px',
        2: '2px',
      },
      textStrokeColor: {
        black: '#000',
        white: '#fff',
      },
      dropShadow: {
        dark: '0px 0px 3px rgba(5, 5, 5, 0.95)',
      },
    },
    keyframes: {
      expand: { '0%': { width: '0%' }, '100%': { width: '100%' } },
    },
    animation: {
      expand: 'expand 1s ease-in-out forwards',
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addUtilities }) {
      addUtilities({
        '.stroke-black': {
          '-webkit-text-stroke-color': '#000',
          '-webkit-text-stroke-width': '1px',
        },
        '.stroke-white': {
          '-webkit-text-stroke-color': '#fff',
          '-webkit-text-stroke-width': '1px',
        },
      });
    },
  ],
};
