<script lang="ts" setup>
import config from '@/config'

const abouts = [
  {
    title: 'about.project.label',
    items: [
      { label: 'about.project.about', link: config.host.site },
      { label: 'about.project.readme', link: '' },
      { label: 'about.project.issues', link: '' },
      { label: 'about.project.license', link: '' },
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
      { label: 'about.source.docker', link: config.host.site },
    ],
  },
  { title: 'about.social.label', items: [{ label: 'about.dev.github', link: config.host.site }] },
]
</script>

<template>
  <div ml-20 w-300 p="y-8" flex text-xs>
    <div w-50 mr-12 block v-for="(about, index) in abouts" :key="index">
      <div font-400 mb-5 mt-1>{{ $t(about.title) }}</div>
      <p v-for="(item, i) in about.items" :key="i">
        <a c-black decoration-none target="_blank" rel="noopener" :href="item.link">{{
          $t(item.label)
        }}</a>
      </p>
    </div>
  </div>
</template>
