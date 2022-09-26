<script lang="ts" setup>
import Vue from 'vue'
</script>

<template>
  <div class="home-content">
    <div class="home-slogen">
      <p>{{ $t('page.home.morning') }}</p>
      <p>{{ $t('page.home.morning') }}</p>
      <p>{{ $t('page.home.morning') }}</p>
      <p>{{ $t('page.home.morning') }}</p>
      <p>{{ $t('page.home.morning') }}</p>
      <p>{{ $t('page.home.morning') }}</p>
      <p>{{ $t('page.home.morning') }}</p>

      <p>{{ $t('page.home.morning') }}</p>
      <p>{{ $t('page.home.morning') }}</p>
    </div>
  </div>
</template>

<style>
.home-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.home-slogen {
  align-items: center;
  text-align: center;
}
</style>
