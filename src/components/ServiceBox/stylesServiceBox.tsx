import styled from 'styled-components';

export const Wrapper = styled.article`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

export const PictureBox = styled.div`
	height: 100%;
	display: flex;
	align-items: flex-end;
	img {
		height: 90%;
		width: 100%;
		object-fit: cover;
	}
`;

export const TextBox = styled.div`
	box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
	padding: 3rem 0;
`;

export const TimeStrap = styled.div`
	color: ${(props) => props.theme.color.background};
	background: ${(props) => props.theme.color.secondary};
	padding: 8px;
	padding-left: 24px;
	margin-left: -16px;
	position: relative;

	&:before {
		content: '';
		position: absolute;
		left: 0;
		top: 100%;
		border-style: solid;
		border-width: 0 16px 16px 0;
		border-color: transparent ${(props) => props.theme.color.secondaryDark}
			transparent transparent;
	}
`;

export const Text = styled.div`
	padding: 1rem;
`;

export const ServiceName = styled.h3``;

export const Description = styled.p``;
