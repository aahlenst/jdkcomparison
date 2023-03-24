import {navigationComponent} from "../navigationComponent";
import {comparisonPage} from "../comparisonPage";

describe("Home", () => {
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
		comparisonPage.expectProductNames(["Coffeecorp JDK 8", "Coffeecorp JDK 17", "Dukecorp JDK 17"]);
	});

	it("should display all sections", () => {
		cy.visit("http://localhost:3000/");

		navigationComponent.expectPageTitle("JDK Comparison");
		comparisonPage.expectFeaturesInSection("technologies", ["JavaFX", "Flight Recorder", "Java Web Start"]);
		comparisonPage.expectFeaturePresence("technologies-jfx", "JavaFX", ["yes", "no", "no"]);
		comparisonPage.expectFeaturePresence("technologies-jfr", "Flight Recorder", ["no", "yes", "yes"]);
		comparisonPage.expectFeaturePresence("technologies-jaws", "Java Web Start", ["no", "no", "no"]);
		comparisonPage.expectFeaturesInSection("support", ["Patches until", "Paid support"]);
		comparisonPage.expectFeatureText("support-eol-date", "Patches until", ["2026-10", "2027-10", "2027-10[3]"]);
		comparisonPage.expectFeaturePresence("support-paid", "Paid support", ["no", "no", "no"]);
	});

	it("should display only features with different values", () => {
		cy.visit("http://localhost:3000/");

		navigationComponent.expectPageTitle("JDK Comparison");
		comparisonPage.expectFeaturesInSection("technologies", ["JavaFX", "Flight Recorder", "Java Web Start"]);
		comparisonPage.expectFeaturesInSection("support", ["Patches until", "Paid support"]);

		comparisonPage.clickShowDifferencesOnly();

		comparisonPage.expectFeaturesInSection("technologies", ["JavaFX", "Flight Recorder"]);
		comparisonPage.expectFeaturesInSection("support", ["Patches until"]);
	});

	it("shows single product even if it should only display differences", () => {
		cy.visit("http://localhost:3000/");

		navigationComponent.expectPageTitle("JDK Comparison");
		comparisonPage.expectProductNames(["Coffeecorp JDK 8", "Coffeecorp JDK 17", "Dukecorp JDK 17"]);

		comparisonPage.showFilter("versions");
		comparisonPage.clickFilterOption("versions", "8");

		comparisonPage.expectProductNames(["Coffeecorp JDK 8"]);
		comparisonPage.expectFeaturesInSection("technologies", ["JavaFX", "Flight Recorder", "Java Web Start"]);
		comparisonPage.expectFeaturesInSection("support", ["Patches until", "Paid support"]);

		comparisonPage.clickShowDifferencesOnly();

		comparisonPage.expectProductNames(["Coffeecorp JDK 8"]);
		comparisonPage.expectFeaturesInSection("technologies", ["JavaFX", "Flight Recorder", "Java Web Start"]);
		comparisonPage.expectFeaturesInSection("support", ["Patches until", "Paid support"]);
	});

	it("shows all filters", () => {
		cy.visit("http://localhost:3000/");

		comparisonPage.expectFilter("Versions");
		comparisonPage.expectFilter("Vendors");
		comparisonPage.expectFilter("Technologies");

		comparisonPage.showFilter("versions");
		comparisonPage.expectFilterOption("versions", {version: "8", checked: false});
		comparisonPage.expectFilterOption("versions", {version: "17", checked: false});

		comparisonPage.clickFilterOption("versions", "8");

		comparisonPage.expectFilterOption("versions", {version: "8", checked: true});
		comparisonPage.expectFilterOption("versions", {version: "17", checked: false});
	});

	it("retains filter state when opening and closing", () => {
		cy.visit("http://localhost:3000/");

		comparisonPage.expectFilter("Versions");

		comparisonPage.showFilter("versions");

		comparisonPage.expectFilterOption("versions", {version: "8", checked: false});
		comparisonPage.expectFilterOption("versions", {version: "17", checked: false});

		comparisonPage.clickFilterOption("versions", "8");

		comparisonPage.closeFilter("versions");
		comparisonPage.showFilter("versions");

		comparisonPage.expectFilterOption("versions", {version: "8", checked: true});
		comparisonPage.expectFilterOption("versions", {version: "17", checked: false});
	});

	it("updates number of active filters", () => {
		cy.visit("http://localhost:3000/");

		comparisonPage.expectFilter("Versions");
		comparisonPage.expectActiveFilterOptions("versions", 0);

		comparisonPage.showFilter("versions");

		comparisonPage.expectFilterOption("versions", {version: "8", checked: false});
		comparisonPage.expectFilterOption("versions", {version: "17", checked: false});

		comparisonPage.clickFilterOption("versions", "17");

		comparisonPage.expectFilterOption("versions", {version: "8", checked: false});
		comparisonPage.expectFilterOption("versions", {version: "17", checked: true});

		comparisonPage.expectActiveFilterOptions("versions", 1);

		comparisonPage.clickFilterOption("versions", "8");

		comparisonPage.expectFilterOption("versions", {version: "8", checked: true});
		comparisonPage.expectFilterOption("versions", {version: "17", checked: true});

		comparisonPage.expectActiveFilterOptions("versions", 2);

		comparisonPage.clickFilterOption("versions", "8");
		comparisonPage.clickFilterOption("versions", "17");

		comparisonPage.expectFilterOption("versions", {version: "8", checked: false});
		comparisonPage.expectFilterOption("versions", {version: "17", checked: false});

		comparisonPage.expectActiveFilterOptions("versions", 0);
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
		comparisonPage.expectProductNames(["Coffeecorp JDK 8", "Coffeecorp JDK 17", "Dukecorp JDK 17"]);

		comparisonPage.showFilter("vendors");
		comparisonPage.clickFilterOption("vendors", "Coffeecorp");
		comparisonPage.closeFilter("vendors");

		comparisonPage.expectProductNames(["Coffeecorp JDK 8", "Coffeecorp JDK 17"]);

		comparisonPage.showFilter("vendors");
		comparisonPage.clickFilterOption("vendors", "Coffeecorp");
		comparisonPage.clickFilterOption("vendors", "Dukecorp");
		comparisonPage.closeFilter("vendors");

		comparisonPage.expectProductNames(["Dukecorp JDK 17"]);
	});

	it("allows filtering by technology", () => {
		cy.visit("http://localhost:3000/");

		navigationComponent.expectPageTitle("JDK Comparison");
		comparisonPage.expectProductNames(["Coffeecorp JDK 8", "Coffeecorp JDK 17", "Dukecorp JDK 17"]);

		comparisonPage.showFilter("technologies");
		comparisonPage.clickFilterOption("technologies", "JavaFX");
		comparisonPage.closeFilter("technologies");

		comparisonPage.expectProductNames(["Coffeecorp JDK 8"]);

		comparisonPage.showFilter("technologies");
		comparisonPage.clickFilterOption("technologies", "JavaFX");
		comparisonPage.clickFilterOption("technologies", "Flight Recorder");
		comparisonPage.closeFilter("technologies");

		comparisonPage.expectProductNames(["Coffeecorp JDK 17", "Dukecorp JDK 17"]);

		comparisonPage.showFilter("technologies");
		comparisonPage.clickFilterOption("technologies", "Flight Recorder");
		comparisonPage.clickFilterOption("technologies", "Java Web Start");
		comparisonPage.closeFilter("technologies");

		comparisonPage.expectProductNames([]);
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

	it("displays footnotes", () => {
		cy.visit("http://localhost:3000/");

		navigationComponent.expectPageTitle("JDK Comparison");
		comparisonPage.expectFootnote(1, "Some clarifications regarding JavaFX", 2);
		comparisonPage.expectFootnote(2, "Some remark regarding paid support");
		comparisonPage.expectFootnote(3, "Some comment about the end of life date");
	});
});
