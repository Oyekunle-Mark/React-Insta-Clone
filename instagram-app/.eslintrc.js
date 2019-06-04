module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: "airbnb",
  parser: "babel-eslint",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "quotes": 0,
    "comma-dangle": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "arrow-parens": 0,
    "array-callback-return": 0,
    "react/button-has-type": 0,
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "react/no-access-state-in-setstate": 0,
    "react/destructuring-assignment": 0,
    "no-param-reassign": 0,
    "implicit-arrow-linebreak": 0,
    "function-paren-newline": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "object-curly-newline": 0
  }
};
