const path = require('path')

exports.onCreateWebpackConfig = ({ stage, actions }) => {
    actions.setWebpackConfig({
        target: 'node',
        resolve: {
            alias: {
                "@mui/styled-engine": "@mui/styled-engine-sc"
            },
        }
    })
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const { data } = await graphql(`
		{
			pages: allContentfulPage {
				nodes {
				  slug
				  node_locale
				}
			}
		}
	`)

    data.pages.nodes.forEach(node => {
        createPage({
            path: (node.slug === "/" && node.node_locale === "hu") ? `/` : ((node.slug === "/" && node.node_locale !== "hu") ? `/${node.node_locale}` : `/${node.node_locale}/${node.slug}/`),
            component: path.resolve(`src/templates/page-template.js`),
            context: {
                slug: node.slug,
                locale: node.node_locale
            }
        })
    })
}

/*exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = ``
    createTypes(typeDefs)
}*/