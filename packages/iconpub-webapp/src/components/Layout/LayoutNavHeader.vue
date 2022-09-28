<script lang="ts" setup>
import config from '@/config'
import { useI18n } from 'vue-i18n'
import { isDark, toggleDark } from '@/store/useDark'

import IconI18n from '@/assets/icons/IconI18n.vue'
import IconSunny from '@/assets/icons/IconSunny.vue'
import IconMoon from '@/assets/icons/IconMoon.vue'

const links = [
  { label: 'header.home', link: '/' },
  { label: 'header.icon', link: '/user/ikons' },
  { label: 'header.illu', link: '/user/illus' },
  { label: 'header.doc', link: '/docs' },
]
const { locale } = useI18n()

const shield = `https://img.shields.io/github/stars/${config.author}?style=social`
const avator = ''
</script>

<template>
  <div flex items-center justify-between h-16 lh-16 font-500 px-4 md:px-10 xl:px-20>
    <nav flex items-center>
      <a :title="config.siteName" flex mr-2 md:mr-4 xl:mr-6>
        <img src="@/assets/logo.png" :alt="config.siteName" h-12 border="rd-1/2" />
      </a>
      <router-link
        v-for="(item, index) in links"
        :key="index"
        :to="item.link"
        mr-2
        md:mr-6
        no-underline
      >
        <span text="sm dark dark:light">{{ $t(item.label) }}</span>
      </router-link>
    </nav>

    <div flex items-center text="sm dark dark:light">
      <a items-center h-8 :href="config.socialGithub" target="_blank" hidden mr-2 md:flex>
        <img h-5 :src="shield" alt="preview badge" />
      </a>

      <a flex items-center mx-2 @click="$i18n.locale = locale == 'zh' ? 'en' : 'zh'">
        <IconI18n />
        {{ (locale == 'zh' ? '中' : 'EN')?.toUpperCase?.() }}
        <!-- <span v-if="locale == 'zh'">中</span>
        <span>EN</span> -->
      </a>

      <a flex items-center mx-2 @click="toggleDark()">
        <IconSunny v-if="isDark" />
        <IconMoon v-else />
      </a>

      <a v-if="!!avator" flex items-center h-8 mx-2>
        <img w-8 h-8 border="rd-1/2" src="https://" alt="" />
      </a>

      <button
        v-if="!avator"
        h-8
        w-15
        ml-2
        bg="white dark:dark-800"
        border="1px solid #9254de none rd-1"
      >
        <span text="sm dark dark:light">{{ $t('header.signin') }}</span>
      </button>
    </div>
  </div>
</template>
