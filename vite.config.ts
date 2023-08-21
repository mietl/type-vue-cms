import { fileURLToPath, URL } from 'node:url'

import AutoImport from 'unplugin-auto-import/vite'

import viteCompression from 'vite-plugin-compression'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

import Compoments from 'unplugin-vue-components/vite'

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
    vue(),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon'
        })
      ]
    }),
    Compoments({
      resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
        // 自动注册图标组件
        IconsResolver({
          prefix: false,
          enabledCollections: ['ep', 'line-md', 'ant-design']
        })
      ]
    }),
    // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
    createStyleImportPlugin({
      resolves: [ElementPlusResolve()],
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          resolveStyle: (name: string) => {
            return `element-plus/theme-chalk/${name}.css`
          }
        }
      ]
    }),
    Icons({
      autoInstall: true
    }),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    })
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  build: {
    chunkSizeWarningLimit: 1200
  }
})
