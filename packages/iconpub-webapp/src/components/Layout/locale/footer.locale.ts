import config from '@/config'

export const en = {
  footer: {
    right: 'Copyright',
    beian: config.domainBeian,
    icp: config.domainIcp,
  },
}

export const zh: typeof en = {
  footer: {
    right: '版权所有',
    beian: '',
    icp: '',
  },
}

export default { en, zh }
