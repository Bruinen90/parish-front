import React, { useState } from 'react';

// Styles
import * as Styled from './stylesNavbar';

// Components
import Menu from '../Menu/Menu';
import Cover from '../Cover/Cover';
import Logo from '../Logo/Logo';

const Navbar = () => {
	const [menuOpened, setMenuOpened] = useState(false);

	const toggleMenu = () => {
		setMenuOpened((prev) => !prev);
	};
	return (
		<>
			<Styled.Header>
				<Logo />
				<Styled.Burger open={menuOpened} onClick={toggleMenu}>
					<div />
					<div />
					<div />
				</Styled.Burger>
				<Menu open={menuOpened} />
			</Styled.Header>
			<Cover visible={menuOpened} onClick={toggleMenu} />
		</>
	);
};

export default Navbar;
