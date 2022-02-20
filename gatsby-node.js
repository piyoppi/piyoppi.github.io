const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const tagTemplate = path.resolve(`./src/templates/tags.js`)
  const result = await graphql(`
    query {
      allMdx {
        distinct(field: frontmatter___tags)
      }
    }
  `)

  result.data.allMdx.distinct.forEach(tagName => {
    createPage({
      path: `/weblog/tags/${tagName}`,
      component: tagTemplate,
      context: {
        tagName
      },
    })
  })
}
