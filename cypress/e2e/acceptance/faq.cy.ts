import {navigationComponent} from "../navigationComponent";
import {faqPage} from "../faqPage";

describe("FAQ", () => {
	it("should display all navigation options", () => {
		cy.visit("http://localhost:3000/faq");

		navigationComponent.expectPageTitle("Frequently Asked Questions – JDK Comparison");
		navigationComponent.expectNavigationOptions(["JDK Comparison", "FAQ"]);
	});

	it("should navigate to JDK Comparison", () => {
		cy.visit("http://localhost:3000/faq");

		navigationComponent.expectPageTitle("Frequently Asked Questions – JDK Comparison");

		navigationComponent.expectNavigationOptions(["JDK Comparison", "FAQ"]);

		navigationComponent.navigateTo("JDK Comparison");

		navigationComponent.expectPageTitle("JDK Comparison");
	});

	it("should navigate to Homepage when clicking on logo", () => {
		cy.visit("http://localhost:3000/faq");

		navigationComponent.expectPageTitle("Frequently Asked Questions – JDK Comparison");

		navigationComponent.clickOnLogo();

		navigationComponent.expectPageTitle("JDK Comparison");
	});

	it("displays title", () => {
		cy.visit("http://localhost:3000/faq");

		navigationComponent.expectPageTitle("Frequently Asked Questions – JDK Comparison");
		faqPage.expectTitle("Frequently Asked Questions");
	});

	it("displays content as HTML", () => {
		cy.visit("http://localhost:3000/faq");

		navigationComponent.expectPageTitle("Frequently Asked Questions – JDK Comparison");
		faqPage.expectSubtitle("Which JDK Do You Recommend?");
	});
});
