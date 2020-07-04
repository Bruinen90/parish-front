import React from 'react';
import { graphql, Link } from 'gatsby';

//Styles
import * as Styled from '../pagesStyles/stylesAnnouncements';

// Components
import Layout from '../components/Layout/Layout';
import Title from '../components/Title/Title';
import AnnouncementsBox from '../components/Announcements/Announcements';

// Types
interface PropTypes {
	data: any;
}

interface AnnouncementHeader {
	id: string;
	date: Date;
	holidayName: string;
}

interface Point {
	id: string;
	bold: boolean;
	text: string;
}

interface Announcement extends AnnouncementHeader {
	news: [Point];
}

const Announcements: React.FC<PropTypes> = ({ data }) => {
	const currentAnnouncements: [Announcement] = data.newestAnnouncement.nodes;
	const allAnnouncementsHeaders: [AnnouncementHeader] =
		data.allAnnouncementsHeaders.nodes;
	const currentAnnouncementsPoints = currentAnnouncements[0].news;
	return (
		<Layout>
			<Styled.ArchiveBox>
				<AnnouncementsBox
					current={true}
					date={currentAnnouncements[0].date}
					holidayName={currentAnnouncements[0].holidayName}
					points={currentAnnouncementsPoints}
				/>
				<Title h={2}>Starsze ogłoszenia</Title>
				<Styled.ArchiveList>
					{allAnnouncementsHeaders.map((holiday) => (
						<Styled.ArchiveItem key={holiday.id}>
							<Link to={`/ogloszenia/${holiday.date}`}>
								{holiday.date} - {holiday.holidayName}
							</Link>
						</Styled.ArchiveItem>
					))}
				</Styled.ArchiveList>
			</Styled.ArchiveBox>
		</Layout>
	);
};

export const query = graphql`
	{
		newestAnnouncement: allStrapiAnnouncement(
			sort: { fields: date, order: DESC }
			limit: 1
		) {
			nodes {
				holidayName
				id
				date
				news {
					bold
					text
					id
				}
			}
		}
		allAnnouncementsHeaders: allStrapiAnnouncement(
			sort: { fields: date, order: DESC }
		) {
			nodes {
				holidayName
				id
				date
			}
		}
	}
`;

export default Announcements;
