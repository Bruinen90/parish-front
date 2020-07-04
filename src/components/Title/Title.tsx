import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../common/themes.d';

interface Props {
	h?: 1 | 2 | 3 | 4 | 5;
	color?: keyof Colors;
	uppercase?: boolean;
	subTitle?: string;
	className?: string;
	center?: boolean;
}

const Title: React.FC<Props> = ({
	children,
	h = 1,
	color = 'text',
	uppercase = false,
	center = false,
	className,
	subTitle,
}) => {
	const Tag = `h${h}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

	const StyledTag = styled(Tag)`
		color: ${(props) => props.theme.color[color]};
		text-transform: ${uppercase ? 'uppercase' : 'none'};
		position: relative;
		display: inline;
		z-index: 1;

		&:after {
			content: '';
			position: absolute;
			z-index: -1;
			left: -10px;
			bottom: 5%;
			height: 2px;
			width: 80%;
			background-color: ${(props) => props.theme.color.secondaryLight};
		}
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
		<div
			className={className}
			style={{ textAlign: center ? 'center' : 'left' }}
		>
			{subTitle && <Subtitle>{subTitle}</Subtitle>}
			<StyledTag>{children}</StyledTag>
		</div>
	);
};

export default Title;
