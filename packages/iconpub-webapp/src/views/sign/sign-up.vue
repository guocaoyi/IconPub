<script lang="ts" setup>
import config from '@/config'
</script>

<template>
  <main>
    <div class="auth-form px-3">
      <input type="hidden" />
      <div class="auth-form-header p-0">
        <h1>Sign up to {{ config.siteName }}</h1>
      </div>
    </div>
  </main>
</template>
