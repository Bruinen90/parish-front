const sizes = {
	sm: 375,
	md: 768,
	lg: 1024,
	xl: 1440,
	fhd: 1920,
};

type Sizes = typeof sizes;

export const defaultTheme = {
	color: {
		text: '#444',
		background: '#fff',
		primary: 'green',
		secondary: 'red',
	},
	spacing: (n: number) => n + 'rem',
	queries: (size: keyof Sizes) => `@media (min-width: ${size}px)`,
};
