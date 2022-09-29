import type { AppContext, Component, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null
}

export const withInstall = <T extends Component, E extends Record<string, Component>>(
  main: T & { [K: string]: unknown },
  extra?: E,
) => {
  ;(main as SFCWithInstall<T>).install = (app): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp?.name ?? main.name ?? '', comp)
    }
  }

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      main[key] = comp
    }
  }
  return main as SFCWithInstall<T> & E
}
