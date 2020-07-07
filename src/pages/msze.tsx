import React from 'react';
import { gatsby } from 'gatsby';

// Components
import Layout from '../components/Layout/Layout';
import Title from '../components/Title/Title';

//Styles
import * as Styled from '../pagesStyles/stylesMsze';

const Msze: React.FC = () => (
	<Layout>
		<Title h={1} uppercase center>
			Msze Święte
		</Title>
	</Layout>
);

export default Msze;
