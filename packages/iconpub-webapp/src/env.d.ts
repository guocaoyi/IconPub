/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.md' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}

interface ImportMetaEnv {
  readonly VITE_ORG: string
  readonly VITE_AUTHOR: string
  readonly VITE_SITE_NAME: string
  readonly VITE_DOMAIN_BEIAN: string
  readonly VITE_DOMAIN_ICP: string
  readonly VITE_SOCIAL_GMAIL: string
  readonly VITE_SOCIAL_GITHUB: string
  readonly VITE_SOCIAL_TWITTER: string
  readonly VITE_GA_ID: string
  readonly VITE_TRACE_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
