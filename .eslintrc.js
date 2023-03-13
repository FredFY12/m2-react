module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:react/recommended", "standard"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    indent: "off",
    semi: ["error", "always"], // Точка с запятой в конце строки
    "space-before-function-paren": ["error", "always"], // Ошибка при наличии пробела при обозночении функции, уберём её
    quotes: ["error", "double", { avoidEscape: true }] // Использование двойных кавычек
  }
};
