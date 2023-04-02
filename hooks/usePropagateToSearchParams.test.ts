import {beforeEach, describe, expect} from "@jest/globals";
import {ComparisonState} from "@/components/comparison/comparisonContext";
import {Model} from "@/src/modelTypes";
import {DynamicSelectionFilter} from "@/src/filter";
import {ApplyFilter, handleApplyFilter} from "@/hooks/usePropagateToSearchParams";

describe("handleApplyFilter()", () => {

	const filterA: Model.Filter = new DynamicSelectionFilter("filterA", ["A", "B", "C"], fc => fc.name);

	const filterB: Model.Filter = new DynamicSelectionFilter("filterB", ["1", "2", "3"], fc => fc.name);

	const state: ComparisonState = {
		filters: [filterA, filterB],
		data: [],
		filteredData: [],
		footnotes: [],
		showDifferencesOnly: false,
	};

	beforeEach(() => {
		for (const filter of state.filters) {
			filter.reset();
		}
	});

	test("activates filter by adding it to search params", () => {
		const action = new ApplyFilter("filterA", "B", true);

		const searchParams = handleApplyFilter(action, state);

		expect(searchParams).toEqual({"filterA": ["B"]});
	});

	test("activates filter retaining existing state by adding all to search params", () => {
		filterA.setOptionSelectedByLabel("A", true);
		filterB.setOptionSelectedByLabel("3", true);
		const action = new ApplyFilter("filterA", "B", true);

		const searchParams = handleApplyFilter(action, state);

		expect(searchParams).toEqual({"filterA": ["A", "B"], "filterB": ["3"]});
	});

	test("deactivates filter by removing it from search params", () => {
		filterA.setOptionSelectedByLabel("B", true);
		const action = new ApplyFilter("filterA", "B", false);

		const searchParams = handleApplyFilter(action, state);

		expect(searchParams).toEqual({});
	});

	test("deactivates filter retaining existing state by removing it from search params", () => {
		filterA.setOptionSelectedByLabel("A", true);
		filterA.setOptionSelectedByLabel("B", true);
		filterB.setOptionSelectedByLabel("3", true);
		const action = new ApplyFilter("filterA", "B", false);

		const searchParams = handleApplyFilter(action, state);

		expect(searchParams).toEqual({"filterA": ["A"], "filterB": ["3"]});
	});
});
