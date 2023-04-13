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
import { navigationComponent } from "../navigationComponent";
import { comparisonPage } from "../comparisonPage";

describe("JDK Comparison", () => {
	it("should display all navigation options", () => {
		cy.visit("http://localhost:3000/");

		navigationComponent.expectPageTitle("JDK Comparison");
		navigationComponent.expectNavigationOptions(["JDK Comparison", "FAQ"]);
	});

	it("should navigate to FAQ", () => {
		cy.visit("http://localhost:3000/");

		navigationComponent.expectPageTitle("JDK Comparison");
		navigationComponent.expectNavigationOptions(["JDK Comparison", "FAQ"]);

		navigationComponent.navigateTo("FAQ");
		navigationComponent.expectPageTitle(
			"Frequently Asked Questions – JDK Comparison"
		);
	});

	it("displays GitHub link", () => {
		cy.visit("http://localhost:3000/");

		navigationComponent.expectPageTitle("JDK Comparison");
		navigationComponent.expectSecondaryNavigationOption(
			"github-link",
			"Go to GitHub repository",
			"https://github.com/aahlenst/jdkcomparison"
		);
	});

	it("should display all products", () => {
		cy.visit("http://localhost:3000/");

		navigationComponent.expectPageTitle("JDK Comparison");
		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);
	});

	it("should display all sections", () => {
		cy.visit("http://localhost:3000/");

		navigationComponent.expectPageTitle("JDK Comparison");

		comparisonPage.expectSections([
			"Properties",
			"Technologies",
			"Garbage Collectors",
			"Platforms: Linux",
			"Platforms: macOS",
			"Platforms: Windows",
			"Certifications",
			"Customisations",
			"Licensing",
			"Support",
		]);

		comparisonPage.expectFeaturesInSection("properties", [
			"Feature Version",
			"Virtual Machine",
			"Class Libraries",
		]);
		comparisonPage.expectFeatureText(
			"properties-feature-version",
			"Feature Version",
			["17", "17", "8"]
		);
		comparisonPage.expectFeatureText("properties-vm", "Virtual Machine", [
			"CoffeeVM",
			"DukeVM",
			"CoffeeVM",
		]);
		comparisonPage.expectFeatureText(
			"properties-class-libraries",
			"Class Libraries",
			["OpenJDK", "OpenJDK", "OpenJDK"]
		);

		comparisonPage.expectFeaturesInSection("technologies", [
			"JavaFX",
			"Flight Recorder",
			"Java Web Start",
		]);
		comparisonPage.expectFeaturePresence("technologies-jfx", "JavaFX", [
			"no",
			"no",
			"yes",
		]);
		comparisonPage.expectFeaturePresence(
			"technologies-jfr",
			"Flight Recorder",
			["yes", "yes", "no"]
		);
		comparisonPage.expectFeaturePresence(
			"technologies-jaws",
			"Java Web Start",
			["no", "no", "no"]
		);

		comparisonPage.expectFeaturesInSection("gcs", [
			"CMS",
			"Epsilon",
			"G1",
			"Parallel",
			"Serial",
			"Shenandoah",
			"Z",
			"Custom GCs",
		]);
		comparisonPage.expectFeaturePresence("gcs-cms", "CMS", [
			"no",
			"no",
			"yes",
		]);
		comparisonPage.expectFeaturePresence("gcs-epsilon", "Epsilon", [
			"yes",
			"yes",
			"no",
		]);
		comparisonPage.expectFeaturePresence("gcs-g1", "G1", [
			"yes",
			"yes",
			"yes",
		]);
		comparisonPage.expectFeaturePresence("gcs-parallel", "Parallel", [
			"yes",
			"yes",
			"yes",
		]);
		comparisonPage.expectFeaturePresence("gcs-serial", "Serial", [
			"yes",
			"yes",
			"yes",
		]);
		comparisonPage.expectFeaturePresence("gcs-shenandoah", "Shenandoah", [
			"partially",
			"no",
			"partially",
		]);
		comparisonPage.expectFeaturePresence("gcs-z", "Z", [
			"partially",
			"yes",
			"partially",
		]);
		comparisonPage.expectFeatureText("gcs-custom", "Custom GCs", [
			"none",
			"FairyGC",
			"none",
		]);

		comparisonPage.expectFeaturesInSection("linux", [
			"x86, 64-bit",
			"x86, 64-bit, musl",
			"x86, 32-bit",
			"ARM, 64-bit",
			"ARM, 64-bit, musl",
			"ARM, 32-bit",
			"PPC, 64-bit",
			"RISC-V, 64-bit",
			"S390, 64-bit",
			"APK Packages",
			"Deb Packages",
			"RPM Packages",
			"Container Images",
		]);
		comparisonPage.expectFeaturePresence("linux-x64", "x86, 64-bit", [
			"yes",
			"yes",
			"yes",
		]);
		comparisonPage.expectFeaturePresence(
			"linux-x64-musl",
			"x86, 64-bit, musl",
			["yes", "no", "no"]
		);
		comparisonPage.expectFeaturePresence("linux-x32", "x86, 32-bit", [
			"yes",
			"no",
			"yes",
		]);
		comparisonPage.expectFeaturePresence("linux-aarch64", "ARM, 64-bit", [
			"yes",
			"yes",
			"yes",
		]);
		comparisonPage.expectFeaturePresence(
			"linux-aarch64-musl",
			"ARM, 64-bit, musl",
			["yes", "no", "no"]
		);
		comparisonPage.expectFeaturePresence("linux-aarch32", "ARM, 32-bit", [
			"no",
			"no",
			"no",
		]);
		comparisonPage.expectFeaturePresence("linux-ppc64", "PPC, 64-bit", [
			"yes",
			"no",
			"yes",
		]);
		comparisonPage.expectFeaturePresence(
			"linux-riscv64",
			"RISC-V, 64-bit",
			["no", "no", "no"]
		);
		comparisonPage.expectFeaturePresence("linux-s390x", "S390, 64-bit", [
			"yes",
			"no",
			"no",
		]);
		comparisonPage.expectFeaturePresence("linux-apk", "APK Packages", [
			"yes",
			"no",
			"no",
		]);
		comparisonPage.expectFeaturePresence("linux-deb", "Deb Packages", [
			"yes",
			"no",
			"yes",
		]);
		comparisonPage.expectFeaturePresence("linux-rpm", "RPM Packages", [
			"yes",
			"no",
			"yes",
		]);
		comparisonPage.expectFeaturePresence(
			"linux-container-images",
			"Container Images",
			["partially", "no", "partially"]
		);

		comparisonPage.expectFeaturesInSection("mac", [
			"x86, 64-bit",
			"ARM, 64-bit",
			"Installers",
		]);
		comparisonPage.expectFeaturePresence("mac-x64", "x86, 64-bit", [
			"yes",
			"yes",
			"yes",
		]);
		comparisonPage.expectFeaturePresence("mac-aarch64", "ARM, 64-bit", [
			"yes",
			"yes",
			"yes",
		]);
		comparisonPage.expectFeaturePresence("mac-installers", "Installers", [
			"yes",
			"yes",
			"yes",
		]);

		comparisonPage.expectFeaturesInSection("windows", [
			"x86, 64-bit",
			"x86, 32-bit",
			"ARM, 64-bit",
			"Installers",
			"Container Images",
		]);
		comparisonPage.expectFeaturePresence("windows-x64", "x86, 64-bit", [
			"yes",
			"yes",
			"yes",
		]);
		comparisonPage.expectFeaturePresence("windows-x32", "x86, 32-bit", [
			"no",
			"no",
			"yes",
		]);
		comparisonPage.expectFeaturePresence("windows-aarch64", "ARM, 64-bit", [
			"yes",
			"no",
			"no",
		]);
		comparisonPage.expectFeaturePresence(
			"windows-installers",
			"Installers",
			["yes", "no", "yes"]
		);
		comparisonPage.expectFeaturePresence(
			"windows-container-images",
			"Container Images",
			["partially", "no", "partially"]
		);

		comparisonPage.expectFeaturesInSection("certifications", [
			"Eclipse AQAvit",
			"TCK for Java SE",
		]);
		comparisonPage.expectFeaturePresence(
			"certifications-aqavit",
			"Eclipse AQAvit",
			["yes", "yes", "yes"]
		);
		comparisonPage.expectFeaturePresence(
			"certifications-tck",
			"TCK for Java SE",
			["yes", "yes", "yes"]
		);

		comparisonPage.expectFeaturesInSection("customisations", [
			"Editions",
			"Customisations",
			"Notable Features",
		]);
		comparisonPage.expectFeatureText(
			"customisations-editions",
			"Editions",
			["JRE", "JRE", "JRE"]
		);
		comparisonPage.expectFeatureText(
			"customisations-customisations",
			"Customisations",
			["few", "many", "medium"]
		);
		comparisonPage.expectFeatureText(
			"customisations-notable-features",
			"Notable Features",
			["none", "FairyGC", "none"]
		);

		comparisonPage.expectFeaturesInSection("licensing", [
			"License",
			"Free in Development",
			"Free in Production",
		]);
		comparisonPage.expectFeatureText("licensing-license", "License", [
			"GPLv2+CPE",
			"Proprietary",
			"GPLv2+CPE",
		]);
		comparisonPage.expectFeaturePresence(
			"licensing-free-in-development",
			"Free in Development",
			["yes", "yes", "yes"]
		);
		comparisonPage.expectFeaturePresence(
			"licensing-free-in-production",
			"Free in Production",
			["yes", "no", "yes"]
		);

		comparisonPage.expectFeaturesInSection("support", [
			"Patches Until",
			"Release Schedule",
			"Release Delay",
			"Paid support",
		]);
		comparisonPage.expectFeatureText("support-eol-date", "Patches Until", [
			"2027-10",
			"2027-10[3]",
			"2026-10",
		]);
		comparisonPage.expectFeatureText(
			"support-release-schedule",
			"Release Schedule",
			["OpenJDK", "OpenJDK", "OpenJDK"]
		);
		comparisonPage.expectFeatureText(
			"support-release-delay",
			"Release Delay",
			["0-3 days", "none", "0-3 days"]
		);
		comparisonPage.expectFeaturePresence("support-paid", "Paid support", [
			"no",
			"no",
			"no",
		]);
	});

	it("should display only features with different values", () => {
		cy.visit("http://localhost:3000/");

		navigationComponent.expectPageTitle("JDK Comparison");

		comparisonPage.expectSections([
			"Properties",
			"Technologies",
			"Garbage Collectors",
			"Platforms: Linux",
			"Platforms: macOS",
			"Platforms: Windows",
			"Certifications",
			"Customisations",
			"Licensing",
			"Support",
		]);
		comparisonPage.expectFeaturesInSection("properties", [
			"Feature Version",
			"Virtual Machine",
			"Class Libraries",
		]);
		comparisonPage.expectFeaturesInSection("technologies", [
			"JavaFX",
			"Flight Recorder",
			"Java Web Start",
		]);
		comparisonPage.expectFeaturesInSection("gcs", [
			"CMS",
			"Epsilon",
			"G1",
			"Parallel",
			"Serial",
			"Shenandoah",
			"Z",
			"Custom GCs",
		]);
		comparisonPage.expectFeaturesInSection("linux", [
			"x86, 64-bit",
			"x86, 64-bit, musl",
			"x86, 32-bit",
			"ARM, 64-bit",
			"ARM, 64-bit, musl",
			"ARM, 32-bit",
			"PPC, 64-bit",
			"RISC-V, 64-bit",
			"S390, 64-bit",
			"APK Packages",
			"Deb Packages",
			"RPM Packages",
			"Container Images",
		]);
		comparisonPage.expectFeaturesInSection("mac", [
			"x86, 64-bit",
			"ARM, 64-bit",
			"Installers",
		]);
		comparisonPage.expectFeaturesInSection("windows", [
			"x86, 64-bit",
			"x86, 32-bit",
			"ARM, 64-bit",
			"Installers",
			"Container Images",
		]);
		comparisonPage.expectFeaturesInSection("certifications", [
			"Eclipse AQAvit",
			"TCK for Java SE",
		]);
		comparisonPage.expectFeaturesInSection("customisations", [
			"Editions",
			"Customisations",
			"Notable Features",
		]);
		comparisonPage.expectFeaturesInSection("licensing", [
			"License",
			"Free in Development",
			"Free in Production",
		]);
		comparisonPage.expectFeaturesInSection("support", [
			"Patches Until",
			"Release Schedule",
			"Release Delay",
			"Paid support",
		]);

		comparisonPage.clickShowDifferencesOnly();

		comparisonPage.expectSections([
			"Properties",
			"Technologies",
			"Garbage Collectors",
			"Platforms: Linux",
			"Platforms: Windows",
			"Customisations",
			"Licensing",
			"Support",
		]);
		comparisonPage.expectFeaturesInSection("properties", [
			"Feature Version",
			"Virtual Machine",
		]);
		comparisonPage.expectFeaturesInSection("technologies", [
			"JavaFX",
			"Flight Recorder",
		]);
		comparisonPage.expectFeaturesInSection("gcs", [
			"CMS",
			"Epsilon",
			"Shenandoah",
			"Z",
			"Custom GCs",
		]);
		comparisonPage.expectFeaturesInSection("linux", [
			"x86, 64-bit, musl",
			"x86, 32-bit",
			"ARM, 64-bit, musl",
			"PPC, 64-bit",
			"S390, 64-bit",
			"APK Packages",
			"Deb Packages",
			"RPM Packages",
			"Container Images",
		]);
		comparisonPage.expectFeaturesInSection("windows", [
			"x86, 32-bit",
			"ARM, 64-bit",
			"Installers",
			"Container Images",
		]);
		comparisonPage.expectFeaturesInSection("customisations", [
			"Customisations",
			"Notable Features",
		]);
		comparisonPage.expectFeaturesInSection("licensing", [
			"License",
			"Free in Production",
		]);
		comparisonPage.expectFeaturesInSection("support", [
			"Patches Until",
			"Release Delay",
		]);
	});

	it("shows single product even if it should only display differences", () => {
		cy.visit("http://localhost:3000/");

		navigationComponent.expectPageTitle("JDK Comparison");
		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		comparisonPage.showFilter("versions");
		comparisonPage.clickFilterOption("versions", "8");
		comparisonPage.expectFilterOption("versions", "8", true);

		comparisonPage.expectProductNames(["Coffeecorp JDK 8"]);
		comparisonPage.expectFeaturesInSection("properties", [
			"Feature Version",
			"Virtual Machine",
			"Class Libraries",
		]);
		comparisonPage.expectFeaturesInSection("technologies", [
			"JavaFX",
			"Flight Recorder",
			"Java Web Start",
		]);
		comparisonPage.expectFeaturesInSection("gcs", [
			"CMS",
			"Epsilon",
			"G1",
			"Parallel",
			"Serial",
			"Shenandoah",
			"Z",
			"Custom GCs",
		]);
		comparisonPage.expectFeaturesInSection("linux", [
			"x86, 64-bit",
			"x86, 64-bit, musl",
			"x86, 32-bit",
			"ARM, 64-bit",
			"ARM, 64-bit, musl",
			"ARM, 32-bit",
			"PPC, 64-bit",
			"RISC-V, 64-bit",
			"S390, 64-bit",
			"APK Packages",
			"Deb Packages",
			"RPM Packages",
			"Container Images",
		]);
		comparisonPage.expectFeaturesInSection("mac", [
			"x86, 64-bit",
			"ARM, 64-bit",
			"Installers",
		]);
		comparisonPage.expectFeaturesInSection("windows", [
			"x86, 64-bit",
			"x86, 32-bit",
			"ARM, 64-bit",
			"Installers",
			"Container Images",
		]);
		comparisonPage.expectFeaturesInSection("certifications", [
			"Eclipse AQAvit",
			"TCK for Java SE",
		]);
		comparisonPage.expectFeaturesInSection("customisations", [
			"Editions",
			"Customisations",
			"Notable Features",
		]);
		comparisonPage.expectFeaturesInSection("licensing", [
			"License",
			"Free in Development",
			"Free in Production",
		]);
		comparisonPage.expectFeaturesInSection("support", [
			"Patches Until",
			"Release Schedule",
			"Release Delay",
			"Paid support",
		]);

		comparisonPage.clickShowDifferencesOnly();

		comparisonPage.expectProductNames(["Coffeecorp JDK 8"]);
		comparisonPage.expectFeaturesInSection("properties", [
			"Feature Version",
			"Virtual Machine",
			"Class Libraries",
		]);
		comparisonPage.expectFeaturesInSection("technologies", [
			"JavaFX",
			"Flight Recorder",
			"Java Web Start",
		]);
		comparisonPage.expectFeaturesInSection("gcs", [
			"CMS",
			"Epsilon",
			"G1",
			"Parallel",
			"Serial",
			"Shenandoah",
			"Z",
			"Custom GCs",
		]);
		comparisonPage.expectFeaturesInSection("linux", [
			"x86, 64-bit",
			"x86, 64-bit, musl",
			"x86, 32-bit",
			"ARM, 64-bit",
			"ARM, 64-bit, musl",
			"ARM, 32-bit",
			"PPC, 64-bit",
			"RISC-V, 64-bit",
			"S390, 64-bit",
			"APK Packages",
			"Deb Packages",
			"RPM Packages",
			"Container Images",
		]);
		comparisonPage.expectFeaturesInSection("mac", [
			"x86, 64-bit",
			"ARM, 64-bit",
			"Installers",
		]);
		comparisonPage.expectFeaturesInSection("windows", [
			"x86, 64-bit",
			"x86, 32-bit",
			"ARM, 64-bit",
			"Installers",
			"Container Images",
		]);
		comparisonPage.expectFeaturesInSection("certifications", [
			"Eclipse AQAvit",
			"TCK for Java SE",
		]);
		comparisonPage.expectFeaturesInSection("customisations", [
			"Editions",
			"Customisations",
			"Notable Features",
		]);
		comparisonPage.expectFeaturesInSection("licensing", [
			"License",
			"Free in Development",
			"Free in Production",
		]);
		comparisonPage.expectFeaturesInSection("support", [
			"Patches Until",
			"Release Schedule",
			"Release Delay",
			"Paid support",
		]);
	});

	it("shows all filters", () => {
		cy.visit("http://localhost:3000/");

		comparisonPage.expectFilter("Versions");
		comparisonPage.expectFilter("Vendors");
		comparisonPage.expectFilter("VMs");
		comparisonPage.expectFilter("Technologies");
		comparisonPage.expectFilter("Licensing");

		comparisonPage.showFilter("versions");
		comparisonPage.expectFilterOption("versions", "8", false);
		comparisonPage.expectFilterOption("versions", "17", false);
		comparisonPage.closeFilter("versions");

		comparisonPage.showFilter("vendors");
		comparisonPage.expectFilterOption("vendors", "Coffeecorp", false);
		comparisonPage.expectFilterOption("vendors", "Dukecorp", false);
		comparisonPage.closeFilter("vendors");

		comparisonPage.showFilter("vms");
		comparisonPage.expectFilterOption("vms", "CoffeeVM", false);
		comparisonPage.expectFilterOption("vms", "DukeVM", false);
		comparisonPage.closeFilter("vms");

		comparisonPage.showFilter("technologies");
		comparisonPage.expectFilterOption(
			"technologies",
			"Flight Recorder",
			false
		);
		comparisonPage.expectFilterOption("technologies", "JavaFX", false);
		comparisonPage.expectFilterOption(
			"technologies",
			"Java Web Start",
			false
		);
		comparisonPage.closeFilter("technologies");

		comparisonPage.showFilter("licensing");
		comparisonPage.expectFilterOption(
			"licensing",
			"Free in Development",
			false
		);
		comparisonPage.expectFilterOption(
			"licensing",
			"Free in Production",
			false
		);
		comparisonPage.closeFilter("licensing");
	});

	it("retains filter state when opening and closing", () => {
		cy.visit("http://localhost:3000/");

		comparisonPage.expectFilter("Versions");

		comparisonPage.showFilter("versions");

		comparisonPage.expectFilterOption("versions", "8", false);
		comparisonPage.expectFilterOption("versions", "17", false);

		comparisonPage.clickFilterOption("versions", "8");

		comparisonPage.closeFilter("versions");
		comparisonPage.showFilter("versions");

		comparisonPage.expectFilterOption("versions", "8", true);
		comparisonPage.expectFilterOption("versions", "17", false);
	});

	it("updates number of active filters", () => {
		cy.visit("http://localhost:3000/");

		comparisonPage.expectFilter("Versions");
		comparisonPage.expectActiveFilterOptions("versions", 0);

		comparisonPage.showFilter("versions");

		comparisonPage.expectFilterOption("versions", "8", false);
		comparisonPage.expectFilterOption("versions", "17", false);

		comparisonPage.clickFilterOption("versions", "17");

		comparisonPage.expectFilterOption("versions", "8", false);
		comparisonPage.expectFilterOption("versions", "17", true);

		comparisonPage.expectActiveFilterOptions("versions", 1);

		comparisonPage.clickFilterOption("versions", "8");

		comparisonPage.expectFilterOption("versions", "8", true);
		comparisonPage.expectFilterOption("versions", "17", true);

		comparisonPage.expectActiveFilterOptions("versions", 2);

		comparisonPage.clickFilterOption("versions", "8");
		comparisonPage.clickFilterOption("versions", "17");

		comparisonPage.expectFilterOption("versions", "8", false);
		comparisonPage.expectFilterOption("versions", "17", false);

		comparisonPage.expectActiveFilterOptions("versions", 0);
	});

	it("shows feature explanation", () => {
		cy.visit("http://localhost:3000/");

		navigationComponent.expectPageTitle("JDK Comparison");
		comparisonPage.showFeatureExplanation("technologies-jfr");
		comparisonPage.expectFeatureExplanation(
			"Flight Recorder (JFR) is a low-overhead data collection framework"
		);
		comparisonPage.closeFeatureExplanation("technologies-jfr");
	});

	it("allows filtering by version", () => {
		cy.visit("http://localhost:3000/");

		navigationComponent.expectPageTitle("JDK Comparison");
		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		comparisonPage.showFilter("versions");
		comparisonPage.clickFilterOption("versions", "8");
		comparisonPage.expectFilterOption("versions", "8", true);
		comparisonPage.expectFilterOption("versions", "17", false);
		comparisonPage.closeFilter("versions");

		comparisonPage.expectProductNames(["Coffeecorp JDK 8"]);

		comparisonPage.showFilter("versions");
		comparisonPage.clickFilterOption("versions", "8");
		comparisonPage.clickFilterOption("versions", "17");
		comparisonPage.expectFilterOption("versions", "8", false);
		comparisonPage.expectFilterOption("versions", "17", true);
		comparisonPage.closeFilter("versions");

		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
		]);

		comparisonPage.showFilter("versions");
		comparisonPage.clickFilterOption("versions", "8");
		comparisonPage.expectFilterOption("versions", "8", true);
		comparisonPage.expectFilterOption("versions", "17", true);
		comparisonPage.closeFilter("versions");

		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);
	});

	it("allows filtering by vendor", () => {
		cy.visit("http://localhost:3000/");

		navigationComponent.expectPageTitle("JDK Comparison");
		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		comparisonPage.showFilter("vendors");
		comparisonPage.clickFilterOption("vendors", "Coffeecorp");
		comparisonPage.expectFilterOption("vendors", "Coffeecorp", true);
		comparisonPage.expectFilterOption("vendors", "Dukecorp", false);
		comparisonPage.closeFilter("vendors");

		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		comparisonPage.showFilter("vendors");
		comparisonPage.clickFilterOption("vendors", "Coffeecorp");
		comparisonPage.clickFilterOption("vendors", "Dukecorp");
		comparisonPage.expectFilterOption("vendors", "Coffeecorp", false);
		comparisonPage.expectFilterOption("vendors", "Dukecorp", true);
		comparisonPage.closeFilter("vendors");

		comparisonPage.expectProductNames(["Dukecorp JDK 17"]);
	});

	it("allows filtering by technology", () => {
		cy.visit("http://localhost:3000/");

		navigationComponent.expectPageTitle("JDK Comparison");
		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		comparisonPage.showFilter("technologies");
		comparisonPage.clickFilterOption("technologies", "JavaFX");
		comparisonPage.expectFilterOption(
			"technologies",
			"Flight Recorder",
			false
		);
		comparisonPage.expectFilterOption("technologies", "JavaFX", true);
		comparisonPage.expectFilterOption(
			"technologies",
			"Java Web Start",
			false
		);
		comparisonPage.closeFilter("technologies");

		comparisonPage.expectProductNames(["Coffeecorp JDK 8"]);

		comparisonPage.showFilter("technologies");
		comparisonPage.clickFilterOption("technologies", "JavaFX");
		comparisonPage.clickFilterOption("technologies", "Flight Recorder");
		comparisonPage.expectFilterOption(
			"technologies",
			"Flight Recorder",
			true
		);
		comparisonPage.expectFilterOption("technologies", "JavaFX", false);
		comparisonPage.expectFilterOption(
			"technologies",
			"Java Web Start",
			false
		);
		comparisonPage.closeFilter("technologies");

		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
		]);

		comparisonPage.showFilter("technologies");
		comparisonPage.clickFilterOption("technologies", "Flight Recorder");
		comparisonPage.clickFilterOption("technologies", "Java Web Start");
		comparisonPage.expectFilterOption(
			"technologies",
			"Flight Recorder",
			false
		);
		comparisonPage.expectFilterOption("technologies", "JavaFX", false);
		comparisonPage.expectFilterOption(
			"technologies",
			"Java Web Start",
			true
		);

		comparisonPage.closeFilter("technologies");

		comparisonPage.expectProductNames([]);
	});

	it("allows filtering by virtual machine", () => {
		cy.visit("http://localhost:3000/");

		navigationComponent.expectPageTitle("JDK Comparison");
		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		comparisonPage.showFilter("vms");
		comparisonPage.clickFilterOption("vms", "CoffeeVM");
		comparisonPage.expectFilterOption("vms", "CoffeeVM", true);
		comparisonPage.expectFilterOption("vms", "DukeVM", false);
		comparisonPage.closeFilter("vms");

		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		comparisonPage.showFilter("vms");
		comparisonPage.clickFilterOption("vms", "CoffeeVM");
		comparisonPage.clickFilterOption("vms", "DukeVM");
		comparisonPage.expectFilterOption("vms", "CoffeeVM", false);
		comparisonPage.expectFilterOption("vms", "DukeVM", true);
		comparisonPage.closeFilter("vms");

		comparisonPage.expectProductNames(["Dukecorp JDK 17"]);

		comparisonPage.showFilter("vms");
		comparisonPage.clickFilterOption("vms", "CoffeeVM");
		comparisonPage.expectFilterOption("vms", "CoffeeVM", true);
		comparisonPage.expectFilterOption("vms", "DukeVM", true);
		comparisonPage.closeFilter("vms");

		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);
	});

	it("allows filtering by licensing option", () => {
		cy.visit("http://localhost:3000/");

		navigationComponent.expectPageTitle("JDK Comparison");
		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		comparisonPage.showFilter("licensing");
		comparisonPage.clickFilterOption("licensing", "Free in Development");
		comparisonPage.expectFilterOption(
			"licensing",
			"Free in Development",
			true
		);
		comparisonPage.expectFilterOption(
			"licensing",
			"Free in Production",
			false
		);
		comparisonPage.closeFilter("licensing");

		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		comparisonPage.showFilter("licensing");
		comparisonPage.clickFilterOption("licensing", "Free in Development");
		comparisonPage.clickFilterOption("licensing", "Free in Production");
		comparisonPage.expectFilterOption(
			"licensing",
			"Free in Development",
			false
		);
		comparisonPage.expectFilterOption(
			"licensing",
			"Free in Production",
			true
		);
		comparisonPage.closeFilter("licensing");

		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		comparisonPage.showFilter("licensing");
		comparisonPage.clickFilterOption("licensing", "Free in Development");
		comparisonPage.expectFilterOption(
			"licensing",
			"Free in Development",
			true
		);
		comparisonPage.expectFilterOption(
			"licensing",
			"Free in Production",
			true
		);
		comparisonPage.closeFilter("licensing");

		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Coffeecorp JDK 8",
		]);
	});

	it("hides and reveals sections", () => {
		cy.visit("http://localhost:3000/");

		navigationComponent.expectPageTitle("JDK Comparison");
		comparisonPage.expectFeaturesInSection("technologies", [
			"JavaFX",
			"Flight Recorder",
			"Java Web Start",
		]);

		comparisonPage.closeSection("technologies");

		comparisonPage.expectFeaturesInSection("technologies", []);

		comparisonPage.showSection("technologies");

		comparisonPage.expectFeaturesInSection("technologies", [
			"JavaFX",
			"Flight Recorder",
			"Java Web Start",
		]);
	});

	it("displays footnotes", () => {
		cy.visit("http://localhost:3000/");

		navigationComponent.expectPageTitle("JDK Comparison");
		comparisonPage.expectFootnote(
			"technologies-jfx",
			0,
			1,
			"Some clarifications regarding JavaFX"
		);
		comparisonPage.expectFootnote(
			"support-paid",
			1,
			2,
			"Some remark regarding paid support"
		);
		comparisonPage.expectFootnote(
			"support-eol-date",
			1,
			3,
			"Some comment about the end of life date"
		);
	});

	it("can deal with unknown filter in search parameters", () => {
		cy.visit("http://localhost:3000/?something=123");
		comparisonPage.expectActiveFilterOptions("versions", 0);
		comparisonPage.expectActiveFilterOptions("vendors", 0);
		comparisonPage.expectActiveFilterOptions("vms", 0);
		comparisonPage.expectActiveFilterOptions("technologies", 0);
		comparisonPage.expectActiveFilterOptions("licensing", 0);
		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);
	});

	it("can deal with unknown option in filter in search parameters", () => {
		cy.visit("http://localhost:3000/?versions=8&versions=-10");
		comparisonPage.expectActiveFilterOptions("versions", 1);
		comparisonPage.expectActiveFilterOptions("vendors", 0);
		comparisonPage.expectActiveFilterOptions("vms", 0);
		comparisonPage.expectActiveFilterOptions("technologies", 0);
		comparisonPage.expectActiveFilterOptions("licensing", 0);
		comparisonPage.expectProductNames(["Coffeecorp JDK 8"]);
	});

	it("preselects Versions filter according to search parameters", () => {
		cy.visit("http://localhost:3000/");
		comparisonPage.showFilter("versions");
		comparisonPage.expectFilterOption("versions", "8", false);
		comparisonPage.expectFilterOption("versions", "17", false);
		comparisonPage.closeFilter("versions");
		comparisonPage.expectActiveFilterOptions("versions", 0);
		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		cy.visit("http://localhost:3000/?versions=8");
		comparisonPage.showFilter("versions");
		comparisonPage.expectFilterOption("versions", "8", true);
		comparisonPage.expectFilterOption("versions", "17", false);
		comparisonPage.closeFilter("versions");
		comparisonPage.expectActiveFilterOptions("versions", 1);
		comparisonPage.expectProductNames(["Coffeecorp JDK 8"]);

		cy.visit("http://localhost:3000/?versions=8&versions=17");
		comparisonPage.showFilter("versions");
		comparisonPage.expectFilterOption("versions", "8", true);
		comparisonPage.expectFilterOption("versions", "17", true);
		comparisonPage.closeFilter("versions");
		comparisonPage.expectActiveFilterOptions("versions", 2);
		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);
	});

	it("preselects Vendors filter according to search parameters", () => {
		cy.visit("http://localhost:3000/");
		comparisonPage.showFilter("vendors");
		comparisonPage.expectFilterOption("vendors", "Coffeecorp", false);
		comparisonPage.expectFilterOption("vendors", "Dukecorp", false);
		comparisonPage.closeFilter("vendors");
		comparisonPage.expectActiveFilterOptions("vendors", 0);
		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		cy.visit("http://localhost:3000/?vendors=Coffeecorp");
		comparisonPage.showFilter("vendors");
		comparisonPage.expectFilterOption("vendors", "Coffeecorp", true);
		comparisonPage.expectFilterOption("vendors", "Dukecorp", false);
		comparisonPage.closeFilter("vendors");
		comparisonPage.expectActiveFilterOptions("vendors", 1);
		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		cy.visit("http://localhost:3000/?vendors=Dukecorp&vendors=Coffeecorp");
		comparisonPage.showFilter("vendors");
		comparisonPage.expectFilterOption("vendors", "Coffeecorp", true);
		comparisonPage.expectFilterOption("vendors", "Dukecorp", true);
		comparisonPage.closeFilter("vendors");
		comparisonPage.expectActiveFilterOptions("vendors", 2);
		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);
	});

	it("preselects VMs filter according to search parameters", () => {
		cy.visit("http://localhost:3000/");
		comparisonPage.showFilter("vms");
		comparisonPage.expectFilterOption("vms", "CoffeeVM", false);
		comparisonPage.expectFilterOption("vms", "DukeVM", false);
		comparisonPage.closeFilter("vms");
		comparisonPage.expectActiveFilterOptions("vms", 0);
		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		cy.visit("http://localhost:3000/?vms=CoffeeVM");
		comparisonPage.showFilter("vms");
		comparisonPage.expectFilterOption("vms", "CoffeeVM", true);
		comparisonPage.expectFilterOption("vms", "DukeVM", false);
		comparisonPage.closeFilter("vms");
		comparisonPage.expectActiveFilterOptions("vms", 1);
		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		cy.visit("http://localhost:3000/?vms=DukeVM&vms=CoffeeVM");
		comparisonPage.showFilter("vms");
		comparisonPage.expectFilterOption("vms", "CoffeeVM", true);
		comparisonPage.expectFilterOption("vms", "DukeVM", true);
		comparisonPage.closeFilter("vms");
		comparisonPage.expectActiveFilterOptions("vms", 2);
		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);
	});

	it("preselects Technologies filter according to search parameters", () => {
		cy.visit("http://localhost:3000/");
		comparisonPage.showFilter("technologies");
		comparisonPage.expectFilterOption(
			"technologies",
			"Flight Recorder",
			false
		);
		comparisonPage.expectFilterOption("technologies", "JavaFX", false);
		comparisonPage.expectFilterOption(
			"technologies",
			"Java Web Start",
			false
		);
		comparisonPage.closeFilter("technologies");
		comparisonPage.expectActiveFilterOptions("technologies", 0);
		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		cy.visit("http://localhost:3000/?technologies=Flight%20Recorder");
		comparisonPage.showFilter("technologies");
		comparisonPage.expectFilterOption(
			"technologies",
			"Flight Recorder",
			true
		);
		comparisonPage.expectFilterOption("technologies", "JavaFX", false);
		comparisonPage.expectFilterOption(
			"technologies",
			"Java Web Start",
			false
		);
		comparisonPage.closeFilter("technologies");
		comparisonPage.expectActiveFilterOptions("technologies", 1);
		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
		]);

		cy.visit(
			"http://localhost:3000/?technologies=JavaFX&technologies=Flight%20Recorder"
		);
		comparisonPage.showFilter("technologies");
		comparisonPage.expectFilterOption(
			"technologies",
			"Flight Recorder",
			true
		);
		comparisonPage.expectFilterOption("technologies", "JavaFX", true);
		comparisonPage.expectFilterOption(
			"technologies",
			"Java Web Start",
			false
		);
		comparisonPage.closeFilter("technologies");
		comparisonPage.expectActiveFilterOptions("technologies", 2);
		comparisonPage.expectProductNames([]);

		cy.visit(
			"http://localhost:3000/?technologies=JavaFX&technologies=Flight%20Recorder&technologies=Java%20Web%20Start"
		);
		comparisonPage.showFilter("technologies");
		comparisonPage.expectFilterOption(
			"technologies",
			"Flight Recorder",
			true
		);
		comparisonPage.expectFilterOption("technologies", "JavaFX", true);
		comparisonPage.expectFilterOption(
			"technologies",
			"Java Web Start",
			true
		);
		comparisonPage.closeFilter("technologies");
		comparisonPage.expectActiveFilterOptions("technologies", 3);
		comparisonPage.expectProductNames([]);
	});

	it("preselects Licensing filter according to search parameters", () => {
		cy.visit("http://localhost:3000/");
		comparisonPage.showFilter("licensing");
		comparisonPage.expectFilterOption(
			"licensing",
			"Free in Development",
			false
		);
		comparisonPage.expectFilterOption(
			"licensing",
			"Free in Production",
			false
		);
		comparisonPage.closeFilter("licensing");
		comparisonPage.expectActiveFilterOptions("licensing", 0);
		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		cy.visit("http://localhost:3000/?licensing=Free%20in%20Development");
		comparisonPage.showFilter("licensing");
		comparisonPage.expectFilterOption(
			"licensing",
			"Free in Development",
			true
		);
		comparisonPage.expectFilterOption(
			"licensing",
			"Free in Production",
			false
		);
		comparisonPage.closeFilter("licensing");
		comparisonPage.expectActiveFilterOptions("licensing", 1);
		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		cy.visit(
			"http://localhost:3000/?licensing=Free%20in%20Development&licensing=Free%20in%20Production"
		);
		comparisonPage.showFilter("licensing");
		comparisonPage.expectFilterOption(
			"licensing",
			"Free in Development",
			true
		);
		comparisonPage.expectFilterOption(
			"licensing",
			"Free in Production",
			true
		);
		comparisonPage.closeFilter("licensing");
		comparisonPage.expectActiveFilterOptions("licensing", 2);
		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Coffeecorp JDK 8",
		]);
	});

	it("displays JDKs sorted by descending versions by default", () => {
		cy.visit("http://localhost:3000/");

		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		comparisonPage.showSortOptions();
		comparisonPage.expectSortOption("Newest", true);
	});

	it("displays JDKs sorted by descending versions", () => {
		cy.visit("http://localhost:3000/");

		comparisonPage.showSortOptions();
		comparisonPage.clickSortOption("Newest");

		comparisonPage.showSortOptions();
		comparisonPage.expectSortOption("Newest", true);
		comparisonPage.closeSortOptions();

		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);
	});

	it("displays JDKs sorted by ascending vendor name", () => {
		cy.visit("http://localhost:3000/");

		comparisonPage.showSortOptions();
		comparisonPage.clickSortOption("Vendor, A-Z");

		comparisonPage.showSortOptions();
		comparisonPage.expectSortOption("Vendor, A-Z", true);
		comparisonPage.closeSortOptions();

		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Coffeecorp JDK 8",
			"Dukecorp JDK 17",
		]);
	});

	it("displays JDKs sorted by descending vendor name", () => {
		cy.visit("http://localhost:3000/");

		comparisonPage.showSortOptions();
		comparisonPage.clickSortOption("Vendor, Z-A");

		comparisonPage.showSortOptions();
		comparisonPage.expectSortOption("Vendor, Z-A", true);
		comparisonPage.closeSortOptions();

		comparisonPage.expectProductNames([
			"Dukecorp JDK 17",
			"Coffeecorp JDK 17",
			"Coffeecorp JDK 8",
		]);
	});

	it("displays JDKs sorted by ascending JDK name", () => {
		cy.visit("http://localhost:3000/");

		comparisonPage.showSortOptions();
		comparisonPage.clickSortOption("JDK Name, A-Z");

		comparisonPage.showSortOptions();
		comparisonPage.expectSortOption("JDK Name, A-Z", true);
		comparisonPage.closeSortOptions();

		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Coffeecorp JDK 8",
			"Dukecorp JDK 17",
		]);
	});

	it("displays JDKs sorted by descending JDK name", () => {
		cy.visit("http://localhost:3000/");

		comparisonPage.showSortOptions();
		comparisonPage.clickSortOption("JDK Name, Z-A");

		comparisonPage.showSortOptions();
		comparisonPage.expectSortOption("JDK Name, Z-A", true);
		comparisonPage.closeSortOptions();

		comparisonPage.expectProductNames([
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
			"Coffeecorp JDK 17",
		]);
	});

	it("retains sort order while filtering", () => {
		cy.visit("http://localhost:3000/");

		comparisonPage.showFilter("vendors");
		comparisonPage.clickFilterOption("vendors", "Dukecorp");
		comparisonPage.closeFilter("vendors");

		comparisonPage.expectProductNames(["Dukecorp JDK 17"]);

		comparisonPage.showSortOptions();
		comparisonPage.clickSortOption("JDK Name, Z-A");

		comparisonPage.showSortOptions();
		comparisonPage.expectSortOption("JDK Name, Z-A", true);
		comparisonPage.closeSortOptions();

		comparisonPage.showFilter("vendors");
		comparisonPage.clickFilterOption("vendors", "Coffeecorp");
		comparisonPage.closeFilter("vendors");

		comparisonPage.showSortOptions();
		comparisonPage.expectSortOption("JDK Name, Z-A", true);
		comparisonPage.closeSortOptions();

		comparisonPage.expectProductNames([
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
			"Coffeecorp JDK 17",
		]);
	});

	it("retains original sort order when changing sort options repeatedly", () => {
		cy.visit("http://localhost:3000/");

		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
		]);

		comparisonPage.showSortOptions();
		comparisonPage.expectSortOption("Newest", true);
		comparisonPage.clickSortOption("JDK Name, Z-A");

		comparisonPage.showSortOptions();
		comparisonPage.expectSortOption("JDK Name, Z-A", true);
		comparisonPage.closeSortOptions();

		comparisonPage.expectProductNames([
			"Dukecorp JDK 17",
			"Coffeecorp JDK 8",
			"Coffeecorp JDK 17",
		]);

		comparisonPage.showSortOptions();
		comparisonPage.clickSortOption("Vendor, A-Z");

		comparisonPage.showSortOptions();
		comparisonPage.expectSortOption("Vendor, A-Z", true);
		comparisonPage.closeSortOptions();

		// Original order is Coffeecorp 17 before 8, so it needs to be the same here.
		comparisonPage.expectProductNames([
			"Coffeecorp JDK 17",
			"Coffeecorp JDK 8",
			"Dukecorp JDK 17",
		]);
	});
});
