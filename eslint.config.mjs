import js from "@eslint/js";
import tseslint from "typescript-eslint";
import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig } from "eslint/config";

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

export default defineConfig([
	...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		ignores: [
			".next",
			"jest.config.js",
			"next-env.d.ts",
			"next.config.mjs",
			"node_modules",
			"out",
			"postcss.config.mjs",
			"tailwind.config.mjs",
		],
	},
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
		},
	},
	js.configs.recommended,
	tseslint.configs.recommendedTypeChecked,
]);
