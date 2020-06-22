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
	holidayName: string;
	news: [Point];
}

interface Point {
	id: string;
	bold: boolean;
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
				const { id, date, holidayName, news } = dayAnnouncements;
				return (
					<article key={id}>
						<h3>{holidayName}</h3>
						<div>{date}</div>
						<ul>
							{news.map((point: Point) => (
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
				holidayName
				id
				news {
					bold
					id
					text
				}
			}
		}
	}
`;

export default Announcements;
