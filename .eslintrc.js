module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/multi-word-component-names": [
      "error",
      {
        // multi-wordでなくても問題ないコンポーネント名を追加していく
        ignores: ["Card"],
        ignores: ["Cards"],
        ignores: ["Footer"],
        ignores: ["Nav"],
        ignores: ["Root"],
        ignores: ["About"],
        ignores: ["Home"],
      },
    ],
  },
}
