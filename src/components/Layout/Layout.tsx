import React from 'react';

// Components
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout: React.FC = ({ children }) => (
	<>
		<Navbar />
		{children}
		<Footer />
	</>
);

export default Layout;
