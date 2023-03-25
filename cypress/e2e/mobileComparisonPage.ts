export const mobileComparisonPage = {
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
	expectFilterOption: (id: string, option: { label: string, checked: boolean }) => {
		cy.get(`#filter-${id} > div`).should($opt => {
			const foundOptions = $opt.map((i, el) => {
				return {
					label: Cypress.$(el).find("label").text(),
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