import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../common/themes.d';

interface Props {
	h?: 1 | 2 | 3 | 4 | 5;
	color?: keyof Colors;
	uppercase?: boolean;
	subTitle?: string;
	className?: string;
}

const Title: React.FC<Props> = ({
	children,
	h = 1,
	color = 'text',
	uppercase = false,
	className,
	subTitle,
}) => {
	const Tag = `h${h}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

	const StyledTag = styled(Tag)`
		color: ${(props) => props.theme.color[color]};
		text-transform: ${uppercase ? 'uppercase' : 'none'};
		margin-top: 0;
	`;

	const Subtitle = styled.span`
		display: block;
		text-transform: uppercase;
		letter-spacing: 3px;
		font-size: 0.9rem;
		font-weight: lighter;
		position: relative;
		display: inline;

		&:before,
		&:after {
			content: '';
			position: absolute;
			top: 50%;
			width: 120px;
			height: 1px;
			background-color: ${(props) => props.theme.color.background};
		}

		&:before {
			left: -130px;
		}

		&:after {
			left: calc(100% + 10px);
		}
	`;

	return (
		<div className={className}>
			{subTitle && <Subtitle>{subTitle}</Subtitle>}
			<StyledTag>{children}</StyledTag>
		</div>
	);
};

export default Title;
