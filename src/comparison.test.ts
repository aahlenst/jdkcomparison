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
import { beforeAll, describe, expect } from "@jest/globals";
import { Vendor } from "@/src/vendorDataTypes";
import { extractComparisonData } from "@/src/comparison";
import { Model } from "@/src/modelTypes";

describe("extractComparisonData()", () => {
	const testData: Vendor[] = [];

	beforeAll(async () => {
		// Reverse alphabetical order to ensure data is being sorted.
		testData.push((await import("@/testdata/dukecorp")).default);
		testData.push((await import("@/testdata/coffeecorp")).default);
	});

	test("numbers all footnotes", () => {
		const { footnotes } = extractComparisonData(testData);

		expect(footnotes.length).toEqual(3);
		expect(footnotes[0].id).toEqual("6a296137-f4e4-4d34-b64e-3c95375f3db0");
		expect(footnotes[0].number).toEqual(1);
		expect(footnotes[0].html).toContain(
			"<p>Some <strong>clarifications</strong> regarding JavaFX",
		);
		expect(footnotes[1].id).toEqual("f4b31750-2c0d-4332-bfe7-6d30daa959a1");
		expect(footnotes[1].number).toEqual(2);
		expect(footnotes[1].html).toContain("<p>Some <em>remark</em> regarding paid support");
		expect(footnotes[2].id).toEqual("31e01ff8-ff7b-4864-ab54-1b1e18663dcf");
		expect(footnotes[2].number).toEqual(3);
		expect(footnotes[2].html).toContain(
			"<p>Some <em>comment</em> about the end of life date.</p>",
		);
	});

	test("extracts all JDKs", async () => {
		const dukecorp = (await import("@/testdata/dukecorp")).default;
		const { productsInComparison } = extractComparisonData([dukecorp]);

		expect(productsInComparison.length).toEqual(1);

		const jdk = productsInComparison[0];

		expect(jdk.id).toEqual("dukecorp-jdk-17");
		expect(jdk.vendor).toEqual("Dukecorp");
		expect(jdk.countryOfOrigin).toEqual("United States of Duke");
		expect(jdk.websiteUrl).toEqual("https://dukecorp.com/");
		expect(jdk.name).toEqual("Dukecorp JDK 17");
		expect(jdk.version).toEqual(17);
		expect(jdk.downloadUrl).toEqual("https://dukecorp.com/jdk17");
		expect(jdk.virtualMachine).toEqual({ text: "DukeVM" });
		expect(jdk.classLibraries).toEqual({ text: "OpenJDK" });
		expect(jdk.jfx).toEqual({ present: Model.Present.NO });
		expect(jdk.jfr).toEqual({ present: Model.Present.YES });
		expect(jdk.jaws).toEqual({ present: Model.Present.NO });
		expect(jdk.cms).toEqual({ present: Model.Present.NO });
		expect(jdk.epsilon).toEqual({ present: Model.Present.YES });
		expect(jdk.g1).toEqual({ present: Model.Present.YES });
		expect(jdk.parallel).toEqual({ present: Model.Present.YES });
		expect(jdk.serial).toEqual({ present: Model.Present.YES });
		expect(jdk.shenandoah).toEqual({ present: Model.Present.NO });
		expect(jdk.z).toEqual({ present: Model.Present.YES });
		expect(jdk.customGCs).toEqual({ text: "FairyGC" });
		expect(jdk.linuxx64).toEqual({ present: Model.Present.YES });
		expect(jdk.linuxx64Musl).toEqual({ present: Model.Present.NO });
		expect(jdk.linuxx32).toEqual({ present: Model.Present.NO });
		expect(jdk.linuxAArch64).toEqual({ present: Model.Present.YES });
		expect(jdk.linuxAArch64Musl).toEqual({ present: Model.Present.NO });
		expect(jdk.linuxAArch32).toEqual({ present: Model.Present.NO });
		expect(jdk.linuxPPC64).toEqual({ present: Model.Present.NO });
		expect(jdk.linuxRISCV64).toEqual({ present: Model.Present.NO });
		expect(jdk.linuxPPC64).toEqual({ present: Model.Present.NO });
		expect(jdk.linuxs390x).toEqual({ present: Model.Present.NO });
		expect(jdk.linuxAPK).toEqual({ present: Model.Present.NO });
		expect(jdk.linuxDeb).toEqual({ present: Model.Present.NO });
		expect(jdk.linuxRPM).toEqual({ present: Model.Present.NO });
		expect(jdk.linuxContainerImages).toEqual({ present: Model.Present.NO });
		expect(jdk.macx64).toEqual({ present: Model.Present.YES });
		expect(jdk.macAArch64).toEqual({ present: Model.Present.YES });
		expect(jdk.macInstallers).toEqual({ present: Model.Present.YES });
		expect(jdk.windowsx32).toEqual({ present: Model.Present.NO });
		expect(jdk.windowsx64).toEqual({ present: Model.Present.YES });
		expect(jdk.windowsAArch64).toEqual({ present: Model.Present.NO });
		expect(jdk.windowsInstallers).toEqual({ present: Model.Present.NO });
		expect(jdk.windowsContainerImages).toEqual({
			present: Model.Present.NO,
		});
		expect(jdk.aixPPC).toEqual({ present: Model.Present.NO });
		expect(jdk.solarisSPARC).toEqual({ present: Model.Present.NO });
		expect(jdk.solarisx64).toEqual({ present: Model.Present.NO });
		expect(jdk.aqavit).toEqual({ present: Model.Present.YES });
		expect(jdk.tck).toEqual({ present: Model.Present.YES });
		expect(jdk.editions).toEqual({ text: "JRE" });
		expect(jdk.customisations).toEqual({ text: "many" });
		expect(jdk.notableFeatures).toEqual({ text: "FairyGC" });
		expect(jdk.license).toEqual({ text: "Proprietary" });
		expect(jdk.freeInDevelopment).toEqual({ present: Model.Present.YES });
		expect(jdk.freeInProduction).toEqual({ present: Model.Present.NO });
		expect(jdk.sbom).toEqual({ present: Model.Present.UNKNOWN });
		expect(jdk.paidSupport).toEqual({
			present: Model.Present.NO,
			footnoteReference: { backReference: 1, number: 1 },
		});
		expect(jdk.eolDate).toEqual({
			text: "2027-10",
			footnoteReference: { backReference: 1, number: 2 },
		});
		expect(jdk.releaseSchedule).toEqual({ text: "OpenJDK" });
		expect(jdk.releaseDelay).toEqual({ text: "none" });
		expect(jdk.updateTypes).toEqual({ text: "paid/tiered" });
	});

	test("returns JDKs sorted by descending version, ascending vendor name, ascending JDK name", () => {
		const { productsInComparison } = extractComparisonData(testData);

		const order = productsInComparison.map((p) => ({
			vendor: p.vendor,
			name: p.name,
			version: p.version,
		}));

		expect(order).toHaveLength(3);
		expect(order[0]).toEqual({
			vendor: "Coffeecorp",
			name: "Coffeecorp JDK 17",
			version: 17,
		});
		expect(order[1]).toEqual({
			vendor: "Dukecorp",
			name: "Dukecorp JDK 17",
			version: 17,
		});
		expect(order[2]).toEqual({
			vendor: "Coffeecorp",
			name: "Coffeecorp JDK 8",
			version: 8,
		});
	});
});
