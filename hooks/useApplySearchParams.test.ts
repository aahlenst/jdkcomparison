import {beforeEach, describe, expect, jest} from "@jest/globals";
import {applySearchParamsToState} from "@/hooks/useApplySearchParams";
import {DynamicSelectionFilter} from "@/src/filter";
import {BatchApplyActions, ComparisonState, ToggleFilter} from "@/components/comparison/comparisonContext";
import {Model} from "@/src/modelTypes";

describe("applySearchParamsToState()", () => {

	const filterA: Model.Filter = new DynamicSelectionFilter("filterA", ["A", "B", "C"], fc => fc.name);
	const filterB: Model.Filter = new DynamicSelectionFilter("filterB", ["1", "2", "3"], fc => fc.name);

	const state: ComparisonState = {
		filters: [filterA, filterB],
		data: [],
		filteredData: [],
		footnotes: [],
		showDifferencesOnly: false
	};

	const mockDispatch = jest.fn();

	beforeEach(() => {
		for (const filter of state.filters) {
			filter.reset();
		}
		mockDispatch.mockClear();
	});

	test("dispatches no actions if search params match filter state", () => {
		applySearchParamsToState({}, state, mockDispatch);

		expect(mockDispatch.mock.calls).toHaveLength(0);

		filterA.setOptionSelectedByLabel("A", true);
		applySearchParamsToState({"filterA": "A"}, state, mockDispatch);

		expect(mockDispatch.mock.calls).toHaveLength(0);

		filterA.setOptionSelectedByLabel("A", true);
		filterA.setOptionSelectedByLabel("B", true);
		applySearchParamsToState({"filterA": ["B", "A"]}, state, mockDispatch);

		expect(mockDispatch.mock.calls).toHaveLength(0);

		filterB.setOptionSelectedByLabel("1", true);
		applySearchParamsToState({"filterA": ["B", "A"], "filterB": ["1"]}, state, mockDispatch);

		expect(mockDispatch.mock.calls).toHaveLength(0);
	});

	test("dispatches no actions if search params only contain unknown option", () => {
		applySearchParamsToState({"filterA": "X"}, state, mockDispatch);

		expect(mockDispatch.mock.calls).toHaveLength(0);
	});

	test("dispatches no actions if filter is unknown", () => {
		applySearchParamsToState({"unknownFilter": "X"}, state, mockDispatch);

		expect(mockDispatch.mock.calls).toHaveLength(0);
	});

	test("dispatches actions to reset other filters if filter is unknown", () => {
		filterA.setOptionSelectedByLabel("C", true);

		applySearchParamsToState({"unknownFilter": "X"}, state, mockDispatch);

		expect(mockDispatch.mock.calls).toHaveLength(1);

		const batchApplyAction = mockDispatch.mock.calls[0][0] as BatchApplyActions;
		expect(batchApplyAction.actions).toContainEqual(new ToggleFilter("filterA", "C", false));
	});

	test("dispatches action to enable filters requested by search params", () => {
		applySearchParamsToState({"filterA": ["B", "A"], "filterB": ["2"]}, state, mockDispatch);

		expect(mockDispatch.mock.calls).toHaveLength(1);

		const batchApplyAction = mockDispatch.mock.calls[0][0] as BatchApplyActions;
		expect(batchApplyAction.actions).toContainEqual(new ToggleFilter("filterA", "A", true));
		expect(batchApplyAction.actions).toContainEqual(new ToggleFilter("filterA", "B", true));
		expect(batchApplyAction.actions).toContainEqual(new ToggleFilter("filterB", "2", true));
	});

	test("dispatches action to disable filters not requested by search params", () => {
		filterA.setOptionSelectedByLabel("C", true);
		filterB.setOptionSelectedByLabel("1", true);

		applySearchParamsToState({"filterA": ["B", "A"], "filterB": ["2"], "unknownFilter": "X"}, state, mockDispatch);

		expect(mockDispatch.mock.calls).toHaveLength(1);

		const batchApplyAction = mockDispatch.mock.calls[0][0] as BatchApplyActions;
		expect(batchApplyAction.actions).toContainEqual(new ToggleFilter("filterA", "A", true));
		expect(batchApplyAction.actions).toContainEqual(new ToggleFilter("filterA", "B", true));
		expect(batchApplyAction.actions).toContainEqual(new ToggleFilter("filterA", "C", false));
		expect(batchApplyAction.actions).toContainEqual(new ToggleFilter("filterB", "2", true));
		expect(batchApplyAction.actions).toContainEqual(new ToggleFilter("filterB", "1", false));
	});
});
