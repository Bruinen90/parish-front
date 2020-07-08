import styled from 'styled-components';

export const MessRow = styled.div`
	display: inline;
	&:after {
		content: ', ';
	}
`;

export const MessHour = styled.span`
	font-size: 1.25rem;
	font-weight: bold;
`;

export const MessDescription = styled.span``;
