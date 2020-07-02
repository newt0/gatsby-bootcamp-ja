module.exports = {
  siteMetadata: {
    title: 'Full-Stack Bootcamp!',
    author: 'newt0'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    }
  ]
}