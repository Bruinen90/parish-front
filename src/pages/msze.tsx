import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layout from '../components/Layout/Layout';
import { Article } from '../components/Layout/stylesLayout';
import Title from '../components/Title/Title';

//Styles
import * as Styled from '../pagesStyles/stylesMsze';

interface StrapiData {
	allStrapiMess: {
		nodes: [
			{
				messDayName: string;
				id: string;
				mess: [
					{
						hour: string;
						id: string;
						comment: string;
					},
				];
			},
		];
	};
}

interface PropTypes {
	data: StrapiData;
}

const Msze: React.FC<PropTypes> = ({ data }) => {
	const messesList = data.allStrapiMess.nodes;
	return (
		<Layout>
			<Title h={1} uppercase center>
				Msze Święte
			</Title>
			{messesList.map((messDay) => (
				<Article key={messDay.id}>
					<Title h={2} uppercase>
						{messDay.messDayName}
					</Title>
					{messDay.mess.map((mess) => (
						<Styled.MessRow key={mess.id}>
							<Styled.MessHour>
								{mess.hour
									.split(':')
									.slice(0, 2)
									.join(':')}
							</Styled.MessHour>
							{mess.comment && (
								<Styled.MessDescription>
									{' '}
									- {mess.comment}
								</Styled.MessDescription>
							)}
						</Styled.MessRow>
					))}
				</Article>
			))}
		</Layout>
	);
};

export const query = graphql`
	{
		allStrapiMess {
			nodes {
				messDayName
				id
				mess {
					hour
					id
					comment
				}
			}
		}
	}
`;

export default Msze;
