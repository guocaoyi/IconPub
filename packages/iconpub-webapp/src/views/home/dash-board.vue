<script lang="ts" setup>
import IlluBuilding from '@/assets/illus/IlluBuilding.vue'
</script>

<template>
  <div
    flex
    flex-col
    flex-1
    justify-center
    items-center
    text="4 dark dark:light"
    min-height="[cacl(100vh - 18rem)]"
  >
    <IlluBuilding />
    <p>{{ $t('home.morning') }}</p>
    <span text="sm">{{ $t('home.description') }}</span>
  </div>
</template>

<style scoped>
@media (min-width: 48rem) {
  .page-conatienr {
    min-height: calc(100vh - 18rem);
  }
}
</style>
