import React from 'react';
import { gatsby } from 'gatsby';

// Components
import Layout from '../components/Layout/Layout';
import Title from '../components/Title/Title';

//Styles
import * as Styled from '../pagesStyles/stylesSpowiedz';

const Spowiedz: React.FC = () => (
	<Layout>
		<Title h={1} uppercase center>
			Spowiedź Święta
		</Title>
	</Layout>
);

export default Spowiedz;
