require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: `Colibri Creative Web`,
        description: `Launch your ideas to the brand space.`,
        author: `Manuel "Serverket" Hernandez`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
              fonts: [
                `material icons`,  
                `Roboto\:400,700`,  
                `Rubik\:400,700`
              ],
              display: 'swap'
            }
        },
        "gatsby-plugin-postcss",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-resolve-src",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            }
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Colibri Creative Web`,
                short_name: `ccw`,
                start_url: `/`,
                background_color: `#6C63FF`,
                theme_color: `#009cffff`,
                display: `minimal-ui`,
                icon: `src/assets/images/favicon.png`,
            }
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
              spaceId: process.env.CONTENTFUL_SPACE_ID,
              accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
          },
          `@contentful/gatsby-transformer-contentful-richtext`,
    ],
};
