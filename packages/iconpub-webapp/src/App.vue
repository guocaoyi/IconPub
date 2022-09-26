<script lang="ts" setup>
import Vue from 'vue'
</script>

<template>
  <LayoutHeader />
  <router-view></router-view>
  <LayoutFooter />
</template>

<style>
body {
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  min-height: 50rem;

  display: flex;
  flex-direction: column;
}
</style>
