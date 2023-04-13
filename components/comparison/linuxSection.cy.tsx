import {
	LinuxFeaturesSlice,
	LinuxSection,
} from "@/components/comparison/linuxSection";
import { Model } from "@/src/modelTypes";
import Present = Model.Present;
import { remove } from "../../src/utils";

describe("<LinuxSection/>", () => {
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
		cy.mount(
			<LinuxSection productData={data} showDifferencesOnly={false} />
		);

		linuxSection.expectFeatures([
			"x86, 64-bit",
			"x86, 64-bit, musl",
			"x86, 32-bit",
			"ARM, 64-bit",
			"ARM, 64-bit, musl",
			"ARM, 32-bit",
			"PPC, 64-bit",
			"RISC-V, 64-bit",
			"S390, 64-bit",
			"APK Packages",
			"Deb Packages",
			"RPM Packages",
			"Container Images",
		]);
		linuxSection.expectFeaturePresence("linux-x64", "x86, 64-bit", [
			"no",
			"no",
		]);
		linuxSection.expectFeaturePresence(
			"linux-x64-musl",
			"x86, 64-bit, musl",
			["no", "no"]
		);
		linuxSection.expectFeaturePresence("linux-x32", "x86, 32-bit", [
			"no",
			"no",
		]);
		linuxSection.expectFeaturePresence("linux-aarch64", "ARM, 64-bit", [
			"no",
			"no",
		]);
		linuxSection.expectFeaturePresence(
			"linux-aarch64-musl",
			"ARM, 64-bit, musl",
			["no", "no"]
		);
		linuxSection.expectFeaturePresence("linux-aarch32", "ARM, 32-bit", [
			"no",
			"no",
		]);
		linuxSection.expectFeaturePresence("linux-ppc64", "PPC, 64-bit", [
			"no",
			"no",
		]);
		linuxSection.expectFeaturePresence("linux-riscv64", "RISC-V, 64-bit", [
			"no",
			"no",
		]);
		linuxSection.expectFeaturePresence("linux-s390x", "S390, 64-bit", [
			"no",
			"no",
		]);
		linuxSection.expectFeaturePresence("linux-apk", "APK Packages", [
			"no",
			"no",
		]);
		linuxSection.expectFeaturePresence("linux-deb", "Deb Packages", [
			"no",
			"no",
		]);
		linuxSection.expectFeaturePresence("linux-rpm", "RPM Packages", [
			"no",
			"no",
		]);
		linuxSection.expectFeaturePresence(
			"linux-container-images",
			"Container Images",
			["no", "no"]
		);
	});

	it("displays all features of a single product despite differences only on", () => {
		data = remove(data, (item) => item.id === "no-jdk-2");

		cy.mount(
			<LinuxSection productData={data} showDifferencesOnly={false} />
		);

		linuxSection.expectFeatures([
			"x86, 64-bit",
			"x86, 64-bit, musl",
			"x86, 32-bit",
			"ARM, 64-bit",
			"ARM, 64-bit, musl",
			"ARM, 32-bit",
			"PPC, 64-bit",
			"RISC-V, 64-bit",
			"S390, 64-bit",
			"APK Packages",
			"Deb Packages",
			"RPM Packages",
			"Container Images",
		]);
		linuxSection.expectFeaturePresence("linux-x64", "x86, 64-bit", ["no"]);
		linuxSection.expectFeaturePresence(
			"linux-x64-musl",
			"x86, 64-bit, musl",
			["no"]
		);
		linuxSection.expectFeaturePresence("linux-x32", "x86, 32-bit", ["no"]);
		linuxSection.expectFeaturePresence("linux-aarch64", "ARM, 64-bit", [
			"no",
		]);
		linuxSection.expectFeaturePresence(
			"linux-aarch64-musl",
			"ARM, 64-bit, musl",
			["no"]
		);
		linuxSection.expectFeaturePresence("linux-aarch32", "ARM, 32-bit", [
			"no",
		]);
		linuxSection.expectFeaturePresence("linux-ppc64", "PPC, 64-bit", [
			"no",
		]);
		linuxSection.expectFeaturePresence("linux-riscv64", "RISC-V, 64-bit", [
			"no",
		]);
		linuxSection.expectFeaturePresence("linux-s390x", "S390, 64-bit", [
			"no",
		]);
		linuxSection.expectFeaturePresence("linux-apk", "APK Packages", ["no"]);
		linuxSection.expectFeaturePresence("linux-deb", "Deb Packages", ["no"]);
		linuxSection.expectFeaturePresence("linux-rpm", "RPM Packages", ["no"]);
		linuxSection.expectFeaturePresence(
			"linux-container-images",
			"Container Images",
			["no"]
		);
	});

	it("disappears if all features are identical and differences only is on", () => {
		cy.mount(
			<LinuxSection productData={data} showDifferencesOnly={true} />
		);

		linuxSection.exists(false);
	});

	it("displays x86, 64-bit if features are different and differences only is on", () => {
		data[0].linuxx64.present = Present.YES;

		cy.mount(
			<LinuxSection productData={data} showDifferencesOnly={true} />
		);

		linuxSection.expectFeatures(["x86, 64-bit"]);
		linuxSection.expectFeaturePresence("linux-x64", "x86, 64-bit", [
			"yes",
			"no",
		]);
	});

	it("displays x86, 64-bit, musl if features are different and differences only is on", () => {
		data[0].linuxx64Musl.present = Present.YES;

		cy.mount(
			<LinuxSection productData={data} showDifferencesOnly={true} />
		);

		linuxSection.expectFeatures(["x86, 64-bit, musl"]);
		linuxSection.expectFeaturePresence(
			"linux-x64-musl",
			"x86, 64-bit, musl",
			["yes", "no"]
		);
	});

	it("displays x86, 32-bit if features are different and differences only is on", () => {
		data[0].linuxx32.present = Present.YES;

		cy.mount(
			<LinuxSection productData={data} showDifferencesOnly={true} />
		);

		linuxSection.expectFeatures(["x86, 32-bit"]);
		linuxSection.expectFeaturePresence("linux-x32", "x86, 32-bit", [
			"yes",
			"no",
		]);
	});

	it("displays ARM, 64-bit if features are different and differences only is on", () => {
		data[0].linuxAArch64.present = Present.YES;

		cy.mount(
			<LinuxSection productData={data} showDifferencesOnly={true} />
		);

		linuxSection.expectFeatures(["ARM, 64-bit"]);
		linuxSection.expectFeaturePresence("linux-aarch64", "ARM, 64-bit", [
			"yes",
			"no",
		]);
	});

	it("displays ARM, 64-bit, musl if features are different and differences only is on", () => {
		data[0].linuxAArch64Musl.present = Present.YES;

		cy.mount(
			<LinuxSection productData={data} showDifferencesOnly={true} />
		);

		linuxSection.expectFeatures(["ARM, 64-bit, musl"]);
		linuxSection.expectFeaturePresence(
			"linux-aarch64-musl",
			"ARM, 64-bit, musl",
			["yes", "no"]
		);
	});

	it("displays ARM, 32-bit if features are different and differences only is on", () => {
		data[0].linuxAArch32.present = Present.YES;

		cy.mount(
			<LinuxSection productData={data} showDifferencesOnly={true} />
		);

		linuxSection.expectFeatures(["ARM, 32-bit"]);
		linuxSection.expectFeaturePresence("linux-aarch32", "ARM, 32-bit", [
			"yes",
			"no",
		]);
	});

	it("displays PPC, 64-bit if features are different and differences only is on", () => {
		data[0].linuxPPC64.present = Present.YES;

		cy.mount(
			<LinuxSection productData={data} showDifferencesOnly={true} />
		);

		linuxSection.expectFeatures(["PPC, 64-bit"]);
		linuxSection.expectFeaturePresence("linux-ppc64", "PPC, 64-bit", [
			"yes",
			"no",
		]);
	});

	it("displays RISC-V, 64-bit if features are different and differences only is on", () => {
		data[0].linuxRISCV64.present = Present.YES;

		cy.mount(
			<LinuxSection productData={data} showDifferencesOnly={true} />
		);

		linuxSection.expectFeatures(["RISC-V, 64-bit"]);
		linuxSection.expectFeaturePresence("linux-riscv64", "RISC-V, 64-bit", [
			"yes",
			"no",
		]);
	});

	it("displays S390, 64-bit if features are different and differences only is on", () => {
		data[0].linuxs390x.present = Present.YES;

		cy.mount(
			<LinuxSection productData={data} showDifferencesOnly={true} />
		);

		linuxSection.expectFeatures(["S390, 64-bit"]);
		linuxSection.expectFeaturePresence("linux-s390x", "S390, 64-bit", [
			"yes",
			"no",
		]);
	});

	it("displays APK Packages if features are different and differences only is on", () => {
		data[0].linuxAPK.present = Present.YES;

		cy.mount(
			<LinuxSection productData={data} showDifferencesOnly={true} />
		);

		linuxSection.expectFeatures(["APK Packages"]);
		linuxSection.expectFeaturePresence("linux-apk", "APK Packages", [
			"yes",
			"no",
		]);
	});

	it("displays Deb Packages if features are different and differences only is on", () => {
		data[0].linuxDeb.present = Present.YES;

		cy.mount(
			<LinuxSection productData={data} showDifferencesOnly={true} />
		);

		linuxSection.expectFeatures(["Deb Packages"]);
		linuxSection.expectFeaturePresence("linux-deb", "Deb Packages", [
			"yes",
			"no",
		]);
	});

	it("displays RPM Packages if features are different and differences only is on", () => {
		data[0].linuxRPM.present = Present.YES;

		cy.mount(
			<LinuxSection productData={data} showDifferencesOnly={true} />
		);

		linuxSection.expectFeatures(["RPM Packages"]);
		linuxSection.expectFeaturePresence("linux-rpm", "RPM Packages", [
			"yes",
			"no",
		]);
	});

	it("displays Container Images if features are different and differences only is on", () => {
		data[0].linuxContainerImages.present = Present.PARTIALLY;

		cy.mount(
			<LinuxSection productData={data} showDifferencesOnly={true} />
		);

		linuxSection.expectFeatures(["Container Images"]);
		linuxSection.expectFeaturePresence(
			"linux-container-images",
			"Container Images",
			["partially", "no"]
		);
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
			featureNames.length
		);

		for (let i = 0; i < featureNames.length; i++) {
			const name = featureNames[i];
			cy.get("section[id='linux'] .feature .feature-name")
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
