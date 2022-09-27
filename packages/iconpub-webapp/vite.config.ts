import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import UnpluginVueComps from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
import { defineConfig, loadEnv } from 'vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const pathSrc = path.resolve(__dirname, 'src')

function htmlPlugin(env: ReturnType<typeof loadEnv>) {
  return {
    name: 'html-transform-plugin',
    transformIndexHtml: {
      enforce: 'pre' as const,
      transform: (html: string): string =>
        html.replace(/\/%(.*?)%\//g, (match, p1) => env[p1] ?? match),
    },
  }
}

export default defineConfig(({ mode }) => ({
  resolve: {
    alias: {
      '@/': `${pathSrc}/`,
    },
  },

  css: {},

  plugins: [
    Unocss({
      presets: [presetAttributify(), presetUno()],
    }),

    htmlPlugin(loadEnv(mode, '.')),
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
    port: 3000,
    cors: true,
  },

  preview: {
    host: '0.0.0.0',
    port: 8080,
    cors: true,
  },
}))
