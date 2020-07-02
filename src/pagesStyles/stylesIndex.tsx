import styled from 'styled-components';
import Image from 'gatsby-image';
import Title from '../components/Title/Title';

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

export const HeroTitle = styled(Title)`
	font-weight: lighter;
	font-size: 1.5rem;
	letter-spacing: 3px;
	h1 {
		margin: 1rem 0;
	}
`;

export const ButtonsBox = styled.div`
	display: flex;
	justify-content: center;
	z-index: 5;

	*:not(:last-child) {
		margin-right: 1rem;
	}
`;

export const HeroImg = styled(Image)`
	position: absolute !important;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: -1;
`;
