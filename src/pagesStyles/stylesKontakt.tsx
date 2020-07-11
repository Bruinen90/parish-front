import styled from 'styled-components';
import { Link } from 'gatsby';

export const DataRow = styled.div`
	margin: ${(props) => props.theme.spacing(0.5)} 0;
`;

export const DataValue = styled.a`
	color: inherit;
	text-decoration-color: ${(props) => props.theme.color.secondary};
	font-size: 1.2rem;
`;

export const DataDescription = styled.span`
	font-size: 0.9rem;
`;

export const DataImportant = styled.span`
	display: block;
	font-size: 1.2rem;
	font-weight: bold;
`;
