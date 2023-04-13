export const mobileComparisonPage = {
	clickFilterOption: (id: string, option: string) => {
		cy.get(`#filter-${id} > div`).each((e, i) => {
			if (e.find("label").text() === option) {
				cy.url().then((oldURL) => {
					const checkbox = e.find("input");
					const oldState = checkbox.prop("checked");

					checkbox.trigger("click");

					// Wait for routing to have happened.
					cy.url().should("not.eq", oldURL);

					// Ensure that new filter state was applied to state.
					mobileComparisonPage.expectFilterOption(
						id,
						option,
						!oldState
					);
				});
			}
		});
	},
	closeFeatureExplanation: () => {
		cy.get(
			"#comparison-modals .mobile-feature-explanation-overlay"
		).click();
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
		cy.get("#filters .filter-name").should(($l) => {
			const foundNames = $l.map((i, el) => Cypress.$(el).text()).get();
			expect(foundNames).to.contain(name);
		});
	},
	expectFilterOption: (id: string, label: string, active: boolean) => {
		cy.get(`#filter-${id} > div`).should(($opt) => {
			const foundOptions = $opt
				.map((i, el) => {
					return {
						label: Cypress.$(el).find("label").text(),
						checked: Cypress.$(el).find("input").prop("checked"),
					};
				})
				.get();

			expect(foundOptions).to.deep.contain({
				label: label,
				checked: active,
			});
		});
	},
	expectFootnote: (
		featureId: string,
		column: number,
		number: number,
		excerpt: string
	) => {
		cy.get(`#${featureId} .feature-value`)
			.eq(column)
			.find("sup")
			.should("have.text", `[${number}]`);
		cy.get(`#${featureId} .feature-value`)
			.eq(column)
			.find("sup a")
			.trigger("click");
		cy.get(".mobile-footnote").should("contain.text", excerpt);
		cy.get("#comparison-modals .mobile-footnote-overlay").trigger("click");
	},
	showFeatureExplanation: (id: string) => {
		cy.get(`#${id} .feature-explanation-toggle`).click();
	},
	showFilter: (filterId: string) => {
		cy.get(`#mobile-menu-filter-${filterId}`).click();
	},
	showFilters: () => {
		cy.get("#mobile-filters-open").click();
	},
};
