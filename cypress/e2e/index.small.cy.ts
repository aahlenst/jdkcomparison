describe("Home on a iPhone 12-sized screen", {viewportWidth: 390, viewportHeight: 844}, () => {
	it("shows all filters", () => {
		cy.visit("http://localhost:3000/");

		comparisonPage.expectPageTitle("JDK Comparison");

		comparisonPage.showFilters();

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

		comparisonPage.expectPageTitle("JDK Comparison");

		comparisonPage.showFilters();

		comparisonPage.expectFilter("Versions");

		comparisonPage.showFilter("versions");

		comparisonPage.expectFilterOption("versions", {version: "8", checked: false});
		comparisonPage.expectFilterOption("versions", {version: "17", checked: false});

		comparisonPage.clickFilterOption("versions", "8");

		comparisonPage.closeFilter("versions");

		comparisonPage.closeFilters();

		comparisonPage.showFilters();

		comparisonPage.showFilter("versions");

		comparisonPage.expectFilterOption("versions", {version: "8", checked: true});
		comparisonPage.expectFilterOption("versions", {version: "17", checked: false});
	});

	it("shows feature explanation", () => {
		cy.visit("http://localhost:3000/");

		comparisonPage.expectPageTitle("JDK Comparison");
		comparisonPage.showFeatureExplanation("technologies-jfr");
		comparisonPage.expectFeatureExplanation("Flight Recorder (JFR) is a low-overhead data collection framework");
		comparisonPage.closeFeatureExplanation("technologies-jfr");
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
	closeFeatureExplanation: (id: string) => {
		cy.get(`#${id} .mobile-feature-explanation-overlay`).click();
	},
	closeFilter: (filterId: string) => {
		cy.get(`#mobile-menu-filter-${filterId}`).click();
	},
	closeFilters: () => {
		cy.get("#mobile-filters-close").click();
	},
	expectFeatureExplanation: (excerpt: string) => {
		cy.get(".mobile-feature-explanation").should("contain.text", excerpt);
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
	showFeatureExplanation: (id: string) => {
		cy.get(`#${id} .mobile-feature-explanation-toggle`).click();
	},
	showFilter: (filterId: string) => {
		cy.get(`#mobile-menu-filter-${filterId}`).click();
	},
	showFilters: () => {
		cy.get("#mobile-filters-open").click();
	}
};

// Prevent TypeScript from reading file as legacy script.
export {};
