module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['plugin:vue/recommended', 'prettier/vue', 'prettier'],
  plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
  },
};
