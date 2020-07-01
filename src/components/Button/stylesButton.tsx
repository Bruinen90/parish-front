import styled, { DefaultTheme } from 'styled-components';
import { ButtonProps } from './Button';

interface StyledButtonProps extends ButtonProps {
	theme: DefaultTheme;
}

export const Wrapper = styled.button<StyledButtonProps>`
	border: 0;
	padding: 8px 16px;
	cursor: pointer;
	text-transform: uppercase;
	text-decoration: none;
	font-size: 0.8rem;
	letter-spacing: 1px;
	border-radius: 8px;
	border: 1px solid transparent;
	border-color: ${(props) =>
		props.variant === 'text'
			? 'transparent'
			: props.theme.color[props.color]};
	background-color: ${(props) =>
		props.variant === 'filled'
			? props.theme.color[props.color]
			: 'transparent'};
	color: ${(props) =>
		props.variant === 'filled' ? '#fff' : props.theme.color[props.color]};
	&:hover {
		filter: brightness(1.1);
	}
`;
