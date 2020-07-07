import React from 'react';
import { gatsby } from 'gatsby';

// Components
import Layout from '../components/Layout/Layout';
import Title from '../components/Title/Title';

//Styles
import * as Styled from '../pagesStyles/stylesKontakt';

const Kontakt: React.FC = () => (
	<Layout>
		<Title h={1} uppercase center>
			Kontakt
		</Title>
	</Layout>
);

export default Kontakt;
