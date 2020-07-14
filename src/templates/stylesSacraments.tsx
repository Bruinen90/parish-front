import styled from 'styled-components';
import Image from 'gatsby-image';

export const Wrapper = styled.div``;

export const Photo = styled(Image)`
	width: 100%;
	max-width: 500px;
	margin: auto;
	max-height: 400px;
	@media (min-width: ${({ theme }) => theme.queries('lg')}) {
		width: 35%;
		margin-right: 60px;
		float: left;
	}
`;

export const DescriptionBox = styled.div``;
