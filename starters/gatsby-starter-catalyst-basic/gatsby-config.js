module.exports = {
  siteMetadata: {
    title: `Catalyst Basic`,
    description: `Speed up your GatsbyJS development workflow. Designed as a set of opinionated and advanced themes and starters using MDX and Theme-UI. Incorporates gatsby-theme-catalyst-core, gatsby-theme-catalyst-header-basic, and gatsby-theme-catalyst-footer-basic.`,
    keywords: [`gatsby`, `theme`, `react`],
    author: `Eric Howey`,
    twitter: `@erchwy`,
    siteUrl: `https://gatsby-starter-catalyst-basic.netlify.com`, //Change to you site address, required for sitemap.xml and robots.txt file among other things
    menuLinks: [
      {
        name: `Page 1`,
        link: `/page-1`,
        type: `internal`, //internal or anchor
      },
      {
        name: `Anchor 1`,
        link: `#anchor-1`,
        type: `anchor`, //internal or anchor
      },
      {
        name: `Page 2`,
        link: `/page-2`,
        type: `internal`, //internal or anchor
      },
    ],
    socialLinks: [
      {
        name: `Email`,
        link: `eric@erichowey.dev`,
        location: `footer`, //Options are "all", "header", "footer"
      },
      {
        name: `Github`,
        link: `https://www.github.com/ehowey`,
        location: `all`, //Options are "all", "header", "footer"
      },
      {
        name: `Twitter`,
        link: `https://www.twitter.com/erchwy`,
        location: `header`, //Options are "all", "header", "footer"
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-catalyst-core`,
      options: {
        //Default options are:
        // contentPath: `content/pages`,
        // assetPath: `content/assets`,
        // displaySiteLogo: true,
        // displaySiteTitle: true,
        // invertLogo: false,
        // useStickyHeader: false,
        // useSocialLinks: true,
        // useColorMode: true,
        // mobileMenuBreakpoint: `768px`,
        useStickyHeader: true,
      },
    },
    `gatsby-theme-catalyst-header-left`,
    `gatsby-theme-catalyst-footer-basic`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-catalyst-basic`,
        short_name: `catalyst`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#cccccc`,
        display: `minimal-ui`,
        icon: `content/assets/catalyst-site-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
