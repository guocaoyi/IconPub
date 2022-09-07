<script lang="ts" setup>
import { ref } from 'vue'
import { Document, Menu as IconMenu, Setting } from '@element-plus/icons-vue'
const props = defineProps({
  foo: String,
})

const emit = defineEmits(['change', 'delete'])

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  isCollapse.value = false
  console.log(key, keyPath)
}

const handleClose = (key: string, keyPath: string[]) => {
  isCollapse.value = true
  console.log(key, keyPath, isCollapse)
}

// logger
const vLogDirective = {
  beforeMount: (el) => {
    console.info('x', el)
  },
}
</script>

<template>
  <el-menu
    default-active="2"
    class="container"
    v-log-directive
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="1">
      <el-icon><icon-menu /></el-icon>
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
.container {
  display: flex;
  flex-grow: 1;
  flex-direction: row;
}
</style>
