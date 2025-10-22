import js from "@eslint/js";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
	nextVitals,
	nextTs,
	globalIgnores([
		".next",
		"jest.config.js",
		"next-env.d.ts",
		"next.config.mjs",
		"node_modules",
		"out",
		"postcss.config.mjs",
		"tailwind.config.mjs",
	]),
	{
		languageOptions: {
			parserOptions: {
				projectService: {
					allowDefaultProject: ["eslint.config.mjs"],
					defaultProject: "tsconfig.json",
				},
			},
		},
		rules: {
			"@typescript-eslint/no-deprecated": "error",
			"react-hooks/refs": "off", // Off because of https://github.com/facebook/react/issues/34775
		},
	},
	js.configs.recommended,
	tseslint.configs.recommendedTypeChecked,
]);

export default eslintConfig;
