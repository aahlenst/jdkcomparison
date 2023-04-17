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
import { CertificationsFeaturesSlice, CertificationsSection } from "./certificationsSection";
import { Model } from "@/src/modelTypes";

describe("<CertificationsSection/>", () => {
	let data: CertificationsFeaturesSlice[] = [];

	beforeEach(() => {
		data = [1, 2].map((i) => {
			return {
				id: `no-jdk-${i}`,
				aqavit: { present: Model.Present.NO },
				tck: { present: Model.Present.NO },
			};
		});
	});

	it("displays all features", () => {
		cy.mount(<CertificationsSection productData={data} showDifferencesOnly={false} />);

		section.expectFeatures(["Eclipse AQAvit", "TCK for Java SE"]);
		section.expectFeaturePresence("certifications-aqavit", "Eclipse AQAvit", ["no", "no"]);
		section.expectFeaturePresence("certifications-tck", "TCK for Java SE", ["no", "no"]);
	});

	it("displays all features of a single product despite differences only on", () => {
		data = remove(data, (item) => item.id === "no-jdk-2");

		cy.mount(<CertificationsSection productData={data} showDifferencesOnly={false} />);

		section.expectFeatures(["Eclipse AQAvit", "TCK for Java SE"]);
		section.expectFeaturePresence("certifications-aqavit", "Eclipse AQAvit", ["no"]);
		section.expectFeaturePresence("certifications-tck", "TCK for Java SE", ["no"]);
	});

	it("disappears if all features are identical and differences only is on", () => {
		cy.mount(<CertificationsSection productData={data} showDifferencesOnly={true} />);

		section.exists(false);
	});

	it("displays Eclipse AQAvit if features are different and differences only is on", () => {
		data[0].aqavit.present = Model.Present.UNKNOWN;

		cy.mount(<CertificationsSection productData={data} showDifferencesOnly={true} />);

		section.expectFeatures(["Eclipse AQAvit"]);
		section.expectFeaturePresence("certifications-aqavit", "Eclipse AQAvit", ["unknown", "no"]);
	});

	it("displays TCK for Java SE if features are different and differences only is on", () => {
		data[0].tck.present = Model.Present.PARTIALLY;

		cy.mount(<CertificationsSection productData={data} showDifferencesOnly={true} />);

		section.expectFeatures(["TCK for Java SE"]);
		section.expectFeaturePresence("certifications-tck", "TCK for Java SE", ["partially", "no"]);
	});
});

const section = {
	exists: (exists: boolean) => {
		if (exists) {
			cy.get("section[id='certifications']").should("exist");
		} else {
			cy.get("section[id='certifications']").should("not.exist");
		}
	},
	expectFeatures: (featureNames: string[]) => {
		cy.get("section[id='certifications'] .feature .feature-name").should(
			"have.length",
			featureNames.length
		);

		for (let i = 0; i < featureNames.length; i++) {
			const name = featureNames[i];
			cy.get("section[id='certifications'] .feature .feature-name")
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
};
