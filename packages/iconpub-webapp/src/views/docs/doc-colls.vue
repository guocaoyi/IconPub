<script lang="ts" setup>
import IlluNofound from '@/assets/illus/IlluNofound.vue'
</script>

<template>
  <div flex flex-col flex-1 justify-center items-center dark:text-light text-dark>
    <div items-center flex flex-col>
      <IlluNofound />
      <p>{{ $t('docs.notfound.title') }}</p>
      <span text-xs mb-25>{{ $t('docs.notfound.description') }}</span>
    </div>
  </div>
</template>
