import {mobileNavigationComponent} from "../mobileNavigationComponent";
import {mobileComparisonPage} from "../mobileComparisonPage";

describe("Home on a iPhone 12-sized screen", {viewportWidth: 390, viewportHeight: 844}, () => {
	it("should display all navigation options", () => {
		cy.visit("http://localhost:3000/");

		mobileNavigationComponent.expectPageTitle("JDK Comparison");
		mobileNavigationComponent.showMobileMenu();
		mobileNavigationComponent.expectNavigationOptions(["JDK Comparison", "FAQ"]);
		mobileNavigationComponent.closeMobileMenu();
	});

	it("should navigate to FAQ", () => {
		cy.visit("http://localhost:3000/");

		mobileNavigationComponent.expectPageTitle("JDK Comparison");
		mobileNavigationComponent.showMobileMenu();
		mobileNavigationComponent.expectNavigationOptions(["JDK Comparison", "FAQ"]);

		mobileNavigationComponent.navigateTo("FAQ");
		mobileNavigationComponent.expectPageTitle("JDK Comparison - FAQ");
	});

	it("shows all filters", () => {
		cy.visit("http://localhost:3000/");

		mobileComparisonPage.expectPageTitle("JDK Comparison");

		mobileComparisonPage.showFilters();

		mobileComparisonPage.expectFilter("Versions");
		mobileComparisonPage.expectFilter("Vendors");
		mobileComparisonPage.expectFilter("VMs");
		mobileComparisonPage.expectFilter("Technologies");
		mobileComparisonPage.expectFilter("Licensing");

		mobileComparisonPage.showFilter("versions");
		mobileComparisonPage.expectFilterOption("versions", {label: "8", checked: false});
		mobileComparisonPage.expectFilterOption("versions", {label: "17", checked: false});
		mobileComparisonPage.closeFilter("versions");

		mobileComparisonPage.showFilter("vendors");
		mobileComparisonPage.expectFilterOption("vendors", {label: "Coffeecorp", checked: false});
		mobileComparisonPage.expectFilterOption("vendors", {label: "Dukecorp", checked: false});
		mobileComparisonPage.closeFilter("vendors");

		mobileComparisonPage.showFilter("vms");
		mobileComparisonPage.expectFilterOption("vms", {label: "CoffeeVM", checked: false});
		mobileComparisonPage.expectFilterOption("vms", {label: "DukeVM", checked: false});
		mobileComparisonPage.closeFilter("vms");

		mobileComparisonPage.showFilter("technologies");
		mobileComparisonPage.expectFilterOption("technologies", {label: "Flight Recorder", checked: false});
		mobileComparisonPage.expectFilterOption("technologies", {label: "JavaFX", checked: false});
		mobileComparisonPage.expectFilterOption("technologies", {label: "Java Web Start", checked: false});
		mobileComparisonPage.closeFilter("technologies");

		mobileComparisonPage.showFilter("licensing");
		mobileComparisonPage.expectFilterOption("licensing", {label: "Free in Development", checked: false});
		mobileComparisonPage.expectFilterOption("licensing", {label: "Free in Production", checked: false});
		mobileComparisonPage.closeFilter("licensing");
	});

	it("retains filter state when opening and closing", () => {
		cy.visit("http://localhost:3000/");

		mobileComparisonPage.expectPageTitle("JDK Comparison");

		mobileComparisonPage.showFilters();

		mobileComparisonPage.expectFilter("Versions");

		mobileComparisonPage.showFilter("versions");

		mobileComparisonPage.expectFilterOption("versions", {label: "8", checked: false});
		mobileComparisonPage.expectFilterOption("versions", {label: "17", checked: false});

		mobileComparisonPage.clickFilterOption("versions", "8");

		mobileComparisonPage.closeFilter("versions");

		mobileComparisonPage.closeFilters();

		mobileComparisonPage.showFilters();

		mobileComparisonPage.showFilter("versions");

		mobileComparisonPage.expectFilterOption("versions", {label: "8", checked: true});
		mobileComparisonPage.expectFilterOption("versions", {label: "17", checked: false});
	});

	it("shows feature explanation", () => {
		cy.visit("http://localhost:3000/");

		mobileComparisonPage.expectPageTitle("JDK Comparison");
		mobileComparisonPage.showFeatureExplanation("technologies-jfr");
		mobileComparisonPage.expectFeatureExplanation("Flight Recorder (JFR) is a low-overhead data collection framework");
		mobileComparisonPage.closeFeatureExplanation("technologies-jfr");
	});
});
