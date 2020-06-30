import React from 'react';
import { DefaultTheme } from 'styled-components';
//Styles
import * as Styled from './stylesButton';
import { Colors } from '../../common/themes.d';

export interface ButtonProps {
	type: 'filled' | 'outlined' | 'text';
	color: keyof Colors;
}

const Button: React.FC<ButtonProps> = ({ type, color, children }) => (
	<Styled.Wrapper type={type} color={color}>
		{children}
	</Styled.Wrapper>
);

export default Button;
