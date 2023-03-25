import {beforeAll, describe, expect} from "@jest/globals";
import {Vendor} from "@/src/vendorDataTypes";
import {extractComparisonData} from "@/src/comparison";
import {Model} from "@/src/modelTypes";

describe("comparison module", () => {
	const testData: Vendor[] = [];

	beforeAll(async () => {
		// Reverse alphabetical order to ensure data is being sorted.
		testData.push((await import("@/testdata/dukecorp")).default);
		testData.push((await import("@/testdata/coffeecorp")).default);
	});

	test("extractComparisonData() numbers all footnotes", () => {
		const {footnotes} = extractComparisonData(testData);

		expect(footnotes.length).toEqual(3);
		expect(footnotes[0].id).toEqual("6a296137-f4e4-4d34-b64e-3c95375f3db0");
		expect(footnotes[0].number).toEqual(1);
		expect(footnotes[0].html).toContain("<p>Some <strong>clarifications</strong> regarding JavaFX");
		expect(footnotes[1].id).toEqual("f4b31750-2c0d-4332-bfe7-6d30daa959a1");
		expect(footnotes[1].number).toEqual(2);
		expect(footnotes[1].html).toContain("<p>Some <em>remark</em> regarding paid support");
		expect(footnotes[2].id).toEqual("31e01ff8-ff7b-4864-ab54-1b1e18663dcf");
		expect(footnotes[2].number).toEqual(3);
		expect(footnotes[2].html).toContain("<p>Some <em>comment</em> about the end of life date.</p>");
	});

	test("extractComparisonData() extracts all JDKs", async () => {
		const dukecorp = (await import("@/testdata/dukecorp")).default;
		const {productsInComparison} = extractComparisonData([dukecorp]);

		expect(productsInComparison.length).toEqual(1);

		const jdk = productsInComparison[0];

		expect(jdk.id).toEqual("dukecorp-jdk-17");
		expect(jdk.virtualMachine).toEqual({text: "DukeVM"});
		expect(jdk.classLibraries).toEqual({text: "OpenJDK"});
		expect(jdk.jfx).toEqual({present: Model.Present.NO});
		expect(jdk.jfr).toEqual({present: Model.Present.YES});
		expect(jdk.jaws).toEqual({present: Model.Present.NO});
		expect(jdk.license).toEqual({text: "Proprietary"});
		expect(jdk.freeInDevelopment).toEqual({present: Model.Present.YES});
		expect(jdk.freeInProduction).toEqual({present: Model.Present.NO});
		expect(jdk.paidSupport).toEqual({present: Model.Present.NO, footnoteReference: {backReference: 1, number: 1}});
		expect(jdk.eolDate).toEqual({text: "2027-10", footnoteReference: {backReference: 1, number: 2}});
	});
});
