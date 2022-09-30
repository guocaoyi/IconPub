<script lang="ts" setup>
import { useRoute } from 'vue-router'

const { path } = useRoute()
//
</script>

<template>
  <div min-w-90 bg="white dark:dark">
    <LayoutNavHeader />
    <RouterView />
    <LayoutAbout />
    <LayoutFooter />
  </div>
</template>
