module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier", "import"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react/jsx-no-useless-fragment": 0,
    "import/order": 0,
    "import/prefer-default-export": "off",
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "prefer-arrow-callback": "off",
    "no-var": "error",
    "no-dupe-keys": "error",
    "react/prop-types": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: ["arrow-function", "function-declaration"],
      },
    ],
    "@typescript-eslint/no-explicit-any": "error",
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-one-expression-per-line": 0,
    "no-nested-ternary": 0,
  },
  globals: {
    React: "writable",
  },
};
