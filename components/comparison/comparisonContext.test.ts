import { beforeEach, describe, expect } from "@jest/globals";
import {
	comparisonReducer,
	ComparisonState,
	SetActiveComparator,
} from "@/components/comparison/comparisonContext";
import {
	AscendingVersionComparator,
	DescendingVendorComparator,
	DescendingVersionComparator,
} from "@/src/sorting";
import { TechnologiesFilter } from "@/src/filter";
import { Model } from "@/src/modelTypes";
import { extractComparisonData } from "@/src/comparison";

describe("comparisonReducer()", () => {
	let comparisons: Model.FeatureComparison[];
	let footnotes: Model.Footnote[];

	beforeEach(async () => {
		const testData = [
			(await import("@/testdata/dukecorp")).default,
			(await import("@/testdata/coffeecorp")).default,
		];
		const comparisonData = extractComparisonData(testData);
		comparisons = comparisonData.productsInComparison;
		footnotes = comparisonData.footnotes;
	});

	test("sets active comparator, reapplies filters and reorders data", () => {
		const state: ComparisonState = {
			filters: [new TechnologiesFilter()],
			data: comparisons,
			filteredData: comparisons,
			footnotes: footnotes,
			showDifferencesOnly: false,
			activeComparator: new AscendingVersionComparator(),
		};

		const descendingVendorComparator = new DescendingVendorComparator();
		const descendingVersionComparator = new DescendingVersionComparator();

		expect(state.filteredData).toHaveLength(3);
		expect(state.filteredData[0].id).toEqual("coffeecorp-jdk-17");
		expect(state.filteredData[1].id).toEqual("dukecorp-jdk-17");
		expect(state.filteredData[2].id).toEqual("coffeecorp-jdk-8");

		comparisonReducer(state, [
			new SetActiveComparator(descendingVendorComparator.id),
		]);

		expect(state.activeComparator).toEqual(descendingVendorComparator);
		expect(state.filteredData[0].id).toEqual("dukecorp-jdk-17");
		expect(state.filteredData[1].id).toEqual("coffeecorp-jdk-17");
		expect(state.filteredData[2].id).toEqual("coffeecorp-jdk-8");

		// Second pass needed to see whether the default sort order was restored.
		comparisonReducer(state, [
			new SetActiveComparator(descendingVersionComparator.id),
		]);

		expect(state.activeComparator).toEqual(descendingVersionComparator);
		expect(state.filteredData[0].id).toEqual("coffeecorp-jdk-17");
		expect(state.filteredData[1].id).toEqual("dukecorp-jdk-17");
		expect(state.filteredData[2].id).toEqual("coffeecorp-jdk-8");
	});
});
