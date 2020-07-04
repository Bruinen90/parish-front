import React from 'react';

//Styles
import * as Styled from './stylesAnnouncements';

// Components
import Title from '../Title/Title';
interface Point {
	id: string;
	bold: boolean;
	text: string;
}

interface PropTypes {
	current: boolean;
	date: Date;
	holidayName: string;
	points: [Point];
}

const Announcements: React.FC<PropTypes> = ({
	current,
	date,
	holidayName,
	points,
}) => (
	<Styled.Wrapper>
		<Title h={1} uppercase center>
			{current ? 'Aktualne ' : 'Archiwalne '} ogłoszenia parafialne
		</Title>
		<Styled.CurrentAnnouncements>
			<Styled.HolidayDate>{date}</Styled.HolidayDate>
			<Styled.HolidayName>{holidayName}</Styled.HolidayName>
			<Styled.PointsList>
				{points.map((point: Point) => (
					<Styled.Point bold={point.bold} key={point.id}>
						{point.text}
					</Styled.Point>
				))}
			</Styled.PointsList>
		</Styled.CurrentAnnouncements>
	</Styled.Wrapper>
);

export default Announcements;
