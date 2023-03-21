import {navigationComponent} from "./navigationComponent";

describe("FAQ", () => {
	it("should display all navigation options", () => {
		cy.visit("http://localhost:3000/faq");

		navigationComponent.expectPageTitle("JDK Comparison - FAQ");
		navigationComponent.expectNavigationOptions(["JDK Comparison", "FAQ"]);
	});

	it("should navigate to JDK Comparison", () => {
		cy.visit("http://localhost:3000/faq");

		navigationComponent.expectPageTitle("JDK Comparison - FAQ");

		navigationComponent.expectNavigationOptions(["JDK Comparison", "FAQ"]);

		navigationComponent.navigateTo("JDK Comparison");

		navigationComponent.expectPageTitle("JDK Comparison");
	});
});
