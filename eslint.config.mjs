
import pluginJs from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginAirbnb from 'eslint-config-airbnb';
import pluginImport from 'eslint-plugin-import';

export default [
  {
    plugins: {
      tsplugin: tseslint,
      pluginReact: pluginReact,
      pluginAirbnb: pluginAirbnb,
      pluginImport: pluginImport,
    },
  },
  {
    ignores: ['node_modules', 'dist', 'build']
  },
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2022
      },
      parserOptions: pluginReact.configs.recommended.parserOptions
    },
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}']
  },
  {
    rules: {

    }
  }
];
