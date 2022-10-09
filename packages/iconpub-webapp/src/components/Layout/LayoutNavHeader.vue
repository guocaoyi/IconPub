<script lang="ts" setup>
import config, { menus } from '@/config'
import { isDark, toggleDark } from '@/store/useDark'
import { useI18nPlus } from '@/store/useI18nPlus'

import IconI18n from '@/assets/icons/IconI18n.vue'
import IconSunny from '@/assets/icons/IconSunny.vue'
import IconMoon from '@/assets/icons/IconMoon.vue'

const { toggleLocale, alias } = useI18nPlus()

const links = [
  { label: menus.home.locale, link: menus.home.path },
  { label: menus.pub.locale, link: menus.pub.path },
  { label: menus.albums.locale, link: menus.albums.path },
  { label: menus.blogs.locale, link: menus.blogs.path },
]

const shield = `https://img.shields.io/github/stars/${config.author}?style=social`
const avator = ''
</script>

<template>
  <div flex items-center justify-between h-16 lh-16 px="4 md:10 xl:20" font-500>
    <nav flex items-center>
      <a :title="config.siteName" flex m="r-2 md:r-4 xl:r-6">
        <img src="@/assets/logo.png" :alt="config.siteName" h-8 border="rd-1/2" />
      </a>
      <router-link
        v-for="(item, index) in links"
        :key="index"
        :to="item.link"
        m="r-2 md:r-6"
        decoration-none
      >
        <span text="4 dark dark:light">{{ $t(item.label) }}</span>
      </router-link>
    </nav>

    <div flex items-center text="sm dark dark:light">
      <a :href="config.socialGithub" target="_blank" items-center hidden mr-2 md:flex>
        <img h-5 :src="shield" alt="preview badge" />
      </a>

      <a items-center hidden md:flex mx-2 @click="toggleLocale">
        <IconI18n />
        {{ alias }}
      </a>

      <a items-center hidden md:flex mx-2 @click="toggleDark()">
        <IconSunny v-if="isDark" />
        <IconMoon v-else />
      </a>

      <a v-if="!!avator" hidden md:flex items-center h-8 mx-2>
        <img h-8 w-8 border="rd-1/2" src="https://" alt="" />
      </a>
      <router-link
        v-else
        :to="menus.signin.path"
        h-7
        w-16
        ml-2
        flex
        items-center
        justify-center
        decoration-none
        bg="white dark:dark"
        border="1px solid #9254de rd-1"
      >
        <span text="sm dark dark:light">{{ $t(menus.signin.locale) }}</span>
      </router-link>
    </div>
  </div>
</template>
