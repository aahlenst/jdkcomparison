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
import { faqPage } from "../faqPage";

describe("FAQ", () => {
	it("should display all navigation options", () => {
		cy.visit("/faq");

		navigationComponent.expectPageTitle("Frequently Asked Questions – JDK Comparison");
		navigationComponent.expectNavigationOptions(["JDK Comparison", "FAQ"]);
	});

	it("should navigate to JDK Comparison", () => {
		cy.visit("/faq");

		navigationComponent.expectPageTitle("Frequently Asked Questions – JDK Comparison");

		navigationComponent.expectNavigationOptions(["JDK Comparison", "FAQ"]);

		navigationComponent.navigateTo("JDK Comparison");

		navigationComponent.expectPageTitle("JDK Comparison");
	});

	it("should navigate to Homepage when clicking on logo", () => {
		cy.visit("/faq");

		navigationComponent.expectPageTitle("Frequently Asked Questions – JDK Comparison");

		navigationComponent.clickOnLogo();

		navigationComponent.expectPageTitle("JDK Comparison");
	});

	it("displays title", () => {
		cy.visit("/faq");

		navigationComponent.expectPageTitle("Frequently Asked Questions – JDK Comparison");
		faqPage.expectTitle("Frequently Asked Questions");
	});

	it("displays content as HTML", () => {
		cy.visit("/faq");

		navigationComponent.expectPageTitle("Frequently Asked Questions – JDK Comparison");
		faqPage.expectSubtitle("Which JDK Do You Recommend?");
	});

	it("displays overview with valid anchors and matching titles", () => {
		cy.visit("/faq");
		faqPage.expectValidOverview();
	});

	it("displays all FAQ in overview", () => {
		cy.visit("/faq");
		faqPage.expectAllFAQInOverview();
	});
});
