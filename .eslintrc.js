module.exports = {
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'airbnb',
    'plugin:node/recommended',
    'plugin:unicorn/all',
    'plugin:import/errors',
    'plugin:eslint-comments/recommended',
    'plugin:no-unsanitized/DOM',
    'plugin:security/recommended',
    'plugin:sonarjs/recommended',
    'prettier',
  ],
  plugins: ['unicorn', 'prettier'],
  globals: {
    RequestInit: 'readonly',
    MediaMetadata: 'readonly',
  },
  rules: {
    // eslint
    'consistent-return': 'off',
    'prefer-destructuring': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreMemberSort: true,
        ignoreDeclarationSort: true,
      },
    ],
    'func-style': [
      'error',
      'declaration',
      {
        allowArrowFunctions: true,
      },
    ],
    // prettier
    'prettier/prettier': ['error'],
    // import
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    // filenames
    'filenames/no-index': 'off',
    // unicorn
    'unicorn/no-keyword-prefix': [
      'error',
      { disallowedPrefixes: ['new', 'for', 'map'] },
    ],
    'unicorn/no-array-for-each': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          args: {
            arguments: false,
          },
          db: {
            database: false,
          },
          e: {
            event: false,
          },
          err: {
            error: false,
          },
          props: {
            properties: false,
          },
          params: {
            parameters: false,
          },
          req: {
            request: false,
          },
          res: {
            response: false,
          },
        },
      },
    ],
    'unicorn/filename-case': [
      'warn',
      {
        cases: {
          camelCase: true,
          kebabCase: true,
          pascalCase: true,
        },
      },
    ],
  },
  overrides: [
    // react
    {
      files: ['*.tsx', '*.jsx'],
      plugins: ['react-hooks', 'jsx-a11y'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      extends: [
        'plugin:react/recommended',
        'plugin:jest/recommended',
        'plugin:jsx-a11y/recommended',
      ],
      globals: {
        React: 'readonly',
      },
      rules: {
        // react
        'react/prop-types': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/jsx-filename-extension': [
          'error',
          { extensions: ['.tsx', '.jsx'] },
        ],
        'react/function-component-definition': [
          'error',
          { namedComponents: 'arrow-function' },
        ],
      },
    },
    // typescript
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.eslint.json'],
      },
      settings: {
        'import/resolver': {
          typescript: {},
        },
      },
      extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      plugins: ['@typescript-eslint'],
      rules: {
        // typescript
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/ban-types': 'warn',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/no-misused-promises': 'warn',
        '@typescript-eslint/consistent-type-definitions': [
          'error',
          'interface',
        ],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
          },
        ],
      },
    },
    // tests
    {
      files: [
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/*.test.js',
        '**/*.test.jsx',
        '**/*.spec.ts',
        '**/*.spec.tsx',
        '**/*.spec.js',
        '**/*.spec.jsx',
      ],
      env: {
        'jest/globals': true,
      },
      settings: {
        jest: { version: 'latest' },
      },
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      rules: {
        // import
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
