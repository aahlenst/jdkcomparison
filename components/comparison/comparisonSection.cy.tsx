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
import { ComparisonSection } from "./comparisonSection";
import { Feature } from "./feature";
import { Model } from "../../src/modelTypes";
import Present = Model.Present;

describe("<ComparisonSection/>", () => {
	const children = (
		<>
			<Feature
				id="feature-a"
				name="Feature A"
				values={[{ id: "product-1", present: Present.YES }]}
			/>
			<Feature
				id="feature-b"
				name="Feature B"
				values={[{ id: "product-1", present: Present.NO }]}
			/>
		</>
	);

	it("displays section with all features", () => {
		cy.mount(
			<ComparisonSection id="a-section" label="A section">
				{children}
			</ComparisonSection>,
		);

		comparisonSectionComponent.expectSectionLabel("a-section", "A section");
		comparisonSectionComponent.expectFeaturesInSection("a-section", ["Feature A", "Feature B"]);
	});

	it("hides and reveals section with all features", () => {
		cy.mount(
			<ComparisonSection id="a-section" label="A section">
				{children}
			</ComparisonSection>,
		);

		comparisonSectionComponent.expectFeaturesInSection("a-section", ["Feature A", "Feature B"]);

		comparisonSectionComponent.closeSection("a-section");

		comparisonSectionComponent.expectFeaturesInSection("a-section", []);

		comparisonSectionComponent.showSection("a-section");

		comparisonSectionComponent.expectFeaturesInSection("a-section", ["Feature A", "Feature B"]);
	});
});

const comparisonSectionComponent = {
	closeSection: (sectionId: string) => {
		cy.get(`section[id='${sectionId}'] .toggle-section`).click();
	},
	expectSectionLabel: (sectionId: string, label: string) => {
		cy.get(`section[id='${sectionId}'] .section-label`).should("have.text", label);
	},
	expectFeaturesInSection: (sectionId: string, names: string[]) => {
		cy.get(`section[id='${sectionId}'] .feature .feature-name`).should(
			"have.length",
			names.length,
		);

		for (let i = 0; i < names.length; i++) {
			const name = names[i];
			cy.get(`section[id='${sectionId}'] .feature .feature-name`)
				.eq(i)
				.should("have.text", name);
		}
	},
	showSection: (sectionId: string) => {
		cy.get(`section[id='${sectionId}'] .toggle-section`).click();
	},
};
