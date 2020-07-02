import styled from 'styled-components';
export const Services = styled.section`
	display: grid;
	padding: ${(props) => props.theme.spacing(2)};

	@media (min-width: ${(props) => props.theme.queries('md')}) {
		grid-template-columns: repeat(3, 1fr);
		grid-gap: ${(props) => props.theme.spacing(1)};
	}
`;
