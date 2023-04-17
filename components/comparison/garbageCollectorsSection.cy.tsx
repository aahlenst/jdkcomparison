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
import {
	GarbageCollectorsFeaturesSlice,
	GarbageCollectorsSection,
} from "./garbageCollectorsSection";
import { Model } from "@/src/modelTypes";

describe("<GarbageCollectorsSection/>", () => {
	let data: GarbageCollectorsFeaturesSlice[] = [];

	beforeEach(() => {
		data = [1, 2].map((i) => {
			return {
				id: `no-jdk-${i}`,
				cms: { present: Model.Present.NO },
				epsilon: { present: Model.Present.NO },
				g1: { present: Model.Present.NO },
				parallel: { present: Model.Present.NO },
				serial: { present: Model.Present.NO },
				shenandoah: { present: Model.Present.NO },
				z: { present: Model.Present.NO },
				customGCs: { text: "none" },
			};
		});
	});

	it("displays all features", () => {
		cy.mount(<GarbageCollectorsSection productData={data} showDifferencesOnly={false} />);

		section.expectFeatures([
			"CMS",
			"Epsilon",
			"G1",
			"Parallel",
			"Serial",
			"Shenandoah",
			"Z",
			"Custom GCs",
		]);
		section.expectFeaturePresence("gcs-cms", "CMS", ["no", "no"]);
		section.expectFeaturePresence("gcs-epsilon", "Epsilon", ["no", "no"]);
		section.expectFeaturePresence("gcs-g1", "G1", ["no", "no"]);
		section.expectFeaturePresence("gcs-parallel", "Parallel", ["no", "no"]);
		section.expectFeaturePresence("gcs-serial", "Serial", ["no", "no"]);
		section.expectFeaturePresence("gcs-shenandoah", "Shenandoah", ["no", "no"]);
		section.expectFeaturePresence("gcs-z", "Z", ["no", "no"]);
		section.expectFeatureDescription("gcs-custom", "Custom GCs", ["none", "none"]);
	});

	it("displays all features of a single product despite differences only on", () => {
		data = remove(data, (item) => item.id === "no-jdk-2");

		cy.mount(<GarbageCollectorsSection productData={data} showDifferencesOnly={false} />);

		section.expectFeaturePresence("gcs-cms", "CMS", ["no"]);
		section.expectFeaturePresence("gcs-epsilon", "Epsilon", ["no"]);
		section.expectFeaturePresence("gcs-g1", "G1", ["no"]);
		section.expectFeaturePresence("gcs-parallel", "Parallel", ["no"]);
		section.expectFeaturePresence("gcs-serial", "Serial", ["no"]);
		section.expectFeaturePresence("gcs-shenandoah", "Shenandoah", ["no"]);
		section.expectFeaturePresence("gcs-z", "Z", ["no"]);
		section.expectFeatureDescription("gcs-custom", "Custom GCs", ["none"]);
	});

	it("disappears if all features are identical and differences only is on", () => {
		cy.mount(<GarbageCollectorsSection productData={data} showDifferencesOnly={true} />);

		section.exists(false);
	});

	[
		["CMS", "cms"],
		["Epsilon", "epsilon"],
		["G1", "g1"],
		["Parallel", "parallel"],
		["Serial", "serial"],
		["Shenandoah", "shenandoah"],
		["Z", "z"],
	].forEach(([name, id]) => {
		it(`displays ${name} if features are different and differences only is on`, () => {
			const propertyName = id as keyof Omit<(typeof data)[0], "id" | "customGCs">;
			data[0][propertyName].present = Model.Present.YES;

			cy.mount(<GarbageCollectorsSection productData={data} showDifferencesOnly={true} />);

			section.expectFeatures([name]);
			section.expectFeaturePresence(`gcs-${id}`, name, ["yes", "no"]);
		});
	});

	it("displays Custom GCs if features are different and differences only is on", () => {
		data[0].customGCs.text = "FairyGC";

		cy.mount(<GarbageCollectorsSection productData={data} showDifferencesOnly={true} />);

		section.expectFeatures(["Custom GCs"]);
		section.expectFeatureDescription("gcs-custom", "Custom GCs", ["FairyGC", "none"]);
	});
});

const section = {
	exists: (exists: boolean) => {
		if (exists) {
			cy.get("section[id='gcs']").should("exist");
		} else {
			cy.get("section[id='gcs']").should("not.exist");
		}
	},
	expectFeatures: (featureNames: string[]) => {
		cy.get("section[id='gcs'] .feature .feature-name").should(
			"have.length",
			featureNames.length
		);

		for (let i = 0; i < featureNames.length; i++) {
			const name = featureNames[i];
			cy.get("section[id='gcs'] .feature .feature-name").eq(i).should("have.text", name);
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
