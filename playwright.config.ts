import { defineConfig, devices } from "@playwright/test";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
	testDir: "./tests",
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	reporter: process.env.CI ? "github" : "list",
	use: {
		baseURL: process.env.PLAYWRIGHT_BASE_URL
			? process.env.PLAYWRIGHT_BASE_URL
			: "http://127.0.0.1:3000",
		trace: "on-first-retry",
	},

	/* Configure projects for major browsers */
	projects: [
		{
			name: "chromium",
			testIgnore: /mobile/,
			use: { ...devices["Desktop Chrome"] },
		},
		{
			name: "firefox",
			testIgnore: /mobile/,
			use: { ...devices["Desktop Firefox"] },
		},
		{
			name: "webkit",
			testIgnore: /mobile/,
			use: { ...devices["Desktop Safari"] },
		},
		{
			name: "Mobile Chrome",
			testIgnore: /desktop/,
			use: { ...devices["Pixel 5"] },
		},
		{
			name: "Mobile Safari",
			testIgnore: /desktop/,
			use: { ...devices["iPhone 12"] },
		},
	],
});