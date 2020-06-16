import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layout from '../components/Layout/Layout';

interface PropTypes {
	data: any;
}

const Announcements: React.FC<PropTypes> = ({ data }) => {
	const {
		allStrapiAnnouncement: { nodes },
	} = data;
	console.log(nodes);
	return (
		<Layout>
			<h1>Ogłoszenia parafialne</h1>
		</Layout>
	);
};

export const query = graphql`
	{
		allStrapiAnnouncement {
			nodes {
				strapiId
				date
				holidayName
				paragraph {
					highlighted
					id
					text
				}
			}
		}
	}
`;

export default Announcements;
