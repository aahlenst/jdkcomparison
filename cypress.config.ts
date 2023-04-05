import {defineConfig} from "cypress";

export default defineConfig({
	component: {
		devServer: {
			framework: "next",
			bundler: "webpack",
		},
	},
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
	reporter: "cypress-multi-reporters",
	reporterOptions: {
		configFile: "reporter-config.json",
	},
	retries: {
		runMode: 2,
		openMode: 0
	}
});
