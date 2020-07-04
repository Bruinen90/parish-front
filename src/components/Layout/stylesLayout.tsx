import styled from 'styled-components';

export const Wrapper = styled.div`
	background-color: #eaeaea;
`;

export const Content = styled.main`
	max-width: 1280px;
	margin: auto;
	background-color: ${(props) => props.theme.color.background};
	padding: ${(props) =>
		[props.theme.spacing(2), props.theme.spacing(1)].join(' ')};
`;
