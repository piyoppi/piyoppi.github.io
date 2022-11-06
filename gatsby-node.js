const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const slugify = require(`@sindresorhus/slugify`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: value.substr(1),
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
        tagName,
      },
    })
  })

  const posts = await graphql(`
    query {
      allMdx(filter: {internal: {contentFilePath: {regex: "/posts/"}}}) {
        nodes {
          id
          fields {
            slug
          },
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  posts.data.allMdx.nodes.forEach(param => {
    createPage({
      path: `/weblog/${param.fields.slug}`,
      component: path.resolve(`./src/templates/post.js`) + `?__contentFilePath=${param.internal.contentFilePath}`,
      context: {
        id: param.id,
      },
    })
  })
}
