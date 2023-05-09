export const en = {
  about: {
    project: {
      title: 'IconPub',
      whoami: 'About',
      term: 'Terms',
      privacy: 'Privacy',
    },
    source: {
      title: 'Open Source',
      github: 'GitHub',
      gitee: 'Gitee',
      npm: 'NPM Creater',
      docker: 'Docker Images',
      license: 'Apache License 2.0',
    },
    dev: {
      title: 'Progressive Usage',
      repo: 'By Git CI/CD',
      plugin: 'By Compiler Plugins',
      bucket: 'Private OSS Bucket',
      deploy: 'Private Deployment',
    },
    social: {
      title: 'Social',
      github: 'GitHub Issues',
      twitter: 'Twitter',
      email: 'Email',
    },
  },
}

export const zh: typeof en = {
  about: {
    project: {
      title: 'IconPub',
      whoami: '关于项目',
      term: '用户协议',
      privacy: '隐私条款',
    },
    source: {
      title: '开源仓库',
      github: 'GitHub',
      gitee: '码云',
      npm: '脚手架工具',
      docker: 'Docker 镜像',
      license: 'Apache License 2.0',
    },
    dev: {
      title: '渐进式使用',
      repo: '基于仓库持续构建',
      plugin: '基于打包插件编译',
      bucket: '私有对象存储桶',
      deploy: '私有化部署',
    },
    social: {
      title: '关注我们',
      github: 'GitHub 提问',
      twitter: '推特',
      email: '邮箱',
    },
  },
}

/**
 * translate use ChatGPT
 */
export const ja: typeof en = {
  about: {
    project: {
      title: 'IconPub',
      whoami: '概要',
      term: '利用規約',
      privacy: 'プライバシーポリシー',
    },
    source: {
      title: 'オープンソース',
      github: 'GitHub',
      gitee: 'Gitee',
      npm: 'NPM Creater',
      docker: 'Docker イメージ',
      license: 'Apache License 2.0',
    },
    dev: {
      title: 'プログレッシブ利用',
      repo: 'Git CI/CD により',
      plugin: 'コンパイラプラグインにより',
      bucket: 'プライベート OSS バケット',
      deploy: 'プライベートデプロイ',
    },
    social: {
      title: 'ソーシャル',
      github: 'GitHub Issues',
      twitter: 'Twitter',
      email: 'メール',
    },
  },
}

export const ko: typeof en = {
  about: {
    project: {
      title: 'IconPub',
      whoami: '프로젝트 소개',
      term: '이용약관',
      privacy: '개인정보 처리방침',
    },
    source: {
      title: '오픈소스',
      github: 'GitHub',
      gitee: 'Gitee',
      npm: 'NPM 크리에이터',
      docker: 'Docker 이미지',
      license: 'Apache License 2.0',
    },
    dev: {
      title: '진보적 사용',
      repo: 'Git CI/CD',
      plugin: '컴파일러 플러그인',
      bucket: '개인 OSS 버킷',
      deploy: '개인 배포',
    },
    social: {
      title: '소셜',
      github: 'GitHub Issues',
      twitter: 'Twitter',
      email: 'Email',
    },
  },
}

export default { en, zh, ja, ko }
