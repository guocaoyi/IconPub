/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    // all rules docs https://eslint.org/docs/rules/
    'prettier/prettier': [
      'error',
      {
        jsxSingleQuote: false,
        singleQuote: true,
        trailingComma: 'all',
        endOfLine: 'lf',
        printWidth: 100,
        semi: false,
        tabWidth: 2,
        useTabs: false,
      },
    ],
    // 'vue/multi-word-component-names': [
    //   'error',
    //   {
    //     ignores: ['index'],
    //   },
    // ],
  },
}
