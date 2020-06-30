import React from 'react';
import { Link } from 'gatsby';

import * as Styled from './stylesMenu';

const LINKS = [
	{ url: '/announcements', text: 'Ogłoszenia parafialne' },
	{ url: '/office', text: 'Kancelaria' },
	{ url: '/messes', text: 'Msze Święte' },
	{ url: '/confession', text: 'Spowiedź' },
	{ url: '/contact', text: 'Kontakt' },
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
