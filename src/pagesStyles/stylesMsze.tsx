import styled from 'styled-components';

export const MessRow = styled.div`
	display: inline;
	font-size: 1.25rem;
	font-weight: bold;
	&:not(:last-child):after {
		content: ', ';
	}
`;

export const MessHour = styled.span``;

export const MessDescription = styled.span`
	font-weight: normal;
	font-size: 1rem;
`;
