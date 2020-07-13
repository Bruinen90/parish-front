// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const announcementsPages = await graphql(`
		query GetAllAnouncements {
			announcementsList: allStrapiAnnouncement {
				nodes {
					date
				}
			}
		}
	`);
	announcementsPages.data.announcementsList.nodes.forEach((date) => {
		createPage({
			path: `/ogloszenia/${date.date}`,
			component: path.resolve(`src/templates/announcement.tsx`),
			context: { date: date.date },
		});
	});
	const sacramentPages = await graphql(`
		query GetAllSacraments {
			sacramentsList: allStrapiSacrament {
				nodes {
					name
				}
			}
		}
	`);
	sacramentPages.data.sacramentsList.nodes.forEach((name) => {
		createPage({
			path: `/sakramenty/${name.name}`,
			component: path.resolve(`src/templates/sacrament.tsx`),
			context: { name: name },
		});
	});
};
