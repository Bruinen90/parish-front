import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layout from '../components/Layout/Layout';
import Title from '../components/Title/Title';

//Styles
import * as Styled from '../pagesStyles/stylesMsze';

interface PropTypes {
	data: any;
}

const Msze: React.FC<PropTypes> = ({ data }) => {
	const messesList = data.allStrapiMess.nodes;
	console.log(messesList);
	return (
		<Layout>
			<Title h={1} uppercase center>
				Msze Święte
			</Title>
			{messesList.map((messDay) => (
				<>
					<Title h={2} uppercase>
						{messDay.messDayName}
					</Title>
					{messDay.mess.map((mess) => (
						<Styled.MessRow key={mess.id}>
							<Styled.MessHour>{mess.hour}</Styled.MessHour>
							{mess.comment && (
								<Styled.MessDescription>
									{' '}
									- {mess.comment}
								</Styled.MessDescription>
							)}
						</Styled.MessRow>
					))}
				</>
			))}
		</Layout>
	);
};

export const query = graphql`
	{
		allStrapiMess {
			nodes {
				messDayName
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
