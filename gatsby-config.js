module.exports = {
  siteMetadata: {
    title: 'ebook accessibili',
    author: '@valeria_toti',
    image: "/images/ebook-accessibili.jpg",
    siteUrl: 'https://www.ebookaccessibili.it',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'ebook accessibili',
        short_name: 'ePubA11Y',
        lang: 'it',
        start_url: '/',
        background_color: '#155F6F',
        theme_color: '#155F6F',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-130687964-1",
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,

      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Ubuntu`,
            variants: [`400`, `400i`, `700`, `700i`],
          },
          {
            family: `Exo`,
            variants: [`400`, `600`, `700`]
          },
        ],
      },
    }
  ],
}
