import React from 'react';
import styled from 'styled-components';

interface Props {
	h?: 1 | 2 | 3 | 4 | 5;
	color?: 'primary' | 'secondary' | 'text' | 'vivid';
	uppercase?: boolean;
}

const Title: React.FC<Props> = ({
	children,
	h = 1,
	color = 'text',
	uppercase = false,
}) => {
	const Tag = `h${h}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

	const StyledTag = styled(Tag)`
		color: ${(props) => props.theme.color[color]};
		text-transform: ${uppercase ? 'uppercase' : 'none'};
		margin-top: 0;
	`;
	return <StyledTag>{children}</StyledTag>;
};

export default Title;
