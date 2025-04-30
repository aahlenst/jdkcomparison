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
		await page.goto("/");
		await expect(page).toHaveURL("/");
		await expect(page).toHaveTitle("JDK Comparison");
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

	test("should navigate to FAQ", async ({ page }) => {
		await page.getByRole("button", { name: "Open main menu" }).click();
		await page
			.getByRole("navigation", { name: "Sidebar navigation" })
			.getByRole("link", { name: "FAQ" })
			.click();

		await expect(page).toHaveURL("/faq");
		await expect(page).toHaveTitle("Frequently Asked Questions – JDK Comparison");
	});

	// endregion [Navigation Tests]

	// region [Filter Tests]

	test("shows all filters", async ({ page }) => {
		// Mobile Chrome wants `force: true`. Works fine with Mobile Safari.
		await page.getByRole("button", { name: "Filters" }).click({ force: true });

		const d = page.getByRole("dialog", { name: "Menu Filters" });

		await expect(d.getByRole("heading", { level: 3 })).toHaveText([
			"Versions",
			"Vendors",
			"VMs",
			"Technologies",
			"GCs",
			"Platforms",
			"Licensing",
		]);
	});

	test("shows all options of Versions filter", async ({ page }) => {
		await page.getByRole("button", { name: "Filters" }).click();

		const d = page.getByRole("dialog", { name: "Menu Filters" });

		await d.getByRole("button", { name: "Versions" }).click();

		const g = d.getByRole("group", { name: "Versions" });

		const options = ["8", "17"];
		await expect(g.getByRole("checkbox")).toHaveCount(options.length);
		for (let i = 0; i < options.length; i++) {
			await expect(g.getByRole("checkbox").nth(i)).toHaveAccessibleName(options[i]);
		}
	});

	test("shows all options of Vendors filter", async ({ page }) => {
		await page.getByRole("button", { name: "Filters" }).click();

		const d = page.getByRole("dialog", { name: "Menu Filters" });

		await d.getByRole("button", { name: "Vendors" }).click();

		const g = d.getByRole("group", { name: "Vendors" });

		const options = ["Coffeecorp", "Dukecorp"];
		await expect(g.getByRole("checkbox")).toHaveCount(options.length);
		for (let i = 0; i < options.length; i++) {
			await expect(g.getByRole("checkbox").nth(i)).toHaveAccessibleName(options[i]);
		}
	});

	test("shows all options of VMs filter", async ({ page }) => {
		await page.getByRole("button", { name: "Filters" }).click();

		const d = page.getByRole("dialog", { name: "Menu Filters" });

		await d.getByRole("button", { name: "VMs" }).click();

		const g = d.getByRole("group", { name: "VMs" });

		const options = ["CoffeeVM", "DukeVM"];
		await expect(g.getByRole("checkbox")).toHaveCount(options.length);
		for (let i = 0; i < options.length; i++) {
			await expect(g.getByRole("checkbox").nth(i)).toHaveAccessibleName(options[i]);
		}
	});

	test("shows all options of Technologies filter", async ({ page }) => {
		await page.getByRole("button", { name: "Filters" }).click();

		const d = page.getByRole("dialog", { name: "Menu Filters" });

		await d.getByRole("button", { name: "Technologies" }).click();

		const g = d.getByRole("group", { name: "Technologies" });

		const options = ["Flight Recorder", "JavaFX", "Java Web Start"];
		await expect(g.getByRole("checkbox")).toHaveCount(options.length);
		for (let i = 0; i < options.length; i++) {
			await expect(g.getByRole("checkbox").nth(i)).toHaveAccessibleName(options[i]);
		}
	});

	test("shows all options of GCs filter", async ({ page }) => {
		await page.getByRole("button", { name: "Filters" }).click();

		const d = page.getByRole("dialog", { name: "Menu Filters" });

		await d.getByRole("button", { name: "GCs" }).click();

		const g = d.getByRole("group", { name: "GCs" });

		const options = ["CMS", "Epsilon", "G1", "Parallel", "Serial", "Shenandoah", "Z"];
		await expect(g.getByRole("checkbox")).toHaveCount(options.length);
		for (let i = 0; i < options.length; i++) {
			await expect(g.getByRole("checkbox").nth(i)).toHaveAccessibleName(options[i]);
		}
	});

	test("shows all options of Platforms filter", async ({ page }) => {
		await page.getByRole("button", { name: "Filters" }).click();

		const d = page.getByRole("dialog", { name: "Menu Filters" });

		await d.getByRole("button", { name: "Platforms" }).click();

		const g = d.getByRole("group", { name: "Platforms" });

		const options = [
			"AIX, PPC",
			"macOS, ARM, 64-bit",
			"macOS, x86, 64-bit",
			"Linux, ARM, 32-bit",
			"Linux, ARM, 64-bit",
			"Linux, ARM, 64-bit, musl",
			"Linux, PPC, 64-bit",
			"Linux, RISC-V, 64-bit",
			"Linux, S390, 64-bit",
			"Linux, x86, 32-bit",
			"Linux, x86, 64-bit",
			"Linux, x86, 64-bit, musl",
			"Solaris, SPARC",
			"Solaris, x86, 64-bit",
			"Windows, ARM, 64-bit",
			"Windows, x86, 32-bit",
			"Windows, x86, 64-bit",
		];
		await expect(g.getByRole("checkbox")).toHaveCount(options.length);
		for (let i = 0; i < options.length; i++) {
			await expect(g.getByRole("checkbox").nth(i)).toHaveAccessibleName(options[i]);
		}
	});

	test("shows all options of Licensing filter", async ({ page }) => {
		await page.getByRole("button", { name: "Filters" }).click();

		const d = page.getByRole("dialog", { name: "Menu Filters" });

		await d.getByRole("button", { name: "Licensing" }).click();

		const g = d.getByRole("group", { name: "Licensing" });

		const options = ["Free in Development", "Free in Production"];
		await expect(g.getByRole("checkbox")).toHaveCount(options.length);
		for (let i = 0; i < options.length; i++) {
			await expect(g.getByRole("checkbox").nth(i)).toHaveAccessibleName(options[i]);
		}
	});

	test("retains filter state when opening and closing", async ({ page }) => {
		await page.getByRole("button", { name: "Filters", exact: true }).click();

		const d = page.getByRole("dialog", { name: "Menu Filters" });

		await d.getByRole("button", { name: "VMs" }).click();

		const g = d.getByRole("group", { name: "VMs" });

		await expect(g.getByRole("checkbox", { name: "CoffeeVM" })).not.toBeChecked();
		await expect(g.getByRole("checkbox", { name: "DukeVM" })).not.toBeChecked();

		await g.getByRole("checkbox", { name: "DukeVM" }).click();
		await expect(g.getByRole("checkbox", { name: "DukeVM" })).toBeChecked();

		await d.getByRole("button", { name: "Close menu Filters" }).click();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText("Dukecorp JDK 17");

		await page.getByRole("button", { name: "Filters", exact: true }).click();
		await d.getByRole("button", { name: "VMs" }).click();

		await expect(g.getByRole("checkbox", { name: "CoffeeVM" })).not.toBeChecked();
		await expect(g.getByRole("checkbox", { name: "DukeVM" })).toBeChecked();

		await g.getByRole("checkbox", { name: "CoffeeVM" }).click();
		await expect(g.getByRole("checkbox", { name: "CoffeeVM" })).toBeChecked();

		await d.getByRole("button", { name: "Close menu Filters" }).click();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		await page.getByRole("button", { name: "Filters", exact: true }).click();
		await d.getByRole("button", { name: "VMs" }).click();

		await expect(g.getByRole("checkbox", { name: "CoffeeVM" })).toBeChecked();
		await expect(g.getByRole("checkbox", { name: "DukeVM" })).toBeChecked();
	});

	// endregion [Filter Tests]

	// region [Feature Explanation Tests]

	test("shows feature explanation", async ({ page }) => {
		const row = page.getByRole("row", { name: "JavaFX Show explanation no[1] no yes[1]" });
		await row.getByRole("img", { name: "Show explanation" }).click();

		await expect(page.getByRole("note", { name: "Explanation for JavaFX" })).toBeVisible();
		await expect(page.getByRole("note", { name: "Explanation for JavaFX" })).toContainText(
			"JavaFX is a GUI toolkit that was part of Oracle JDK until Oracle JDK 10.",
		);

		await page.keyboard.press("Escape");

		await expect(page.getByRole("note", { name: "Explanation for JavaFX" })).not.toBeVisible();
	});

	test("opens and closes feature explanation repeatedly", async ({ page }) => {
		const row = page.getByRole("row", { name: "JavaFX Show explanation no[1] no yes[1]" });
		await row.getByRole("img", { name: "Show explanation" }).click();

		await expect(page.getByRole("note", { name: "Explanation for JavaFX" })).toBeVisible();
		await expect(page.getByRole("note", { name: "Explanation for JavaFX" })).toContainText(
			"JavaFX is a GUI toolkit that was part of Oracle JDK until Oracle JDK 10.",
		);

		await page.keyboard.press("Escape");

		await expect(page.getByRole("note", { name: "Explanation for JavaFX" })).not.toBeVisible();

		await row.getByRole("img", { name: "Show explanation" }).click();

		await expect(page.getByRole("note", { name: "Explanation for JavaFX" })).toBeVisible();

		await page.keyboard.press("Escape");

		await expect(page.getByRole("note", { name: "Explanation for JavaFX" })).not.toBeVisible();

		await row.getByRole("img", { name: "Show explanation" }).click();

		await expect(page.getByRole("note", { name: "Explanation for JavaFX" })).toBeVisible();
	});

	// endregion [Feature Explanation Tests]

	// region [Footnote Tests]

	test("displays footnotes", async ({ page }) => {
		const row = page.getByRole("row", { name: "JavaFX Show explanation no[1] no yes[1]" });
		await row.getByRole("gridcell", { name: "no[1]" }).getByRole("link").click();

		await expect(page.getByRole("note", { name: "Footnote 1" })).toBeVisible();
		await expect(page.getByRole("note", { name: "Footnote 1" })).toContainText(
			"Some clarifications regarding JavaFX",
		);

		await page.keyboard.press("Escape");

		await expect(page.getByRole("note", { name: "Footnote 1" })).not.toBeVisible();
	});

	test("opens footnotes repeatedly", async ({ page }) => {
		const row = page.getByRole("row", { name: "JavaFX Show explanation no[1] no yes[1]" });
		await row.getByRole("gridcell", { name: "no[1]" }).getByRole("link").click();

		await expect(page.getByRole("note", { name: "Footnote 1" })).toBeVisible();

		await page.keyboard.press("Escape");

		await expect(page.getByRole("note", { name: "Footnote 1" })).not.toBeVisible();

		await row.getByRole("gridcell", { name: "no[1]" }).getByRole("link").click();

		await expect(page.getByRole("note", { name: "Footnote 1" })).toBeVisible();

		await page.keyboard.press("Escape");

		await expect(page.getByRole("note", { name: "Footnote 1" })).not.toBeVisible();

		await row.getByRole("gridcell", { name: "no[1]" }).getByRole("link").click();

		await expect(page.getByRole("note", { name: "Footnote 1" })).toBeVisible();
	});

	// endregion [Footnote Tests]
});
