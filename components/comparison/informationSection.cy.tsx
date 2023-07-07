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
import {
	InformationFeaturesSlice,
	InformationSection,
} from "@/components/comparison/informationSection";
import { Model } from "@/src/modelTypes";
import Present = Model.Present;
import { remove } from "../../src/utils";

describe("<InformationSection/>", () => {
	let data: InformationFeaturesSlice[] = [];

	beforeEach(() => {
		data = [1, 2].map((i) => {
			return {
				id: `jdk-${i}`,
				countryOfOrigin: "Dukeland",
				remarks: { text: "Lorem ipsum" },
			};
		});
	});

	it("displays all features", () => {
		cy.mount(<InformationSection productData={data} showDifferencesOnly={false} />);

		informationSection.expectFeatures(["Country of Origin", "Remarks"]);
		informationSection.expectFeatureDescription(
			"information-country-of-origin",
			"Country of Origin",
			["Dukeland", "Dukeland"],
		);
		informationSection.expectFeatureDescription("information-remarks", "Remarks", [
			"Lorem ipsum",
			"Lorem ipsum",
		]);
	});

	it("displays all features of a single product despite differences only on", () => {
		data = remove(data, (item) => item.id === "jdk-2");

		cy.mount(<InformationSection productData={data} showDifferencesOnly={false} />);

		informationSection.expectFeatures(["Country of Origin", "Remarks"]);
		informationSection.expectFeatureDescription(
			"information-country-of-origin",
			"Country of Origin",
			["Dukeland"],
		);
		informationSection.expectFeatureDescription("information-remarks", "Remarks", [
			"Lorem ipsum",
		]);
	});

	it("disappears if all features are identical and differences only is on", () => {
		cy.mount(<InformationSection productData={data} showDifferencesOnly={true} />);

		informationSection.exists(false);
	});

	it("displays Country of Origin if features are different and differences only is on", () => {
		data[0].countryOfOrigin = "United States of Duke";

		cy.mount(<InformationSection productData={data} showDifferencesOnly={true} />);

		informationSection.expectFeatures(["Country of Origin"]);
		informationSection.expectFeatureDescription(
			"information-country-of-origin",
			"Country of Origin",
			["United States of Duke", "Dukeland"],
		);
	});

	it("displays Remarks if features are different and differences only is on", () => {
		data[0].remarks.text = "Mug included";

		cy.mount(<InformationSection productData={data} showDifferencesOnly={true} />);

		informationSection.expectFeatures(["Remarks"]);
		informationSection.expectFeatureDescription("information-remarks", "Remarks", [
			"Mug included",
			"Lorem ipsum",
		]);
	});
});

const informationSection = {
	exists: (exists: boolean) => {
		if (exists) {
			cy.get("section[id='information']").should("exist");
		} else {
			cy.get("section[id='information']").should("not.exist");
		}
	},
	expectFeatures: (featureNames: string[]) => {
		cy.get("section[id='information'] .feature .feature-name").should(
			"have.length",
			featureNames.length,
		);

		for (let i = 0; i < featureNames.length; i++) {
			const name = featureNames[i];
			cy.get("section[id='information'] .feature .feature-name")
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
};
