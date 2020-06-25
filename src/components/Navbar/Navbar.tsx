import React, { useState } from 'react';

// Styles
import * as Styled from './stylesNavbar';

// Components
import Menu from '../Menu/Menu';
import Cover from '../Cover/Cover';

// Icons
import LogoIcon from '../../icons/eucharist.inline.svg';

const Navbar = () => {
	const [menuOpened, setMenuOpened] = useState(false);

	const toggleMenu = () => {
		setMenuOpened((prev) => !prev);
	};
	return (
		<>
			<Styled.Header>
				<Styled.LogoCont>
					<Styled.LogoIcon>
						<LogoIcon />
					</Styled.LogoIcon>
					Parafia pod wezwaniem św. Brata Alberta w Krakowie
				</Styled.LogoCont>
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
