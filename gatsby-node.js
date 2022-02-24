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
  
  const tags = await graphql(`
    query {
      allMdx {
        distinct(field: frontmatter___tags)
      }
    }
  `)

  tags.data.allMdx.distinct.forEach(tagName => {
    createPage({
      path: `/weblog/tags/${tagName}`,
      component: path.resolve(`./src/templates/tags.js`),
      context: {
        tagName
      },
    })
  })

  const posts = await graphql(`
    query {
      allMdx(filter: {fileAbsolutePath: {regex: "/posts/"}}) {
        nodes {
          id
          slug
        }
      }
    }
  `)

  posts.data.allMdx.nodes.forEach(({slug, id}) => {
    createPage({
      path: `/weblog/${slug}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        id
      },
    })
  })
}
