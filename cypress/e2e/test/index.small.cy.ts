import { mobileNavigationComponent } from "../mobileNavigationComponent";
import { mobileComparisonPage } from "../mobileComparisonPage";
import { navigationComponent } from "@/cypress/e2e/navigationComponent";

describe(
	"Home on a iPhone 12-sized screen",
	{ viewportWidth: 390, viewportHeight: 844 },
	() => {
		it("should display all navigation options", () => {
			cy.visit("http://localhost:3000/");

			mobileNavigationComponent.expectPageTitle("JDK Comparison");
			mobileNavigationComponent.showMobileMenu();
			mobileNavigationComponent.expectNavigationOptions([
				"JDK Comparison",
				"FAQ",
			]);
			mobileNavigationComponent.closeMobileMenu();
		});

		it("should navigate to FAQ", () => {
			cy.visit("http://localhost:3000/");

			mobileNavigationComponent.expectPageTitle("JDK Comparison");
			mobileNavigationComponent.showMobileMenu();
			mobileNavigationComponent.expectNavigationOptions([
				"JDK Comparison",
				"FAQ",
			]);

			mobileNavigationComponent.navigateTo("FAQ");
			mobileNavigationComponent.expectPageTitle(
				"Frequently Asked Questions – JDK Comparison"
			);
		});

		it("displays GitHub link", () => {
			cy.visit("http://localhost:3000/");

			mobileNavigationComponent.expectPageTitle("JDK Comparison");
			mobileNavigationComponent.expectSecondaryNavigationOption(
				"github-link",
				"Go to GitHub repository",
				"https://github.com/aahlenst/jdkcomparison"
			);
		});

		it("shows all filters", () => {
			cy.visit("http://localhost:3000/");

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
			mobileComparisonPage.expectFilterOption(
				"vendors",
				"Coffeecorp",
				false
			);
			mobileComparisonPage.expectFilterOption(
				"vendors",
				"Dukecorp",
				false
			);
			mobileComparisonPage.closeFilter("vendors");

			mobileComparisonPage.showFilter("vms");
			mobileComparisonPage.expectFilterOption("vms", "CoffeeVM", false);
			mobileComparisonPage.expectFilterOption("vms", "DukeVM", false);
			mobileComparisonPage.closeFilter("vms");

			mobileComparisonPage.showFilter("technologies");
			mobileComparisonPage.expectFilterOption(
				"technologies",
				"Flight Recorder",
				false
			);
			mobileComparisonPage.expectFilterOption(
				"technologies",
				"JavaFX",
				false
			);
			mobileComparisonPage.expectFilterOption(
				"technologies",
				"Java Web Start",
				false
			);
			mobileComparisonPage.closeFilter("technologies");

			mobileComparisonPage.showFilter("licensing");
			mobileComparisonPage.expectFilterOption(
				"licensing",
				"Free in Development",
				false
			);
			mobileComparisonPage.expectFilterOption(
				"licensing",
				"Free in Production",
				false
			);
			mobileComparisonPage.closeFilter("licensing");
		});

		it("retains filter state when opening and closing", () => {
			cy.visit("http://localhost:3000/");

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
			cy.visit("http://localhost:3000/");

			mobileNavigationComponent.expectPageTitle("JDK Comparison");
			mobileComparisonPage.showFeatureExplanation("technologies-jfr");
			mobileComparisonPage.expectFeatureExplanation(
				"Flight Recorder (JFR) is a low-overhead data collection framework"
			);
			mobileComparisonPage.closeFeatureExplanation();
		});

		it("displays footnotes", () => {
			cy.visit("http://localhost:3000/");

			mobileNavigationComponent.expectPageTitle("JDK Comparison");
			mobileComparisonPage.expectFootnote(
				"technologies-jfx",
				0,
				1,
				"Some clarifications regarding JavaFX"
			);
			mobileComparisonPage.expectFootnote(
				"support-paid",
				1,
				2,
				"Some remark regarding paid support"
			);
			mobileComparisonPage.expectFootnote(
				"support-eol-date",
				1,
				3,
				"Some comment about the end of life date"
			);
		});
	}
);
