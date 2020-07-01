import React from 'react';
import { graphql, Link } from 'gatsby';

// Components
import * as Styled from './styles/stylesIndex';
import Layout from '../components/Layout/Layout';
import Button from '../components/Button/Button';

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
					<Styled.ButtonsBox>
						<Button
							variant="filled"
							color="secondaryDark"
							as={Link}
							to="/msze-swiete"
						>
							Msze Święte
						</Button>
						<Button
							variant="outlined"
							color="background"
							as={Link}
							to="/kontakt"
						>
							Kontakt
						</Button>
					</Styled.ButtonsBox>
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
