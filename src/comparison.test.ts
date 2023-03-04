import {beforeAll, describe, expect} from "@jest/globals";
import {Vendor} from "@/src/vendorDataTypes";
import {extractComparisonData} from "@/src/comparison";
import {Comparison} from "@/src/comparisonTypes";

describe("comparison module", () => {
	const testData: Vendor[] = [];

	beforeAll(async () => {
		// Reverse alphabetical order to ensure data is being sorted.
		testData.push((await import("@/testdata/dukecorp")).default);
		testData.push((await import("@/testdata/coffeecorp")).default);
	});

	test("transform numbers all footnotes", () => {
		const {footnotes} = extractComparisonData(testData);

		expect(footnotes.length).toEqual(2);
		expect(footnotes[0].id).toEqual("6a296137-f4e4-4d34-b64e-3c95375f3db0");
		expect(footnotes[0].number).toEqual(1);
		expect(footnotes[0].html).toEqual("<p>Some <em>clarifications</em> regarding JavaFX.</p>");
		expect(footnotes[1].id).toEqual("f4b31750-2c0d-4332-bfe7-6d30daa959a1");
		expect(footnotes[1].number).toEqual(2);
		expect(footnotes[1].html).toEqual("<p>Some <em>remark</em> regarding paid support.</p>");
	});

	test("transform extracts comparisons", async () => {
		const dukecorp = (await import("@/testdata/dukecorp")).default;
		const {productsInComparison} = extractComparisonData([dukecorp]);

		expect(productsInComparison.length).toEqual(1);

		const jdk = productsInComparison[0];

		expect(jdk.id).toEqual("dukecorp-jdk-17");
		expect(jdk.jfx).toEqual({present: Comparison.Present.NO});
		expect(jdk.jfr).toEqual({present: Comparison.Present.YES});
		expect(jdk.paidSupport).toEqual({present: Comparison.Present.NO, footnoteNumber: 1});
		expect(jdk.eolDate).toEqual({text: "2027-10"});
	});
});
