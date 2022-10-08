import { useDark, useToggle } from '@vueuse/core'

export const isDark = useDark({ valueDark: 'light' })
export const toggleDark = useToggle(isDark)
