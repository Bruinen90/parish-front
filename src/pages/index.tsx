import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

// Components
import Layout from '../components/Layout/Layout';
import Title from '../components/Title/Title';

interface GatsbyPage {
	data: any;
}
const Home: React.FC<GatsbyPage> = ({ data }) => {
	return (
		<Layout>
			<Title uppercase>Page title</Title>
			<Image fluid={data.strapiHome.heroImage.childImageSharp.fluid} />
		</Layout>
	);
};

export const query = graphql`
	{
		strapiHome {
			title
			subtitle
			heroImage {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	}
`;

export default Home;
