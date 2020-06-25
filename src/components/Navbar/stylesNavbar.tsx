import styled, { DefaultTheme } from 'styled-components';

export const Header = styled.header`
	position: fixed;
	height: 75px;
	top: 0;
	left: 0;
	right: 0;
	background-color: ${(props) => props.theme.color.primaryDark};
	color: ${(props) => props.theme.color.background};
	padding: 8px 16px;
	display: flex;
	align-items: center;
	z-index: 100;
`;

export const LogoCont = styled.div`
	display: flex;
	align-items: center;
	height: 80%;
`;

export const LogoIcon = styled.span`
	svg {
		fill: ${(props) => props.theme.color.secondary};
		height: 60px;
	}
`;

interface BurgerProps {
	open: boolean;
	theme: DefaultTheme;
}

export const Burger = styled.div<BurgerProps>`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 2rem;
	height: 2rem;
	cursor: pointer;
	background: transparent;
	border: 0;

	div {
		width: 2rem;
		height: 0.25rem;
		background: ${({ theme }) => theme.color.background};
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;

		:first-child {
			transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
		}

		:nth-child(2) {
			opacity: ${({ open }) => (open ? '0' : '1')};
			transform: ${({ open }) =>
				open ? 'translateX(20px)' : 'translateX(0)'};
		}

		:nth-child(3) {
			transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
		}
	}
`;
