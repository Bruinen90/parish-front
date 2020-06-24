import React from 'react';

// Styles
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../common/themes';
import GlobalStyle from '../../common/globalStyle';

// Components
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout: React.FC = ({ children }) => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle theme="defaultTheme" />
			<Navbar />
			{children}
			<Footer />
		</ThemeProvider>
	);
};

export default Layout;
