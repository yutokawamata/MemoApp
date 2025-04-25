import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: { js, react: pluginReact },
    languageOptions: {
      globals: globals.node
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules, // ← いったん recommended のルールを全部コピーして
      "react/react-in-jsx-scope": "off",             // ← 上書きする！
    }
  },
  tseslint.configs.recommended,
  {
    settings: {
      react: {
        version: "detect"
      }
    }
  }
]);
