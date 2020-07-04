import styled from 'styled-components';

export const Wrapper = styled.div``;

export const CurrentAnnouncements = styled.section`
	margin: ${(props) => props.theme.spacing(2)} 0;
`;

export const HolidayDate = styled.h5``;

export const HolidayName = styled.h3``;

export const PointsList = styled.ul``;

interface PointProps {
	bold: boolean;
}

export const Point = styled.li<PointProps>`
	font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;
