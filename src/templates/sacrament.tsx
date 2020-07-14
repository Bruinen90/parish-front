import React from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';

// Styles
import * as Styled from './stylesSacraments';

// Components
import Layout from '../components/Layout/Layout';
import Title from '../components/Title/Title';
interface Props {
	data: {
		strapiSacrament: {
			name: string;
			shortDescription: string;
			fullDescription: string;
			photo: {
				childImageSharp: {
					fluid: {
						src: string;
					};
				};
			};
		};
	};
	pageContext: {
		date: string;
		[U: string]: any;
	};
}

const Sacrament: React.FC<Props> = ({
	data: { strapiSacrament: sacrament },
	pageContext,
}) => {
	console.log(sacrament, pageContext);
	return (
		<Layout>
			<Title h={1}>{sacrament.name}</Title>
			<Styled.Wrapper>
				<Styled.Photo fluid={sacrament.photo.childImageSharp.fluid} />
				<Styled.DescriptionBox>
					<ReactMarkdown source={sacrament.fullDescription} />
				</Styled.DescriptionBox>
				<div style={{ clear: 'both' }}></div>
			</Styled.Wrapper>
		</Layout>
	);
};

export const query = graphql`
	query GetSacrament($name: String) {
		strapiSacrament(name: { eq: $name }) {
			name
			shortDescription
			fullDescription
			photo {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	}
`;

export default Sacrament;
