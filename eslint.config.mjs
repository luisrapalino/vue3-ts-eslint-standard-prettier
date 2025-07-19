import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";
import standard from "@vue/eslint-config-standard-with-typescript";
import prettierFlat from "eslint-config-prettier/flat";

export default defineConfigWithVueTs(
  pluginJs.configs.recommended,
  pluginVue.configs["flat/recommended"],
  vueTsConfigs.recommended,
  standard,
  {
    files: ["**/*.{ts,vue}"],
    rules: {
      "vue/multi-word-component-names": "off",
    },
    languageOptions: {
      globals: globals.browser
    }
  },
  prettierFlat
);
