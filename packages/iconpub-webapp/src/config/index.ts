import { menus } from './menus'

/**
 * configuration
 */
export const config = {
  menus,
  cname: 'https://icons.pub',

  org: import.meta.env.VITE_ORG ?? '',
  author: import.meta.env.VITE_AUTHOR ?? '',
  siteName: import.meta.env.VITE_SITE_NAME ?? '',

  domainBeian: import.meta.env.VITE_DOMAIN_BEIAN ?? '',
  domainIcp: import.meta.env.VITE_DOMAIN_ICP ?? '',

  socialGmail: import.meta.env.VITE_SOCIAL_GMAIL ?? '',
  socialGithub: import.meta.env.VITE_SOCIAL_GITHUB ?? '',
  socialTwitter: import.meta.env.VITE_SOCIAL_TWITTER ?? '',
  traceId: import.meta.env.VITE_TRACE_ID ?? '',
}

export { menus } from './menus'
export type { Menu } from './menus'
export default config
