import styled from 'styled-components';

export const Wrapper = styled.div`
	background-color: #eaeaea;
`;

interface ContentProps {
	fullWidth: boolean;
}

export const Content = styled.main<ContentProps>`
	max-width: ${({ fullWidth }) => (fullWidth ? '100%' : '1280px')};
	margin: ${({ fullWidth }) => (fullWidth ? 0 : 'auto')};
	background-color: ${(props) => props.theme.color.background};
	padding: ${({ theme, fullWidth }) =>
		fullWidth ? 0 : [theme.spacing(2), theme.spacing(1)].join(' ')};
`;

export const Article = styled.article`
	text-align: center;
	position: relative;
	margin: ${(props) => props.theme.spacing(4)} 0;
	&:not(:last-child):after {
		content: '';
		position: absolute;
		bottom: -30px;
		left: 0;
		right: 0;
		width: 33vw;
		max-width: 300px;
		height: 1px;
		background-color: ${(props) => props.theme.color.secondary};
		margin: auto;
	}
`;
