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
		comparisonPage.expectProductNamesIncomplete(["OpenJDK 20", "Eclipse Temurin 17", "Eclipse Temurin 8"]);
	});

	it("should display all sections", () => {
		cy.visit("http://localhost:3000/");

		navigationComponent.expectPageTitle("JDK Comparison");
		comparisonPage.expectSections(["Properties", "Technologies", "Garbage Collectors", "Certifications", "Customisations", "Licensing", "Support"]);
		comparisonPage.expectFeaturesInSection("properties", ["Feature Version", "Virtual Machine", "Class Libraries"]);
		comparisonPage.expectFeaturesInSection("gcs", ["CMS", "Epsilon", "G1", "Parallel", "Serial", "Shenandoah", "Z", "Custom GCs"]);
		comparisonPage.expectFeaturesInSection("technologies", ["JavaFX", "Flight Recorder", "Java Web Start"]);
		comparisonPage.expectFeaturesInSection("certifications", ["Eclipse AQAvit", "TCK for Java SE"]);
		comparisonPage.expectFeaturesInSection("customisations", ["Editions", "Customisations", "Notable Features"]);
		comparisonPage.expectFeaturesInSection("licensing", ["License", "Free in Development", "Free in Production"]);
		comparisonPage.expectFeaturesInSection("support", ["Patches Until", "Release Schedule", "Release Delay", "Paid support"]);
	});

	it("shows all filters", () => {
		cy.visit("http://localhost:3000/");

		comparisonPage.expectFilter("Versions");
		comparisonPage.expectFilter("Vendors");
		comparisonPage.expectFilter("VMs");
		comparisonPage.expectFilter("Technologies");
		comparisonPage.expectFilter("Licensing");

		comparisonPage.showFilter("versions");
		comparisonPage.expectFilterOption("versions", "8", false);
		comparisonPage.expectFilterOption("versions", "11", false);
		comparisonPage.expectFilterOption("versions", "17", false);
		comparisonPage.expectFilterOption("versions", "20", false);
		comparisonPage.closeFilter("versions");

		comparisonPage.showFilter("vendors");
		comparisonPage.expectFilterOption("vendors", "Amazon", false);
		comparisonPage.expectFilterOption("vendors", "Eclipse Foundation", false);
		comparisonPage.expectFilterOption("vendors", "Oracle", false);
		comparisonPage.closeFilter("vendors");

		comparisonPage.showFilter("vms");
		comparisonPage.expectFilterOption("vms", "HotSpot", false);
		comparisonPage.closeFilter("vms");

		comparisonPage.showFilter("technologies");
		comparisonPage.expectFilterOption("technologies", "Flight Recorder", false);
		comparisonPage.expectFilterOption("technologies", "JavaFX", false);
		comparisonPage.expectFilterOption("technologies", "Java Web Start", false);
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
		comparisonPage.expectProductNamesIncomplete(["OpenJDK 20", "Eclipse Temurin 17", "Eclipse Temurin 8"]);

		comparisonPage.showFilter("vendors");
		comparisonPage.clickFilterOption("vendors", "Eclipse Foundation");
		comparisonPage.expectFilterOption("vendors", "Eclipse Foundation", true);
		comparisonPage.closeFilter("vendors");

		comparisonPage.expectProductNamesIncomplete(["Eclipse Temurin 17", "Eclipse Temurin 8"]);
		comparisonPage.expectProductNamesMissing(["OpenJDK 20"]);

		comparisonPage.showFilter("vendors");
		comparisonPage.clickFilterOption("vendors", "Eclipse Foundation");
		comparisonPage.clickFilterOption("vendors", "Oracle");
		comparisonPage.expectFilterOption("vendors", "Eclipse Foundation", false);
		comparisonPage.expectFilterOption("vendors", "Oracle", true);
		comparisonPage.closeFilter("vendors");

		comparisonPage.expectProductNamesIncomplete(["OpenJDK 20"]);
		comparisonPage.expectProductNamesMissing(["Eclipse Temurin 8", "Eclipse Temurin 17"]);
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

	it("preselects filters according to search parameters", () => {
		cy.visit("http://localhost:3000/");

		comparisonPage.showFilter("versions");
		comparisonPage.expectFilterOption("versions", "8", false);
		comparisonPage.expectFilterOption("versions", "11", false);
		comparisonPage.closeFilter("versions");
		comparisonPage.expectActiveFilterOptions("versions", 0);

		comparisonPage.showFilter("technologies");
		comparisonPage.expectFilterOption("technologies", "Flight Recorder", false);
		comparisonPage.closeFilter("technologies");
		comparisonPage.expectActiveFilterOptions("technologies", 0);

		comparisonPage.expectProductNamesIncomplete(["Eclipse Temurin 17", "Corretto 8", "Oracle JDK 8"]);

		cy.visit("http://localhost:3000/?versions=8&versions=11&technologies=Flight%20Recorder");

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
		cy.visit("http://localhost:3000/");

		comparisonPage.expectProductNamesIncomplete(["Eclipse Temurin 11", "Eclipse Temurin 8", "Oracle JDK 8"]);

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

		comparisonPage.expectProductNamesIncomplete(["Oracle JDK 8", "Eclipse Temurin 8", "Eclipse Temurin 11"]);
	});
});
