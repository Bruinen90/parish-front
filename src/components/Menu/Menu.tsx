import React from 'react';
import { Link } from 'gatsby';

const LINKS = [
	{ url: '/', text: 'Strona główna' },
	{ url: '/announcements', text: 'Ogłoszenia parafialne' },
	{ url: '/contact', text: 'Kontakt' },
	{ url: '/office', text: 'Kancelaria' },
	{ url: '/messes', text: 'Msze Święte' },
	{ url: '/confession', text: 'Spowiedź' },
];

const Menu = () => {
	return (
		<ul>
			{LINKS.map((link) => (
				<li key={link.url}>
					<Link to={link.url}>{link.text}</Link>
				</li>
			))}
		</ul>
	);
};
export default Menu;
