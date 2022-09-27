import { useDark, useToggle } from '@vueuse/core'

export const isDark = useDark({ valueDark: '' })
export const toggleDark = useToggle(isDark)
