/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: ["gatsby-plugin-react-helmet"],
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
