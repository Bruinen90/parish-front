require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	plugins: [
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		'gatsby-plugin-typescript',
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-source-strapi`,
			options: {
				apiURL: `http://localhost:1337`,
				queryLimit: 100,
				contentTypes: [`announcement`],
				singleTypes: [`home`, `contact`],
			},
		},
		{
			resolve: `gatsby-source-cloudinary`,
			options: {
				cloudName: process.env.CLOUDINARY_NAME,
				apiKey: process.env.CLOUDINARY_KEY,
				apiSecret: process.env.CLOUDINARY_SECRET,
			},
		},
	],
};
