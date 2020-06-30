import styled, { DefaultTheme } from 'styled-components';

interface MenuProps {
	open: boolean;
	theme: DefaultTheme;
}

export const Menu = styled.nav<MenuProps>`
	position: absolute;
	background-color: ${(props) => props.theme.color.primaryDark};
	color: ${(props) => props.theme.color.background};
	width: 100%;
	left: 0;
	top: 100%;
	width: 100%;
	padding: ${({ open }) => (open ? '2rem' : '0')};
	text-align: center;
	text-transform: uppercase;
	max-height: ${({ open }) => (open ? '100vh' : '0px')};
	overflow: hidden;
	transition: all 0.25s ease-in-out;
	@media (min-width: ${({ theme }) => theme.queries('lg')}) {
		position: relative;
		max-height: 100vh;
		top: auto;
		font-size: 0.8rem;
	}
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		@media (min-width: ${({ theme }) => theme.queries('lg')}) {
			display: flex;
			justify-content: flex-end;
		}
		li {
			margin-bottom: 1rem;
			letter-spacing: 5px;
			@media (min-width: ${({ theme }) => theme.queries('lg')}) {
				margin-bottom: 0;
				letter-spacing: 1px;
				margin-left: 1.5rem;
			}
			a {
				color: inherit;
				text-decoration: none;
			}
		}
	}
`;
