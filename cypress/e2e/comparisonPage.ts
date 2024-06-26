/*
 * Copyright 2023 the original author or authors.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */
export const comparisonPage = {
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
					comparisonPage.expectFilterOption(id, option, !oldState);
				});
			}
		});
	},
	clickShowDifferencesOnly: () => {
		cy.get("#show-differences-only").click();
	},
	clickSortOption: (name: string) => {
		cy.get("button.sort-option").each((e, i) => {
			if (e.text() === name) {
				e.trigger("click");

				// TODO: Does not work, may be https://github.com/cypress-io/cypress/issues/25363.
				// Menu closes automatically upon clicking an option. Wait for it to disappear.
				// cy.get("#sort-options-menu").should("not.exist");
			}
		});
	},
	closeFeatureExplanation: (id: string) => {
		cy.get(`#${id} .feature-explanation-toggle`).click();
	},
	closeFilter: (filterId: string) => {
		cy.get(`#desktop-menu-filter-${filterId}`).click();
	},
	closeSection: (sectionId: string) => {
		cy.get(`section[id='${sectionId}'] .toggle-section button`).click();
	},
	closeSortOptions: () => {
		cy.get("#sort-options-button").click();
		// TODO: Does not work, may be https://github.com/cypress-io/cypress/issues/25363.
		// cy.get("#sort-options-menu").should("not.exist");
	},
	expectActiveFilterOptions: (filterId: string, count: number) => {
		if (count === 0) {
			cy.get(`#desktop-menu-filter-${filterId} .active-filter-options`).should("not.exist");
		} else {
			cy.get(`#desktop-menu-filter-${filterId} .active-filter-options`).should(
				"have.text",
				count.toString(),
			);
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
		cy.get(`section[id='${sectionId}'] .feature .feature-name`).should(
			"have.length",
			featureNames.length,
		);

		for (let i = 0; i < featureNames.length; i++) {
			const name = featureNames[i];
			cy.get(`section[id='${sectionId}'] .feature .feature-name`)
				.eq(i)
				.should("have.text", name);
		}
	},
	expectFeaturePresence: (featureId: string, name: string, presenceClassNames: string[]) => {
		cy.get(`#${featureId} .feature-name`).should("have.text", name);
		cy.get(`#${featureId} .feature-value`).should("have.length", presenceClassNames.length);

		for (let i = 0; i < presenceClassNames.length; i++) {
			cy.get(`#${featureId} .feature-value svg`)
				.eq(i)
				.should("have.class", `present-${presenceClassNames[i]}`);
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
	expectFootnote: (featureId: string, column: number, number: number, excerpt: string) => {
		cy.get(`#${featureId} .feature-value`)
			.eq(column)
			.find("sup")
			.should("have.text", `[${number}]`);
		cy.get(`#${featureId} .feature-value`).eq(column).find("sup a").trigger("click");
		cy.get(".desktop-footnote").should("contain.text", excerpt);
		cy.get(`#${featureId} .feature-value`).eq(column).find("sup a").trigger("click");
	},
	expectMessage: (message: string) => {
		cy.get("#comparison-message").should("be.visible");
		cy.get("#comparison-message").should("have.text", message);
	},
	expectProductNames: (names: string[]) => {
		cy.get("#product-header .product-name").should("have.length", names.length);

		for (let i = 0; i < names.length; i++) {
			const name = names[i];
			cy.get("#product-header .product-name").eq(i).should("have.text", name);
		}
	},
	expectProductNamesIncomplete: (names: string[]) => {
		cy.get("#product-header .product-name").should((match) => {
			const foundProducts = match
				.map((i, el) => {
					return el.textContent;
				})
				.get();

			const filteredProducts = foundProducts.filter((p) => names.includes(p));
			expect(filteredProducts).to.deep.eq(names);
		});
	},
	expectProductNamesMissing: (names: string[]) => {
		cy.get("#product-header .product-name").should((match) => {
			const foundProducts = match
				.map((i, el) => {
					return el.textContent;
				})
				.get();

			for (const name of names) {
				expect(foundProducts).not.to.contain(name);
			}
		});
	},
	expectSections: (names: string[]) => {
		cy.get(".section-label").should("have.length", names.length);
		for (let i = 0; i < names.length; i++) {
			const name = names[i];
			cy.get(".section-label").eq(i).should("have.text", name);
		}
	},
	expectSortOption: (name: string, active: boolean) => {
		if (active) {
			cy.get(".sort-option-active").should(($l) => {
				const foundNames = $l.map((i, el) => Cypress.$(el).text()).get();
				expect(foundNames).to.have.length(1);
				expect(foundNames).to.contain(name);
			});
		} else {
			cy.get(".sort-option-inactive").should(($l) => {
				const foundNames = $l.map((i, el) => Cypress.$(el).text()).get();
				expect(foundNames).to.contain(name);
			});
		}
	},
	expectVendor: (name: string) => {
		cy.get(".product-vendor").should((e) => {
			const foundNames = e.map((i, el) => Cypress.$(el).text()).get();
			const uniqueNames = [...new Set<string>(foundNames)];

			expect(uniqueNames).to.contain(name);
		});
	},
	expectVendorCount: (count: number) => {
		cy.get(".product-vendor").should((e) => {
			const foundNames = e.map((i, el) => Cypress.$(el).text()).get();
			const uniqueNames = [...new Set<string>(foundNames)];

			expect(uniqueNames).length(count);
		});
	},
	showFeatureExplanation: (id: string) => {
		cy.get(`#${id} .feature-explanation-toggle`).click();
	},
	showFilter: (filterId: string) => {
		cy.get(`#desktop-menu-filter-${filterId}`).click();
	},
	showSection: (sectionId: string) => {
		cy.get(`section[id='${sectionId}'] .toggle-section button`).click();
	},
	showSortOptions: () => {
		cy.get("#sort-options-button").click();
		cy.get("#sort-options-menu").should("be.visible");
	},
};
