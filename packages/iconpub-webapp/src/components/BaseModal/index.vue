<script lang="ts" setup>
interface Props {
  title: string
  display?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  title: '',
  display: false,
})

defineEmits(['ok', 'cancle'])
</script>

<template>
  <Transition name="modal">
    <div
      v-if="display"
      class="modal-mask"
      z-36
      fixed
      width="w-1/1"
      height="h-1/1"
      bg="black op-50"
      top-0
      left-0
      table
      transition="opacity 30 ease"
    >
      <div v-middle table-cell>
        <div
          class="modal-container"
          w-80
          p="x-8 y-5"
          c-white
          rd-1
          shadow
          margin-a
          transition="all 30 ease"
        >
          <div mt-0 c-balck>
            <slot name="header">{{ props.title }}</slot>
          </div>

          <div my-5>
            <slot name="body">default body</slot>
          </div>

          <div>
            <slot name="footer">
              default footer
              <button float-right @click="$emit('cancle')">Cancle</button>
              <button float-right @click="$emit('ok')">OK</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  transition: opacity 0.3s ease;
}

.modal-container {
  transition: all 0.3s ease;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
