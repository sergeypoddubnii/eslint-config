import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginAirbnb from 'eslint-config-airbnb';
import pluginImport from 'eslint-plugin-import';


export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]
  },
  {
    languageOptions: { globals: globals.browser }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...pluginImport.configs.recommended,
    ...pluginAirbnb

];
