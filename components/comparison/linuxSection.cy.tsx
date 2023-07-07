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
import { LinuxFeaturesSlice, LinuxSection } from "@/components/comparison/linuxSection";
import { Model } from "@/src/modelTypes";
import Present = Model.Present;
import { remove } from "../../src/utils";

describe("<LinuxSection/>", () => {
	const features: [string, string, (s: LinuxFeaturesSlice) => Model.FeaturePresence][] = [
		["x86, 64-bit", "x64", (s) => s.linuxx64],
		["x86, 64-bit, musl", "x64-musl", (s) => s.linuxx64Musl],
		["x86, 32-bit", "x32", (s) => s.linuxx32],
		["ARM, 64-bit", "aarch64", (s) => s.linuxAArch64],
		["ARM, 64-bit, musl", "aarch64-musl", (s) => s.linuxAArch64Musl],
		["ARM, 32-bit", "aarch32", (s) => s.linuxAArch32],
		["PPC, 64-bit", "ppc64", (s) => s.linuxPPC64],
		["RISC-V, 64-bit", "riscv64", (s) => s.linuxRISCV64],
		["S390, 64-bit", "s390x", (s) => s.linuxs390x],
		["APK Packages", "apk", (s) => s.linuxAPK],
		["Deb Packages", "deb", (s) => s.linuxDeb],
		["RPM Packages", "rpm", (s) => s.linuxRPM],
		["Container Images", "container-images", (s) => s.linuxContainerImages],
	];

	let data: LinuxFeaturesSlice[] = [];

	beforeEach(() => {
		data = [1, 2].map((i) => {
			return {
				id: `no-jdk-${i}`,
				linuxx64: { present: Model.Present.NO },
				linuxx64Musl: { present: Model.Present.NO },
				linuxx32: { present: Model.Present.NO },
				linuxAArch64: { present: Model.Present.NO },
				linuxAArch64Musl: { present: Model.Present.NO },
				linuxAArch32: { present: Model.Present.NO },
				linuxPPC64: { present: Model.Present.NO },
				linuxRISCV64: { present: Model.Present.NO },
				linuxs390x: { present: Model.Present.NO },
				linuxAPK: { present: Model.Present.NO },
				linuxDeb: { present: Model.Present.NO },
				linuxRPM: { present: Model.Present.NO },
				linuxContainerImages: { present: Model.Present.NO },
			};
		});
	});

	it("displays all features", () => {
		cy.mount(<LinuxSection productData={data} showDifferencesOnly={false} />);

		linuxSection.expectFeatures(features.map((f) => f[0]));
		features.forEach(([label, id, supplier]) => {
			linuxSection.expectFeaturePresence(`linux-${id}`, label, ["no", "no"]);
		});
	});

	it("displays all features of a single product despite differences only on", () => {
		data = remove(data, (item) => item.id === "no-jdk-2");

		cy.mount(<LinuxSection productData={data} showDifferencesOnly={false} />);

		linuxSection.expectFeatures(features.map((f) => f[0]));
		features.forEach(([label, id, supplier]) => {
			linuxSection.expectFeaturePresence(`linux-${id}`, label, ["no"]);
		});
	});

	it("disappears if all features are identical and differences only is on", () => {
		cy.mount(<LinuxSection productData={data} showDifferencesOnly={true} />);

		linuxSection.exists(false);
	});

	features.forEach(([label, id, supplier]) => {
		it(`displays ${label} if features are different and differences only is on`, () => {
			supplier(data[0]).present = Present.YES;

			cy.mount(<LinuxSection productData={data} showDifferencesOnly={true} />);

			linuxSection.expectFeatures([label]);
			linuxSection.expectFeaturePresence(`linux-${id}`, label, ["yes", "no"]);
		});
	});
});

const linuxSection = {
	exists: (exists: boolean) => {
		if (exists) {
			cy.get("section[id='linux']").should("exist");
		} else {
			cy.get("section[id='linux']").should("not.exist");
		}
	},
	expectFeatures: (featureNames: string[]) => {
		cy.get("section[id='linux'] .feature .feature-name").should(
			"have.length",
			featureNames.length,
		);

		for (let i = 0; i < featureNames.length; i++) {
			const name = featureNames[i];
			cy.get("section[id='linux'] .feature .feature-name").eq(i).should("have.text", name);
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
