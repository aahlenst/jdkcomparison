describe("Home", () => {
	it("should display Technologies", () => {
		cy.visit("http://localhost:3000/");

		cy.title().should("eq", "JDK Comparison");

		cy.get(".featureName").eq(0).should("have.text", "JavaFX");
		cy.get(".featureValue").eq(0).should("have.text", "yes");
		cy.get(".featureValue").eq(1).should("have.text", "no");
		cy.get(".featureValue").eq(2).should("have.text", "no");

		cy.get(".featureName").eq(1).should("have.text", "Flight Recorder (JFR)");
		cy.get(".featureValue").eq(3).should("have.text", "yes");
		cy.get(".featureValue").eq(4).should("have.text", "yes");
		cy.get(".featureValue").eq(5).should("have.text", "yes");
	});

	it("should display only features with different values", () => {
		cy.visit("http://localhost:3000/");

		cy.title().should("eq", "JDK Comparison");

		cy.get("section").find(".featureName").should("have.length", 2);

		cy.get(".featureName").eq(0).should("have.text", "JavaFX");
		cy.get(".featureName").eq(1).should("have.text", "Flight Recorder (JFR)");

		cy.get("#showDifferencesOnly").click();

		cy.get("section").find(".featureName").should("have.length", 1);
		cy.get(".featureName").eq(0).should("have.text", "JavaFX");
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
};

// Prevent TypeScript from reading file as legacy script.
export {};
