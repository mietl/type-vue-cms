import { fileURLToPath, URL } from 'node:url'

import AutoImport from 'unplugin-auto-import/vite';
import Compoments from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import {
  createStyleImportPlugin,
  ElementPlusResolve,
} from 'vite-plugin-style-import';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'





// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers:[ElementPlusResolver()]
    }),
    Compoments({
      resolvers:[
        ElementPlusResolver()
      ]
    }),
    createStyleImportPlugin({
      resolves: [ElementPlusResolve()],
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          resolveStyle: (name: string) => {
            return `element-plus/theme-chalk/${name}.css`;
          }
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
