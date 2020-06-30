import React from 'react';
import { graphql } from 'gatsby';

// Components
import * as Styled from './styles/stylesIndex';
import Layout from '../components/Layout/Layout';

// Styles

interface GatsbyPage {
	data: any;
}
const Home: React.FC<GatsbyPage> = ({ data }) => {
	return (
		<Layout>
			<Styled.HeroBox>
				<Styled.HeroText>
					<Styled.HeroSubHeader>
						Parafia pod wezwaniem
					</Styled.HeroSubHeader>
					<Styled.HeroHeader>
						św. Brata Alberta w Krakowie
					</Styled.HeroHeader>
				</Styled.HeroText>
				<Styled.HeroImg
					fluid={data.strapiHome.heroImage.childImageSharp.fluid}
				/>
			</Styled.HeroBox>
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
