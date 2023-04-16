import { defineConfig } from "cypress";

export default defineConfig({
	component: {
		devServer: {
			framework: "next",
			bundler: "webpack",
		},
	},
	e2e: {
		baseUrl: "http://localhost:3000",
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		viewportWidth: 1024, // lg breakpoint of Tailwind, required due to filters.
		viewportHeight: 768,
	},
	reporter: "cypress-multi-reporters",
	reporterOptions: {
		configFile: "reporter-config.json",
	},
	retries: {
		runMode: 2,
		openMode: 0,
	},
});
