import React from 'react';
import { Link } from 'gatsby';

import * as Styled from './stylesMenu';

const LINKS = [
	{ url: '/', text: 'Strona główna' },
	{ url: '/announcements', text: 'Ogłoszenia parafialne' },
	{ url: '/contact', text: 'Kontakt' },
	{ url: '/office', text: 'Kancelaria' },
	{ url: '/messes', text: 'Msze Święte' },
	{ url: '/confession', text: 'Spowiedź' },
];

interface MenuProps {
	open: boolean;
}

const Menu = ({ open }) => {
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
