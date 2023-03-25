const path = require(`path`)
const fs = require(`fs`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  const { compile } = await import('@mdx-js/mdx')
  const remarkFrontmatter = (await import('remark-frontmatter')).default

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value: value.substr(1),
    })

    if (node.internal.contentFilePath.includes('/top/cards/')) {
      const mdx = fs.readFileSync(node.internal.contentFilePath)
      const compiled = await compile(
        mdx,
        {
          outputFormat: 'function-body',
          providerImportSource: '@mdx-js/react',
          remarkPlugins: [remarkFrontmatter],
          development: false
        }
      )

      createNodeField({
        name: `compiled`,
        node,
        value: compiled.value
      })
    } else {
      createNodeField({
        name: `compiled`,
        node,
        value: ''
      })
    }
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
