<script lang="ts" setup>
import config from '@/config'

const licenses = [
  {
    lable: config.domainBeian,
    locale: 'footer.beian',
    type: 'police',
    link: `http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${
      config.domainBeian.match(/\d+/gi)?.[0] ?? ''
    }`,
  },
  {
    lable: config.domainIcp,
    locale: 'footer.icp',
    type: 'icp',
    link: 'https://beian.miit.gov.cn',
  },
].filter((license) => !!license.lable)
</script>

<template>
  <footer
    bg="light dark:dark"
    h-15
    px-4
    flex
    flex-col
    md:flex-row
    md:items-center
    md:justify-center
    md:h-8
    md:px-10
    xl:px-20
  >
    <span text="xs dark dark:light" lh-5>
      ©{{ $t('footer.right') }} 2022-{{ config.now }} {{ config.siteName.toUpperCase() }} &nbsp;
    </span>
    <a
      v-for="(item, i) in licenses"
      :key="i"
      :href="item.link"
      target="_blank"
      lh-5
      flex
      decoration-none
    >
      <span text="xs dark dark:light">{{ item.lable }} &nbsp;</span>
    </a>
  </footer>
</template>
