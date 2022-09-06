<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import { toggleDark } from '@/composables'
import config from '@/config'

const props = defineProps<{ age?: number }>()
</script>

<template>
  <div class="header">
    <div class="spacer">
      <a style="height: 2rem; border-radius: 50%" title="iconpub">
        <img style="height: 2rem" src="@/assets/iconpub.png" alt="iconpub" />
      </a>
      <router-link class="header-link" to="/">{{ $t('header.pub') }}</router-link>
      <router-link class="header-link" to="/libs">{{ $t('header.libs') }}</router-link>
      <router-link class="header-link" to="/projects">{{ $t('header.project') }}</router-link>
    </div>

    <div class="info">
      <select class="header-tool selecter" v-model="$i18n.locale">
        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
          {{ (locale === 'zh' ? '中' : locale)?.toUpperCase?.() }}
        </option>
      </select>

      <a class="header-tool" @click="toggleDark()" target="_blank">
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </a>

      <a target="_blank" :href="config.github" class="header-tool"
        ><img
          style="height: 1.2rem"
          src="https://img.shields.io/github/stars/guocaoyi?style=social"
          alt="preview badge"
      /></a>

      <a class="header-tool">
        <img class="avator" src="https://" alt="" v-if="false" />
        <span>{{ $t('account.sign.in') }}</span>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 4rem;
  min-height: 4rem;
  min-width: 85rem;

  background-color: transparent;

  padding: 0 3rem;

  font-weight: 500;

  .header-link {
    color: var(--ep-text-color-primary);
    font-size: 1rem;
    margin: 0 1rem;
    cursor: pointer;
    line-height: 3rem;
    align-items: center;
  }
}

.spacer {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.info {
  display: flex;
}

.header-tool {
  color: var(--ep-text-color-primary);
  height: 2rem;
  margin-right: 1rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
}

.selecter {
  border: none;
  background-color: transparent;
}

.byted-link {
  width: 5rem;
}

.avator {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
</style>
