import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layout from '../components/Layout/Layout';

interface PropTypes {
	data: any;
}

interface Announcement {
	id: string;
	date: Date;
	holidayname: string;
	paragraph: [Point];
}

interface Point {
	id: string;
	highlighted: boolean;
	text: string;
}

const Announcements: React.FC<PropTypes> = ({ data }) => {
	const {
		allStrapiAnnouncement: { nodes: announcements },
	} = data;
	return (
		<Layout>
			<h1>Ogłoszenia parafialne</h1>
			{announcements.map((dayAnnouncements: Announcement) => {
				const { id, date, holidayname, paragraph } = dayAnnouncements;
				return (
					<article key={id}>
						<h3>{holidayname}</h3>
						<div>{date}</div>
						<ul>
							{paragraph.map((point: Point) => (
								<li key={point.id}>{point.text}</li>
							))}
						</ul>
					</article>
				);
			})}
		</Layout>
	);
};

export const query = graphql`
	{
		allStrapiAnnouncement {
			nodes {
				date
				holidayname
				id
				paragraph {
					highlighted
					id
					text
				}
			}
		}
	}
`;

export default Announcements;
