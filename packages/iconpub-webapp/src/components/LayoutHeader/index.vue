<script lang="ts" setup>
import config from '@/config'
// import { toggleDark } from '@/composables'

const links = [
  { label: 'header.home', link: '/' },
  { label: 'header.project', link: '/projects' },
  { label: 'header.illu', link: '/illus' },
  { label: 'header.doc', link: '/docs' },
]

const shield = `https://img.shields.io/github/stars/${config.author}?style=social`
const avator = ''
</script>

<template>
  <div
    flex
    items-center
    justify-between
    px-12
    h-16
    font-300
    md:px-5
    md:font-400
    xl:font-500
    bg="light dark:dark-800"
    c="dark-800 dark:light"
  >
    <div flex text-center items-center>
      <a title="iconpub" border="rd-1/2" h="8">
        <img h="8" src="@/assets/iconpub.png" alt="iconpub" />
      </a>
      <router-link
        v-for="(item, index) in links"
        :key="index"
        ml-4
        items-center
        text-sm
        text-dark
        no-underline
        c="black dark:white"
        :to="item.link"
      >
        {{ $t(item.label) }}
      </router-link>
    </div>

    <div flex>
      <a items-center h-8 mr-4 :href="config.socialGithub" target="_blank" hidden md:flex>
        <img h-5 :src="shield" alt="preview badge" />
      </a>

      <select v-model="$i18n.locale" mr-4 border-none bg-transparent text-xs c="black dark:white">
        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
          {{ (locale === 'zh' ? '中' : locale)?.toUpperCase?.() }}
        </option>
      </select>

      <!-- <a flex items-center h-8 mr-4 text-xs @click="toggleDark()">
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </a> -->

      <a v-if="!!avator" flex items-center h-8 mr-4 text-xs>
        <img w-8 h-8 border="rd-1/2" src="https://" alt="" />
      </a>

      <a flex items-center h-8 mr-4 text-xs>
        <span>{{ $t('header.signin') }}</span>
      </a>
    </div>
  </div>
</template>
