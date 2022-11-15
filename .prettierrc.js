module.exports = {
  semi: true,
  tabWidth: 2,
  bracketSpacing: true,
  singleQuote: true,
  bracketSameLine: false,
  trailingComma: 'all',
  printWidth: 80,
  endOfLine: 'lf',
  overrides: [
    {
      files: ['*.{md,mdx,yml,yaml}'],
      options: {
        printWidth: 100,
        proseWrap: 'always',
      },
    },
  ],
};
