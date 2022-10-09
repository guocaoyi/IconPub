<script lang="ts" setup>
import { useRoute } from 'vue-router'

const { params } = useRoute()
console.info(params)
</script>

<template>
  <div flex flex-col flex-1 justify-center items-center>
    <div items-center>blog</div>
    <span>{{ params.id }}</span>
  </div>
</template>
