import styled from 'styled-components';
import Image from 'gatsby-image';

export const SacramentsGrid = styled.section`
	display: grid;
	grid-gap: ${(props) => props.theme.spacing(1)};
	grid-template-columns: repeat(auto-fill, minmax(150px, 300px));
`;

export const SacramentBox = styled.article`
	display: flex;
	flex-direction: column;
`;

export const SacramentImage = styled(Image)`
	height: 180px;
`;

export const SacramentTitle = styled.h3`
	background-color: ${(props) => props.theme.color.secondaryDark};
	padding: ${(props) => props.theme.spacing(1)};
	text-align: center;
	color: ${(props) => props.theme.color.background};
	text-transform: uppercase;
	letter-spacing: 2px;
`;

export const SacramentShortDescription = styled.p``;
