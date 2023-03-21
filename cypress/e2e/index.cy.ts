import {navigationComponent} from "./navigationComponent";

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

const comparisonPage = {
	clickFilterOption: (id: string, option: string) => {
		cy.get(`#filter-${id} > div`).each((e, i) => {
			if (e.find("label").text() === option) {
				e.find("input").trigger("click");
			}
		});
	},
	clickShowDifferencesOnly: () => {
		cy.get("#show-differences-only").click();
	},
	closeFeatureExplanation: (id: string) => {
		cy.get(`#${id} .desktop-feature-explanation-toggle`).click();
	},
	closeFilter: (filterId: string) => {
		cy.get(`#desktop-menu-filter-${filterId}`).click();
	},
	closeSection: (sectionId: string) => {
		cy.get(`section[id='${sectionId}'] .toggle-section`).click();
	},
	expectActiveFilterOptions: (filterId: string, count: number) => {
		if (count === 0) {
			cy.get(`#desktop-menu-filter-${filterId} .active-filter-options`).should("not.exist");
		} else {
			cy.get(`#desktop-menu-filter-${filterId} .active-filter-options`).should("have.text", count.toString());
		}
	},
	expectFeatureExplanation: (excerpt: string) => {
		cy.get(".desktop-feature-explanation").should("contain.text", excerpt);
	},
	expectFeatures: (names: string[]) => {
		cy.get(".feature .feature-name").should("have.length", names.length);

		for (let i = 0; i < names.length; i++) {
			const name = names[i];
			cy.get(".feature .feature-name").eq(i).should("have.text", name);
		}
	},
	expectFeaturesInSection: (sectionId: string, featureNames: string[]) => {
		cy.get(`section[id='${sectionId}'] .feature .feature-name`).should("have.length", featureNames.length);

		for (let i = 0; i < featureNames.length; i++) {
			const name = featureNames[i];
			cy.get(`section[id='${sectionId}'] .feature .feature-name`).eq(i).should("have.text", name);
		}
	},
	expectFeaturePresence: (featureId: string, name: string, presenceClassNames: string[]) => {
		cy.get(`#${featureId} .feature-name`).should("have.text", name);
		cy.get(`#${featureId} .feature-value`).should("have.length", presenceClassNames.length);

		for (let i = 0; i < presenceClassNames.length; i++) {
			cy.get(`#${featureId} .feature-value svg`).eq(i).should("have.class", `present-${presenceClassNames[i]}`);
		}
	},
	expectFeatureText: (featureId: string, name: string, values: string[]) => {
		cy.get(`#${featureId} .feature-name`).should("have.text", name);
		cy.get(`#${featureId} .feature-value`).should("have.length", values.length);

		for (let i = 0; i < values.length; i++) {
			cy.get(`#${featureId} .feature-value`).eq(i).should("have.text", values[i]);
		}
	},
	expectFilter: (name: string) => {
		cy.get("#filters .filter-name").should($l => {
			const foundNames = $l.map((i, el) => Cypress.$(el).text()).get();
			expect(foundNames).to.contain(name);
		});
	},
	expectFilterOption: (id: string, option: { version: string, checked: boolean }) => {
		cy.get(`#filter-${id} > div`).should($opt => {
			const foundOptions = $opt.map((i, el) => {
				return {
					version: Cypress.$(el).find("label").text(),
					checked: Cypress.$(el).find("input").prop("checked")
				};
			}).get();

			expect(foundOptions).to.deep.contain(option);
		});
	},
	expectFootnote: (number: number, excerpt: string, backReferences: number = 1) => {
		for (let i = 1; i <= backReferences; i++) {
			cy.get(`sup[id='fnref-${number}:${i}']`).should("have.text", `[${number}]`);
			cy.get(`sup[id='fnref-${number}:${i}'] a`).should("have.attr", "href").and("eq", `#fn-${number}`);
		}
		cy.get(`#footnotes li#fn-${number}`).should("exist");
		cy.get(`#footnotes li#fn-${number}`).should("contain.text", excerpt);
	},
	expectProductNames: (names: string[]) => {
		cy.get("#product-header .product-name").should("have.length", names.length);

		for (let i = 0; i < names.length; i++) {
			const name = names[i];
			cy.get("#product-header .product-name").eq(i).should("have.text", name);
		}
	},
	showFeatureExplanation: (id: string) => {
		cy.get(`#${id} .desktop-feature-explanation-toggle`).click();
	},
	showFilter: (filterId: string) => {
		cy.get(`#desktop-menu-filter-${filterId}`).click();
	},
	showSection: (sectionId: string) => {
		cy.get(`section[id='${sectionId}'] .toggle-section`).click();
	},
};

// Prevent TypeScript from reading file as legacy script.
export {};
