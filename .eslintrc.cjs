module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    '@feature-sliced/eslint-config/rules/import-order/experimental',
    '@feature-sliced/eslint-config/rules/public-api/lite',
    '@feature-sliced/eslint-config/rules/layers-slices',
    'plugin:prettier/recommended'
  ],
  parser: "@typescript-eslint/parser",
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true
      }
    }
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json']
  },
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: 'import',
        next: '*',
      },
      {
        blankLine: 'any',
        prev: 'import',
        next: 'import',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['const', 'let'],
      },
      {
        blankLine: 'always',
        prev: ['const', 'let'],
        next: '*',
      },
      {
        blankLine: 'never',
        prev: ['const', 'let'],
        next: ['const', 'let'],
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'block-like',
      },
      {
        blankLine: 'always',
        prev: 'block-like',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: ['cjs-import'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['cjs-import'],
        next: ['cjs-import']
      }
    ],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/no-named-as-default': 'off',
    'import/extensions': 'off',
    'react/function-component-definition': [
      'error',
      {
        unnamedComponents: 'arrow-function'
      }
    ],
    'no-param-reassign': ['error', { props: false }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        'devDependencies': true
      }
    ],
    'react/jsx-props-no-spreading': 'off',
    "react/no-unknown-property": ["error", { "ignore": ["css"] }],
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
  },
};
