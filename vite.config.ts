import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from "path";
import dts from 'vite-plugin-dts'

// example dts use with Vue https://github.com/qmhc/vite-plugin-dts/blob/main/examples/vue/vite.config.ts

export default defineConfig({
  plugins: [vue(), dts(
    {
      rollupTypes: true 
      // copyDtsFiles: true,
      // outDir: [
      //   'dist',
      //   // 'types'
      //   // 'types/inner'
      // ],
      // compilerOptions: {
      //   declarationMap: true
      // },
    }
  )],
  build: {
    minify: false,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: 'jsonforms-vue-primevue',
      // fileName: (format: any) => `jsonforms-vue-primevue.${format}.ts`,
      fileName: (format) => `jsonforms-vue-primevue.${format}.js`,
      formats: ['es','umd','cjs'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'vue',
        "lodash",
        "lodash.debounce",
        "cpf-cnpj-validator",
        "@jsonforms/core",
        "@jsonforms/vue",
        "@vee-validate/i18n",
        "@vee-validate/rules",
        "@vueuse/core",
        "ajv",
        "core-js",
        "cpf-cnpj-validator",
        "lodash",
        "maska",
        "password-validator",
        "primeicons",
        "primevue",
        "v-mask",
        "vee-validate",
        "vite-tsconfig-paths",
        "vue",
        "yup",
      ],
      output: {

        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {

          vue: 'Vue',
          "lodash": "lodash",
          "@jsonforms/core": "@jsonforms/core",
          "@jsonforms/vue": "@jsonforms/vue",
          "@vee-validate/i18n": "@vee-validate/i18n",
          "@vee-validate/rules": "@vee-validate/rules",
          "@vueuse/core": "@vueuse/core",
          "ajv": "ajv",
          "core-js": "core-js",
          "cpf-cnpj-validator": "cpf-cnpj-validator",
          "maska": "maska",
          "password-validator": "password-validator",
          "primeicons": "primeicons",
          "primevue": "primevue",
          "v-mask": "v-mask",
          "vee-validate": "vee-validate",
          "vite-tsconfig-paths": "vite-tsconfig-paths",
          "yup": "yup",
        }
      }
    }
  }
});
