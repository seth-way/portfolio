/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: ['class'],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				accent_C: {
					DEFAULT: 'var(--accent_C)'
				},
				alt_C: {
					DEFAULT: 'var(--alt_C)'
				},
				background: 'hsl(var(--background))',
				border: 'hsl(var(--border))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				chart: {
					1: 'hsl(var(--chart-1))',
					2: 'hsl(var(--chart-2))',
					3: 'hsl(var(--chart-3))',
					4: 'hsl(var(--chart-4))',
					5: 'hsl(var(--chart-5))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				foreground: 'hsl(var(--foreground))',
				input: 'hsl(var(--input))',
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				primary_C: {
					DEFAULT: 'var(--primary_C)'
				},
				ring: 'hsl(var(--ring))',
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				secondary_C: {
					DEFAULT: 'var(--secondary_C)'
				}
			},
			dropShadow: {
				dark: '0px 0px 3px rgba(5, 5, 5, 0.95)',
				glow: '0 0 10px rgba(0, 0, 255, 0.8), 0 0 20px rgba(0, 0, 255, 0.6)'
			},
			fontFamily: {
				capriola: ['Capriola', 'sans-serif'],
				harry: ['Harry Potter', 'sans-serif']
			},
			gridTemplateColumns: {
				24: 'repeat(24, minmax(0, 1fr))',
				48: 'repeat(48, minmax(0, 1fr))'
			},
			gridTemplateRows: {
				16: 'repeat(16, minmax(0, 1fr))'
			},
			screens: { touch: { raw: '(hover: none) and (pointer: coarse)' } },
			textStrokeColor: {
				black: '#000',
				white: '#fff'
			},
			textStrokeWidth: {
				1: '1px',
				2: '2px'
			}
		}
	},
	variants: {
		extend: { pointerEvents: ['touch'] }
	},
	plugins: [
		require('tailwindcss-animate'),
		function ({ addUtilities }) {
			addUtilities({
				'.stroke-black': {
					'-webkit-text-stroke-color': '#000',
					'-webkit-text-stroke-width': '1px'
				},
				'.stroke-white': {
					'-webkit-text-stroke-color': '#fff',
					'-webkit-text-stroke-width': '1px'
				}
			});
		}
	]
};
