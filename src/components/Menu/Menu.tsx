import React from 'react';
import { Link } from 'gatsby';

import * as Styled from './stylesMenu';

const LINKS = [
	{ url: '/ogloszenia', text: 'Ogłoszenia parafialne' },
	{ url: '/kancelaria', text: 'Kancelaria' },
	{ url: '/msze', text: 'Msze Święte' },
	{ url: '/spowiedz', text: 'Spowiedź' },
	{ url: '/sakramenty', text: 'Sakramenty' },
	{ url: '/kontakt', text: 'Kontakt' },
];

interface MenuProps {
	open: boolean;
}

const Menu: React.FC<MenuProps> = ({ open }) => {
	return (
		<Styled.Menu open={open}>
			<ul>
				{LINKS.map((link) => (
					<li key={link.url}>
						<Link to={link.url}>{link.text}</Link>
					</li>
				))}
			</ul>
		</Styled.Menu>
	);
};
export default Menu;
