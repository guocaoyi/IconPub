<script lang="ts" setup>
import bg from '@/assets/building.svg'
</script>

<template>
  <div flex flex-col flex-1 justify-center items-center>
    <div items-center flex flex-col>
      <img :src="bg" />
      <p>{{ $t('page.home.morning') }}</p>
      <span text-xs c="dark dark:light">{{ $t('page.home.description') }}</span>
    </div>
  </div>
</template>
