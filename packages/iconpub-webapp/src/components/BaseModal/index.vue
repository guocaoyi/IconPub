<script lang="ts" setup>
interface Props {
  title: string
  dispaly: boolean
}

const props = defineProps({
  title: String,
  dispaly: Boolean,
})
</script>

<template>
  <Transition name="modal">
    <div
      v-if="dispaly"
      class="modal-mask"
      z-36
      fixed
      width="w-1/1"
      height="h-1/1"
      bg-black
      bg-op-50
    >
      <div table-cell v-middle>
        <div class="modal-container" w-80 px-8 py-5 c-white rd-1 shadow>
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
  top: 0;
  left: 0;

  display: table;
  transition: opacity 0.3s ease;
}

.modal-container {
  margin: 0px auto;
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
