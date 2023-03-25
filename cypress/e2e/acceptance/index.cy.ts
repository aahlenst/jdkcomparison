import {navigationComponent} from "../navigationComponent";
import {comparisonPage} from "../comparisonPage";

describe("Comparison in production", () => {
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
		navigationComponent.expectPageTitle("JDK Comparison - FAQ");
	});

	it("should display all products", () => {
		cy.visit("http://localhost:3000/");

		navigationComponent.expectPageTitle("JDK Comparison");
		comparisonPage.expectProductNames(["Eclipse Temurin 8", "Eclipse Temurin 17", "OpenJDK 20"]);
	});

	it("should display all sections", () => {
		cy.visit("http://localhost:3000/");

		navigationComponent.expectPageTitle("JDK Comparison");
		comparisonPage.expectFeaturesInSection("properties", ["Feature Version", "Virtual Machine", "Class Libraries"]);
		comparisonPage.expectFeaturesInSection("technologies", ["JavaFX", "Flight Recorder", "Java Web Start"]);
		comparisonPage.expectFeaturesInSection("support", ["Patches until", "Paid support"]);
	});

	it("shows all filters", () => {
		cy.visit("http://localhost:3000/");

		comparisonPage.expectFilter("Versions");
		comparisonPage.expectFilter("Vendors");
		comparisonPage.expectFilter("VMs");
		comparisonPage.expectFilter("Technologies");
		comparisonPage.expectFilter("Licensing");

		comparisonPage.showFilter("versions");
		comparisonPage.expectFilterOption("versions", {label: "8", checked: false});
		comparisonPage.expectFilterOption("versions", {label: "17", checked: false});
		comparisonPage.closeFilter("versions");

		comparisonPage.showFilter("vendors");
		comparisonPage.expectFilterOption("vendors", {label: "Eclipse Foundation", checked: false});
		comparisonPage.expectFilterOption("vendors", {label: "Oracle", checked: false});
		comparisonPage.closeFilter("vendors");

		comparisonPage.showFilter("vms");
		comparisonPage.expectFilterOption("vms", {label: "HotSpot", checked: false});
		comparisonPage.closeFilter("vms");

		comparisonPage.showFilter("technologies");
		comparisonPage.expectFilterOption("technologies", {label: "Flight Recorder", checked: false});
		comparisonPage.expectFilterOption("technologies", {label: "JavaFX", checked: false});
		comparisonPage.expectFilterOption("technologies", {label: "Java Web Start", checked: false});
		comparisonPage.closeFilter("technologies");
	});

	it("shows feature explanation", () => {
		cy.visit("http://localhost:3000/");

		navigationComponent.expectPageTitle("JDK Comparison");
		comparisonPage.showFeatureExplanation("technologies-jfr");
		comparisonPage.expectFeatureExplanation("Flight Recorder (JFR) is a low-overhead data collection framework");
		comparisonPage.closeFeatureExplanation("technologies-jfr");
	});

	it("allows filtering by vendor", () => {
		cy.visit("http://localhost:3000/");

		navigationComponent.expectPageTitle("JDK Comparison");
		comparisonPage.expectProductNames(["Eclipse Temurin 8", "Eclipse Temurin 17", "OpenJDK 20"]);

		comparisonPage.showFilter("vendors");
		comparisonPage.clickFilterOption("vendors", "Eclipse Foundation");
		comparisonPage.closeFilter("vendors");

		comparisonPage.expectProductNames(["Eclipse Temurin 8", "Eclipse Temurin 17"]);

		comparisonPage.showFilter("vendors");
		comparisonPage.clickFilterOption("vendors", "Eclipse Foundation");
		comparisonPage.clickFilterOption("vendors", "Oracle");
		comparisonPage.closeFilter("vendors");

		comparisonPage.expectProductNames(["OpenJDK 20"]);
	});

	it("hides and reveals sections", () => {
		cy.visit("http://localhost:3000/");

		navigationComponent.expectPageTitle("JDK Comparison");
		comparisonPage.expectFeaturesInSection("technologies", ["JavaFX", "Flight Recorder", "Java Web Start"]);

		comparisonPage.closeSection("technologies");

		comparisonPage.expectFeaturesInSection("technologies", []);

		comparisonPage.showSection("technologies");

		comparisonPage.expectFeaturesInSection("technologies", ["JavaFX", "Flight Recorder", "Java Web Start"]);
	});
});
