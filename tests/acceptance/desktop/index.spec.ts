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

	test("should navigate to FAQ", async ({ page }) => {
		await page.getByRole("navigation").getByRole("link", { name: "FAQ" }).click();
		await expect(page).toHaveURL("/faq");
		await expect(page).toHaveTitle("Frequently Asked Questions – JDK Comparison");
	});

	// endregion [Navigation Tests]

	// region [Product and Section Tests]

	test("should display products of all vendors", async ({ page }) => {
		const expected = new Set([
			"Alibaba",
			"Amazon",
			"Azul",
			"BellSoft",
			"Eclipse Foundation",
			"IBM",
			"Microsoft",
			"Oracle",
			"Red Hat",
			"SAP",
		]);

		const vendors = new Set(await page.getByTestId("product-vendor").allTextContents());
		expect(vendors).toEqual(expected);
	});

	test("should display some known products", async ({ page }) => {
		const products = new Set(await page.getByRole("heading", { level: 1 }).allTextContents());
		expect(products).toContain("OpenJDK 23");
		expect(products).toContain("Eclipse Temurin 17");
		expect(products).toContain("Eclipse Temurin 8");
	});

	test("should display all sections", async ({ page }) => {
		await expect(page.getByRole("grid").getByRole("heading", { level: 2 })).toHaveText([
			"Properties",
			"Technologies",
			"Garbage Collectors",
			"Platforms: Linux",
			"Platforms: macOS",
			"Platforms: Windows",
			"Platforms: Other",
			"Certifications",
			"Customisations",
			"Licensing",
			"Security",
			"Support",
			"Additional Information",
		]);

		const properties = ["Feature Version", "Virtual Machine", "Class Libraries"];
		const p = page.getByRole("rowgroup", { name: "Properties" });
		await expect(p.getByRole("rowheader")).toHaveCount(properties.length);
		for (let i = 0; i < properties.length; i++) {
			await expect(p.getByRole("rowheader").nth(i)).toHaveAccessibleName(properties[i]);
		}

		const technologies = [
			"JavaFX Show explanation",
			"Flight Recorder Show explanation",
			"Java Web Start Show explanation",
		];
		const t = page.getByRole("rowgroup", { name: "Technologies" });
		await expect(t.getByRole("rowheader")).toHaveCount(technologies.length);
		for (let i = 0; i < technologies.length; i++) {
			await expect(t.getByRole("rowheader").nth(i)).toHaveAccessibleName(technologies[i]);
		}

		const collectors = [
			"CMS Show explanation",
			"Epsilon Show explanation",
			"G1 Show explanation",
			"Parallel Show explanation",
			"Serial Show explanation",
			"Shenandoah Show explanation",
			"Z Show explanation",
			"Custom GCs",
		];
		const g = page.getByRole("rowgroup", { name: "Garbage Collectors" });
		await expect(g.getByRole("rowheader")).toHaveCount(collectors.length);
		for (let i = 0; i < collectors.length; i++) {
			await expect(g.getByRole("rowheader").nth(i)).toHaveAccessibleName(collectors[i]);
		}

		const linux = [
			"x86, 64-bit",
			"x86, 64-bit, musl Show explanation",
			"x86, 32-bit",
			"ARM, 64-bit",
			"ARM, 64-bit, musl Show explanation",
			"ARM, 32-bit",
			"PPC, 64-bit",
			"RISC-V, 64-bit",
			"S390, 64-bit",
			"APK Packages Show explanation",
			"Deb Packages Show explanation",
			"RPM Packages Show explanation",
			"Container Images",
		];
		const pl = page.getByRole("rowgroup", { name: "Platforms: Linux" });
		await expect(pl.getByRole("rowheader")).toHaveCount(linux.length);
		for (let i = 0; i < linux.length; i++) {
			await expect(pl.getByRole("rowheader").nth(i)).toHaveAccessibleName(linux[i]);
		}

		const macOS = ["x86, 64-bit", "ARM, 64-bit", "Installers"];
		const pm = page.getByRole("rowgroup", { name: "Platforms: macOS" });
		await expect(pm.getByRole("rowheader")).toHaveCount(macOS.length);
		for (let i = 0; i < macOS.length; i++) {
			await expect(pm.getByRole("rowheader").nth(i)).toHaveAccessibleName(macOS[i]);
		}

		const windows = [
			"x86, 64-bit",
			"x86, 32-bit",
			"ARM, 64-bit",
			"Installers",
			"Container Images",
		];
		const pw = page.getByRole("rowgroup", { name: "Platforms: Windows" });
		await expect(pw.getByRole("rowheader")).toHaveCount(windows.length);
		for (let i = 0; i < windows.length; i++) {
			await expect(pw.getByRole("rowheader").nth(i)).toHaveAccessibleName(windows[i]);
		}

		const other = ["AIX, PPC", "Solaris, SPARC", "Solaris, x86, 64-bit"];
		const po = page.getByRole("rowgroup", { name: "Platforms: Other" });
		await expect(po.getByRole("rowheader")).toHaveCount(other.length);
		for (let i = 0; i < other.length; i++) {
			await expect(po.getByRole("rowheader").nth(i)).toHaveAccessibleName(other[i]);
		}

		const certifications = [
			"Eclipse AQAvit Show explanation",
			"TCK for Java SE Show explanation",
		];
		const crt = page.getByRole("rowgroup", { name: "Certifications" });
		await expect(crt.getByRole("rowheader")).toHaveCount(certifications.length);
		for (let i = 0; i < certifications.length; i++) {
			await expect(crt.getByRole("rowheader").nth(i)).toHaveAccessibleName(certifications[i]);
		}

		const customisations = [
			"Editions",
			"Customisations Show explanation",
			"Notable Features Show explanation",
		];
		const cust = page.getByRole("rowgroup", { name: "Customisations" });
		await expect(cust.getByRole("rowheader")).toHaveCount(customisations.length);
		for (let i = 0; i < customisations.length; i++) {
			await expect(cust.getByRole("rowheader").nth(i)).toHaveAccessibleName(
				customisations[i],
			);
		}

		const licensing = ["License Show explanation", "Free in Development", "Free in Production"];
		const lic = page.getByRole("rowgroup", { name: "Licensing" });
		await expect(lic.getByRole("rowheader")).toHaveCount(licensing.length);
		for (let i = 0; i < licensing.length; i++) {
			await expect(lic.getByRole("rowheader").nth(i)).toHaveAccessibleName(licensing[i]);
		}

		const security = ["SBOM Show explanation"];
		const sec = page.getByRole("rowgroup", { name: "Security" });
		await expect(sec.getByRole("rowheader")).toHaveCount(security.length);
		for (let i = 0; i < security.length; i++) {
			await expect(sec.getByRole("rowheader").nth(i)).toHaveAccessibleName(security[i]);
		}

		const support = [
			"Patches Until Show explanation",
			"CPU/PSU Show explanation",
			"Release Schedule Show explanation",
			"Release Delay Show explanation",
			"Paid Support",
		];
		const sup = page.getByRole("rowgroup", { name: "Support" });
		await expect(sup.getByRole("rowheader")).toHaveCount(support.length);
		for (let i = 0; i < support.length; i++) {
			await expect(sup.getByRole("rowheader").nth(i)).toHaveAccessibleName(support[i]);
		}

		const information = ["Country of Origin Show explanation", "Remarks"];
		const inf = page.getByRole("rowgroup", { name: "Information" });
		await expect(inf.getByRole("rowheader")).toHaveCount(information.length);
		for (let i = 0; i < information.length; i++) {
			await expect(inf.getByRole("rowheader").nth(i)).toHaveAccessibleName(information[i]);
		}
	});

	test("hides and reveals sections", async ({ page }) => {
		const properties = ["Feature Version", "Virtual Machine", "Class Libraries"];

		let p = page.getByRole("rowgroup", { name: "Properties" });
		await expect(p.getByRole("rowheader")).toHaveCount(properties.length);
		for (let i = 0; i < properties.length; i++) {
			await expect(p.getByRole("rowheader").nth(i)).toHaveAccessibleName(properties[i]);
		}

		await page.getByRole("button", { name: "Hide section Properties" }).click();

		p = page.getByRole("rowgroup", { name: "Properties" });
		await expect(p.getByRole("row")).toHaveCount(0);

		await page.getByRole("button", { name: "Show section Properties" }).click();

		p = page.getByRole("rowgroup", { name: "Properties" });
		await expect(p.getByRole("rowheader")).toHaveCount(properties.length);
		for (let i = 0; i < properties.length; i++) {
			await expect(p.getByRole("rowheader").nth(i)).toHaveAccessibleName(properties[i]);
		}
	});

	// endregion [Product and Section Tests]

	// region [Filter Tests]

	test("shows all filters", async ({ page }) => {
		const filters = page.getByRole("region", { name: "Filters" });

		const buttons = [
			"Sort",
			"Versions",
			"Vendors",
			"VMs",
			"Technologies",
			"GCs",
			"Platforms",
			"Licensing",
		];
		for (let i = 0; i < buttons.length; i++) {
			await expect(filters.getByRole("button").nth(i)).toHaveAccessibleName(buttons[i]);
		}
	});

	test("all options of filter Versions are displayed", async ({ page }) => {
		await page.getByRole("button", { name: "Versions", exact: true }).click();

		const options = ["8", "11", "17", "21", "23"];
		const form = page.getByRole("form", { name: "Selectable Versions" });
		await expect(form.getByRole("checkbox")).toHaveCount(options.length);
		for (let i = 0; i < options.length; i++) {
			await expect(form.getByRole("checkbox").nth(i)).toHaveAccessibleName(options[i]);
		}
	});

	test("all options of filter Vendors are displayed", async ({ page }) => {
		await page.getByRole("button", { name: "Vendors", exact: true }).click();

		const options = [
			"Alibaba",
			"Amazon",
			"Azul",
			"BellSoft",
			"Eclipse Foundation",
			"IBM",
			"Microsoft",
			"Oracle",
			"Red Hat",
			"SAP",
		];
		const form = page.getByRole("form", { name: "Selectable Vendors" });
		for (let i = 0; i < options.length; i++) {
			await expect(form.getByRole("checkbox").nth(i)).toHaveAccessibleName(options[i]);
		}
	});

	test("all options of filter VMs are displayed", async ({ page }) => {
		await page.getByRole("button", { name: "VMs", exact: true }).click();

		const options = ["HotSpot", "OpenJ9", "Zing"];
		const form = page.getByRole("form", { name: "Selectable VMs" });
		for (let i = 0; i < options.length; i++) {
			await expect(form.getByRole("checkbox").nth(i)).toHaveAccessibleName(options[i]);
		}
	});

	test("all options of filter Technologies are displayed", async ({ page }) => {
		await page.getByRole("button", { name: "Technologies", exact: true }).click();

		const options = ["Flight Recorder", "JavaFX", "Java Web Start"];
		const form = page.getByRole("form", { name: "Selectable Technologies" });
		for (let i = 0; i < options.length; i++) {
			await expect(form.getByRole("checkbox").nth(i)).toHaveAccessibleName(options[i]);
		}
	});

	test("all options of filter GCs are displayed", async ({ page }) => {
		await page.getByRole("button", { name: "GCs", exact: true }).click();

		const options = ["CMS", "Epsilon", "G1", "Parallel", "Serial", "Shenandoah", "Z"];
		const form = page.getByRole("form", { name: "Selectable GCs" });
		for (let i = 0; i < options.length; i++) {
			await expect(form.getByRole("checkbox").nth(i)).toHaveAccessibleName(options[i]);
		}
	});

	test("all options of filter Platforms are displayed", async ({ page }) => {
		await page.getByRole("button", { name: "Platforms", exact: true }).click();

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
		];
		const form = page.getByRole("form", { name: "Selectable Platforms" });
		for (let i = 0; i < options.length; i++) {
			await expect(form.getByRole("checkbox").nth(i)).toHaveAccessibleName(options[i]);
		}
	});

	test("all options of filter Licensing are displayed", async ({ page }) => {
		await page.getByRole("button", { name: "Licensing", exact: true }).click();

		const options = ["Free in Development", "Free in Production"];
		const form = page.getByRole("form", { name: "Selectable Licensing" });
		for (let i = 0; i < options.length; i++) {
			await expect(form.getByRole("checkbox").nth(i)).toHaveAccessibleName(options[i]);
		}
	});

	test("allows filtering by version", async ({ page }) => {
		await page.getByRole("button", { name: "Versions", exact: true }).click();

		const form = page.getByRole("form", { name: "Selectable Versions" });

		await form.getByRole("checkbox", { name: "11" }).click();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Dragonwell 11 EE",
			"Dragonwell 11 SE",
			"Corretto 11",
			"Zing 11",
			"Zulu 11",
			"Liberica JDK 11",
			"Eclipse Temurin 11",
			"Semeru CE 11",
			"Build of OpenJDK 11",
			"Oracle JDK 11",
			"Build of OpenJDK 11",
			"SapMachine 11",
		]);
	});

	test("allows filtering by vendor", async ({ page }) => {
		await page.getByRole("button", { name: "Vendors", exact: true }).click();

		const form = page.getByRole("form", { name: "Selectable Vendors" });

		await form.getByRole("checkbox", { name: "Oracle" }).click();
		await page.getByRole("button", { name: "Vendors 1", exact: true }).click();

		let vendors = new Set(await page.getByTestId("product-vendor").allTextContents());
		expect(vendors).toHaveProperty("size", 1);
		expect(vendors).toContain("Oracle");

		await page.getByRole("button", { name: "Vendors 1", exact: true }).click();
		await form.getByRole("checkbox", { name: "Eclipse Foundation" }).click();
		await page.getByRole("button", { name: "Vendors 2", exact: true }).click();

		vendors = new Set(await page.getByTestId("product-vendor").allTextContents());
		expect(vendors).toHaveProperty("size", 2);
		expect(vendors).toContain("Oracle");
		expect(vendors).toContain("Eclipse Foundation");
	});

	test("displays message if no JDKs match filter criteria", async ({ page }) => {
		await page.getByRole("button", { name: "Versions", exact: true }).click();
		await page.getByRole("checkbox", { name: "21" }).click();
		await page.getByRole("button", { name: "Versions 1", exact: true }).click();
		await page.getByRole("button", { name: "Platforms", exact: true }).click();
		await page.getByRole("checkbox", { name: "Solaris, SPARC" }).click();
		await page.getByRole("button", { name: "Platforms 1", exact: true }).click();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText(
			"No JDKs match your selection.",
		);
	});

	// endregion [Filter Tests]

	// region [Feature Explanation Tests]

	test("shows feature explanation", async ({ page }) => {
		const row = page.getByRole("rowheader", { name: "JavaFX Show explanation" });
		await row.getByRole("img", { name: "Show explanation" }).click();

		await expect(page.getByRole("note", { name: "Explanation for JavaFX" })).toBeVisible();
		await expect(page.getByRole("note", { name: "Explanation for JavaFX" })).toContainText(
			"JavaFX is a GUI toolkit that was part of Oracle JDK until Oracle JDK 10.",
		);

		await page.keyboard.press("Escape");

		await expect(page.getByRole("note", { name: "Explanation for JavaFX" })).not.toBeVisible();
	});

	// endregion [Feature Explanation Tests]

	// region [Search Parameters Tests]

	test("can deal with unknown filter in search parameters", async ({ page }) => {
		await page.goto("/?something=123");
		await expect(page).toHaveURL("/?something=123");
		await expect(page).toHaveTitle("JDK Comparison");

		const filters = page.getByRole("region", { name: "Filters" });

		const buttons = [
			"Sort",
			"Versions",
			"Vendors",
			"VMs",
			"Technologies",
			"GCs",
			"Platforms",
			"Licensing",
		];
		for (let i = 0; i < buttons.length; i++) {
			await expect(filters.getByRole("button").nth(i)).toHaveAccessibleName(buttons[i]);
		}

		const products = await page.getByRole("heading", { level: 1 }).allTextContents();
		expect(products).toContain("Zulu 17");
		expect(products).toContain("Zulu 8");
	});

	test("can deal with unknown option in filter parameters", async ({ page }) => {
		await page.goto("/?versions=8&versions=-10");
		await expect(page).toHaveURL("/?versions=8&versions=-10");
		await expect(page).toHaveTitle("JDK Comparison");

		const filters = page.getByRole("region", { name: "Filters" });

		const buttons = [
			"Sort",
			"Versions 1",
			"Vendors",
			"VMs",
			"Technologies",
			"GCs",
			"Platforms",
			"Licensing",
		];
		for (let i = 0; i < buttons.length; i++) {
			await expect(filters.getByRole("button").nth(i)).toHaveAccessibleName(buttons[i]);
		}

		const products = await page.getByRole("heading", { level: 1 }).allTextContents();
		expect(products).toContain("Liberica JDK 8");
		expect(products).not.toContain("Liberica JDK 17");
	});

	test("preselects Versions filter according to search parameters", async ({ page }) => {
		await page.goto("/?versions=17&versions=21");
		await expect(page).toHaveURL("/?versions=17&versions=21");
		await expect(page).toHaveTitle("JDK Comparison");

		await page.getByRole("button", { name: "Versions 2", exact: true }).click();

		const form = page.getByRole("form", { name: "Selectable Versions" });
		await expect(form.getByRole("checkbox", { name: "8" })).not.toBeChecked();
		await expect(form.getByRole("checkbox", { name: "17" })).toBeChecked();
		await expect(form.getByRole("checkbox", { name: "21" })).toBeChecked();

		await page.getByRole("button", { name: "Versions 2", exact: true }).click();

		const products = await page.getByRole("heading", { level: 1 }).allTextContents();
		expect(products).not.toContain("Zulu 8");
		expect(products).toContain("Zulu 17");
		expect(products).toContain("Zulu 21");
	});

	test("preselects Vendors filter according to search parameters", async ({ page }) => {
		await page.goto("/?vendors=Eclipse+Foundation&vendors=Oracle");
		await expect(page).toHaveURL("/?vendors=Eclipse+Foundation&vendors=Oracle");
		await expect(page).toHaveTitle("JDK Comparison");

		await page.getByRole("button", { name: "Vendors 2", exact: true }).click();

		const form = page.getByRole("form", { name: "Selectable Vendors" });
		await expect(form.getByRole("checkbox", { name: "Eclipse Foundation" })).toBeChecked();
		await expect(form.getByRole("checkbox", { name: "Oracle" })).toBeChecked();

		await page.getByRole("button", { name: "Vendors 2", exact: true }).click();

		const vendors = new Set(await page.getByTestId("product-vendor").allTextContents());
		expect(vendors).toEqual(new Set(["Eclipse Foundation", "Oracle"]));
	});

	// endregion [Search Parameters Tests]

	// region [Sort Order Tests]

	test("retains sort order while filtering", async ({ page }) => {
		await page.getByRole("button", { name: "Vendors", exact: true }).click();
		await page.getByRole("checkbox", { name: "Oracle" }).click();

		await page.getByRole("button", { name: "Sort", exact: true }).click();
		await page.getByRole("menuitem", { name: "JDK Name, Z-A" }).click();

		await expect(page.getByRole("heading", { level: 1 }).nth(0)).toHaveText(["Oracle JDK 8"]);
		await expect(page.getByTestId("product-vendor").nth(-1)).toHaveText("Oracle");

		await page.getByRole("button", { name: "Vendors 1", exact: true }).click();
		await page.getByRole("checkbox", { name: "Eclipse Foundation" }).click();
		await page.getByRole("button", { name: "Vendors 2", exact: true }).click();

		await expect(page.getByRole("heading", { level: 1 }).nth(0)).toHaveText(["Oracle JDK 8"]);
		await expect(page.getByRole("heading", { level: 1 }).nth(-1)).toHaveText([
			"Eclipse Temurin 11",
		]);

		await page.getByRole("button", { name: "Sort", exact: true }).click();
		await page.getByRole("menuitem", { name: "Vendor, A-Z" }).click();

		await expect(page.getByTestId("product-vendor").nth(0)).toHaveText("Eclipse Foundation");
		await expect(page.getByTestId("product-vendor").nth(-1)).toHaveText("Oracle");
		await expect(page.getByRole("heading", { level: 1 }).nth(-1)).toHaveText(["Oracle JDK 8"]);
	});

	// endregion [Sort Order Tests]
});
