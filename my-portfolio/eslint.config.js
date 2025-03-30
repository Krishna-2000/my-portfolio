import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';

export default [
  { ignores: ['dist', 'node_modules'] }, // Ignore unnecessary files
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin, // Ensures import validation
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules, // Enables React linting
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      
      // Import validation rules
      'import/no-unresolved': 'error', // Catches invalid imports
      'import/no-duplicates': 'warn', // Warns for duplicate imports
      'import/order': ['error', { groups: ['builtin', 'external', 'internal'] }],

      // General improvements
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react/jsx-uses-react': 'off', // Not needed for React 17+
      'react/react-in-jsx-scope': 'off', // Not needed for React 17+
    },
    settings: {
      react: {
        version: 'detect', // Auto-detect React version
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx'],
        },
      },
    },
  },
];
