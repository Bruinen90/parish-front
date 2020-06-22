const path = require('path');

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const result = await graphql(`
		query GetAllAnouncements {
			announcementsList: allStrapiAnnouncement {
				nodes {
					date
				}
			}
		}
	`);
	console.log('RESULT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', JSON.stringify(result));
	result.data.announcementsList.nodes.forEach((date) => {
		createPage({
			path: `/ogloszenia/${date.date}`,
			component: path.resolve(`src/templates/announcement.tsx`),
			context: { date: date.date },
		});
	});
};
