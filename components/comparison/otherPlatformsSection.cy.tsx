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
	OtherPlatformsFeaturesSlice,
	OtherPlatformsSection,
} from "@/components/comparison/otherPlatformsSection";
import { Model } from "@/src/modelTypes";
import { remove } from "../../src/utils";
import Present = Model.Present;

describe("<OtherPlatformsSection/>", () => {
	let data: OtherPlatformsFeaturesSlice[] = [];

	beforeEach(() => {
		data = [1, 2].map((i) => {
			return {
				id: `no-jdk-${i}`,
				aixPPC: { present: Model.Present.NO },
				solarisSPARC: { present: Model.Present.NO },
				solarisx64: { present: Model.Present.NO },
			};
		});
	});

	it("displays all features", () => {
		cy.mount(<OtherPlatformsSection productData={data} showDifferencesOnly={false} />);

		otherPlatformsSection.expectFeatures([
			"AIX, PPC",
			"Solaris, SPARC",
			"Solaris, x86, 64-bit",
		]);
		otherPlatformsSection.expectFeaturePresence("aix-ppc", "AIX, PPC", ["no", "no"]);
		otherPlatformsSection.expectFeaturePresence("solaris-sparc", "Solaris, SPARC", [
			"no",
			"no",
		]);
		otherPlatformsSection.expectFeaturePresence("solaris-x64", "Solaris, x86, 64-bit", [
			"no",
			"no",
		]);
	});

	it("displays all features of a single product despite differences only on", () => {
		data = remove(data, (item) => item.id === "no-jdk-2");

		cy.mount(<OtherPlatformsSection productData={data} showDifferencesOnly={false} />);

		otherPlatformsSection.expectFeatures([
			"AIX, PPC",
			"Solaris, SPARC",
			"Solaris, x86, 64-bit",
		]);
		otherPlatformsSection.expectFeaturePresence("aix-ppc", "AIX, PPC", ["no"]);
		otherPlatformsSection.expectFeaturePresence("solaris-sparc", "Solaris, SPARC", ["no"]);
		otherPlatformsSection.expectFeaturePresence("solaris-x64", "Solaris, x86, 64-bit", ["no"]);
	});

	it("disappears if all features are identical and differences only is on", () => {
		cy.mount(<OtherPlatformsSection productData={data} showDifferencesOnly={true} />);

		otherPlatformsSection.exists(false);
	});

	it("displays AIX, PPC if features are different and differences only is on", () => {
		data[0].aixPPC.present = Present.YES;

		cy.mount(<OtherPlatformsSection productData={data} showDifferencesOnly={true} />);

		otherPlatformsSection.expectFeatures(["AIX, PPC"]);
		otherPlatformsSection.expectFeaturePresence("aix-ppc", "AIX, PPC", ["yes", "no"]);
	});

	it("displays Solaris, SPARC if features are different and differences only is on", () => {
		data[0].solarisSPARC.present = Present.YES;

		cy.mount(<OtherPlatformsSection productData={data} showDifferencesOnly={true} />);

		otherPlatformsSection.expectFeatures(["Solaris, SPARC"]);
		otherPlatformsSection.expectFeaturePresence("solaris-sparc", "Solaris, SPARC", [
			"yes",
			"no",
		]);
	});

	it("displays Solaris, x86, 64-bit if features are different and differences only is on", () => {
		data[0].solarisx64.present = Present.YES;

		cy.mount(<OtherPlatformsSection productData={data} showDifferencesOnly={true} />);

		otherPlatformsSection.expectFeatures(["Solaris, x86, 64-bit"]);
		otherPlatformsSection.expectFeaturePresence("solaris-x64", "Solaris, x86, 64-bit", [
			"yes",
			"no",
		]);
	});
});

const otherPlatformsSection = {
	exists: (exists: boolean) => {
		if (exists) {
			cy.get("section[id='other']").should("exist");
		} else {
			cy.get("section[id='other']").should("not.exist");
		}
	},
	expectFeatures: (featureNames: string[]) => {
		cy.get("section[id='other'] .feature .feature-name").should(
			"have.length",
			featureNames.length,
		);

		for (let i = 0; i < featureNames.length; i++) {
			const name = featureNames[i];
			cy.get("section[id='other'] .feature .feature-name").eq(i).should("have.text", name);
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
