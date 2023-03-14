describe("Home", () => {
	it("should display all products", () => {
		cy.visit("http://localhost:3000/");

		comparisonPage.expectPageTitle("JDK Comparison");
		comparisonPage.expectProductNames(["Coffeecorp JDK 8", "Coffeecorp JDK 17", "Dukecorp JDK 17"]);
	});

	it("should display Technologies", () => {
		cy.visit("http://localhost:3000/");

		comparisonPage.expectPageTitle("JDK Comparison");
		comparisonPage.expectFeatures(["JavaFX", "Flight Recorder (JFR)", "Java Web Start"]);
		comparisonPage.expectFeatureText("technologies-jfx", "JavaFX", ["yes", "no", "no"]);
		comparisonPage.expectFeatureText("technologies-jfr", "Flight Recorder (JFR)", ["no", "yes", "yes"]);
		comparisonPage.expectFeatureText("technologies-jaws", "Java Web Start", ["no", "no", "no"]);
	});

	it("should display only features with different values", () => {
		cy.visit("http://localhost:3000/");

		comparisonPage.expectPageTitle("JDK Comparison");
		comparisonPage.expectFeatures(["JavaFX", "Flight Recorder (JFR)", "Java Web Start"]);

		comparisonPage.clickShowDifferencesOnly();

		comparisonPage.expectFeatures(["JavaFX", "Flight Recorder (JFR)"]);
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

		comparisonPage.expectPageTitle("JDK Comparison");
		comparisonPage.showFeatureExplanation("technologies-jfr");
		comparisonPage.expectFeatureExplanation("Flight Recorder (JFR) is a low-overhead data collection framework");
		comparisonPage.closeFeatureExplanation("technologies-jfr");
	});

	it("allows filtering by vendor", () => {
		cy.visit("http://localhost:3000/");

		comparisonPage.expectPageTitle("JDK Comparison");
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
	expectFeatureText: (id: string, name: string, values: string[]) => {
		cy.get(`#${id} .feature-name`).should("have.text", name);
		cy.get(`#${id} .feature-value`).should("have.length", values.length);

		for (let i = 0; i < values.length; i++) {
			cy.get(`#${id} .feature-value`).eq(i).should("have.text", values[i]);
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
	expectPageTitle: (title: string) => {
		cy.title().should("eq", title);
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
};

// Prevent TypeScript from reading file as legacy script.
export {};
