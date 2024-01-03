module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    quotes: ["error", "single"],
    "no-multi-spaces": "error",
    "react/jsx-curly-spacing": [2, "never", {
      "allowMultiline": false,
      "spacing": {"objectLiterals": "always"}
    }],
    "react/jsx-boolean-value":true,
    "jsx-a11y/alt-text": [ 2, {
      "elements": [ "img", "object", "area", "input[type=\"image\"]" ],
      "img": ["Image"],
      "object": ["Object"],
      "area": ["Area"],
      "input[type=\"image\"]": ["InputImage"]
    }],
  "react/jsx-wrap-multilines":{
    "declaration": "parens",
    "assignment": "parens",
    "return": "parens",
    "arrow": "parens",
    "condition": "ignore",
    "logical": "ignore",
    "prop": "ignore"
  },
  "react/self-closing-comp": ["error", {
    "component": true,
    "html": true
  }],


// bad

  },
}
