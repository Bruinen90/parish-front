import React from 'react';
import { DefaultTheme } from 'styled-components';
//Styles
import * as Styled from './stylesButton';
import { Colors } from '../../common/themes.d';

export interface ButtonProps {
	variant: 'filled' | 'outlined' | 'text';
	color: keyof Colors;
	as?: React.ElementType;
	to?: string;
}

const Button: React.FC<ButtonProps> = ({
	variant,
	color,
	children,
	...other
}) => (
	<Styled.Wrapper variant={variant} color={color} {...other}>
		{children}
	</Styled.Wrapper>
);

export default Button;
