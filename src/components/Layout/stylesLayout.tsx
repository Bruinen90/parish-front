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
