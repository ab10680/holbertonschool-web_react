module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'airbnb-base',
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
  },
  rules:  {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'import/extensions': 'off',
    'class-methods-use-this': 'off',
  },
};
