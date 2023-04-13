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
	WindowsFeaturesSlice,
	WindowsSection,
} from "@/components/comparison/windowsSection";
import { Model } from "@/src/modelTypes";
import Present = Model.Present;
import { remove } from "../../src/utils";

describe("<WindowsSection/>", () => {
	let data: WindowsFeaturesSlice[] = [];

	beforeEach(() => {
		data = [1, 2].map((i) => {
			return {
				id: `no-jdk-${i}`,
				windowsx64: { present: Model.Present.NO },
				windowsx32: { present: Model.Present.NO },
				windowsAArch64: { present: Model.Present.NO },
				windowsInstallers: { present: Model.Present.NO },
				windowsContainerImages: { present: Model.Present.NO },
			};
		});
	});

	it("displays all features", () => {
		cy.mount(
			<WindowsSection productData={data} showDifferencesOnly={false} />
		);

		windowsSection.expectFeatures([
			"x86, 64-bit",
			"x86, 32-bit",
			"ARM, 64-bit",
			"Installers",
			"Container Images",
		]);
		windowsSection.expectFeaturePresence("windows-x64", "x86, 64-bit", [
			"no",
			"no",
		]);
		windowsSection.expectFeaturePresence("windows-x32", "x86, 32-bit", [
			"no",
			"no",
		]);
		windowsSection.expectFeaturePresence("windows-aarch64", "ARM, 64-bit", [
			"no",
			"no",
		]);
		windowsSection.expectFeaturePresence(
			"windows-installers",
			"Installers",
			["no", "no"]
		);
		windowsSection.expectFeaturePresence(
			"windows-container-images",
			"Container Images",
			["no", "no"]
		);
	});

	it("displays all features of a single product despite differences only on", () => {
		data = remove(data, (item) => item.id === "no-jdk-2");

		cy.mount(
			<WindowsSection productData={data} showDifferencesOnly={false} />
		);

		windowsSection.expectFeatures([
			"x86, 64-bit",
			"x86, 32-bit",
			"ARM, 64-bit",
			"Installers",
			"Container Images",
		]);
		windowsSection.expectFeaturePresence("windows-x64", "x86, 64-bit", [
			"no",
		]);
		windowsSection.expectFeaturePresence("windows-aarch64", "ARM, 64-bit", [
			"no",
		]);
		windowsSection.expectFeaturePresence(
			"windows-installers",
			"Installers",
			["no"]
		);
		windowsSection.expectFeaturePresence(
			"windows-container-images",
			"Container Images",
			["no"]
		);
	});

	it("disappears if all features are identical and differences only is on", () => {
		cy.mount(
			<WindowsSection productData={data} showDifferencesOnly={true} />
		);

		windowsSection.exists(false);
	});

	it("displays x86, 64-bit if features are different and differences only is on", () => {
		data[0].windowsx64.present = Present.YES;

		cy.mount(
			<WindowsSection productData={data} showDifferencesOnly={true} />
		);

		windowsSection.expectFeatures(["x86, 64-bit"]);
		windowsSection.expectFeaturePresence("windows-x64", "x86, 64-bit", [
			"yes",
			"no",
		]);
	});

	it("displays x86, 32-bit if features are different and differences only is on", () => {
		data[0].windowsx32.present = Present.YES;

		cy.mount(
			<WindowsSection productData={data} showDifferencesOnly={true} />
		);

		windowsSection.expectFeatures(["x86, 32-bit"]);
		windowsSection.expectFeaturePresence("windows-x32", "x86, 32-bit", [
			"yes",
			"no",
		]);
	});

	it("displays ARM, 64-bit if features are different and differences only is on", () => {
		data[0].windowsAArch64.present = Present.YES;

		cy.mount(
			<WindowsSection productData={data} showDifferencesOnly={true} />
		);

		windowsSection.expectFeatures(["ARM, 64-bit"]);
		windowsSection.expectFeaturePresence("windows-aarch64", "ARM, 64-bit", [
			"yes",
			"no",
		]);
	});

	it("displays Installers if features are different and differences only is on", () => {
		data[0].windowsInstallers.present = Present.YES;

		cy.mount(
			<WindowsSection productData={data} showDifferencesOnly={true} />
		);

		windowsSection.expectFeatures(["Installers"]);
		windowsSection.expectFeaturePresence(
			"windows-installers",
			"Installers",
			["yes", "no"]
		);
	});

	it("displays Container Images if features are different and differences only is on", () => {
		data[0].windowsContainerImages.present = Present.PARTIALLY;

		cy.mount(
			<WindowsSection productData={data} showDifferencesOnly={true} />
		);

		windowsSection.expectFeatures(["Container Images"]);
		windowsSection.expectFeaturePresence(
			"windows-container-images",
			"Container Images",
			["partially", "no"]
		);
	});
});

const windowsSection = {
	exists: (exists: boolean) => {
		if (exists) {
			cy.get("section[id='windows']").should("exist");
		} else {
			cy.get("section[id='windows']").should("not.exist");
		}
	},
	expectFeatures: (featureNames: string[]) => {
		cy.get("section[id='windows'] .feature .feature-name").should(
			"have.length",
			featureNames.length
		);

		for (let i = 0; i < featureNames.length; i++) {
			const name = featureNames[i];
			cy.get("section[id='windows'] .feature .feature-name")
				.eq(i)
				.should("have.text", name);
		}
	},
	expectFeaturePresence: (
		featureId: string,
		name: string,
		presenceClassNames: string[]
	) => {
		cy.get(`#${featureId} .feature-name`).should("have.text", name);
		cy.get(`#${featureId} .feature-value`).should(
			"have.length",
			presenceClassNames.length
		);

		for (let i = 0; i < presenceClassNames.length; i++) {
			cy.get(`#${featureId} .feature-value svg`)
				.eq(i)
				.should("have.class", `present-${presenceClassNames[i]}`);
		}
	},
};
