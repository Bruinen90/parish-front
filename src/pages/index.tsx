import React from 'react';
import { graphql, Link } from 'gatsby';

// Components
import * as Styled from '../pagesStyles/stylesIndex';
import Layout from '../components/Layout/Layout';
import Button from '../components/Button/Button';
import ServiceBox from '../components/ServiceBox/ServiceBox';

// Styles

interface GatsbyPage {
	data: any;
}
const Home: React.FC<GatsbyPage> = ({ data }) => {
	return (
		<Layout fullWidth={true}>
			<Styled.HeroBox>
				<Styled.HeroText>
					<Styled.HeroTitle
						h={1}
						subTitle="Parafia pod wezwaniem"
						color="background"
						uppercase
						center
					>
						św. Brata Alberta w Krakowie
					</Styled.HeroTitle>
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
			<ServiceBox />
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
