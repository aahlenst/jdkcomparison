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
import { SupportFeaturesSlice, SupportSection } from "./supportSection";
import { Model } from "@/src/modelTypes";

describe("<SupportSection/>", () => {
	let data: SupportFeaturesSlice[] = [];

	beforeEach(() => {
		data = [1, 2].map((i) => {
			return {
				id: `jdk-${i}`,
				eolDate: { text: "2038-01" },
				updateTypes: { text: "no/tiered" },
				releaseSchedule: { text: "Custom" },
				releaseDelay: { text: "1-3 days" },
				paidSupport: { present: Model.Present.PARTIALLY },
			};
		});
	});

	it("displays all features", () => {
		cy.mount(<SupportSection productData={data} showDifferencesOnly={false} />);

		section.expectFeatures([
			"Patches Until",
			"CPU/PSU",
			"Release Schedule",
			"Release Delay",
			"Paid Support",
		]);
		section.expectFeatureDescription("support-eol-date", "Patches Until", [
			"2038-01",
			"2038-01",
		]);
		section.expectFeatureDescription("support-update-types", "CPU/PSU", [
			"no/tiered",
			"no/tiered",
		]);
		section.expectFeatureDescription("support-release-schedule", "Release Schedule", [
			"Custom",
			"Custom",
		]);
		section.expectFeatureDescription("support-release-delay", "Release Delay", [
			"1-3 days",
			"1-3 days",
		]);
		section.expectFeatureDescription("support-paid", "Paid Support", [
			"partially",
			"partially",
		]);
	});

	it("displays all features of a single product despite differences only on", () => {
		data = remove(data, (item) => item.id === "jdk-2");

		cy.mount(<SupportSection productData={data} showDifferencesOnly={false} />);

		section.expectFeatures([
			"Patches Until",
			"CPU/PSU",
			"Release Schedule",
			"Release Delay",
			"Paid Support",
		]);
		section.expectFeatureDescription("support-eol-date", "Patches Until", ["2038-01"]);
		section.expectFeatureDescription("support-update-types", "CPU/PSU", ["no/tiered"]);
		section.expectFeatureDescription("support-release-schedule", "Release Schedule", [
			"Custom",
		]);
		section.expectFeatureDescription("support-release-delay", "Release Delay", ["1-3 days"]);
		section.expectFeatureDescription("support-paid", "Paid Support", ["partially"]);
	});

	it("disappears if all features are identical and differences only is on", () => {
		cy.mount(<SupportSection productData={data} showDifferencesOnly={true} />);

		section.exists(false);
	});

	it("displays Patches Until if features are different and differences only is on", () => {
		data[0].eolDate.text = "2030-12";

		cy.mount(<SupportSection productData={data} showDifferencesOnly={true} />);

		section.expectFeatures(["Patches Until"]);
		section.expectFeatureDescription("support-eol-date", "Patches Until", [
			"2030-12",
			"2038-01",
		]);
	});

	it("displays CPU/PSU if features are different and differences only is on", () => {
		data[0].updateTypes.text = "no/free";

		cy.mount(<SupportSection productData={data} showDifferencesOnly={true} />);

		section.expectFeatures(["CPU/PSU"]);
		section.expectFeatureDescription("support-update-types", "CPU/PSU", [
			"no/free",
			"no/tiered",
		]);
	});

	it("displays Release Schedule if features are different and differences only is on", () => {
		data[0].releaseSchedule.text = "Once in a blue moon";

		cy.mount(<SupportSection productData={data} showDifferencesOnly={true} />);

		section.expectFeatures(["Release Schedule"]);
		section.expectFeatureDescription("support-release-schedule", "Release Schedule", [
			"Once in a blue moon",
			"Custom",
		]);
	});

	it("displays Release Delay if features are different and differences only is on", () => {
		data[0].releaseDelay.text = "n/a";

		cy.mount(<SupportSection productData={data} showDifferencesOnly={true} />);

		section.expectFeatures(["Release Delay"]);
		section.expectFeatureDescription("support-release-delay", "Release Delay", [
			"n/a",
			"1-3 days",
		]);
	});

	it("displays Paid Support if features are different and differences only is on", () => {
		data[0].paidSupport.present = Model.Present.YES;

		cy.mount(<SupportSection productData={data} showDifferencesOnly={true} />);

		section.expectFeatures(["Paid Support"]);
		section.expectFeaturePresence("support-paid", "Paid Support", ["yes", "partially"]);
	});
});

const section = {
	exists: (exists: boolean) => {
		if (exists) {
			cy.get("section[id='support']").should("exist");
		} else {
			cy.get("section[id='support']").should("not.exist");
		}
	},
	expectFeatures: (featureNames: string[]) => {
		cy.get("section[id='support'] .feature .feature-name").should(
			"have.length",
			featureNames.length,
		);

		for (let i = 0; i < featureNames.length; i++) {
			const name = featureNames[i];
			cy.get("section[id='support'] .feature .feature-name").eq(i).should("have.text", name);
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
