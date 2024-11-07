import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'error',
      'no-unreachable': 'error',
      'eol-last': ['error', 'always'],
      'quotes': ['error', 'double'],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'n/no-process-env': [
        'error',
        {
          allowedVariables: ['NODE_ENV'],
        },
      ],
    },
  },
];
