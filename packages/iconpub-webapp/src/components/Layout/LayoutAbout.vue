<script lang="ts" setup>
import config from '@/config'

const abouts = [
  {
    title: 'about.project.label',
    items: [
      { label: 'about.project.whoami', link: config.host.site },
      { label: 'about.project.legal', link: '/doc/legal' },
      { label: 'about.project.privacy', link: '/doc/privacy' },
      { label: 'about.project.feedback', link: '/feedback' },
      { label: 'about.source.license' },
    ],
  },
  {
    // source
    title: 'about.source.label',
    items: [
      {
        label: 'about.source.github',
        link: `https://github.com/${config.author}/${config.siteName}`,
      },
      { label: 'about.source.gitee', link: `https://gitee.com/${config.org}/${config.siteName}` },
      { label: 'about.source.npm', link: `https://www.npmjs.com/package/${config.siteName}` },
      {
        label: 'about.source.docker',
        link: `https://hub.docker.com/search?q=${config.org}/${config.siteName}`,
      },
    ],
  },
  {
    title: 'about.dev.label',
    items: [
      { label: 'about.dev.deploy', link: config.host.site },
      { label: 'about.dev.bucket' },
      { label: 'about.dev.plugin' },
      { label: 'about.dev.desktop' },
    ],
  },
  {
    // social
    title: 'about.social.label',
    items: [
      { label: 'about.social.github', link: `https://github.com/${config.author}` },
      { label: 'about.social.twitter', link: `https://twitter.com/${config.socialTwitter}` },
    ],
  },
]
</script>

<template>
  <div
    bg="light dark:dark-800"
    text="xs dark-800 dark:light"
    pt-4
    px-4
    flex
    flex-col
    md:flex-row
    md:px-10
    xl:px-20
  >
    <div v-for="(about, index) in abouts" :key="index" md:w-45 xl:w-60>
      <p font-800>{{ $t(about.title) }}</p>
      <p v-for="(item, i) in about.items" :key="i">
        <a
          v-if="!!item.link"
          :target="item.link?.startsWith?.('/') ? '_self' : '_blank'"
          :href="item.link"
          rel="noopener"
          decoration-none
          c="dark-800 dark:light"
        >
          {{ $t(item.label) }}
        </a>
        <span v-else>{{ $t(item.label) }}</span>
      </p>
    </div>
  </div>
</template>
