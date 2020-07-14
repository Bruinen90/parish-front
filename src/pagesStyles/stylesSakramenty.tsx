import styled from 'styled-components';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

export const SacramentsGrid = styled.section`
	display: grid;
	grid-gap: ${(props) => props.theme.spacing(1)};
	grid-template-columns: repeat(auto-fill, minmax(150px, 300px));
`;

export const SacramentBox = styled(Link)`
	display: flex;
	flex-direction: column;
	text-decoration: none;
	height: 240px;
`;

export const SacramentImage = styled(Image)`
	height: 180px;
	max-height: 180px;

	@media (min-width: ${({ theme }) => theme.queries('lg')}) {
		transition: all 0.25s ease-in-out;
		${SacramentBox}:hover & {
			max-height: 0;
		}
	}
`;

export const SacramentTitle = styled.h3`
	background-color: ${(props) => props.theme.color.secondaryDark};
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${(props) => props.theme.color.background};
	text-transform: uppercase;
	letter-spacing: 2px;
	max-height: 60px;
	height: 60px;
	transition: all 0.5s ease-in-out;

	@media (min-width: ${({ theme }) => theme.queries('lg')}) {
		transition: all 0.25s ease-in-out;
		${SacramentBox}:hover & {
			max-height: 100%;
			height: 100%;
			font-size: 1.5rem;
		}
	}
`;

export const SacramentShortDescription = styled.p``;
