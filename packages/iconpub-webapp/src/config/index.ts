import * as menus from './menu'

/**
 * host
 */
export const host = {
  site: 'https://icons.pub',
}

/**
 * configuration
 */
export const config = {
  ...menus,

  host,

  siteAuthor: import.meta.env.VITE_SITE_AUTHOR ?? '',
  siteName: import.meta.env.VITE_SITE_NAME ?? '',
  siteBegin: import.meta.env.VITE_SITE_BEGIN ?? '',

  socialGmail: import.meta.env.VITE_SOCIAL_GMAIL ?? '',
  socialGithub: import.meta.env.VITE_SOCIAL_GITHUB ?? '',
  socialTwitter: import.meta.env.VITE_SOCIAL_TWITTER ?? '',
  traceId: import.meta.env.VITE_TRACE_ID ?? '',
}

export default config
