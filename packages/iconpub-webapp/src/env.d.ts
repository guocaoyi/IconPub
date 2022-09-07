/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_SOME_KEY: string
  readonly VITE_GITHUB_URL: string
  readonly VITE_TRACE_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
