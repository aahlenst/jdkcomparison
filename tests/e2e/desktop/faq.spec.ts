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

	test("should display all navigation options", async ({ page }) => {
		const n = page.getByRole("navigation", { name: "Main navigation" });

		await expect(n.getByRole("link")).toHaveCount(5);
		await expect(n.getByRole("link", { name: "Back to homepage" })).toBeVisible();
		await expect(n.getByRole("link", { name: "JDK Comparison", exact: true })).toBeVisible();
		await expect(n.getByRole("link", { name: "FAQ" })).toBeVisible();
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

	test("should navigate to homepage", async ({ page }) => {
		await page.getByRole("navigation").getByRole("link", { name: "Back to homepage" }).click();
		await expect(page).toHaveURL("/");
		await expect(page).toHaveTitle("JDK Comparison");
	});

	test("should navigate to JDK Comparison", async ({ page }) => {
		await page
			.getByRole("navigation")
			.getByRole("link", { name: "JDK Comparison", exact: true })
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

	test("all entries in overview point to a section on the page", async ({ page }) => {
		for (const link of await page.locator("h2:nth-of-type(1) + ul li a").all()) {
			const anchor = await link.getAttribute("href");
			const text = await link.textContent();

			expect(anchor).not.toBeNull();
			expect(text).not.toBeNull();

			// Checks whether the anchor with a matching text exists outside "Overview".
			const selector = `h2:nth-of-type(n+2)#${anchor!.substring(1)}`;
			await expect(page.locator(selector)).toBeVisible();
			await expect(page.locator(selector)).toHaveText(text!);
		}
	});

	test("all FAQ entries are listed in the overview", async ({ page }) => {
		// Look at each H2 after "Overview".
		for (const title of await page.locator("h2:nth-of-type(n+2)").all()) {
			const id = await title.getAttribute("id");
			const text = await title.textContent();

			expect(id).not.toBeNull();
			expect(text).not.toBeNull();

			// Check if there is a matching entry with link in "Overview".
			let selector = `h2:nth-of-type(1) + ul li a[href='#${id}']`;
			await expect(page.locator(selector)).toBeVisible();
			await expect(page.locator(selector)).toHaveText(text!);
		}
	});

	// endregion [Content Tests]
});
