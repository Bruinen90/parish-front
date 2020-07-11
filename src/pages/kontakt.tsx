import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layout from '../components/Layout/Layout';
import { Article } from '../components/Layout/stylesLayout';
import Title from '../components/Title/Title';

//Styles
import * as Styled from '../pagesStyles/stylesKontakt';

interface Email {
	address: string;
	description?: string;
}

interface PhoneNumber {
	number: number;
	description: string;
}

interface StrapiData {
	strapiContact: {
		address: {
			buildingNumber: number;
			city: string;
			postalCode: string;
			street: string;
			name: string;
		};
		email: [Email];
		phoneNumber: [PhoneNumber];
	};
}

interface PropTypes {
	data: StrapiData;
}

const Kontakt: React.FC<PropTypes> = ({ data }) => {
	const { strapiContact } = data;
	const { address, email: emails, phoneNumber: phoneNumbers } = strapiContact;
	return (
		<Layout>
			<Title h={1} uppercase center>
				Kontakt
			</Title>
			<Article>
				{' '}
				<Title h={2} uppercase center>
					Numery telefonów
				</Title>
				{phoneNumbers.map((phone: any) => (
					<Styled.DataRow key={phone.number}>
						<Styled.DataValue href={`tel: ${phone.number}`}>
							{phone.number}
						</Styled.DataValue>
						<Styled.DataDescription>
							{` - ${phone.description}`}
						</Styled.DataDescription>
					</Styled.DataRow>
				))}
			</Article>
			<Article>
				{' '}
				<Title h={2} uppercase center>
					Dane adresowe
				</Title>
				<Styled.DataImportant>{address.name}</Styled.DataImportant>
				<Styled.DataDescription>
					{`${address.street} nr ${address.buildingNumber}`}
					<br />
					{`${address.postalCode} ${address.city}`}
				</Styled.DataDescription>
			</Article>
			<Article>
				{' '}
				<Title h={2} uppercase center>
					Adresy email
				</Title>
				{emails.map((email) => (
					<Styled.DataRow key={email.address}>
						<Styled.DataValue href={`mailto: ${email.address}`}>
							{email.address}
						</Styled.DataValue>
						{email.description && (
							<Styled.DataDescription>
								{` - ${email.description}`}
							</Styled.DataDescription>
						)}
					</Styled.DataRow>
				))}
			</Article>
		</Layout>
	);
};

export const query = graphql`
	{
		strapiContact {
			address {
				buildingNumber
				city
				postalCode
				street
				name
			}
			email {
				address
			}
			phoneNumber {
				number
				description
			}
		}
	}
`;

export default Kontakt;
