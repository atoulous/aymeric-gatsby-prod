module.exports = {
  siteMetadata: {
    title: 'Aymeric Toulouse',
    headerColor: '#467cff',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'aymerictoulouse',
        short_name: 'aymeric',
        start_url: '/',
        background_color: '#467cff',
        theme_color: '#467cff',
        display: 'minimal-ui',
        icon: 'src/images/me.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
};
