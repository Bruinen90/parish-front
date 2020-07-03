import React from 'react';
import { graphql } from 'gatsby';

//Styles
import * as Styled from '../pagesStyles/stylesAnnouncements';

// Components
import Layout from '../components/Layout/Layout';
import Title from '../components/Title/Title';

// Types
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
	const announcements: [Announcement] = data.allStrapiAnnouncement.nodes;
	const currentPoints = announcements[0].news;
	return (
		<Layout>
			<Title h={1}>Ogłoszenia parafialne</Title>
			<Styled.CurrentAnnouncements>
				<Styled.HolidayDate>5 lipca 2020</Styled.HolidayDate>
				<Styled.HolidayName>14. niedziela zwykła</Styled.HolidayName>
				<Styled.PointsList>
					{currentPoints.map((point: Point) => (
						<Styled.Point bold={point.bold} key={point.id}>
							{point.text}
						</Styled.Point>
					))}
				</Styled.PointsList>
			</Styled.CurrentAnnouncements>
			<Styled.ArchiveBox>
				<Title h={2}>Starsze ogłoszenia</Title>
			</Styled.ArchiveBox>
		</Layout>
	);
};

export const query = graphql`
	{
		allStrapiAnnouncement(sort: { fields: date, order: DESC }, limit: 1) {
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
	}
`;

export default Announcements;
