import { DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
	color: {
		text: '#444',
		background: '#fcf7f8',
		primaryLight: '#709599',
		primary: '#4D6A6D',
		primaryDark: '#222e30',
		secondaryLight: '#FFE15C',
		secondary: '#ffd615',
		secondaryDark: '#e0b700',
	},
	spacing: (n) => n + 'rem',
	queries: (size) => `@media (min-width: ${size}px)`,
};
