import { menus } from './menu'

/**
 * configuration
 */
export const config = {
  menus,
  cname: 'https://icons.pub',

  now: import.meta.env.VITE_NOW ?? '',
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

export { menus } from './menu'
export type { Menu } from './menu'
export default config
