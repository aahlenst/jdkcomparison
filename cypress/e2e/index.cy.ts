describe("Home", () => {
	it("should display Technologies", () => {
		cy.visit("http://localhost:3000/");

		comparisonPage.expectPageTitle("JDK Comparison");
		comparisonPage.expectFeatures(["JavaFX", "Flight Recorder (JFR)"]);
		comparisonPage.expectFeatureText("JavaFX", ["yes", "no", "no"]);
		comparisonPage.expectFeatureText("Flight Recorder (JFR)", ["yes", "yes", "yes"]);
	});

	it("should display only features with different values", () => {
		cy.visit("http://localhost:3000/");

		comparisonPage.expectPageTitle("JDK Comparison");
		comparisonPage.expectFeatures(["JavaFX", "Flight Recorder (JFR)"]);

		comparisonPage.clickShowDifferencesOnly();

		comparisonPage.expectFeatures(["JavaFX"]);
	});

	it("shows all filters", () => {
		cy.visit("http://localhost:3000/");

		comparisonPage.expectFilter("Versions");
		comparisonPage.expectFilter("Vendors");
		comparisonPage.expectFilterOption("versions", {version: "8", checked: false});
		comparisonPage.expectFilterOption("versions", {version: "17", checked: false});
		comparisonPage.clickFilter("versions", "8");
		comparisonPage.expectFilterOption("versions", {version: "8", checked: true});
		comparisonPage.expectFilterOption("versions", {version: "17", checked: false});
	});
});

const comparisonPage = {
	clickFilter: (id: string, option: string) => {
		cy.get(`#filter-${id} > div`).each((e, i) => {
			if (e.find("label").text() === option) {
				e.find("input").trigger("click");
			}
		});
	},
	clickShowDifferencesOnly: () => {
		cy.get("#showDifferencesOnly").click();
	},
	expectFeatures: (names: string[]) => {
		cy.get(".feature .featureName").should("have.length", names.length);

		for (let i = 0; i < names.length; i++) {
			const name = names[i];
			cy.get(".feature .featureName").eq(i).should("have.text", name);
		}
	},
	expectFeatureText: (name: string, values: string[]) => {
		cy.get(`.feature[data-cy="${name}"] .featureName`).should("have.text", name);
		cy.get(`.feature[data-cy="${name}"] .featureValue`).should("have.length", values.length);

		for (let i = 0; i < values.length; i++) {
			cy.get(`.feature[data-cy="${name}"] .featureValue`).eq(i).should("have.text", values[i]);
		}
	},
	expectFilter: (name: string) => {
		cy.get("#filters > fieldset > legend").should($l => {
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
};

// Prevent TypeScript from reading file as legacy script.
export {};
