require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	plugins: [
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		'gatsby-plugin-typescript',
		`gatsby-plugin-styled-components`,
		// Strapi API headless CMS
		{
			resolve: `gatsby-source-strapi`,
			options: {
				apiURL: `http://localhost:1337`,
				queryLimit: 100,
				contentTypes: [`announcement`],
				singleTypes: [`home`, `contact`],
			},
		},
		// Cloudinary image hosting
		{
			resolve: `gatsby-source-cloudinary`,
			options: {
				cloudName: process.env.CLOUDINARY_NAME,
				apiKey: process.env.CLOUDINARY_KEY,
				apiSecret: process.env.CLOUDINARY_SECRET,
			},
		},
		// Google fonts
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Roboto Mono`,
						variants: [`400`, `700`],
					},
				],
			},
		},
		// SVG Icons
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /\.inline\.svg$/,
				},
			},
		},
	],
};
