import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';

export default js.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      'plugin:react/recommended', // Extend React recommended settings
    ],
    settings: { react: { version: '18.3' } },
    files: ['**/*.{js,jsx}'], // Update to target JavaScript and JSX files
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      react,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
);