import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginAirbnb from 'eslint-config-airbnb';
import pluginImport from 'eslint-plugin-import';

export default [
  {
    // languageOptions: { globals: globals.browser },
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
  pluginJs.configs.recommended
];
