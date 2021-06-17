module.exports = {
  extends: ['airbnb-typescript'],
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    project: `./tsconfig.json`,
  },
  rules: {
    'import/prefer-default-export': 'off',
    quotes: [2, 'single', { avoidEscape: true }],
    'max-len': ['error', { code: 120 }],
  },
};
