<script lang="ts" setup>
import config from '@/config'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

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
      { label: 'about.source.react', link: config.host.site },
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
    c="dark-800 dark:light"
    pt-1
    mx-4
    flex
    flex-col
    text-xs
    md:pt-2
    md:mx-10
    md:flex-row
    xl:pt-2
    xl:mx-20
    xl:flex-row
  >
    <div v-for="(about, index) in abouts" :key="index" w-50 mr-12 block bg="light dark:dark-800">
      <div font-600 pt-5 mt-1>{{ t(about.title) }}</div>
      <p v-for="(item, i) in about.items" :key="i">
        <a
          decoration-none
          :target="item.link.startsWith('/') ? '_self' : '_blank'"
          rel="noopener"
          :href="item.link"
          c="dark-800 dark:light"
        >
          {{ t(item.label) }}
        </a>
      </p>
    </div>
  </div>
</template>
