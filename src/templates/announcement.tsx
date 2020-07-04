import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import AnnouncementsBox from '../components/Announcements/Announcements';

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
			<AnnouncementsBox
				current={false}
				date={announcement.date}
				holidayName={announcement.holidayName}
				points={announcement.news}
			/>
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
