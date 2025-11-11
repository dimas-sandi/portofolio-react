import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import pluginReact from 'eslint-plugin-react' // Import the plugin
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      react: pluginReact,
    },
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react/react-in-jsx-scope': 'off', // Not needed for React 17+ with new JSX transform
      'react/jsx-uses-react': 'off',     // Not needed for React 17+ with new JSX transform
      'react/no-unknown-property': 'error', // Explicitly enable this rule
    },
  },
  {
    files: ['src/components/ModelViewer.jsx'],
    rules: {
      'react/no-unknown-property': 'off', // Disable for react-three-fiber components
    },
    },
    {
      files: ['vite.config.js'],
      languageOptions: {
        globals: globals.node,
      },
    },
  ])
