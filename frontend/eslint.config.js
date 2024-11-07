import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "no-console": "warn",
      "no-unused-vars": "error",
      "no-unreachable": "error",
      "eol-last": ["error", "always"],
      "quotes": ["error", "double"],
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
      "react/react-in-jsx-scope": "off",
    },
  },
];
