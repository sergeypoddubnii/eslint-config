import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]
  },
  {
    ignores: ['node_modules', 'dist', 'build']
  },
  {
    languageOptions: {
      globals: globals.browser
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "no-case-declarations": "off",
      "@typescript-eslint/ban-ts-comment" : "off",
      "no-console": ["error"],
      "template-curly-spacing": 0,
      "@typescript-eslint/no-unused-expressions": "off",
      "quotes": ["error", "single"],
      "no-multiple-empty-lines": ["error", { "max": 1 }],
      "no-debugger": "error",
      "indent": ["error", "tab"],
      "space-in-parens": ["error", "never"]
    }
  }
];
