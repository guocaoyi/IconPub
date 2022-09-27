import { ref } from 'vue'

interface Session {
  id: number
  name: string
}
const session = ref<Session>({
  id: 1,
  name: '',
})

/**
 * session user
 */
export const useUser = () => {
  const localCount = ref(1)

  return {
    session,
    localCount,
  }
}
