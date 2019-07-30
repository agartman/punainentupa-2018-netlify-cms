module.exports = {
  siteMetadata: {
    siteUrl: 'https://punainentupa.fi',
    title:
      'Atte Gartman - Freelancer full stack developer - Punainen tupa solutions Oy',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/img/favicon.png',

        // WebApp Manifest Configuration
        appName: 'Punainen Tupa Solutions Oy website', // Inferred with your package.json
        appDescription: null,
        developerName: 'Atte Gartman',
        developerURL: null,
        dir: 'auto',
        lang: 'fi',
        background: '#fff',
        theme_color: '#ce2d2d',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
  ],
}
