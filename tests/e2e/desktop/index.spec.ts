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

	test("should display all products", async ({ page }) => {
		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);
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

		const properties = [
			"Feature Version 17 17 8",
			"Virtual Machine CoffeeVM DukeVM CoffeeVM",
			"Class Libraries OpenJDK OpenJDK OpenJDK",
		];
		const p = page.getByRole("rowgroup", { name: "Properties" });
		await expect(p.getByRole("row")).toHaveCount(properties.length);
		for (let i = 0; i < properties.length; i++) {
			await expect(p.getByRole("row").nth(i)).toHaveAccessibleName(properties[i]);
		}

		const technologies = [
			"JavaFX Show explanation no[1] no yes[1]",
			"Flight Recorder Show explanation yes yes no",
			"Java Web Start Show explanation no no no",
		];
		const t = page.getByRole("rowgroup", { name: "Technologies" });
		await expect(t.getByRole("row")).toHaveCount(technologies.length);
		for (let i = 0; i < technologies.length; i++) {
			await expect(t.getByRole("row").nth(i)).toHaveAccessibleName(technologies[i]);
		}

		const collectors = [
			"CMS Show explanation no no yes",
			"Epsilon Show explanation yes yes no",
			"G1 Show explanation yes yes yes",
			"Parallel Show explanation yes yes yes",
			"Serial Show explanation yes yes yes",
			"Shenandoah Show explanation partially no partially",
			"Z Show explanation partially yes partially",
			"Custom GCs none FairyGC none",
		];
		const g = page.getByRole("rowgroup", { name: "Garbage Collectors" });
		await expect(g.getByRole("row")).toHaveCount(collectors.length);
		for (let i = 0; i < collectors.length; i++) {
			await expect(g.getByRole("row").nth(i)).toHaveAccessibleName(collectors[i]);
		}

		const linux = [
			"x86, 64-bit yes yes yes",
			"x86, 64-bit, musl Show explanation yes no no",
			"x86, 32-bit yes no yes",
			"ARM, 64-bit yes yes yes",
			"ARM, 64-bit, musl Show explanation yes no no",
			"ARM, 32-bit no no no",
			"PPC, 64-bit yes no yes",
			"RISC-V, 64-bit no no no",
			"S390, 64-bit yes no no",
			"APK Packages Show explanation yes no no",
			"Deb Packages Show explanation yes no yes",
			"RPM Packages Show explanation yes no yes",
			"Container Images partially no partially",
		];
		const pl = page.getByRole("rowgroup", { name: "Platforms: Linux" });
		await expect(pl.getByRole("row")).toHaveCount(linux.length);
		for (let i = 0; i < linux.length; i++) {
			await expect(pl.getByRole("row").nth(i)).toHaveAccessibleName(linux[i]);
		}

		const macOS = [
			"x86, 64-bit yes yes yes",
			"ARM, 64-bit yes yes yes",
			"Installers yes yes yes",
		];
		const pm = page.getByRole("rowgroup", { name: "Platforms: macOS" });
		await expect(pm.getByRole("row")).toHaveCount(macOS.length);
		for (let i = 0; i < macOS.length; i++) {
			await expect(pm.getByRole("row").nth(i)).toHaveAccessibleName(macOS[i]);
		}

		const windows = [
			"x86, 64-bit yes yes yes",
			"x86, 32-bit no no yes",
			"ARM, 64-bit yes no no",
			"Installers yes no yes",
			"Container Images partially no partially",
		];
		const pw = page.getByRole("rowgroup", { name: "Platforms: Windows" });
		await expect(pw.getByRole("row")).toHaveCount(windows.length);
		for (let i = 0; i < windows.length; i++) {
			await expect(pw.getByRole("row").nth(i)).toHaveAccessibleName(windows[i]);
		}

		const other = [
			"AIX, PPC yes no yes",
			"Solaris, SPARC no no yes",
			"Solaris, x86, 64-bit no no yes",
		];
		const po = page.getByRole("rowgroup", { name: "Platforms: Other" });
		await expect(po.getByRole("row")).toHaveCount(other.length);
		for (let i = 0; i < other.length; i++) {
			await expect(po.getByRole("row").nth(i)).toHaveAccessibleName(other[i]);
		}

		const certifications = [
			"Eclipse AQAvit Show explanation yes yes yes",
			"TCK for Java SE Show explanation yes yes yes",
		];
		const crt = page.getByRole("rowgroup", { name: "Certifications" });
		await expect(crt.getByRole("row")).toHaveCount(certifications.length);
		for (let i = 0; i < certifications.length; i++) {
			await expect(crt.getByRole("row").nth(i)).toHaveAccessibleName(certifications[i]);
		}

		const customisations = [
			"Editions JRE JRE JRE",
			"Customisations Show explanation few many medium",
			"Notable Features Show explanation none FairyGC none",
		];
		const cust = page.getByRole("rowgroup", { name: "Customisations" });
		await expect(cust.getByRole("row")).toHaveCount(customisations.length);
		for (let i = 0; i < customisations.length; i++) {
			await expect(cust.getByRole("row").nth(i)).toHaveAccessibleName(customisations[i]);
		}

		const licensing = [
			"License Show explanation GPLv2+CE Proprietary GPLv2+CE",
			"Free in Development yes yes yes",
			"Free in Production yes no yes",
		];
		const lic = page.getByRole("rowgroup", { name: "Licensing" });
		await expect(lic.getByRole("row")).toHaveCount(licensing.length);
		for (let i = 0; i < licensing.length; i++) {
			await expect(lic.getByRole("row").nth(i)).toHaveAccessibleName(licensing[i]);
		}

		const security = ["SBOM Show explanation yes unknown yes"];
		const sec = page.getByRole("rowgroup", { name: "Security" });
		await expect(sec.getByRole("row")).toHaveCount(security.length);
		for (let i = 0; i < security.length; i++) {
			await expect(sec.getByRole("row").nth(i)).toHaveAccessibleName(security[i]);
		}

		const support = [
			"Patches Until Show explanation 2027-10 2027-10[3] 2026-10",
			"CPU/PSU Show explanation no/free paid/tiered no/free",
			"Release Schedule Show explanation OpenJDK OpenJDK OpenJDK",
			"Release Delay Show explanation 0-3 days none 0-3 days",
			"Paid Support no no[2] no",
		];
		const sup = page.getByRole("rowgroup", { name: "Support" });
		await expect(sup.getByRole("row")).toHaveCount(support.length);
		for (let i = 0; i < support.length; i++) {
			await expect(sup.getByRole("row").nth(i)).toHaveAccessibleName(support[i]);
		}

		const information = [
			"Country of Origin Show explanation Coffeeland United States of Duke Coffeeland",
			"Remarks Mug included none Mug included",
		];
		const inf = page.getByRole("rowgroup", { name: "Information" });
		await expect(inf.getByRole("row")).toHaveCount(information.length);
		for (let i = 0; i < information.length; i++) {
			await expect(inf.getByRole("row").nth(i)).toHaveAccessibleName(information[i]);
		}
	});

	test("should display only features with different values", async ({ page }) => {
		await page.getByRole("checkbox", { name: "Show differences only" }).click();

		await expect(page.getByRole("grid").getByRole("heading", { level: 2 })).toHaveText([
			"Properties",
			"Technologies",
			"Garbage Collectors",
			"Platforms: Linux",
			"Platforms: Windows",
			"Platforms: Other",
			"Customisations",
			"Licensing",
			"Security",
			"Support",
			"Additional Information",
		]);

		const properties = ["Feature Version 17 17 8", "Virtual Machine CoffeeVM DukeVM CoffeeVM"];
		const p = page.getByRole("rowgroup", { name: "Properties" });
		await expect(p.getByRole("row")).toHaveCount(properties.length);
		for (let i = 0; i < properties.length; i++) {
			await expect(p.getByRole("row").nth(i)).toHaveAccessibleName(properties[i]);
		}

		const technologies = [
			"JavaFX Show explanation no[1] no yes[1]",
			"Flight Recorder Show explanation yes yes no",
		];
		const t = page.getByRole("rowgroup", { name: "Technologies" });
		await expect(t.getByRole("row")).toHaveCount(technologies.length);
		for (let i = 0; i < technologies.length; i++) {
			await expect(t.getByRole("row").nth(i)).toHaveAccessibleName(technologies[i]);
		}

		const collectors = [
			"CMS Show explanation no no yes",
			"Epsilon Show explanation yes yes no",
			"Shenandoah Show explanation partially no partially",
			"Z Show explanation partially yes partially",
			"Custom GCs none FairyGC none",
		];
		const g = page.getByRole("rowgroup", { name: "Garbage Collectors" });
		await expect(g.getByRole("row")).toHaveCount(collectors.length);
		for (let i = 0; i < collectors.length; i++) {
			await expect(g.getByRole("row").nth(i)).toHaveAccessibleName(collectors[i]);
		}

		const linux = [
			"x86, 64-bit, musl Show explanation yes no no",
			"x86, 32-bit yes no yes",
			"ARM, 64-bit, musl Show explanation yes no no",
			"PPC, 64-bit yes no yes",
			"S390, 64-bit yes no no",
			"APK Packages Show explanation yes no no",
			"Deb Packages Show explanation yes no yes",
			"RPM Packages Show explanation yes no yes",
			"Container Images partially no partially",
		];
		const pl = page.getByRole("rowgroup", { name: "Platforms: Linux" });
		await expect(pl.getByRole("row")).toHaveCount(linux.length);
		for (let i = 0; i < linux.length; i++) {
			await expect(pl.getByRole("row").nth(i)).toHaveAccessibleName(linux[i]);
		}

		const windows = [
			"x86, 32-bit no no yes",
			"ARM, 64-bit yes no no",
			"Installers yes no yes",
			"Container Images partially no partially",
		];
		const pw = page.getByRole("rowgroup", { name: "Platforms: Windows" });
		await expect(pw.getByRole("row")).toHaveCount(windows.length);
		for (let i = 0; i < windows.length; i++) {
			await expect(pw.getByRole("row").nth(i)).toHaveAccessibleName(windows[i]);
		}

		const other = [
			"AIX, PPC yes no yes",
			"Solaris, SPARC no no yes",
			"Solaris, x86, 64-bit no no yes",
		];
		const po = page.getByRole("rowgroup", { name: "Platforms: Other" });
		await expect(po.getByRole("row")).toHaveCount(other.length);
		for (let i = 0; i < other.length; i++) {
			await expect(po.getByRole("row").nth(i)).toHaveAccessibleName(other[i]);
		}

		const customisations = [
			"Customisations Show explanation few many medium",
			"Notable Features Show explanation none FairyGC none",
		];
		const cust = page.getByRole("rowgroup", { name: "Customisations" });
		await expect(cust.getByRole("row")).toHaveCount(customisations.length);
		for (let i = 0; i < customisations.length; i++) {
			await expect(cust.getByRole("row").nth(i)).toHaveAccessibleName(customisations[i]);
		}

		const licensing = [
			"License Show explanation GPLv2+CE Proprietary GPLv2+CE",
			"Free in Production yes no yes",
		];
		const lic = page.getByRole("rowgroup", { name: "Licensing" });
		await expect(lic.getByRole("row")).toHaveCount(licensing.length);
		for (let i = 0; i < licensing.length; i++) {
			await expect(lic.getByRole("row").nth(i)).toHaveAccessibleName(licensing[i]);
		}

		const security = ["SBOM Show explanation yes unknown yes"];
		const sec = page.getByRole("rowgroup", { name: "Security" });
		await expect(sec.getByRole("row")).toHaveCount(security.length);
		for (let i = 0; i < security.length; i++) {
			await expect(sec.getByRole("row").nth(i)).toHaveAccessibleName(security[i]);
		}

		const support = [
			"Patches Until Show explanation 2027-10 2027-10[3] 2026-10",
			"CPU/PSU Show explanation no/free paid/tiered no/free",
			"Release Delay Show explanation 0-3 days none 0-3 days",
		];
		const sup = page.getByRole("rowgroup", { name: "Support" });
		await expect(sup.getByRole("row")).toHaveCount(support.length);
		for (let i = 0; i < support.length; i++) {
			await expect(sup.getByRole("row").nth(i)).toHaveAccessibleName(support[i]);
		}

		const information = [
			"Country of Origin Show explanation Coffeeland United States of Duke Coffeeland",
			"Remarks Mug included none Mug included",
		];
		const inf = page.getByRole("rowgroup", { name: "Information" });
		await expect(inf.getByRole("row")).toHaveCount(information.length);
		for (let i = 0; i < information.length; i++) {
			await expect(inf.getByRole("row").nth(i)).toHaveAccessibleName(information[i]);
		}
	});

	test("shows single product entirely even if differences only on", async ({ page }) => {
		await page.getByRole("checkbox", { name: "Show differences only" }).click();
		await page.getByRole("button", { name: "Versions" }).click();

		const form = page.getByRole("form", { name: "Selectable Versions" });
		await form.getByRole("checkbox", { name: "8" }).click();
		await expect(form.getByRole("checkbox", { name: "8" })).toBeChecked();

		await page.keyboard.press("Escape");
		await expect(form).not.toBeVisible();

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

		const properties = [
			"Feature Version 8",
			"Virtual Machine CoffeeVM",
			"Class Libraries OpenJDK",
		];
		const p = page.getByRole("rowgroup", { name: "Properties" });
		await expect(p.getByRole("row")).toHaveCount(properties.length);
		for (let i = 0; i < properties.length; i++) {
			await expect(p.getByRole("row").nth(i)).toHaveAccessibleName(properties[i]);
		}

		const technologies = [
			"JavaFX Show explanation yes[1]",
			"Flight Recorder Show explanation no",
			"Java Web Start Show explanation no",
		];
		const t = page.getByRole("rowgroup", { name: "Technologies" });
		await expect(t.getByRole("row")).toHaveCount(technologies.length);
		for (let i = 0; i < technologies.length; i++) {
			await expect(t.getByRole("row").nth(i)).toHaveAccessibleName(technologies[i]);
		}

		const collectors = [
			"CMS Show explanation yes",
			"Epsilon Show explanation no",
			"G1 Show explanation yes",
			"Parallel Show explanation yes",
			"Serial Show explanation yes",
			"Shenandoah Show explanation partially",
			"Z Show explanation partially",
			"Custom GCs none",
		];
		const g = page.getByRole("rowgroup", { name: "Garbage Collectors" });
		await expect(g.getByRole("row")).toHaveCount(collectors.length);
		for (let i = 0; i < collectors.length; i++) {
			await expect(g.getByRole("row").nth(i)).toHaveAccessibleName(collectors[i]);
		}

		const linux = [
			"x86, 64-bit yes",
			"x86, 64-bit, musl Show explanation no",
			"x86, 32-bit yes",
			"ARM, 64-bit yes",
			"ARM, 64-bit, musl Show explanation no",
			"ARM, 32-bit no",
			"PPC, 64-bit yes",
			"RISC-V, 64-bit no",
			"S390, 64-bit no",
			"APK Packages Show explanation no",
			"Deb Packages Show explanation yes",
			"RPM Packages Show explanation yes",
			"Container Images partially",
		];
		const pl = page.getByRole("rowgroup", { name: "Platforms: Linux" });
		await expect(pl.getByRole("row")).toHaveCount(linux.length);
		for (let i = 0; i < linux.length; i++) {
			await expect(pl.getByRole("row").nth(i)).toHaveAccessibleName(linux[i]);
		}

		const macOS = ["x86, 64-bit yes", "ARM, 64-bit yes", "Installers yes"];
		const pm = page.getByRole("rowgroup", { name: "Platforms: macOS" });
		await expect(pm.getByRole("row")).toHaveCount(macOS.length);
		for (let i = 0; i < macOS.length; i++) {
			await expect(pm.getByRole("row").nth(i)).toHaveAccessibleName(macOS[i]);
		}

		const windows = [
			"x86, 64-bit yes",
			"x86, 32-bit yes",
			"ARM, 64-bit no",
			"Installers yes",
			"Container Images partially",
		];
		const pw = page.getByRole("rowgroup", { name: "Platforms: Windows" });
		await expect(pw.getByRole("row")).toHaveCount(windows.length);
		for (let i = 0; i < windows.length; i++) {
			await expect(pw.getByRole("row").nth(i)).toHaveAccessibleName(windows[i]);
		}

		const other = ["AIX, PPC yes", "Solaris, SPARC yes", "Solaris, x86, 64-bit yes"];
		const po = page.getByRole("rowgroup", { name: "Platforms: Other" });
		await expect(po.getByRole("row")).toHaveCount(other.length);
		for (let i = 0; i < other.length; i++) {
			await expect(po.getByRole("row").nth(i)).toHaveAccessibleName(other[i]);
		}

		const certifications = [
			"Eclipse AQAvit Show explanation yes",
			"TCK for Java SE Show explanation yes",
		];
		const crt = page.getByRole("rowgroup", { name: "Certifications" });
		await expect(crt.getByRole("row")).toHaveCount(certifications.length);
		for (let i = 0; i < certifications.length; i++) {
			await expect(crt.getByRole("row").nth(i)).toHaveAccessibleName(certifications[i]);
		}

		const customisations = [
			"Editions JRE",
			"Customisations Show explanation medium",
			"Notable Features Show explanation none",
		];
		const cust = page.getByRole("rowgroup", { name: "Customisations" });
		await expect(cust.getByRole("row")).toHaveCount(customisations.length);
		for (let i = 0; i < customisations.length; i++) {
			await expect(cust.getByRole("row").nth(i)).toHaveAccessibleName(customisations[i]);
		}

		const licensing = [
			"License Show explanation GPLv2+CE",
			"Free in Development yes",
			"Free in Production yes",
		];
		const lic = page.getByRole("rowgroup", { name: "Licensing" });
		await expect(lic.getByRole("row")).toHaveCount(licensing.length);
		for (let i = 0; i < licensing.length; i++) {
			await expect(lic.getByRole("row").nth(i)).toHaveAccessibleName(licensing[i]);
		}

		const security = ["SBOM Show explanation yes"];
		const sec = page.getByRole("rowgroup", { name: "Security" });
		await expect(sec.getByRole("row")).toHaveCount(security.length);
		for (let i = 0; i < security.length; i++) {
			await expect(sec.getByRole("row").nth(i)).toHaveAccessibleName(security[i]);
		}

		const support = [
			"Patches Until Show explanation 2026-10",
			"CPU/PSU Show explanation no/free",
			"Release Schedule Show explanation OpenJDK",
			"Release Delay Show explanation 0-3 days",
			"Paid Support no",
		];
		const sup = page.getByRole("rowgroup", { name: "Support" });
		await expect(sup.getByRole("row")).toHaveCount(support.length);
		for (let i = 0; i < support.length; i++) {
			await expect(sup.getByRole("row").nth(i)).toHaveAccessibleName(support[i]);
		}

		const information = [
			"Country of Origin Show explanation Coffeeland",
			"Remarks Mug included",
		];
		const inf = page.getByRole("rowgroup", { name: "Information" });
		await expect(inf.getByRole("row")).toHaveCount(information.length);
		for (let i = 0; i < information.length; i++) {
			await expect(inf.getByRole("row").nth(i)).toHaveAccessibleName(information[i]);
		}
	});

	test("hides and reveals sections", async ({ page }) => {
		const properties = [
			"Feature Version 17 17 8",
			"Virtual Machine CoffeeVM DukeVM CoffeeVM",
			"Class Libraries OpenJDK OpenJDK OpenJDK",
		];

		let p = page.getByRole("rowgroup", { name: "Properties" });
		await expect(p.getByRole("row")).toHaveCount(properties.length);
		for (let i = 0; i < properties.length; i++) {
			await expect(p.getByRole("row").nth(i)).toHaveAccessibleName(properties[i]);
		}

		await page.getByRole("button", { name: "Hide section Properties" }).click();

		p = page.getByRole("rowgroup", { name: "Properties" });
		await expect(p.getByRole("row")).toHaveCount(0);

		await page.getByRole("button", { name: "Show section Properties" }).click();

		p = page.getByRole("rowgroup", { name: "Properties" });
		await expect(p.getByRole("row")).toHaveCount(properties.length);
		for (let i = 0; i < properties.length; i++) {
			await expect(p.getByRole("row").nth(i)).toHaveAccessibleName(properties[i]);
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

		const options = ["8", "17"];
		const form = page.getByRole("form", { name: "Selectable Versions" });
		await expect(form.getByRole("checkbox")).toHaveCount(options.length);
		for (let i = 0; i < options.length; i++) {
			await expect(form.getByRole("checkbox").nth(i)).toHaveAccessibleName(options[i]);
		}
	});

	test("all options of filter Vendors are displayed", async ({ page }) => {
		await page.getByRole("button", { name: "Vendors", exact: true }).click();

		const options = ["Coffeecorp", "Dukecorp"];
		const form = page.getByRole("form", { name: "Selectable Vendors" });
		await expect(form.getByRole("checkbox")).toHaveCount(options.length);
		for (let i = 0; i < options.length; i++) {
			await expect(form.getByRole("checkbox").nth(i)).toHaveAccessibleName(options[i]);
		}
	});

	test("all options of filter VMs are displayed", async ({ page }) => {
		await page.getByRole("button", { name: "VMs", exact: true }).click();

		const options = ["CoffeeVM", "DukeVM"];
		const form = page.getByRole("form", { name: "Selectable VMs" });
		await expect(form.getByRole("checkbox")).toHaveCount(options.length);
		for (let i = 0; i < options.length; i++) {
			await expect(form.getByRole("checkbox").nth(i)).toHaveAccessibleName(options[i]);
		}
	});

	test("all options of filter Technologies are displayed", async ({ page }) => {
		await page.getByRole("button", { name: "Technologies", exact: true }).click();

		const options = ["Flight Recorder", "JavaFX", "Java Web Start"];
		const form = page.getByRole("form", { name: "Selectable Technologies" });
		await expect(form.getByRole("checkbox")).toHaveCount(options.length);
		for (let i = 0; i < options.length; i++) {
			await expect(form.getByRole("checkbox").nth(i)).toHaveAccessibleName(options[i]);
		}
	});

	test("all options of filter GCs are displayed", async ({ page }) => {
		await page.getByRole("button", { name: "GCs", exact: true }).click();

		const options = ["CMS", "Epsilon", "G1", "Parallel", "Serial", "Shenandoah", "Z"];
		const form = page.getByRole("form", { name: "Selectable GCs" });
		await expect(form.getByRole("checkbox")).toHaveCount(options.length);
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
			"Windows, x86, 64-bit",
		];
		const form = page.getByRole("form", { name: "Selectable Platforms" });
		await expect(form.getByRole("checkbox")).toHaveCount(options.length);
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

	test("retains filter state when opening and closing", async ({ page }) => {
		await page.getByRole("button", { name: "Versions", exact: true }).click();

		let form = page.getByRole("form", { name: "Selectable Versions" });
		await expect(form.getByRole("checkbox", { name: "8" })).not.toBeChecked();
		await expect(form.getByRole("checkbox", { name: "17" })).not.toBeChecked();

		await form.getByRole("checkbox", { name: "8" }).click();

		await page.getByRole("button", { name: "Versions 1", exact: true }).click();
		await page.getByRole("button", { name: "Versions 1", exact: true }).click();

		form = page.getByRole("form", { name: "Selectable Versions" });
		await expect(form.getByRole("checkbox", { name: "8" })).toBeChecked();
		await expect(form.getByRole("checkbox", { name: "17" })).not.toBeChecked();

		await form.getByRole("checkbox", { name: "8" }).click();

		await page.getByRole("button", { name: "Versions", exact: true }).click();
		await page.getByRole("button", { name: "Versions", exact: true }).click();

		await expect(form.getByRole("checkbox", { name: "8" })).not.toBeChecked();
		await expect(form.getByRole("checkbox", { name: "17" })).not.toBeChecked();
	});

	test("updates number of active filters", async ({ page }) => {
		await page.getByRole("button", { name: "GCs", exact: true }).click();

		const filters = page.getByRole("region", { name: "Filters" });
		let form = page.getByRole("form", { name: "Selectable GCs" });

		await form.getByRole("checkbox", { name: "Epsilon", exact: true }).click();
		await expect(filters.getByRole("button").nth(5)).toHaveAccessibleName("GCs 1");

		await form.getByRole("checkbox", { name: "G1", exact: true }).click();
		await expect(filters.getByRole("button").nth(5)).toHaveAccessibleName("GCs 2");

		await form.getByRole("checkbox", { name: "Shenandoah", exact: true }).click();
		await expect(filters.getByRole("button").nth(5)).toHaveAccessibleName("GCs 3");

		await form.getByRole("checkbox", { name: "Epsilon", exact: true }).click();
		await expect(filters.getByRole("button").nth(5)).toHaveAccessibleName("GCs 2");

		await form.getByRole("checkbox", { name: "G1", exact: true }).click();
		await expect(filters.getByRole("button").nth(5)).toHaveAccessibleName("GCs 1");

		await form.getByRole("checkbox", { name: "Shenandoah", exact: true }).click();
		await expect(filters.getByRole("button").nth(5)).toHaveAccessibleName("GCs");
	});

	test("allows to open and close filters repeatedly", async ({ page }) => {
		await expect(page.getByRole("form", { name: "Selectable Vendors" })).not.toBeVisible();
		await expect(page.getByRole("checkbox", { name: "Coffeecorp" })).not.toBeVisible();

		await page.getByRole("button", { name: "Vendors", exact: true }).click();

		await expect(page.getByRole("form", { name: "Selectable Vendors" })).toBeVisible();
		await expect(page.getByRole("checkbox", { name: "Coffeecorp" })).toBeVisible();

		await page.getByRole("button", { name: "Vendors", exact: true }).click();

		await expect(page.getByRole("form", { name: "Selectable Vendors" })).not.toBeVisible();
		await expect(page.getByRole("checkbox", { name: "Coffeecorp" })).not.toBeVisible();

		await page.getByRole("button", { name: "Vendors", exact: true }).click();

		await expect(page.getByRole("form", { name: "Selectable Vendors" })).toBeVisible();
		await expect(page.getByRole("checkbox", { name: "Coffeecorp" })).toBeVisible();

		await page.getByRole("button", { name: "Vendors", exact: true }).click();

		await expect(page.getByRole("form", { name: "Selectable Vendors" })).not.toBeVisible();
		await expect(page.getByRole("checkbox", { name: "Coffeecorp" })).not.toBeVisible();
	});

	test("opening second filter closes first", async ({ page }) => {
		await expect(page.getByRole("form", { name: "Selectable Vendors" })).not.toBeVisible();
		await expect(page.getByRole("checkbox", { name: "Coffeecorp" })).not.toBeVisible();

		await page.getByRole("button", { name: "Vendors", exact: true }).click();

		await expect(page.getByRole("form", { name: "Selectable Vendors" })).toBeVisible();
		await expect(page.getByRole("checkbox", { name: "Coffeecorp" })).toBeVisible();

		await page.getByRole("button", { name: "Platforms", exact: true }).click();

		await expect(page.getByRole("form", { name: "Selectable Vendors" })).not.toBeVisible();
		await expect(page.getByRole("checkbox", { name: "Coffeecorp" })).not.toBeVisible();
		await expect(page.getByRole("form", { name: "Selectable Platforms" })).toBeVisible();
		await expect(page.getByRole("checkbox", { name: "AIX, PPC" })).toBeVisible();

		await page.getByRole("button", { name: "Vendors", exact: true }).click();

		await expect(page.getByRole("form", { name: "Selectable Vendors" })).toBeVisible();
		await expect(page.getByRole("checkbox", { name: "Coffeecorp" })).toBeVisible();
		await expect(page.getByRole("form", { name: "Selectable Platforms" })).not.toBeVisible();
		await expect(page.getByRole("checkbox", { name: "AIX, PPC" })).not.toBeVisible();
	});

	test("allows filtering by version", async ({ page }) => {
		await page.getByRole("button", { name: "Versions", exact: true }).click();

		const form = page.getByRole("form", { name: "Selectable Versions" });

		await form.getByRole("checkbox", { name: "8" }).click();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText(["Coffeecorp JDK 8"]);

		await form.getByRole("checkbox", { name: "17" }).click();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		await form.getByRole("checkbox", { name: "8" }).click();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
		]);
	});

	test("allows filtering by vendor", async ({ page }) => {
		await page.getByRole("button", { name: "Vendors", exact: true }).click();

		const form = page.getByRole("form", { name: "Selectable Vendors" });

		await form.getByRole("checkbox", { name: "Coffeecorp" }).click();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		await form.getByRole("checkbox", { name: "Dukecorp" }).click();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		await form.getByRole("checkbox", { name: "Coffeecorp" }).click();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText(["Dukecorp JDK 17"]);
	});

	test("allows filtering by technology", async ({ page }) => {
		await page.getByRole("button", { name: "Technologies", exact: true }).click();

		const form = page.getByRole("form", { name: "Selectable Technologies" });

		await form.getByRole("checkbox", { name: "JavaFX" }).click();
		await expect(form.getByRole("checkbox", { name: "JavaFX" })).toBeChecked();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText(["Coffeecorp JDK 8"]);

		await form.getByRole("checkbox", { name: "JavaFX" }).click();
		await expect(form.getByRole("checkbox", { name: "JavaFX" })).not.toBeChecked();

		await form.getByRole("checkbox", { name: "Flight Recorder" }).click();
		await expect(form.getByRole("checkbox", { name: "Flight Recorder" })).toBeChecked();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
		]);

		await form.getByRole("checkbox", { name: "Java Web Start" }).click();
		await expect(form.getByRole("checkbox", { name: "Java Web Start" })).toBeChecked();

		await form.getByRole("checkbox", { name: "Flight Recorder" }).click();
		await expect(form.getByRole("checkbox", { name: "Flight Recorder" })).not.toBeChecked();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText(
			"No JDKs match your selection.",
		);
	});

	test("allows filtering by virtual machine", async ({ page }) => {
		await page.getByRole("button", { name: "VMs", exact: true }).click();

		const form = page.getByRole("form", { name: "Selectable VMs" });

		await form.getByRole("checkbox", { name: "CoffeeVM" }).click();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		await form.getByRole("checkbox", { name: "CoffeeVM" }).click();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		await form.getByRole("checkbox", { name: "DukeVM" }).click();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText(["Dukecorp JDK 17"]);

		await form.getByRole("checkbox", { name: "CoffeeVM" }).click();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);
	});

	test("allows filtering by garbage collectors", async ({ page }) => {
		await page.getByRole("button", { name: "GCs", exact: true }).click();

		const form = page.getByRole("form", { name: "Selectable GCs" });

		await form.getByRole("checkbox", { name: "Shenandoah" }).click();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		await form.getByRole("checkbox", { name: "CMS" }).click();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText(["Coffeecorp JDK 8"]);

		await form.getByRole("checkbox", { name: "CMS" }).click();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		await form.getByRole("checkbox", { name: "Shenandoah" }).click();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);
	});

	test("allows filtering by platforms", async ({ page }) => {
		await page.getByRole("button", { name: "Platforms", exact: true }).click();

		const form = page.getByRole("form", { name: "Selectable Platforms" });

		await form.getByRole("checkbox", { name: "AIX, PPC" }).click();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		await form.getByRole("checkbox", { name: "Solaris, SPARC" }).click();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText(["Coffeecorp JDK 8"]);

		await form.getByRole("checkbox", { name: "AIX, PPC" }).click();
		await form.getByRole("checkbox", { name: "Solaris, SPARC" }).click();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);
	});

	test("allows filtering by licensing option", async ({ page }) => {
		await page.getByRole("button", { name: "Licensing", exact: true }).click();

		const form = page.getByRole("form", { name: "Selectable Licensing" });

		await form.getByRole("checkbox", { name: "Free in Production" }).click();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		await form.getByRole("checkbox", { name: "Free in Development" }).click();

		// Licensing filter is AND, hence no Dukecorp JDK 17 because that is not free in production.
		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		await form.getByRole("checkbox", { name: "Free in Production" }).click();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);
	});

	test("displays message if no JDKs match filter criteria", async ({ page }) => {
		await page.getByRole("button", { name: "Technologies", exact: true }).click();

		const form = page.getByRole("form", { name: "Selectable Technologies" });

		await form.getByRole("checkbox", { name: "Java Web Start" }).click();

		await expect(page.getByRole("checkbox", { name: "Java Web Start" })).toBeChecked();
		await expect(page.getByRole("heading", { level: 1 })).toHaveText(
			"No JDKs match your selection.",
		);
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

	test("clicking a second feature explanation closes the first", async ({ page }) => {
		const jfx = page.getByRole("row", { name: "JavaFX Show explanation no[1] no yes[1]" });
		await jfx.getByRole("img", { name: "Show explanation" }).click();

		await expect(page.getByRole("note", { name: "Explanation for JavaFX" })).toBeVisible();
		await expect(page.getByRole("note", { name: "Explanation for JavaFX" })).toContainText(
			"JavaFX is a GUI toolkit that was part of Oracle JDK until Oracle JDK 10.",
		);

		const cms = page.getByRole("row", { name: "CMS Show explanation no no yes" });
		await cms.getByRole("img", { name: "Show explanation" }).click();

		await expect(page.getByRole("note", { name: "Explanation for JavaFX" })).not.toBeVisible();
		await expect(page.getByRole("note", { name: "Explanation for CMS" })).toBeVisible();
		await expect(page.getByRole("note", { name: "Explanation for CMS" })).toContainText(
			"Concurrent Mark Sweep is a collector that does a part",
		);

		await jfx.getByRole("img", { name: "Show explanation" }).click();

		await expect(page.getByRole("note", { name: "Explanation for JavaFX" })).toBeVisible();
		await expect(page.getByRole("note", { name: "Explanation for CMS" })).not.toBeVisible();
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

		await row.getByRole("gridcell", { name: "no[1]" }).getByRole("link").click();

		await expect(page.getByRole("note", { name: "Footnote 1" })).not.toBeVisible();

		await row.getByRole("gridcell", { name: "no[1]" }).getByRole("link").click();

		await expect(page.getByRole("note", { name: "Footnote 1" })).toBeVisible();
	});

	test("opening next footnote closes previous", async ({ page }) => {
		const jfx = page.getByRole("row", { name: "JavaFX Show explanation no[1] no yes[1]" });
		const support = page.getByRole("row", { name: "Paid Support no no[2] no" });

		await jfx.getByRole("gridcell", { name: "no[1]" }).getByRole("link").click();

		await expect(page.getByRole("note", { name: "Footnote 1" })).toBeVisible();

		await support.getByRole("gridcell", { name: "no[2]" }).getByRole("link").click();

		await expect(page.getByRole("note", { name: "Footnote 2" })).toBeVisible();
		await expect(page.getByRole("note", { name: "Footnote 2" })).toContainText(
			"Some remark regarding paid",
		);
		await expect(page.getByRole("note", { name: "Footnote 1" })).not.toBeVisible();

		// And back again, to be sure.
		await jfx.getByRole("gridcell", { name: "no[1]" }).getByRole("link").click();

		await expect(page.getByRole("note", { name: "Footnote 1" })).toBeVisible();
		await expect(page.getByRole("note", { name: "Footnote 1" })).toContainText(
			"Some clarifications regarding JavaFX",
		);
		await expect(page.getByRole("note", { name: "Footnote 2" })).not.toBeVisible();
	});

	// endregion [Footnote Tests]

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

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);
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

		await expect(page.getByRole("heading", { level: 1 })).toHaveText(["Coffeecorp JDK 8"]);
	});

	test("preselects Versions filter according to search parameters", async ({ page }) => {
		await page.goto("/?versions=17");
		await expect(page).toHaveURL("/?versions=17");
		await expect(page).toHaveTitle("JDK Comparison");

		await page.getByRole("button", { name: "Versions 1", exact: true }).click();

		let form = page.getByRole("form", { name: "Selectable Versions" });
		await expect(form.getByRole("checkbox", { name: "8" })).not.toBeChecked();
		await expect(form.getByRole("checkbox", { name: "17" })).toBeChecked();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
		]);

		await page.goto("/?versions=8&versions=17");
		await expect(page).toHaveURL("/?versions=8&versions=17");
		await expect(page).toHaveTitle("JDK Comparison");

		await page.getByRole("button", { name: "Versions 2", exact: true }).click();

		form = page.getByRole("form", { name: "Selectable Versions" });
		await expect(form.getByRole("checkbox", { name: "8" })).toBeChecked();
		await expect(form.getByRole("checkbox", { name: "17" })).toBeChecked();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);
	});

	test("preselects Vendors filter according to search parameters", async ({ page }) => {
		await page.goto("/?vendors=Dukecorp");
		await expect(page).toHaveURL("/?vendors=Dukecorp");
		await expect(page).toHaveTitle("JDK Comparison");

		await page.getByRole("button", { name: "Vendors 1", exact: true }).click();

		let form = page.getByRole("form", { name: "Selectable Vendors" });
		await expect(form.getByRole("checkbox", { name: "Coffeecorp" })).not.toBeChecked();
		await expect(form.getByRole("checkbox", { name: "Dukecorp" })).toBeChecked();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText(["Dukecorp JDK 17"]);

		await page.goto("/?vendors=Coffeecorp&vendors=Dukecorp");
		await expect(page).toHaveURL("/?vendors=Coffeecorp&vendors=Dukecorp");
		await expect(page).toHaveTitle("JDK Comparison");

		await page.getByRole("button", { name: "Vendors 2", exact: true }).click();

		form = page.getByRole("form", { name: "Selectable Vendors" });
		await expect(form.getByRole("checkbox", { name: "Coffeecorp" })).toBeChecked();
		await expect(form.getByRole("checkbox", { name: "Dukecorp" })).toBeChecked();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);
	});

	test("preselects VMs filter according to search parameters", async ({ page }) => {
		await page.goto("/?vms=CoffeeVM");
		await expect(page).toHaveURL("/?vms=CoffeeVM");
		await expect(page).toHaveTitle("JDK Comparison");

		await page.getByRole("button", { name: "VMs 1", exact: true }).click();

		let form = page.getByRole("form", { name: "Selectable VMs" });
		await expect(form.getByRole("checkbox", { name: "CoffeeVM" })).toBeChecked();
		await expect(form.getByRole("checkbox", { name: "DukeVM" })).not.toBeChecked();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		await page.goto("/?vms=CoffeeVM&vms=DukeVM");
		await expect(page).toHaveURL("/?vms=CoffeeVM&vms=DukeVM");
		await expect(page).toHaveTitle("JDK Comparison");

		await page.getByRole("button", { name: "VMs 2", exact: true }).click();

		form = page.getByRole("form", { name: "Selectable VMs" });
		await expect(form.getByRole("checkbox", { name: "CoffeeVM" })).toBeChecked();
		await expect(form.getByRole("checkbox", { name: "DukeVM" })).toBeChecked();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);
	});

	test("preselects Technologies filter according to search parameters", async ({ page }) => {
		await page.goto("/?technologies=Flight%20Recorder");
		await expect(page).toHaveURL("/?technologies=Flight%20Recorder");
		await expect(page).toHaveTitle("JDK Comparison");

		await page.getByRole("button", { name: "Technologies 1", exact: true }).click();

		let form = page.getByRole("form", { name: "Selectable Technologies" });
		await expect(form.getByRole("checkbox", { name: "JavaFX" })).not.toBeChecked();
		await expect(form.getByRole("checkbox", { name: "Flight Recorder" })).toBeChecked();
		await expect(form.getByRole("checkbox", { name: "Java Web Start" })).not.toBeChecked();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
		]);

		await page.goto(
			"/?technologies=JavaFX&technologies=Flight%20Recorder&technologies=Java%20Web%20Start",
		);
		await expect(page).toHaveURL(
			"/?technologies=JavaFX&technologies=Flight%20Recorder&technologies=Java%20Web%20Start",
		);
		await expect(page).toHaveTitle("JDK Comparison");

		await page.getByRole("button", { name: "Technologies 3", exact: true }).click();

		form = page.getByRole("form", { name: "Selectable Technologies" });
		await expect(form.getByRole("checkbox", { name: "JavaFX" })).toBeChecked();
		await expect(form.getByRole("checkbox", { name: "Flight Recorder" })).toBeChecked();
		await expect(form.getByRole("checkbox", { name: "Java Web Start" })).toBeChecked();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText(
			"No JDKs match your selection.",
		);
	});

	test("preselects Platforms filter according to search parameters", async ({ page }) => {
		await page.goto("/?platforms=AIX, PPC");
		await expect(page).toHaveURL("/?platforms=AIX, PPC");
		await expect(page).toHaveTitle("JDK Comparison");

		await page.getByRole("button", { name: "Platforms 1", exact: true }).click();

		let form = page.getByRole("form", { name: "Selectable Platforms" });
		await expect(form.getByRole("checkbox", { name: "AIX, PPC" })).toBeChecked();
		await expect(form.getByRole("checkbox", { name: "macOS, x86, 64-bit" })).not.toBeChecked();
		await expect(form.getByRole("checkbox", { name: "Solaris, SPARC" })).not.toBeChecked();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		await page.goto(
			"/?platforms=AIX, PPC&platforms=Solaris, SPARC&platforms=macOS, x86, 64-bit",
		);
		await expect(page).toHaveURL(
			"/?platforms=AIX, PPC&platforms=Solaris, SPARC&platforms=macOS, x86, 64-bit",
		);
		await expect(page).toHaveTitle("JDK Comparison");

		await page.getByRole("button", { name: "Platforms 3", exact: true }).click();

		form = page.getByRole("form", { name: "Selectable Platforms" });
		await expect(form.getByRole("checkbox", { name: "AIX, PPC" })).toBeChecked();
		await expect(form.getByRole("checkbox", { name: "macOS, x86, 64-bit" })).toBeChecked();
		await expect(form.getByRole("checkbox", { name: "Solaris, SPARC" })).toBeChecked();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText("Coffeecorp JDK 8");
	});

	test("preselects GCs filter according to search parameters", async ({ page }) => {
		await page.goto("/?gcs=Shenandoah");
		await expect(page).toHaveURL("/?gcs=Shenandoah");
		await expect(page).toHaveTitle("JDK Comparison");

		await page.getByRole("button", { name: "GCs 1", exact: true }).click();

		let form = page.getByRole("form", { name: "Selectable GCs" });
		await expect(form.getByRole("checkbox", { name: "CMS" })).not.toBeChecked();
		await expect(form.getByRole("checkbox", { name: "G1" })).not.toBeChecked();
		await expect(form.getByRole("checkbox", { name: "Shenandoah" })).toBeChecked();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		await page.goto("/?gcs=Shenandoah&gcs=CMS&gcs=G1");
		await expect(page).toHaveURL("/?gcs=Shenandoah&gcs=CMS&gcs=G1");
		await expect(page).toHaveTitle("JDK Comparison");

		await page.getByRole("button", { name: "GCs 3", exact: true }).click();

		form = page.getByRole("form", { name: "Selectable GCs" });
		await expect(form.getByRole("checkbox", { name: "CMS" })).toBeChecked();
		await expect(form.getByRole("checkbox", { name: "G1" })).toBeChecked();
		await expect(form.getByRole("checkbox", { name: "Shenandoah" })).toBeChecked();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText("Coffeecorp JDK 8");
	});

	test("preselects Licensing filter according to search parameters", async ({ page }) => {
		await page.goto("/?licensing=Free+in+Production");
		await expect(page).toHaveURL("/?licensing=Free+in+Production");
		await expect(page).toHaveTitle("JDK Comparison");

		await page.getByRole("button", { name: "Licensing 1", exact: true }).click();

		let form = page.getByRole("form", { name: "Selectable Licensing" });
		await expect(form.getByRole("checkbox", { name: "Free in Production" })).toBeChecked();
		await expect(form.getByRole("checkbox", { name: "Free in Development" })).not.toBeChecked();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		await page.goto("/?licensing=Free+in+Production&licensing=Free+in+Development");
		await expect(page).toHaveURL(
			"/?licensing=Free+in+Production&licensing=Free+in+Development",
		);
		await expect(page).toHaveTitle("JDK Comparison");

		await page.getByRole("button", { name: "Licensing 2", exact: true }).click();

		form = page.getByRole("form", { name: "Selectable Licensing" });
		await expect(form.getByRole("checkbox", { name: "Free in Production" })).toBeChecked();
		await expect(form.getByRole("checkbox", { name: "Free in Development" })).toBeChecked();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Coffeecorp JDK 8",
		]);
	});

	// endregion [Search Parameters Tests]

	// region [Sort Order Tests]

	test("displays all sort options", async ({ page }) => {
		await page.getByRole("button", { name: "Sort", exact: true }).click();

		const options = [
			"Newest",
			"Oldest",
			"Vendor, A-Z",
			"Vendor, Z-A",
			"JDK Name, A-Z",
			"JDK Name, Z-A",
		];
		const menu = page.getByRole("menu", { name: "Sort" });
		await expect(menu.getByRole("menuitem")).toHaveCount(options.length);
		for (let i = 0; i < i; i++) {
			await expect(menu.getByRole("menuitem").nth(i)).toHaveAccessibleName(options[i]);
		}
	});

	test("can open and close sort options repeatedly", async ({ page }) => {
		await page.getByRole("button", { name: "Sort", exact: true }).click();

		await expect(page.getByRole("menu", { name: "Sort" })).toBeVisible();

		await page.getByRole("button", { name: "Sort", exact: true }).click();

		await expect(page.getByRole("menu", { name: "Sort" })).not.toBeVisible();

		await page.getByRole("button", { name: "Sort", exact: true }).click();

		await expect(page.getByRole("menu", { name: "Sort" })).toBeVisible();

		await page.keyboard.press("Escape");

		await expect(page.getByRole("menu", { name: "Sort" })).not.toBeVisible();
	});

	test("sorts newest JDKs first by default", async ({ page }) => {
		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		await page.getByRole("button", { name: "Sort", exact: true }).click();

		const menu = page.getByRole("menu", { name: "Sort" });
		await expect(menu.getByRole("menuitem", { name: "Newest" })).toHaveClass(
			/sort-option-active/,
		);
	});

	test("sorts newest JDKs first", async ({ page }) => {
		await page.getByRole("button", { name: "Sort", exact: true }).click();

		let menu = page.getByRole("menu", { name: "Sort" });
		await menu.getByRole("menuitem", { name: "Newest" }).click();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		await page.getByRole("button", { name: "Sort", exact: true }).click();

		menu = page.getByRole("menu", { name: "Sort" });
		await expect(menu.getByRole("menuitem", { name: "Newest" })).toHaveClass(
			/sort-option-active/,
		);
	});

	test("sorts oldest JDKs first", async ({ page }) => {
		await page.getByRole("button", { name: "Sort", exact: true }).click();

		let menu = page.getByRole("menu", { name: "Sort" });
		await menu.getByRole("menuitem", { name: "Oldest" }).click();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 8",
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
		]);

		await page.getByRole("button", { name: "Sort", exact: true }).click();

		menu = page.getByRole("menu", { name: "Sort" });
		await expect(menu.getByRole("menuitem", { name: "Oldest" })).toHaveClass(
			/sort-option-active/,
		);
	});

	test("sorts JDKs by vendors, A-Z", async ({ page }) => {
		await page.getByRole("button", { name: "Sort", exact: true }).click();

		let menu = page.getByRole("menu", { name: "Sort" });
		await menu.getByRole("menuitem", { name: "Vendor, A-Z" }).click();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Coffeecorp JDK 8",
			"Dukecorp JDK 17",
		]);

		await page.getByRole("button", { name: "Sort", exact: true }).click();

		menu = page.getByRole("menu", { name: "Sort" });
		await expect(menu.getByRole("menuitem", { name: "Vendor, A-Z" })).toHaveClass(
			/sort-option-active/,
		);
	});

	test("sorts JDKs by vendor, Z-A", async ({ page }) => {
		await page.getByRole("button", { name: "Sort", exact: true }).click();

		let menu = page.getByRole("menu", { name: "Sort" });
		await menu.getByRole("menuitem", { name: "Vendor, Z-A" }).click();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Dukecorp JDK 17",
			"Coffeecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		await page.getByRole("button", { name: "Sort", exact: true }).click();

		menu = page.getByRole("menu", { name: "Sort" });
		await expect(menu.getByRole("menuitem", { name: "Vendor, Z-A" })).toHaveClass(
			/sort-option-active/,
		);
	});

	test("sorts JDKs by their name, A-Z", async ({ page }) => {
		await page.getByRole("button", { name: "Sort", exact: true }).click();

		let menu = page.getByRole("menu", { name: "Sort" });
		await menu.getByRole("menuitem", { name: "JDK Name, A-Z" }).click();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Coffeecorp JDK 8",
			"Dukecorp JDK 17",
		]);

		await page.getByRole("button", { name: "Sort", exact: true }).click();

		menu = page.getByRole("menu", { name: "Sort" });
		await expect(menu.getByRole("menuitem", { name: "JDK Name, A-Z" })).toHaveClass(
			/sort-option-active/,
		);
	});

	test("sorts JDKs by their name, Z-A", async ({ page }) => {
		await page.getByRole("button", { name: "Sort", exact: true }).click();

		let menu = page.getByRole("menu", { name: "Sort" });
		await menu.getByRole("menuitem", { name: "JDK Name, Z-A" }).click();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
			"Coffeecorp JDK 17",
		]);

		await page.getByRole("button", { name: "Sort", exact: true }).click();

		menu = page.getByRole("menu", { name: "Sort" });
		await expect(menu.getByRole("menuitem", { name: "JDK Name, Z-A" })).toHaveClass(
			/sort-option-active/,
		);
	});

	test("retains sort order while filtering", async ({ page }) => {
		await page.getByRole("button", { name: "Vendors", exact: true }).click();
		await page.getByRole("checkbox", { name: "Dukecorp" }).click();

		await page.getByRole("button", { name: "Sort", exact: true }).click();
		await page.getByRole("menuitem", { name: "JDK Name, Z-A" }).click();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText(["Dukecorp JDK 17"]);

		await page.getByRole("button", { name: "Vendors 1", exact: true }).click();
		await page.getByRole("checkbox", { name: "Coffeecorp" }).click();

		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
			"Coffeecorp JDK 17",
		]);

		await page.getByRole("button", { name: "Sort", exact: true }).click();

		await expect(page.getByRole("menuitem", { name: "JDK Name, Z-A" })).toHaveClass(
			/sort-option-active/,
		);
	});

	test("retains sort order when changing sort order repeatedly", async ({ page }) => {
		await page.getByRole("button", { name: "Sort", exact: true }).click();
		await page.getByRole("menuitem", { name: "JDK Name, Z-A" }).click();

		await expect(page.getByRole("menuitem", { name: "JDK Name, Z-A" })).toHaveClass(
			/sort-option-active/,
		);
		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
			"Coffeecorp JDK 17",
		]);

		await page.getByRole("button", { name: "Sort", exact: true }).click();
		await page.getByRole("menuitem", { name: "Vendor, A-Z" }).click();

		await expect(page.getByRole("menuitem", { name: "Vendor, A-Z" })).toHaveClass(
			/sort-option-active/,
		);
		// Original order is Coffeecorp 17 before 8, so it needs to be the same here and not retain
		// 8 before 17 from the previous sort order.
		await expect(page.getByRole("heading", { level: 1 })).toHaveText([
			"Coffeecorp JDK 17",
			"Coffeecorp JDK 8",
			"Dukecorp JDK 17",
		]);
	});

	// endregion [Sort Order Tests]
});
