export const comparisonPage = {
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
