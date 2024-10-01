import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
export default tseslint.config(
  { ignores: ['dist', "ignores"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'prettier': eslintPluginPrettier,
      'simple-import-sort': eslintPluginSimpleImportSort,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'prettier/prettier': [
        'warn',
        {
          "singleQuote": true,
          "tabWidth": 2,
          "trailingComma": "all",
          "jsxSingleQuote": true

        }
      ],
      'no-console': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'no-unused-vars': 'off', // Disable the base rule
      '@typescript-eslint/no-unused-vars': ['error'],
      'arrow-body-style': ['error', 'as-needed'],
      'array-callback-return': 'error',
      'no-await-in-loop': 'error',
      complexity: ['error'],
      'consistent-return': 'error',
      'no-else-return': 'error',
      'no-empty': 'error',
      'prefer-const': 'error',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
