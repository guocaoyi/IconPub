<script lang="ts" setup>
import config from '@/config'
// import { toggleDark } from '@/store/useDark'
// import { useI18n } from 'vue-i18n'

const links = [
  { label: 'header.home', link: '/' },
  { label: 'header.icon', link: '/user/ikons' },
  { label: 'header.illu', link: '/user/illus' },
  { label: 'header.doc', link: '/docs' },
]

const shield = `https://img.shields.io/github/stars/${config.author}?style=social`
const avator = ''
</script>

<template>
  <div flex items-center justify-between h-16 lh-16 font-500 px-4 md:px-10 xl:px-20>
    <div flex items-center>
      <a :title="config.siteName" flex>
        <img src="@/assets/logo.png" :alt="config.siteName" h-8 border="rd-1/2" />
      </a>
      <router-link v-for="(item, index) in links" :key="index" :to="item.link" mx-2 no-underline>
        <span text="sm dark dark:light">{{ $t(item.label) }}</span>
      </router-link>
    </div>

    <div flex items-center>
      <a items-center h-8 :href="config.socialGithub" target="_blank" hidden mx-2 md:flex>
        <img h-5 :src="shield" alt="preview badge" />
      </a>

      <!-- <a v-bind="$i18n.locale" flex items-center>
        <span v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
          {{ (locale === 'zh' ? '中' : locale)?.toUpperCase?.() }}
        </span>
      </a> -->

      <!-- <a flex items-center @click="toggleDark()">
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </a> -->

      <a v-if="!!avator" flex items-center h-8 mx-2>
        <img w-8 h-8 border="rd-1/2" src="https://" alt="" />
      </a>

      <a v-if="!avator" flex items-center h-8 ml-2>
        <span text="sm dark dark:light">{{ $t('header.signin') }}</span>
      </a>
    </div>
  </div>
</template>
