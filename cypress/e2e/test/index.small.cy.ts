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
import { mobileNavigationComponent } from "../mobileNavigationComponent";
import { mobileComparisonPage } from "../mobileComparisonPage";

describe("Home on a iPhone 12-sized screen", { viewportWidth: 390, viewportHeight: 844 }, () => {
	it("should display all navigation options", () => {
		cy.visit("/");

		mobileNavigationComponent.expectPageTitle("JDK Comparison");
		mobileNavigationComponent.showMobileMenu();
		mobileNavigationComponent.expectNavigationOptions(["JDK Comparison", "FAQ"]);
		mobileNavigationComponent.closeMobileMenu();
	});

	it("should navigate to FAQ", () => {
		cy.visit("/");

		mobileNavigationComponent.expectPageTitle("JDK Comparison");
		mobileNavigationComponent.showMobileMenu();
		mobileNavigationComponent.expectNavigationOptions(["JDK Comparison", "FAQ"]);

		mobileNavigationComponent.navigateTo("FAQ");
		mobileNavigationComponent.expectPageTitle("Frequently Asked Questions – JDK Comparison");
	});

	it("displays GitHub link", () => {
		cy.visit("/");

		mobileNavigationComponent.expectPageTitle("JDK Comparison");
		mobileNavigationComponent.expectSecondaryNavigationOption(
			"github-link",
			"Go to GitHub repository",
			"https://github.com/aahlenst/jdkcomparison",
		);
	});

	it("displays e-mail link", () => {
		cy.visit("/");

		mobileNavigationComponent.expectPageTitle("JDK Comparison");
		mobileNavigationComponent.expectSecondaryNavigationOption(
			"e-mail-link",
			"Send an e-mail",
			"mailto:hello@jdkcomparison.com",
		);
	});

	it("shows all filters", () => {
		cy.visit("/");

		mobileNavigationComponent.expectPageTitle("JDK Comparison");

		mobileComparisonPage.showFilters();

		mobileComparisonPage.expectFilter("Versions");
		mobileComparisonPage.expectFilter("Vendors");
		mobileComparisonPage.expectFilter("VMs");
		mobileComparisonPage.expectFilter("Technologies");
		mobileComparisonPage.expectFilter("Licensing");

		mobileComparisonPage.showFilter("versions");
		mobileComparisonPage.expectFilterOption("versions", "8", false);
		mobileComparisonPage.expectFilterOption("versions", "17", false);
		mobileComparisonPage.closeFilter("versions");

		mobileComparisonPage.showFilter("vendors");
		mobileComparisonPage.expectFilterOption("vendors", "Coffeecorp", false);
		mobileComparisonPage.expectFilterOption("vendors", "Dukecorp", false);
		mobileComparisonPage.closeFilter("vendors");

		mobileComparisonPage.showFilter("vms");
		mobileComparisonPage.expectFilterOption("vms", "CoffeeVM", false);
		mobileComparisonPage.expectFilterOption("vms", "DukeVM", false);
		mobileComparisonPage.closeFilter("vms");

		mobileComparisonPage.showFilter("technologies");
		mobileComparisonPage.expectFilterOption("technologies", "Flight Recorder", false);
		mobileComparisonPage.expectFilterOption("technologies", "JavaFX", false);
		mobileComparisonPage.expectFilterOption("technologies", "Java Web Start", false);
		mobileComparisonPage.closeFilter("technologies");

		mobileComparisonPage.showFilter("gcs");
		mobileComparisonPage.expectFilterOption("gcs", "CMS", false);
		mobileComparisonPage.expectFilterOption("gcs", "Z", false);
		mobileComparisonPage.closeFilter("gcs");

		mobileComparisonPage.showFilter("platforms");
		mobileComparisonPage.expectFilterOption("platforms", "AIX, PPC", false);
		mobileComparisonPage.expectFilterOption("platforms", "Windows, x86, 64-bit", false);
		mobileComparisonPage.closeFilter("platforms");

		mobileComparisonPage.showFilter("licensing");
		mobileComparisonPage.expectFilterOption("licensing", "Free in Development", false);
		mobileComparisonPage.expectFilterOption("licensing", "Free in Production", false);
		mobileComparisonPage.closeFilter("licensing");
	});

	it("retains filter state when opening and closing", () => {
		cy.visit("/");

		mobileNavigationComponent.expectPageTitle("JDK Comparison");

		mobileComparisonPage.showFilters();

		mobileComparisonPage.expectFilter("Versions");

		mobileComparisonPage.showFilter("versions");

		mobileComparisonPage.expectFilterOption("versions", "8", false);
		mobileComparisonPage.expectFilterOption("versions", "17", false);

		mobileComparisonPage.clickFilterOption("versions", "8");

		mobileComparisonPage.closeFilter("versions");

		mobileComparisonPage.closeFilters();

		mobileComparisonPage.showFilters();

		mobileComparisonPage.showFilter("versions");

		mobileComparisonPage.expectFilterOption("versions", "8", true);
		mobileComparisonPage.expectFilterOption("versions", "17", false);
	});

	it("shows feature explanation", () => {
		cy.visit("/");

		mobileNavigationComponent.expectPageTitle("JDK Comparison");
		mobileComparisonPage.showFeatureExplanation("technologies-jfr");
		mobileComparisonPage.expectFeatureExplanation(
			"Flight Recorder (JFR) is a low-overhead data collection framework",
		);
		mobileComparisonPage.closeFeatureExplanation();
	});

	it("displays footnotes", () => {
		cy.visit("/");

		mobileNavigationComponent.expectPageTitle("JDK Comparison");

		mobileComparisonPage.expectFootnote("technologies-jfx", 0, 1);
		mobileComparisonPage.showFootnote("technologies-jfx", 0);
		mobileComparisonPage.expectFootnoteContent("Some clarifications regarding JavaFX");
		mobileComparisonPage.closeFootnote();

		mobileComparisonPage.expectFootnote("support-paid", 1, 2);
		mobileComparisonPage.showFootnote("support-paid", 1);
		mobileComparisonPage.expectFootnoteContent("Some remark regarding paid support");
		mobileComparisonPage.closeFootnote();

		mobileComparisonPage.expectFootnote("support-eol-date", 1, 3);
		mobileComparisonPage.showFootnote("support-eol-date", 1);
		mobileComparisonPage.expectFootnoteContent("Some comment about the end of life date");
		mobileComparisonPage.closeFootnote();
	});
});
