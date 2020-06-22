import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';

interface Props {
	data: {
		strapiAnnouncement: {
			holidayName: string;
			date: Date;
			news: [
				{
					bold: boolean;
					id: string;
					text: string;
				},
			];
		};
	};
	pageContext: {
		date: string;
		[U: string]: any;
	};
}

const Announcement: React.FC<Props> = ({
	data: { strapiAnnouncement: announcement },
	pageContext,
}) => {
	return (
		<Layout>
			<h1>{announcement.holidayName}</h1>
			<h3>{announcement.date}</h3>
			<ul>
				{announcement.news.map((item) => (
					<li key={item.id}>{item.text}</li>
				))}
			</ul>
		</Layout>
	);
};

export const query = graphql`
	query GetAnnouncement($date: Date) {
		strapiAnnouncement(date: { eq: $date }) {
			holidayName
			date
			news {
				bold
				id
				text
			}
		}
	}
`;

export default Announcement;
