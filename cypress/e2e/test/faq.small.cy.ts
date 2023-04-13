import {mobileNavigationComponent} from "../mobileNavigationComponent";

describe("FAQ on a iPhone 12-sized screen", {viewportWidth: 390, viewportHeight: 844}, () => {
	it("should display all navigation options", () => {
		cy.visit("http://localhost:3000/faq");

		mobileNavigationComponent.expectPageTitle("Frequently Asked Questions – JDK Comparison");

		mobileNavigationComponent.showMobileMenu();

		mobileNavigationComponent.expectNavigationOptions(["JDK Comparison", "FAQ"]);

		mobileNavigationComponent.closeMobileMenu();
	});

	it("should navigate to JDK Comparison", () => {
		cy.visit("http://localhost:3000/faq");

		mobileNavigationComponent.expectPageTitle("Frequently Asked Questions – JDK Comparison");

		mobileNavigationComponent.showMobileMenu();
		mobileNavigationComponent.expectNavigationOptions(["JDK Comparison", "FAQ"]);

		mobileNavigationComponent.navigateTo("JDK Comparison");
		mobileNavigationComponent.expectPageTitle("JDK Comparison");
	});

	it("should navigate to Homepage when clicking on logo", () => {
		cy.visit("http://localhost:3000/faq");

		mobileNavigationComponent.expectPageTitle("Frequently Asked Questions – JDK Comparison");

		mobileNavigationComponent.clickOnLogo();

		mobileNavigationComponent.expectPageTitle("JDK Comparison");
	});
});
