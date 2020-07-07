import styled from 'styled-components';
import { Link } from 'gatsby';

export const Wrapper = styled(Link)`
	display: flex;
	align-items: center;
	height: 80%;
	text-decoration: none;
	color: inherit;
	max-width: 250px;
`;

export const LogoIcon = styled.span`
	svg {
		fill: ${(props) => props.theme.color.secondary};
		height: 60px;
	}
`;
