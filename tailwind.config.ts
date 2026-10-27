import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				bangers: ['"Bangers"', 'cursive', 'sans-serif'],
				comic: ['"Comic Neue"', 'cursive', 'sans-serif'],
				marker: ['"Permanent Marker"', 'cursive', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				comic: {
					yellow: '#FFE81F',
					red: '#FF2A2A',
					blue: '#0077FE',
					cyan: '#00F0FF',
					dark: '#111318',
					card: '#1c202a',
					panel: '#151821',
					dot: 'rgba(255, 232, 31, 0.15)',
					border: '#000000',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			boxShadow: {
				'comic': '4px 4px 0px #000000',
				'comic-lg': '6px 6px 0px #000000',
				'comic-xl': '8px 8px 0px #000000',
				'comic-yellow': '5px 5px 0px #FFE81F',
				'comic-red': '5px 5px 0px #FF2A2A',
				'comic-cyan': '5px 5px 0px #00F0FF',
				'glow': '0 0 25px rgba(255, 232, 31, 0.4)',
			},
			keyframes: {
				'comic-pop': {
					'0%': { transform: 'scale(0.95)' },
					'50%': { transform: 'scale(1.03)' },
					'100%': { transform: 'scale(1)' },
				},
				'wiggle': {
					'0%, 100%': { transform: 'rotate(-2deg)' },
					'50%': { transform: 'rotate(2deg)' },
				}
			},
			animation: {
				'comic-pop': 'comic-pop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				'wiggle': 'wiggle 2s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
