/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Prueba Codigo`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "4t6cvo9by44w",
        accessToken: "Cn1KvyvMMtZgAVvHqtbFRSo2iqCs8iaxzFHD_eJ92uc",
      },
    },
    "gatsby-plugin-image",
    "@contentful/gatsby-transformer-contentful-richtext",
  ],
};
