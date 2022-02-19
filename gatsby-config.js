module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-remark-autolink-headers",
    "gatsby-remark-images",
    "gatsby-remark-prismjs",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'blog',
        path: `${__dirname}/assets/posts`
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          "gatsby-remark-prismjs",
          "gatsby-remark-autolink-headers",
          "gatsby-remark-images"
        ]
      }
    },
  ],
  siteMetadata: {
    title: "がらくたツールボックス",
    siteName: "がらくたツールボックス",
    description: "ぴよっぴのつくったものたちをまとめています",
    siteUrl: "https://garakuta-toolbox.com",
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
