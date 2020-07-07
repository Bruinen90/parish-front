import React from 'react';

// Styles
import { ThemeProvider } from 'styled-components';
import * as Styled from './stylesLayout';
import { defaultTheme } from '../../common/themes';
import GlobalStyle from '../../common/globalStyle';

// Components
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

interface PropTypes {
	fullWidth?: boolean;
}

const Layout: React.FC<PropTypes> = ({ fullWidth = false, children }) => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle theme={defaultTheme} />
			<Navbar />
			<Styled.Wrapper>
				<Styled.Content fullWidth={fullWidth}>
					{children}
				</Styled.Content>
			</Styled.Wrapper>
			<Footer />
		</ThemeProvider>
	);
};

export default Layout;
