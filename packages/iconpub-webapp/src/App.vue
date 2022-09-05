<script lang="ts" setup>
// import Vue from 'vue'
</script>

<template>
  <el-config-provider namespace="ep">
    <base-header />
    <router-view></router-view>
    <base-about />
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
