import styled from 'styled-components';

export const Wrapper = styled.footer`
	width: 100%;
	min-height: 20vh;
	background-color: ${(props) => props.theme.color.primaryDark};
	color: ${(props) => props.theme.color.background};
`;
