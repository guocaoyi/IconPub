<script setup lang="ts">
import Vue from 'vue'
</script>

<template>
  <el-config-provider namespace="ep">
    <LayoutHeader />
    <router-view></router-view>
    <LayoutFooter />
  </el-config-provider>
</template>

<style>
#app {
  color: var(--ep-text-color-primary);
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
