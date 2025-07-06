import { defineConfig, devices } from "@playwright/test";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
	testDir: "./tests",
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	timeout: 10000,
	retries: process.env.CI ? 2 : 0,
	reporter: process.env.CI ? "github" : "list",
	use: {
		baseURL: process.env.PLAYWRIGHT_BASE_URL ?? "http://127.0.0.1:3000",
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
			use: {
				...devices["Pixel 7"],
				// `isMobile: true` causes a Desktop-sized screen with the Desktop layout.
				isMobile: false,
			},
		},
		// TODO: Reactivate Mobile Safari once it is no longer broken on Ubuntu Linux. Assertions
		//  like toHaveURL() return empty values on Ubuntu Linux while working fine on other
		//  platforms.
		/*
		{
			name: "Mobile Safari",
			testIgnore: /desktop/,
			use: { ...devices["iPhone 15"] },
		},
		 */
	],
});
