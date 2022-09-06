import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    count: 0,
  }),

  getters: {
    groupUser() {
      return ''
    },
  },

  actions: {
    increment() {
      this.count++
    },
  },
})
