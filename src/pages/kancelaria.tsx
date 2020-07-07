import React from 'react';
import { gatsby } from 'gatsby';

// Components
import Layout from '../components/Layout/Layout';
import Title from '../components/Title/Title';

//Styles
import * as Styled from '../pagesStyles/stylesKancelaria';

const Kancelaria: React.FC = () => (
	<Layout>
		<Title h={1} uppercase center>
			Kancelaria parafialna
		</Title>
	</Layout>
);

export default Kancelaria;
