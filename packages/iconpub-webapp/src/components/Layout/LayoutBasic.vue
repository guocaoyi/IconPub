<script lang="ts" setup>
import { ref, onUpdated } from 'vue'
import { useRoute } from 'vue-router'
import { menus } from '@/config'

const { path } = useRoute()

const showAbout = ref(path === menus.home.path || path === menus.signin.path)

onUpdated(() => {
  const { path } = useRoute()
  const result = path === menus.home.path || path === menus.signin.path
  console.info('on update', path, result)
  showAbout.value = result
})
</script>

<template>
  <div min-w-90 bg="white dark:dark">
    <LayoutNavHeader />
    <RouterView />
    <LayoutAbout :v-if="showAbout" />
    <LayoutFooter />
  </div>
</template>
