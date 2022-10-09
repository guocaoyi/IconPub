<script lang="ts" setup>
import { watch, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import config from '@/config'

// just for China mainland domain policy
const mainlandLicenses = [
  {
    lable: config.domainBeian,
    link: `http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${
      config.domainBeian.match(/\d+/gi)?.[0] ?? ''
    }`,
  },
  {
    lable: config.domainIcp,
    link: 'https://beian.miit.gov.cn',
  },
].filter((license) => !!license.lable)

const i18n = useI18n()
const licenses = ref(mainlandLicenses.filter(() => i18n.locale.value === 'zh'))

watch(i18n.locale, () => {
  licenses.value = i18n.locale.value === 'zh' ? mainlandLicenses : []
})
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
