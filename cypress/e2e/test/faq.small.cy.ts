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

describe("FAQ on a iPhone 12-sized screen", { viewportWidth: 390, viewportHeight: 844 }, () => {
	it("should display all navigation options", () => {
		cy.visit("/faq");

		mobileNavigationComponent.expectPageTitle("Frequently Asked Questions – JDK Comparison");

		mobileNavigationComponent.showMobileMenu();

		mobileNavigationComponent.expectNavigationOptions(["JDK Comparison", "FAQ"]);

		mobileNavigationComponent.closeMobileMenu();
	});

	it("should navigate to JDK Comparison", () => {
		cy.visit("/faq");

		mobileNavigationComponent.expectPageTitle("Frequently Asked Questions – JDK Comparison");

		mobileNavigationComponent.showMobileMenu();
		mobileNavigationComponent.expectNavigationOptions(["JDK Comparison", "FAQ"]);

		mobileNavigationComponent.navigateTo("JDK Comparison");
		mobileNavigationComponent.expectPageTitle("JDK Comparison");
	});

	it("should navigate to Homepage when clicking on logo", () => {
		cy.visit("/faq");

		mobileNavigationComponent.expectPageTitle("Frequently Asked Questions – JDK Comparison");

		mobileNavigationComponent.clickOnLogo();

		mobileNavigationComponent.expectPageTitle("JDK Comparison");
	});
});
