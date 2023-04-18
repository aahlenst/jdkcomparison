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
import { PropertiesFeaturesSlice, PropertiesSection } from "./propertiesSection";
import { Model } from "../../src/modelTypes";

describe("<PropertiesSection/>", () => {
	let data: PropertiesFeaturesSlice[] = [];

	beforeEach(() => {
		data = [1, 2].map((i) => {
			return {
				id: `jdk-${i}`,
				version: 8,
				virtualMachine: { text: "DukeVM" },
				classLibraries: { text: "DukeLibs" },
			};
		});
	});

	it("displays all features", () => {
		cy.mount(<PropertiesSection productData={data} showDifferencesOnly={false} />);

		section.expectFeatures(["Feature Version", "Virtual Machine", "Class Libraries"]);
		section.expectFeatureDescription("properties-feature-version", "Feature Version", [
			"8",
			"8",
		]);
		section.expectFeatureDescription("properties-vm", "Virtual Machine", ["DukeVM", "DukeVM"]);
		section.expectFeatureDescription("properties-class-libraries", "Class Libraries", [
			"DukeLibs",
			"DukeLibs",
		]);
	});

	it("displays all features of a single product despite differences only on", () => {
		data = remove(data, (item) => item.id === "jdk-2");

		cy.mount(<PropertiesSection productData={data} showDifferencesOnly={false} />);

		section.expectFeatures(["Feature Version", "Virtual Machine", "Class Libraries"]);
		section.expectFeatureDescription("properties-feature-version", "Feature Version", ["8"]);
		section.expectFeatureDescription("properties-vm", "Virtual Machine", ["DukeVM"]);
		section.expectFeatureDescription("properties-class-libraries", "Class Libraries", [
			"DukeLibs",
		]);
	});

	it("disappears if all features are identical and differences only is on", () => {
		cy.mount(<PropertiesSection productData={data} showDifferencesOnly={true} />);

		section.exists(false);
	});

	it("displays Feature Version if features are different and differences only is on", () => {
		data[0].version = 17;

		cy.mount(<PropertiesSection productData={data} showDifferencesOnly={true} />);

		section.expectFeatures(["Feature Version"]);
		section.expectFeatureDescription("properties-feature-version", "Feature Version", [
			"17",
			"8",
		]);
	});

	it("displays Virtual Machine if features are different and differences only is on", () => {
		data[0].virtualMachine.text = "CoffeeVM";

		cy.mount(<PropertiesSection productData={data} showDifferencesOnly={true} />);

		section.expectFeatures(["Virtual Machine"]);
		section.expectFeatureDescription("properties-vm", "Virtual Machine", [
			"CoffeeVM",
			"DukeVM",
		]);
	});

	it("displays Class Libraries if features are different and differences only is on", () => {
		data[0].classLibraries.text = "CoffeeLibs";

		cy.mount(<PropertiesSection productData={data} showDifferencesOnly={true} />);

		section.expectFeatures(["Class Libraries"]);
		section.expectFeatureDescription("properties-class-libraries", "Class Libraries", [
			"CoffeeLibs",
			"DukeLibs",
		]);
	});
});

const section = {
	exists: (exists: boolean) => {
		if (exists) {
			cy.get("section[id='properties']").should("exist");
		} else {
			cy.get("section[id='properties']").should("not.exist");
		}
	},
	expectFeatures: (featureNames: string[]) => {
		cy.get("section[id='properties'] .feature .feature-name").should(
			"have.length",
			featureNames.length
		);

		for (let i = 0; i < featureNames.length; i++) {
			const name = featureNames[i];
			cy.get("section[id='properties'] .feature .feature-name")
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
