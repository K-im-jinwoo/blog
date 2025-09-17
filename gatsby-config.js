/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My GitHub Blog`,
    author: `Your Name`,
    description: `Gatsby + unified로 만든 블로그`,
    siteUrl: `https://yourusername.github.io`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        // unified 기반 플러그인 설정
        plugins: [
          'gatsby-remark-prismjs', // 코드 하이라이팅
          'gatsby-remark-autolink-headers', // 자동 링크 헤더
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              quality: 90,
            },
          },
        ],
        // remark 플러그인 직접 추가
        remarkPlugins: [
          require('remark-gfm'), // GitHub Flavored Markdown
          require('remark-footnotes'),
        ],
        // rehype 플러그인 추가
        rehypePlugins: [
          require('rehype-highlight'), // 코드 하이라이팅
        ],
      },
    },
    // SEO 및 성능 최적화
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
  ],
}

