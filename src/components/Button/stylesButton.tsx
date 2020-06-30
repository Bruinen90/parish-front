import styled, { DefaultTheme } from 'styled-components';
import { ButtonProps } from './Button';

interface StyledButtonProps extends ButtonProps {
	theme: DefaultTheme;
}

export const Wrapper = styled.button<StyledButtonProps>`
	border: 0;
	border-radius: 8px;
	border: 1px solid transparent;
	border-color: ${(props) =>
		props.type === 'text' ? 'transparent' : props.theme.color[props.color]};
	background-color: ${(props) =>
		props.type === 'filled'
			? props.theme.color[props.color]
			: 'transparent'};
	color: ${(props) =>
		props.type === 'filled'
			? props.theme.color.background
			: props.theme.color[props.color]};
`;
