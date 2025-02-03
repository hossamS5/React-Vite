import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginImport from 'eslint-plugin-import';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['dist'] },

  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',

      'no-console': 'error',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'prefer-const': 1,
      'default-param-last': 0,
      '@typescript-eslint/no-explicit-any': 0,
      'no-use-before-define': 0,
      'no-underscore-dangle': 0,
      'prefer-spread': 1,
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { 'react-hooks': eslintPluginReactHooks },
    rules: {
      // Enforce React Hooks rules
      'react-hooks/rules-of-hooks': 'error', // Enforce rules of hooks
      'react-hooks/exhaustive-deps': 'warn', // Warn on missing dependencies
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { react: eslintPluginReact },
    rules: {
      'react/jsx-props-no-spreading': 0,
      'react/default-props-match-prop-types': 0,
      'react/function-component-definition': [
        2,
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.tsx', 'jsx'],
        },
      ],
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { import: eslintPluginImport },
    rules: {
      'import/no-unresolved': 'error',
      'import/prefer-default-export': 0,
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'import/extensions': [
        'error',
        'always',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
];
