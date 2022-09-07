import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import UnpluginVueComps from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import type { UserConfigExport } from 'vite'

const pathSrc = path.resolve(__dirname, 'src')

export default defineConfig({
  mode: 'development',

  resolve: {
    alias: {
      '@/': `${pathSrc}/`,
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`,
      },
    },
  },

  plugins: [
    vue(),
    UnpluginVueComps({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
      dts: 'src/components.d.ts',
    }),
  ],

  server: {
    proxy: {
      '/api': {
        target: 'http://icons.dev.pub',
        changeOrigin: true,
        pathRewrite: {
          '/api': '',
        },
      },
    },
    host: '0.0.0.0',
    port: 8000,
    cors: true,
  },

  preview: {
    host: '0.0.0.0',
    port: 8080,
    cors: true,
  },
} as UserConfigExport)
