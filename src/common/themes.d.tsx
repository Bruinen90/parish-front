const sizes = {
	sm: 375,
	md: 768,
	lg: 1024,
	xl: 1440,
	fhd: 1920,
};

type Sizes = typeof sizes;

import 'styled-components';
declare module 'styled-components' {
	export interface DefaultTheme {
		color: {
			text: string;
			background: string;
			primaryLight: string;
			primary: string;
			primaryDark: string;
			secondaryLight: string;
			secondary: string;
			secondaryDark: string;
		};
		spacing: (n: number) => string;
		queries: (size: keyof Sizes) => string;
	}
}
