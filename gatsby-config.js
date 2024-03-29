module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map(node => {
                const url = `${site.siteMetadata.siteUrl}/weblog/${node.slug}`

                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url,
                  guid: url,
                })
              })
            },
            query: `
              {
                allMdx(filter: {internal: {contentFilePath: {regex: "/posts/"}}}, sort: {order: DESC, fields: frontmatter___date}) {
                  nodes {
                    frontmatter {
                      title
                      date
                    }
                    fields {
                      slug
                    }
                    excerpt(pruneLength: 100)
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "garakuta-toolbox weblog",
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/assets/posts`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "cards",
        path: `${__dirname}/assets/top`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          "gatsby-remark-autolink-headers",
          "gatsby-remark-images",
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`
            }
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              ignoreFileExtensions: ["bmp", "png", "jpg", "jpeg"],
            },
          },
        ],
        mdxOptions: {
          remarkPlugins: [
            require('remark-gfm')
          ],
          rehypePlugins: [
            require('@mapbox/rehype-prism')
          ]
        }
      },
    },
    "gatsby-transformer-yaml",
    "gatsby-plugin-sitemap",
  ],
  siteMetadata: {
    title: "がらくたツールボックス",
    siteName: "がらくたツールボックス",
    description: "ぴよっぴのつくったものたちをまとめています",
    siteUrl: "https://garakuta-toolbox.com",
    counterUrl: "",
    weblog: {
      tagPath: "/weblog/tags/",
    },
    twitter: {
      card: "summary_large_image",
      image: "https://garakuta-toolbox.com/og_image.png",
    },
    og: {
      locale: "ja_JP",
      image: "https://garakuta-toolbox.com/og_image.png",
    },
  },
}
