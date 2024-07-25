import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importNewlines from 'eslint-plugin-import-newlines';
import prettier from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import typescriptSortKeys from 'eslint-plugin-typescript-sort-keys';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  {
    ignores: [
      '**/*.css',
      '**/*.scss',
      '**/*.svg',
      '.git',
      '.vscode',
      '**/node_modules',
      '**/build',
      '**/.github',
    ],
  },
  ...compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ),
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
      },
      parser: tsParser,
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'import-newlines': importNewlines,
      prettier,
      'simple-import-sort': simpleImportSort,
      //   'sort-keys-fix': sortKeysFix,
      'typescript-sort-keys': typescriptSortKeys,
      'unused-imports': unusedImports,
    },
    rules: {
      '@typescript-eslint/ban-types': 'warn',
      '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
      '@typescript-eslint/member-delimiter-style': 'warn',
      '@typescript-eslint/member-ordering': 'warn',
      '@typescript-eslint/method-signature-style': 'warn',
      '@typescript-eslint/no-duplicate-enum-values': 'warn',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'arrow-spacing': 'warn',
      'comma-spacing': [
        'warn',
        {
          after: true,
          before: false,
        },
      ],
      'default-param-last': 'warn',
      'jsx-a11y/no-autofocus': 'off',
      'keyword-spacing': 'warn',
      'linebreak-style': ['warn', 'unix'],
      'max-len': [
        'warn',
        {
          code: 80,
          ignoreComments: true,
          ignoreUrls: true,
        },
      ],
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],
      'no-extra-parens': ['warn', 'functions'],
      'no-extra-semi': 'warn',
      'no-irregular-whitespace': 'warn',
      'no-multi-spaces': 'warn',
      'no-multiple-empty-lines': 'warn',
      'no-restricted-imports': 'off',
      'no-trailing-spaces': 'warn',
      'no-unused-vars': 'off',
      'object-curly-spacing': ['warn', 'always'],
      'prettier/prettier': [
        'warn',
        {
          endOfLine: 'auto',
        },
        {
          usePrettierrc: true,
        },
      ],
      quotes: ['warn', 'single'],
      semi: ['warn', 'always'],
      'simple-import-sort/exports': 'warn',
      'simple-import-sort/imports': 'warn',
      'sort-keys': 'off',
      //   'sort-keys': [
      //     'warn',
      //     'asc',
      //     {
      //       caseSensitive: true,
      //       minKeys: 2,
      //       natural: false,
      //     },
      //   ],
      //   'sort-keys-fix/sort-keys-fix': 'warn',
      'space-before-blocks': ['warn', 'always'],
      'space-infix-ops': 'warn',
      'typescript-sort-keys/interface': 'warn',
      'typescript-sort-keys/string-enum': 'warn',
      'unicorn/no-null': 0,
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/prefer-spread': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],
    },
    settings: {
      'import/resolver': {
        typescript: {},
      },
      react: {
        version: 'detect',
      },
    },
  },
];
