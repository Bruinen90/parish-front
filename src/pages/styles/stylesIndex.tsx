import styled from 'styled-components';
import Image from 'gatsby-image';

export const HeroBox = styled.section`
	height: calc(100vh - 75px);
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: ${(props) => props.theme.color.background};

	&:before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.33);
	}
`;

export const HeroText = styled.div`
	max-width: 450px;
	position: relative;
	z-index: 5;
`;

export const HeroSubHeader = styled.h3`
	text-transform: uppercase;
	letter-spacing: 3px;
	font-size: 0.9rem;
	font-weight: lighter;
	position: relative;
	display: inline;

	&:before,
	&:after {
		content: '';
		position: absolute;
		top: 50%;
		width: 120px;
		height: 1px;
		background-color: ${(props) => props.theme.color.background};
	}

	&:before {
		left: -130px;
	}

	&:after {
		left: calc(100% + 10px);
	}
`;

export const HeroHeader = styled.h1`
	text-transform: uppercase;
	font-weight: lighter;
	font-size: 2rem;
	letter-spacing: 3px;
`;

export const HeroImg = styled(Image)`
	position: absolute !important;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: -1;
`;
