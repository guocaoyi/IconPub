<script lang="ts" setup>
import config from '@/config'

const abouts = [
  {
    title: 'about.project.label',
    items: [
      { label: 'about.project.about', link: config.host.site },
      { label: 'about.project.readme', link: '' },
      { label: 'about.project.issues', link: '/feedback' },
      { label: 'about.project.license', link: '/' },
    ],
  },
  {
    title: 'about.dev.label',
    items: [
      { label: 'about.dev.github', link: config.host.site },
      { label: 'about.dev.gitee', link: '' },
      { label: 'about.dev.gitlab', link: '' },
    ],
  },
  {
    title: 'about.source.label',
    items: [
      { label: 'about.source.npm', link: config.host.site },
      {
        label: 'about.source.docker',
        link: `https://hub.docker.com/search?q=${config.org}/${config.siteName}`,
      },
    ],
  },
  {
    title: 'about.social.label',
    items: [
      { label: 'about.social.github', link: config.host.site },
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
      <p font-500>{{ $t(about.title) }}</p>
      <p v-for="(item, i) in about.items" :key="i">
        <a
          :target="item.link?.startsWith?.('/') ? '_self' : '_blank'"
          :href="item.link"
          rel="noopener"
          decoration-none
          c="dark-800 dark:light"
        >
          {{ $t(item.label) }}
        </a>
      </p>
    </div>
  </div>
</template>
