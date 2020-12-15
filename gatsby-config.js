module.exports = {
  siteMetadata: {
    title: 'Ebook Accessibili',
    titleTemplate: '%s • ePub3 | A11Y',
    siteLang: 'it',
    description:
      'Libri digitali per tutti: gli ebook che trovi qui sono adatti anche alle persone cieche e ipovedenti.',
    url: 'https://www.ebookaccessibili.it', // No trailing slash allowed!
    image: '/images/epub3-A11y.jpg', // Path to your image you placed in the 'static' folder
    author: 'Valeria Toti',
    twitterUsername: '@valeria_toti',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    // `gatsby-plugin-sitemap`,
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
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
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
        trackingId: 'UA-130687964-1',
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
    `gatsby-plugin-netlify`,
  ],
}
