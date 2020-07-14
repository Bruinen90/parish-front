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
				src: any;
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
	const sacraments = data.allStrapiSacrament.nodes;
	return (
		<Layout>
			<Title h={1}>Sakramenty</Title>
			<Styled.SacramentsGrid>
				{sacraments.map((sacrament) => (
					<Styled.SacramentBox
						to={`/sakramenty/${sacrament.name}`}
						key={sacrament.name}
					>
						<Styled.SacramentImage
							fluid={sacrament.photo.childImageSharp.fluid}
						/>
						<Styled.SacramentTitle>
							{sacrament.name}
						</Styled.SacramentTitle>
					</Styled.SacramentBox>
				))}
			</Styled.SacramentsGrid>
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
