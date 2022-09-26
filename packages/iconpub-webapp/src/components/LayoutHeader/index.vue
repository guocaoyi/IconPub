<script lang="ts" setup>
import { toggleDark } from '@/composables'
import config from '@/config'

const tools = [
  { path: '/', title: 'header.pub' },
  { path: '/libs', title: 'header.libs' },
  { path: '/projects', title: 'header.project' },
]

const shield = 'https://img.shields.io/github/stars/guocaoyi?style=social'
const avator = ''
</script>

<template>
  <div flex items-center justify-between p="x-12" h-16 font-500>
    <div flex text-center items-center>
      <a title="iconpub" border="rd-1/2" h="8">
        <img h="8" src="@/assets/iconpub.png" alt="iconpub" />
      </a>
      <router-link
        m="x-4"
        items-center
        no-underline
        text-xl
        c-black
        v-for="(item, index) in tools"
        :key="index"
        :to="item.path"
      >
        {{ $t(item.title) }}
      </router-link>
    </div>

    <div flex>
      <a flex items-center h-8 mr-4 :href="config.github" target="_blank">
        <img h-5 :src="shield" alt="preview badge" />
      </a>

      <select flex items-center h-8 mr-4 border-none bg-transparent text-xs v-model="$i18n.locale">
        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
          {{ (locale === 'zh' ? '中' : locale)?.toUpperCase?.() }}
        </option>
      </select>

      <!-- <a flex items-center h-8 mr-4 text-xs @click="toggleDark()">
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </a> -->

      <a flex items-center h-8 mr-4 text-xs v-if="!!avator">
        <img w-8 h-8 border="rd-1/2" src="https://" alt="" />
      </a>

      <a flex items-center h-8 mr-4 text-xs>
        <span>{{ $t('account.sign.in') }}</span>
      </a>

      <a flex items-center h-8 mr-4 text-xs>
        <span>{{ $t('account.sign.up') }}</span>
      </a>
    </div>
  </div>
</template>
