<script lang="ts" setup>
import IlluBuilding from '@/assets/illus/IlluBuilding.vue'
</script>

<template>
  <div flex flex-col flex-1 justify-center items-center dark:text-light text-dark>
    <div items-center flex flex-col>
      <IlluBuilding />
      <p>{{ $t('page.home.morning') }}</p>
      <span text-xs mb-25>{{ $t('page.home.description') }}</span>
    </div>
  </div>
</template>
