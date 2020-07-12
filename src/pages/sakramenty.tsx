import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layout from '../components/Layout/Layout';
import Title from '../components/Title/Title';

//Styles
import * as Styled from '../pagesStyles/stylesSakramenty';

interface Sacrament {
	name: string;
	shortDescription: string;
	photo: {
		childImageSharp: {
			fluid: {
				src: string;
			};
		};
	};
}

interface PropTypes {
	data: {
		allStrapiSacrament: {
			nodes: [Sacrament];
		};
	};
}

const Sakramenty: React.FC<PropTypes> = ({ data }) => {
	console.log(data);
	return (
		<Layout>
			<Title h={1}>Sakramenty</Title>
		</Layout>
	);
};

export const query = graphql`
	{
		allStrapiSacrament {
			nodes {
				name
				shortDescription
				photo {
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;
export default Sakramenty;
