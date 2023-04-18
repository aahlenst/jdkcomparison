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
import { LicensingFeaturesSlice, LicensingSection } from "./licensingSection";
import { Model } from "@/src/modelTypes";

describe("<LicensingSection/>", () => {
	let data: LicensingFeaturesSlice[] = [];

	beforeEach(() => {
		data = [1, 2].map((i) => {
			return {
				id: `jdk-${i}`,
				license: { text: "Proprietary" },
				freeInDevelopment: { present: Model.Present.NO },
				freeInProduction: { present: Model.Present.NO },
			};
		});
	});

	it("displays all features", () => {
		cy.mount(<LicensingSection productData={data} showDifferencesOnly={false} />);

		section.expectFeatures(["License", "Free in Development", "Free in Production"]);
		section.expectFeatureDescription("licensing-license", "License", [
			"Proprietary",
			"Proprietary",
		]);
		section.expectFeaturePresence("licensing-free-in-development", "Free in Development", [
			"no",
			"no",
		]);
		section.expectFeaturePresence("licensing-free-in-production", "Free in Production", [
			"no",
			"no",
		]);
	});

	it("displays all features of a single product despite differences only on", () => {
		data = remove(data, (item) => item.id === "jdk-2");

		cy.mount(<LicensingSection productData={data} showDifferencesOnly={false} />);

		section.expectFeatures(["License", "Free in Development", "Free in Production"]);
		section.expectFeatureDescription("licensing-license", "License", ["Proprietary"]);
		section.expectFeaturePresence("licensing-free-in-development", "Free in Development", [
			"no",
		]);
		section.expectFeaturePresence("licensing-free-in-production", "Free in Production", ["no"]);
	});

	it("disappears if all features are identical and differences only is on", () => {
		cy.mount(<LicensingSection productData={data} showDifferencesOnly={true} />);

		section.exists(false);
	});

	it("displays License if features are different and differences only is on", () => {
		data[0].license.text = "GPLv2+CPE";

		cy.mount(<LicensingSection productData={data} showDifferencesOnly={true} />);

		section.expectFeatures(["License"]);
		section.expectFeatureDescription("licensing-license", "License", [
			"GPLv2+CPE",
			"Proprietary",
		]);
	});

	it("displays Free in Development if features are different and differences only is on", () => {
		data[0].freeInDevelopment.present = Model.Present.YES;

		cy.mount(<LicensingSection productData={data} showDifferencesOnly={true} />);

		section.expectFeatures(["Free in Development"]);
		section.expectFeaturePresence("licensing-free-in-development", "Free in Development", [
			"yes",
			"no",
		]);
	});

	it("displays Free in Production if features are different and differences only is on", () => {
		data[0].freeInProduction.present = Model.Present.YES;

		cy.mount(<LicensingSection productData={data} showDifferencesOnly={true} />);

		section.expectFeatures(["Free in Production"]);
		section.expectFeaturePresence("licensing-free-in-production", "Free in Production", [
			"yes",
			"no",
		]);
	});
});

const section = {
	exists: (exists: boolean) => {
		if (exists) {
			cy.get("section[id='licensing']").should("exist");
		} else {
			cy.get("section[id='licensing']").should("not.exist");
		}
	},
	expectFeatures: (featureNames: string[]) => {
		cy.get("section[id='licensing'] .feature .feature-name").should(
			"have.length",
			featureNames.length
		);

		for (let i = 0; i < featureNames.length; i++) {
			const name = featureNames[i];
			cy.get("section[id='licensing'] .feature .feature-name")
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
