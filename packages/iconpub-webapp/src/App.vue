<script lang="ts" setup>
import Vue from 'vue'
</script>

<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <div class="content">
      <div class="slogen">
        <p>{{ $t('message.morning') }}</p>
      </div>
    </div>
    <BaseAbout />
  </el-config-provider>
</template>

<style>
#app {
  color: var(--ep-text-color-primary);
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.element-plus-logo {
  height: 16rem;
}

.content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.slogen {
  align-items: center;
  text-align: center;
}
</style>
