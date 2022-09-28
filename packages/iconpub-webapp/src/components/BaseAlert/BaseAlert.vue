<script lang="ts" setup>
import IconClose from '@/assets/icons/IconClose.vue'
</script>

<template>
  <div class="flash">
    username has exited!
    <button class="flash-close">
      <IconClose />
    </button>
  </div>
</template>

<style scoped>
.falsh {
  padding: 16px 16px;
  margin: 0 auto;
  margin-bottom: 8px;
  font-size: 14px;
  border-style: solid;
  border-width: 1px;
  border-radius: 6px;

  color: var(--color-fg-default);
  background-image: linear-gradient(var(--color-accent-subtle), var(--color-accent-subtle));
  border-color: var(--color-accent-muted);
}

.falsh-close {
  float: right;
  padding: 16px;
  margin: -16px;
  text-align: center;
  cursor: pointer;
  background: none;
  border: 0;
  -webkit-appearance: none;
  appearance: none;
}
</style>
