/*
 * Copyright 2023 the original author or authors.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

import { test, expect } from "@playwright/test";

test.describe("JDK Comparison", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/faq");
		await expect(page).toHaveURL("/faq");
		await expect(page).toHaveTitle("Frequently Asked Questions – JDK Comparison");
	});

	// region [Navigation Tests]

	test("should display all main navigation options", async ({ page }) => {
		const n = page.getByRole("navigation", { name: "Main navigation" });

		await expect(n.getByRole("link")).toHaveCount(3);
		await expect(n.getByRole("link", { name: "Back to homepage" })).toBeVisible();
		await expect(n.getByRole("link", { name: "Send an e-mail" })).toBeVisible();
		await expect(n.getByRole("link", { name: "Send an e-mail" })).toHaveAttribute(
			"href",
			"mailto:hello@jdkcomparison.com",
		);
		await expect(n.getByRole("link", { name: "Go to GitHub repository" })).toBeVisible();
		await expect(n.getByRole("link", { name: "Go to GitHub repository" })).toHaveAttribute(
			"href",
			"https://github.com/aahlenst/jdkcomparison",
		);
	});

	test("should display all sidebar navigation options", async ({ page }) => {
		await page.getByRole("button", { name: "Open main menu" }).click();

		const n = page.getByRole("navigation", { name: "Sidebar navigation" });

		await expect(n.getByRole("link")).toHaveCount(2);
		await expect(n.getByRole("link", { name: "JDK Comparison" })).toBeVisible();
		await expect(n.getByRole("link", { name: "FAQ" })).toBeVisible();
	});

	test("should navigate to homepage when clicking logo", async ({ page }) => {
		await page.getByRole("navigation").getByRole("link", { name: "Back to homepage" }).click();
		await expect(page).toHaveURL("/");
		await expect(page).toHaveTitle("JDK Comparison");
	});

	test("should navigate to JDK Comparison", async ({ page }) => {
		await page.getByRole("button", { name: "Open main menu" }).click();
		await page
			.getByRole("navigation", { name: "Sidebar navigation" })
			.getByRole("link", { name: "JDK Comparison" })
			.click();

		await expect(page).toHaveURL("/");
		await expect(page).toHaveTitle("JDK Comparison");
	});

	// endregion [Navigation Tests]

	// region [Content Tests]

	test("displays FAQ", async ({ page }) => {
		await expect(page.getByRole("heading", { level: 1 })).toHaveText(
			"Frequently Asked Questions",
		);
		await expect(page.getByRole("heading", { level: 2 }).first()).toHaveText("Overview");
	});

	// endregion [Content Tests]
});
