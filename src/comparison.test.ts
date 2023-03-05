import {beforeAll, describe, expect} from "@jest/globals";
import {Vendor} from "@/src/vendorDataTypes";
import {deriveFilters, deriveVendorFilter, deriveVersionFilter, extractComparisonData} from "@/src/comparison";
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

		expect(footnotes.length).toEqual(2);
		expect(footnotes[0].id).toEqual("6a296137-f4e4-4d34-b64e-3c95375f3db0");
		expect(footnotes[0].number).toEqual(1);
		expect(footnotes[0].html).toEqual("<p>Some <em>clarifications</em> regarding JavaFX.</p>");
		expect(footnotes[1].id).toEqual("f4b31750-2c0d-4332-bfe7-6d30daa959a1");
		expect(footnotes[1].number).toEqual(2);
		expect(footnotes[1].html).toEqual("<p>Some <em>remark</em> regarding paid support.</p>");
	});

	test("extractComparisonData() extracts all JDKs", async () => {
		const dukecorp = (await import("@/testdata/dukecorp")).default;
		const {productsInComparison} = extractComparisonData([dukecorp]);

		expect(productsInComparison.length).toEqual(1);

		const jdk = productsInComparison[0];

		expect(jdk.id).toEqual("dukecorp-jdk-17");
		expect(jdk.jfx).toEqual({present: Model.Present.NO});
		expect(jdk.jfr).toEqual({present: Model.Present.YES});
		expect(jdk.paidSupport).toEqual({present: Model.Present.NO, footnoteNumber: 1});
		expect(jdk.eolDate).toEqual({text: "2027-10"});
	});

	test("deriveFilters() includes all filters", () => {
		const filters = deriveFilters(testData).map(filter => filter.id);
		expect(filters).toEqual(["vendors", "versions"]);
	});

	test("deriveVersionFilter() produces a filter with all JDK versions", () => {
		const versionFilter = deriveVersionFilter(testData);

		expect(versionFilter.id).toEqual("versions");
		expect(versionFilter.options.length).toEqual(2);
		expect(versionFilter.options[0]).toEqual({id: "versions-0", label: "8", checked: false});
		expect(versionFilter.options[1]).toEqual({id: "versions-1", label: "17", checked: false});
	});

	test("deriveVendorFilter() produces a filter with all JDK vendors", () => {
		const vendorFilter = deriveVendorFilter(testData);

		expect(vendorFilter.id).toEqual("vendors");
		expect(vendorFilter.options.length).toEqual(2);
		expect(vendorFilter.options[0]).toEqual({id: "vendors-0", label: "Coffeecorp", checked: false});
		expect(vendorFilter.options[1]).toEqual({id: "vendors-1", label: "Dukecorp", checked: false});
	});
});
