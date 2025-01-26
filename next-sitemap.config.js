/**
 * @type {import('next-sitemap').IConfig}
 */

module.exports = {
  siteUrl: 'https://beshoi.dev',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
}
