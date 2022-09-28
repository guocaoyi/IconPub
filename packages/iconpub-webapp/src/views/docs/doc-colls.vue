<script lang="ts" setup>
import bg from '@/assets/illus/nofound.svg'
</script>

<template>
  <div flex flex-col flex-1 justify-center items-center dark:text-light text-dark>
    <div items-center flex flex-col>
      <img :src="bg" />
      <p>{{ $t('docs.notfound.title') }}</p>
      <span text-xs mb-25>{{ $t('docs.notfound.description') }}</span>
    </div>
  </div>
</template>
