<script lang="ts" setup>
import { ref } from 'vue'
import { Document, Menu as IconMenu, Setting } from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  isCollapse.value = false
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  isCollapse.value = true
  console.log(key, keyPath)
}
</script>

<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
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
.el-menu-vertical-demo {
  flex-grow: 1;
}
</style>
