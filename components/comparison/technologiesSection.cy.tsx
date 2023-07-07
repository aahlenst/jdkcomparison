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
import { TechnologiesFeaturesSlice, TechnologiesSection } from "./technologiesSection";
import { Model } from "@/src/modelTypes";

describe("<TechnologiesSection/>", () => {
	let data: TechnologiesFeaturesSlice[] = [];

	beforeEach(() => {
		data = [1, 2].map((i) => {
			return {
				id: `no-jdk-${i}`,
				jfx: { present: Model.Present.NO },
				jfr: { present: Model.Present.NO },
				jaws: { present: Model.Present.NO },
			};
		});
	});

	it("displays all features", () => {
		cy.mount(<TechnologiesSection productData={data} showDifferencesOnly={false} />);

		section.expectFeatures(["JavaFX", "Flight Recorder", "Java Web Start"]);
		section.expectFeaturePresence("technologies-jfx", "JavaFX", ["no", "no"]);
		section.expectFeaturePresence("technologies-jfr", "Flight Recorder", ["no", "no"]);
		section.expectFeaturePresence("technologies-jaws", "Java Web Start", ["no", "no"]);
	});

	it("displays all features of a single product despite differences only on", () => {
		data = remove(data, (item) => item.id === "no-jdk-2");

		cy.mount(<TechnologiesSection productData={data} showDifferencesOnly={false} />);

		section.expectFeatures(["JavaFX", "Flight Recorder", "Java Web Start"]);
		section.expectFeaturePresence("technologies-jfx", "JavaFX", ["no"]);
		section.expectFeaturePresence("technologies-jfr", "Flight Recorder", ["no"]);
		section.expectFeaturePresence("technologies-jaws", "Java Web Start", ["no"]);
	});

	it("disappears if all features are identical and differences only is on", () => {
		cy.mount(<TechnologiesSection productData={data} showDifferencesOnly={true} />);

		section.exists(false);
	});

	it("displays JavaFX if features are different and differences only is on", () => {
		data[0].jfx.present = Model.Present.PARTIALLY;

		cy.mount(<TechnologiesSection productData={data} showDifferencesOnly={true} />);

		section.expectFeatures(["JavaFX"]);
		section.expectFeaturePresence("technologies-jfx", "JavaFX", ["partially", "no"]);
	});

	it("displays Flight Recorder if features are different and differences only is on", () => {
		data[0].jfr.present = Model.Present.YES;

		cy.mount(<TechnologiesSection productData={data} showDifferencesOnly={true} />);

		section.expectFeatures(["Flight Recorder"]);
		section.expectFeaturePresence("technologies-jfr", "Flight Recorder", ["yes", "no"]);
	});

	it("displays Java Web Start if features are different and differences only is on", () => {
		data[0].jaws.present = Model.Present.YES;

		cy.mount(<TechnologiesSection productData={data} showDifferencesOnly={true} />);

		section.expectFeatures(["Java Web Start"]);
		section.expectFeaturePresence("technologies-jaws", "Java Web Start", ["yes", "no"]);
	});
});

const section = {
	exists: (exists: boolean) => {
		if (exists) {
			cy.get("section[id='technologies']").should("exist");
		} else {
			cy.get("section[id='technologies']").should("not.exist");
		}
	},
	expectFeatures: (featureNames: string[]) => {
		cy.get("section[id='technologies'] .feature .feature-name").should(
			"have.length",
			featureNames.length,
		);

		for (let i = 0; i < featureNames.length; i++) {
			const name = featureNames[i];
			cy.get("section[id='technologies'] .feature .feature-name")
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
