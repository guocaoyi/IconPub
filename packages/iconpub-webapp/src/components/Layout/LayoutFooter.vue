<script lang="ts" setup>
import config from '@/config'

const licenses = [
  {
    lable: config.domainBeian,
    type: 'police',
    link: `http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${
      config.domainBeian.match(/\d+/gi)?.[0] ?? ''
    }`,
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
    h-15
    flex
    flex-col
    px-4
    md:flex-row
    md:items-center
    md:justify-center
    md:h-9
    md:px-10
    xl:px-20
  >
    <span text-xs lh-5 text="xs dark dark:light-600">
      ©{{ $t('footer.right') }} 2022-{{ config.now }} {{ config.siteName.toUpperCase() }} &nbsp;
    </span>
    <a v-for="(item, i) in licenses" :key="i" :href="item.link" target="_blank" decoration-none>
      <span text="xs dark dark:light-600" lh-5>{{ item.lable }} &nbsp;</span>
    </a>
  </footer>
</template>
