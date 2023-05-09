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
    beian: config.domainBeian,
    icp: config.domainIcp,
  },
}

export const ja = {
  footer: {
    right: '著作権',
    beian: config.domainBeian,
    icp: config.domainIcp,
  },
}

export const ko = {
  footer: {
    right: '저작권',
    beian: config.domainBeian,
    icp: config.domainIcp,
  },
}

export default { en, zh, ja, ko }
