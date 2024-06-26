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

describe("Comparison in production", () => {
	it("should display all navigation options", () => {
		cy.visit("/");

		navigationComponent.expectPageTitle("JDK Comparison");
		navigationComponent.expectNavigationOptions(["JDK Comparison", "FAQ"]);
	});

	it("should navigate to FAQ", () => {
		cy.visit("/");

		navigationComponent.expectPageTitle("JDK Comparison");
		navigationComponent.expectNavigationOptions(["JDK Comparison", "FAQ"]);

		navigationComponent.navigateTo("FAQ");
		navigationComponent.expectPageTitle("Frequently Asked Questions – JDK Comparison");
	});

	it("displays GitHub link", () => {
		cy.visit("/");

		navigationComponent.expectPageTitle("JDK Comparison");
		navigationComponent.expectSecondaryNavigationOption(
			"github-link",
			"Go to GitHub repository",
			"https://github.com/aahlenst/jdkcomparison",
		);
	});

	it("displays e-mail link", () => {
		cy.visit("/");

		navigationComponent.expectPageTitle("JDK Comparison");
		navigationComponent.expectSecondaryNavigationOption(
			"e-mail-link",
			"Send an e-mail",
			"mailto:hello@jdkcomparison.com",
		);
	});

	it("should include all vendors", () => {
		cy.visit("/");

		navigationComponent.expectPageTitle("JDK Comparison");

		comparisonPage.expectVendorCount(10);
		comparisonPage.expectVendor("Alibaba");
		comparisonPage.expectVendor("Amazon");
		comparisonPage.expectVendor("Azul");
		comparisonPage.expectVendor("BellSoft");
		comparisonPage.expectVendor("Eclipse Foundation");
		comparisonPage.expectVendor("IBM");
		comparisonPage.expectVendor("Microsoft");
		comparisonPage.expectVendor("Oracle");
		comparisonPage.expectVendor("Red Hat");
		comparisonPage.expectVendor("SAP");
	});

	it("should display products", () => {
		cy.visit("/");

		navigationComponent.expectPageTitle("JDK Comparison");
		comparisonPage.expectProductNamesIncomplete([
			"OpenJDK 22",
			"Eclipse Temurin 17",
			"Eclipse Temurin 8",
		]);
	});

	it("should display all sections", () => {
		cy.visit("/");

		navigationComponent.expectPageTitle("JDK Comparison");
		comparisonPage.expectSections([
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
		comparisonPage.expectFeaturesInSection("mac", ["x86, 64-bit", "ARM, 64-bit", "Installers"]);
		comparisonPage.expectFeaturesInSection("windows", [
			"x86, 64-bit",
			"x86, 32-bit",
			"ARM, 64-bit",
			"Installers",
			"Container Images",
		]);
		comparisonPage.expectFeaturesInSection("other", [
			"AIX, PPC",
			"Solaris, SPARC",
			"Solaris, x86, 64-bit",
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
		comparisonPage.expectFeaturesInSection("security", ["SBOM"]);
		comparisonPage.expectFeaturesInSection("support", [
			"Patches Until",
			"CPU/PSU",
			"Release Schedule",
			"Release Delay",
			"Paid Support",
		]);
		comparisonPage.expectFeaturesInSection("information", ["Country of Origin", "Remarks"]);
	});

	it("shows all filters", () => {
		cy.visit("/");

		comparisonPage.expectFilter("Versions");
		comparisonPage.expectFilter("Vendors");
		comparisonPage.expectFilter("VMs");
		comparisonPage.expectFilter("Technologies");
		comparisonPage.expectFilter("GCs");
		comparisonPage.expectFilter("Platforms");
		comparisonPage.expectFilter("Licensing");

		comparisonPage.showFilter("versions");
		comparisonPage.expectFilterOption("versions", "8", false);
		comparisonPage.expectFilterOption("versions", "11", false);
		comparisonPage.expectFilterOption("versions", "17", false);
		comparisonPage.expectFilterOption("versions", "21", false);
		comparisonPage.expectFilterOption("versions", "22", false);
		comparisonPage.closeFilter("versions");

		comparisonPage.showFilter("vendors");
		comparisonPage.expectFilterOption("vendors", "Alibaba", false);
		comparisonPage.expectFilterOption("vendors", "Amazon", false);
		comparisonPage.expectFilterOption("vendors", "Azul", false);
		comparisonPage.expectFilterOption("vendors", "BellSoft", false);
		comparisonPage.expectFilterOption("vendors", "Eclipse Foundation", false);
		comparisonPage.expectFilterOption("vendors", "IBM", false);
		comparisonPage.expectFilterOption("vendors", "Microsoft", false);
		comparisonPage.expectFilterOption("vendors", "Oracle", false);
		comparisonPage.expectFilterOption("vendors", "Red Hat", false);
		comparisonPage.expectFilterOption("vendors", "SAP", false);
		comparisonPage.closeFilter("vendors");

		comparisonPage.showFilter("vms");
		comparisonPage.expectFilterOption("vms", "HotSpot", false);
		comparisonPage.expectFilterOption("vms", "OpenJ9", false);
		comparisonPage.expectFilterOption("vms", "Zing", false);
		comparisonPage.closeFilter("vms");

		comparisonPage.showFilter("technologies");
		comparisonPage.expectFilterOption("technologies", "Flight Recorder", false);
		comparisonPage.expectFilterOption("technologies", "JavaFX", false);
		comparisonPage.expectFilterOption("technologies", "Java Web Start", false);
		comparisonPage.closeFilter("technologies");

		comparisonPage.showFilter("gcs");
		comparisonPage.expectFilterOption("gcs", "CMS", false);
		comparisonPage.expectFilterOption("gcs", "Z", false);
		comparisonPage.closeFilter("gcs");

		comparisonPage.showFilter("platforms");
		comparisonPage.expectFilterOption("platforms", "AIX, PPC", false);
		comparisonPage.expectFilterOption("platforms", "macOS, x86, 64-bit", false);
		comparisonPage.closeFilter("platforms");

		comparisonPage.showFilter("licensing");
		comparisonPage.expectFilterOption("licensing", "Free in Development", false);
		comparisonPage.expectFilterOption("licensing", "Free in Production", false);
		comparisonPage.closeFilter("licensing");
	});

	it("shows feature explanation", () => {
		cy.visit("/");

		navigationComponent.expectPageTitle("JDK Comparison");
		comparisonPage.showFeatureExplanation("technologies-jfr");
		comparisonPage.expectFeatureExplanation(
			"Flight Recorder (JFR) is a low-overhead data collection framework",
		);
		comparisonPage.closeFeatureExplanation("technologies-jfr");
	});

	it("allows filtering by vendor", () => {
		cy.visit("/");

		navigationComponent.expectPageTitle("JDK Comparison");
		comparisonPage.expectProductNamesIncomplete([
			"OpenJDK 22",
			"Eclipse Temurin 17",
			"Eclipse Temurin 8",
		]);

		comparisonPage.showFilter("vendors");
		comparisonPage.clickFilterOption("vendors", "Eclipse Foundation");
		comparisonPage.expectFilterOption("vendors", "Eclipse Foundation", true);
		comparisonPage.closeFilter("vendors");

		comparisonPage.expectProductNamesIncomplete(["Eclipse Temurin 17", "Eclipse Temurin 8"]);
		comparisonPage.expectProductNamesMissing(["OpenJDK 22"]);

		comparisonPage.showFilter("vendors");
		comparisonPage.clickFilterOption("vendors", "Eclipse Foundation");
		comparisonPage.clickFilterOption("vendors", "Oracle");
		comparisonPage.expectFilterOption("vendors", "Eclipse Foundation", false);
		comparisonPage.expectFilterOption("vendors", "Oracle", true);
		comparisonPage.closeFilter("vendors");

		comparisonPage.expectProductNamesIncomplete(["OpenJDK 22"]);
		comparisonPage.expectProductNamesMissing(["Eclipse Temurin 8", "Eclipse Temurin 17"]);
	});

	it("hides and reveals sections", () => {
		cy.visit("/");

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

	it("preselects filters according to search parameters", () => {
		cy.visit("/");

		comparisonPage.showFilter("versions");
		comparisonPage.expectFilterOption("versions", "8", false);
		comparisonPage.expectFilterOption("versions", "11", false);
		comparisonPage.closeFilter("versions");
		comparisonPage.expectActiveFilterOptions("versions", 0);

		comparisonPage.showFilter("technologies");
		comparisonPage.expectFilterOption("technologies", "Flight Recorder", false);
		comparisonPage.closeFilter("technologies");
		comparisonPage.expectActiveFilterOptions("technologies", 0);

		comparisonPage.expectProductNamesIncomplete([
			"Eclipse Temurin 17",
			"Corretto 8",
			"Oracle JDK 8",
		]);

		cy.visit("/?versions=8&versions=11&technologies=Flight%20Recorder");

		comparisonPage.showFilter("versions");
		comparisonPage.expectFilterOption("versions", "8", true);
		comparisonPage.expectFilterOption("versions", "11", true);
		comparisonPage.closeFilter("versions");
		comparisonPage.expectActiveFilterOptions("versions", 2);

		comparisonPage.showFilter("technologies");
		comparisonPage.expectFilterOption("technologies", "Flight Recorder", true);
		comparisonPage.closeFilter("technologies");
		comparisonPage.expectActiveFilterOptions("technologies", 1);

		comparisonPage.expectProductNamesIncomplete(["Corretto 8", "Oracle JDK 8"]);
		comparisonPage.expectProductNamesMissing(["Eclipse Temurin 17"]);
	});

	it("retains sort order while filtering", () => {
		cy.visit("/");

		comparisonPage.expectProductNamesIncomplete([
			"Eclipse Temurin 11",
			"Eclipse Temurin 8",
			"Oracle JDK 8",
		]);

		comparisonPage.showSortOptions();
		comparisonPage.expectSortOption("Newest", true);
		comparisonPage.closeSortOptions();

		comparisonPage.showFilter("vendors");
		comparisonPage.clickFilterOption("vendors", "Eclipse Foundation");
		comparisonPage.closeFilter("vendors");

		comparisonPage.expectProductNamesIncomplete(["Eclipse Temurin 11", "Eclipse Temurin 8"]);
		comparisonPage.expectProductNamesMissing(["Oracle JDK 8"]);

		comparisonPage.showSortOptions();
		comparisonPage.clickSortOption("JDK Name, Z-A");

		comparisonPage.showSortOptions();
		comparisonPage.expectSortOption("JDK Name, Z-A", true);
		comparisonPage.closeSortOptions();

		comparisonPage.showFilter("vendors");
		comparisonPage.clickFilterOption("vendors", "Oracle");
		comparisonPage.closeFilter("vendors");

		comparisonPage.showSortOptions();
		comparisonPage.expectSortOption("JDK Name, Z-A", true);
		comparisonPage.closeSortOptions();

		comparisonPage.expectProductNamesIncomplete([
			"Oracle JDK 8",
			"Eclipse Temurin 8",
			"Eclipse Temurin 11",
		]);
	});

	it("displays message if no JDK matches selection", () => {
		cy.visit("/");

		navigationComponent.expectPageTitle("JDK Comparison");

		comparisonPage.showFilter("platforms");
		comparisonPage.clickFilterOption("platforms", "Solaris, SPARC");
		comparisonPage.expectFilterOption("platforms", "Solaris, SPARC", true);
		comparisonPage.closeFilter("platforms");

		comparisonPage.expectProductNamesIncomplete(["Oracle JDK 8"]);

		comparisonPage.showFilter("versions");
		comparisonPage.clickFilterOption("versions", "17");
		comparisonPage.expectFilterOption("versions", "17", true);
		comparisonPage.closeFilter("versions");

		comparisonPage.expectMessage("No JDKs match your selection.");
		comparisonPage.expectProductNames([]);
	});
});
