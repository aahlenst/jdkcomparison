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
import { remove } from "../../src/utils";
import { CustomisationsFeaturesSlice, CustomisationsSection } from "./customisationsSection";

describe("<CustomisationsSection/>", () => {
	let data: CustomisationsFeaturesSlice[] = [];

	beforeEach(() => {
		data = [1, 2].map((i) => {
			return {
				id: `jdk-${i}`,
				editions: { text: "JRE" },
				customisations: { text: "few" },
				notableFeatures: { text: "none" },
			};
		});
	});

	it("displays all features", () => {
		cy.mount(<CustomisationsSection productData={data} showDifferencesOnly={false} />);

		section.expectFeatures(["Editions", "Customisations", "Notable Features"]);
		section.expectFeatureDescription("customisations-editions", "Editions", ["JRE", "JRE"]);
		section.expectFeatureDescription("customisations-customisations", "Customisations", [
			"few",
			"few",
		]);
		section.expectFeatureDescription("customisations-notable-features", "Notable Features", [
			"none",
			"none",
		]);
	});

	it("displays all features of a single product despite differences only on", () => {
		data = remove(data, (item) => item.id === "jdk-2");

		cy.mount(<CustomisationsSection productData={data} showDifferencesOnly={false} />);

		section.expectFeatures(["Editions", "Customisations", "Notable Features"]);
		section.expectFeatureDescription("customisations-editions", "Editions", ["JRE"]);
		section.expectFeatureDescription("customisations-customisations", "Customisations", [
			"few",
		]);
		section.expectFeatureDescription("customisations-notable-features", "Notable Features", [
			"none",
		]);
	});

	it("disappears if all features are identical and differences only is on", () => {
		cy.mount(<CustomisationsSection productData={data} showDifferencesOnly={true} />);

		section.exists(false);
	});

	it("displays Editions if features are different and differences only is on", () => {
		data[0].editions.text = "none";

		cy.mount(<CustomisationsSection productData={data} showDifferencesOnly={true} />);

		section.expectFeatures(["Editions"]);
		section.expectFeatureDescription("customisations-editions", "Editions", ["none", "JRE"]);
	});

	it("displays Customisations if features are different and differences only is on", () => {
		data[0].customisations.text = "many";

		cy.mount(<CustomisationsSection productData={data} showDifferencesOnly={true} />);

		section.expectFeatures(["Customisations"]);
		section.expectFeatureDescription("customisations-customisations", "Customisations", [
			"many",
			"few",
		]);
	});

	it("displays Notable Features if features are different and differences only is on", () => {
		data[0].notableFeatures.text = "FairyGC";

		cy.mount(<CustomisationsSection productData={data} showDifferencesOnly={true} />);

		section.expectFeatures(["Notable Features"]);
		section.expectFeatureDescription("customisations-notable-features", "Notable Features", [
			"FairyGC",
			"none",
		]);
	});
});

const section = {
	exists: (exists: boolean) => {
		if (exists) {
			cy.get("section[id='customisations']").should("exist");
		} else {
			cy.get("section[id='customisations']").should("not.exist");
		}
	},
	expectFeatures: (featureNames: string[]) => {
		cy.get("section[id='customisations'] .feature .feature-name").should(
			"have.length",
			featureNames.length
		);

		for (let i = 0; i < featureNames.length; i++) {
			const name = featureNames[i];
			cy.get("section[id='customisations'] .feature .feature-name")
				.eq(i)
				.should("have.text", name);
		}
	},
	expectFeatureDescription: (featureId: string, name: string, values: string[]) => {
		cy.get(`#${featureId} .feature-name`).should("have.text", name);
		cy.get(`#${featureId} .feature-value`).should("have.length", values.length);

		for (let i = 0; i < values.length; i++) {
			cy.get(`#${featureId} .feature-value`).eq(i).should("have.text", values[i]);
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
};
