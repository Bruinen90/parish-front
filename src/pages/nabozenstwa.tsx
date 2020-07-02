import React from 'react';

// Components
import ServiceBox from '../components/ServiceBox/ServiceBox';
import Layout from '../components/Layout/Layout';
import Title from '../components/Title/Title';

//Styles
import * as Styled from '../pagesStyles/stylesNabozenstwa';

const Services = () => (
	<Layout>
		<Title h={1}>Nabożeństwa</Title>
		<Styled.Services>
			<ServiceBox />
			<ServiceBox />
			<ServiceBox />
		</Styled.Services>
	</Layout>
);

export default Services;
