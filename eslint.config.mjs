import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const prettierRules = {
  'prettier/prettier': [
    'error',
    {
      endOfLine: 'auto',
      semi: true,
      singleQuote: true,
      tabWidth: 2,
      useTabs: false,
      arrowParens: 'avoid',
      trailingComma: 'all',
      printWidth: 80,
      plugins: [
        '@trivago/prettier-plugin-sort-imports',
        'prettier-plugin-tailwindcss',
      ],
      importOrderSeparation: false,
      importOrderSortSpecifiers: true,
      importOrderCaseInsensitive: true,
      importOrder: ['^\\u0000', '^node:', '^@?\\w', '^\\.'],
    },
  ],
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {},
});

const eslintConfig = [
  ...compat.config({
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    extends: [
      'next',
      'eslint:recommended',
      'prettier',
      'next/core-web-vitals',
      'next/typescript',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
      'plugin:react-hooks/recommended',
      'plugin:tailwindcss/recommended',
      'plugin:jsx-a11y/recommended',
    ],
    plugins: [
      'prettier',
      '@typescript-eslint',
      'react',
      'react-hooks',
      'tailwindcss',
      'jsx-a11y',
      'unused-imports',
    ],
    rules: {
      ...prettierRules,
      //Import
      'import/extensions': 'off',
      'import/prefer-default-export': 'off',
      'import/order': 'off',
      'unused-imports/no-unused-imports': 'error',

      //React
      'react/function-component-definition': 'off',
      'react/destructuring-assignment': 'off',
      'react/require-default-props': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/no-danger': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      //Typescript
      '@typescript-eslint/comma-dangle': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'no-restricted-syntax': [
        'error',
        'ForInStatement',
        'LabeledStatement',
        'WithStatement',
      ],
      '@typescript-eslint/no-throw-literal': 'off',
      '@typescript-eslint/lines-between-class-members': 'off',

      //JSX-Ally
      'jsx-a11y/label-has-associated-control': 'off',

      //Tailwind
      'tailwindcss/no-custom-classname': 'off',
    },
  }),
];

export default eslintConfig;
