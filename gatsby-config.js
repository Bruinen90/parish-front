/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	plugins: [
		'gatsby-plugin-typescript',
		'gatsby-plugin-sass',
		{
			resolve: `gatsby-source-strapi`,
			options: {
				apiURL: `http://localhost:1337`,
				queryLimit: 1000, // Default to 100
				contentTypes: [`announcement`],
				// singleTypes: [`home-page`, `contact`],
				// Possibility to login with a strapi user, when content types are not publically available (optional).
				// loginData: {
				// 	identifier: '',
				// 	password: '',
				// },
			},
		},
	],
};
