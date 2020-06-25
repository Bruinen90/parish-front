import styled, { DefaultTheme } from 'styled-components';

interface CoverProps {
	visible: boolean;
	theme: DefaultTheme;
}

export default styled.div<CoverProps>`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: 50;
	background-color: ${({ theme }) => theme.color.primaryDark};
	opacity: ${({ visible }) => (visible ? 0.75 : 0)};
	transition: opacity 0.25s ease-in-out;
	pointer-events: ${({ visible }) => (visible ? 'all' : 'none')};
`;
