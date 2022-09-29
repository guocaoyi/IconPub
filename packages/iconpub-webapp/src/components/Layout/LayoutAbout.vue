<script lang="ts" setup>
import config, { menus } from '@/config'

const abouts = [
  {
    title: 'about.project.title',
    items: [
      { label: 'about.project.whoami', link: menus.home.path },
      { label: 'about.project.term', link: menus.terms.path },
      { label: 'about.project.privacy', link: menus.privacy.path },
      { label: 'about.project.feedback', link: menus.feedback.path },
      { label: 'about.source.license' },
    ],
  },
  {
    // source
    title: 'about.source.title',
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
    // development
    title: 'about.dev.title',
    items: [
      { label: 'about.dev.repo' },
      { label: 'about.dev.plugin' },
      { label: 'about.dev.bucket' },
      { label: 'about.dev.deploy' },
    ],
  },
  {
    // social
    title: 'about.social.title',
    items: [
      { label: 'about.social.github', link: `https://github.com/${config.author}` },
      { label: 'about.social.twitter', link: `https://twitter.com/${config.socialTwitter}` },
      { label: 'about.social.email', link: `mailto:${config.socialGmail}` },
    ],
  },
]
</script>

<template>
  <div
    display-flex
    flex="col md:row"
    p="t-4 x-4 md:x-10 xl:x-20"
    text="xs dark dark:light"
    bg="light dark:dark"
  >
    <div v-for="(about, index) in abouts" :key="index" w="md:45 xl:60">
      <p font-800>{{ $t(about.title) }}</p>
      <p v-for="(item, i) in about.items" :key="i">
        <a
          v-if="!!item.link"
          :target="item.link?.startsWith?.('/') ? '_self' : '_blank'"
          :href="item.link"
          rel="noopener"
          decoration-none
          c="dark dark:light"
        >
          {{ $t(item.label) }}
        </a>
        <span v-else>{{ $t(item.label) }}</span>
      </p>
    </div>
  </div>
</template>
