<script lang="ts" setup>
//
</script>

<template>
  <div flex flex-col flex-1 justify-center items-center text="4 dark dark:light">
    <p>{{ $t('blog.notfound.title') }}</p>
    <span text="sm">{{ $t('blog.notfound.description') }}</span>
    <form id="content_search">
      <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
      <input
        :placeholder="$t('blog.search.placeholder')"
        type="text"
        class="search_input search-query ui-autocomplete-input"
        autocomplete="off"
      />
    </form>
  </div>
</template>
