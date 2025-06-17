import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "vue/html-self-closing": [
      "warn",
      {
        html: {
          void: "always",
          normal: "never",
        },
      },
    ],
    "vue/multi-word-component-names": ["naver"],
  },
});
