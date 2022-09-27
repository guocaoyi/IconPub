<script lang="ts" setup>
import config from '@/config'

const licenses = [
  {
    src: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32010602011142',
    lable: 'about.license.police',
  },
  { src: 'https://beian.miit.gov.cn/#/integrated/index', lable: 'about.license.icp' },
]
</script>

<template>
  <footer h-12 flex justify-center items-center text-xs>
    <span>©Copyright 2022-{{ config.siteBegin }} {{ config.siteName.toUpperCase() }} &nbsp;</span>
    <a c-black decoration-none mr-1 v-for="(item, index) in licenses" :key="index" :href="item.src">
      {{ $t(item.lable) }}</a
    >
  </footer>
</template>
