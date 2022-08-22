<script lang="ts" setup>
// import Vue from 'vue'
</script>

<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <router-view></router-view>
    <BaseAbout />
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
