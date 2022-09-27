<script lang="ts" setup>
import config from '@/config'

const id = config.domainBeian.match(/\d+/gi)?.[0] ?? ''
const licenses = [
  {
    lable: config.domainBeian,
    type: 'police',
    link: `http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${id}`,
  },
  {
    lable: config.domainIcp,
    type: 'icp',
    link: 'https://beian.miit.gov.cn',
  },
].filter((license) => !!license.lable)
</script>

<template>
  <footer
    bg="light dark:dark-800"
    mx-4
    flex
    flex-col
    text-xs
    md:mx-10
    xl:mx-20
    xl:flex-row
    xl:items-center
    xl:justify-center
  >
    <span c="dark-800 dark:light" mr-2 h-6>
      ©Copyright 2022-{{ config.now }} {{ config.siteName.toUpperCase() }}
    </span>
    <a
      v-for="(item, i) in licenses"
      :key="i"
      :href="item.link"
      target="_blank"
      decoration-none
      mr-2
      h-6
      c="dark-800 dark:light"
    >
      {{ $t(item.lable) }}
    </a>
  </footer>
</template>
