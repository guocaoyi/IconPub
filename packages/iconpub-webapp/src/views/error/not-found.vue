<script lang="ts" setup>
import IlluNofound from '@/assets/illus/IlluNofound.vue'
</script>

<template>
  <div
    flex
    flex-col
    flex-1
    justify-center
    items-center
    text="4 dark dark:light"
    class="page-conatienr"
  >
    <IlluNofound />
    <p>{{ $t('error.notfound.title') }}</p>
    <span text="sm">{{ $t('error.notfound.description') }}</span>
  </div>
</template>

<style scoped>
@media (min-width: 48rem) {
  .page-conatienr {
    min-height: calc(100vh - 16.5rem);
  }
}
</style>
