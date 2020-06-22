import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

// Components
import Layout from '../components/Layout/Layout';

interface GatsbyPage {
	data: any;
}
const Home: React.FC<GatsbyPage> = ({ data }) => {
	console.log(data);
	return (
		<Layout>
			<h1>Page title</h1>
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
