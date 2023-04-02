import React, {createContext, PropsWithChildren, useContext} from "react";
import {useImmerReducer} from "use-immer";
import {Model} from "../../src/modelTypes";
import {applyFilters} from "../../src/filter";
import {useApplySearchParams} from "@/hooks/useApplySearchParams";

type ComparisonProviderProps = {
	filters: Model.Filter[]
	data: Model.FeatureComparison[]
	footnotes: Model.Footnote[]
}

export type ComparisonState = {
	filters: Model.Filter[]
	data: Model.FeatureComparison[]
	filteredData: Model.FeatureComparison[]
	footnotes: Model.Footnote[],
	showDifferencesOnly: boolean
}

enum ComparisonActionType {
	BatchApplyActions = "BATCH_APPLY_ACTIONS",
	ToggleFilter = "TOGGLE_FILTER",
	ToggleShowDifferencesOnly = "TOGGLE_SHOW_DIFFERENCES_ONLY",
}

export interface ComparisonAction {
	type: ComparisonActionType
}

export class ToggleShowDifferencesOnly implements ComparisonAction {
	type = ComparisonActionType.ToggleShowDifferencesOnly;

	on: boolean;

	constructor(on: boolean) {
		this.on = on;
	}
}

export class ToggleFilter implements ComparisonAction {
	type = ComparisonActionType.ToggleFilter;
	filterId: string;
	optionLabel: string;
	active: boolean;

	constructor(filterId: string, optionLabel: string, active: boolean) {
		this.filterId = filterId;
		this.optionLabel = optionLabel;
		this.active = active;
	}
}

export class BatchApplyActions implements ComparisonAction {
	type = ComparisonActionType.BatchApplyActions;

	actions: ComparisonAction[];

	constructor(actions: ComparisonAction[]) {
		this.actions = actions;
	}
}

const ComparisonContext = createContext<ComparisonState>({
	filters: [],
	data: [],
	filteredData: [],
	footnotes: [],
	showDifferencesOnly: false
});

const ComparisonDispatchContext = createContext<React.Dispatch<ComparisonAction>>(() => {
});

export function ComparisonProvider({children, filters, data, footnotes}: PropsWithChildren<ComparisonProviderProps>) {
	const [comparison, dispatch] = useImmerReducer(
		comparisonReducer,
		{filters: filters, data: data, filteredData: data, footnotes: footnotes, showDifferencesOnly: false}
	);

	useApplySearchParams(comparison, dispatch);

	return (
		<ComparisonContext.Provider value={comparison}>
			<ComparisonDispatchContext.Provider value={dispatch}>
				{children}
			</ComparisonDispatchContext.Provider>
		</ComparisonContext.Provider>
	);
}

export function useComparison(): ComparisonState {
	return useContext(ComparisonContext);
}

export function useComparisonDispatch(): React.Dispatch<ComparisonAction> {
	return useContext(ComparisonDispatchContext);
}

function comparisonReducer(draft: ComparisonState, action: ComparisonAction): ComparisonState {
	if (action.type === ComparisonActionType.BatchApplyActions) {
		applyActions(draft, (action as BatchApplyActions).actions);
	} else {
		applyActions(draft, [action]);
	}
	return draft;
}

function applyActions(draft: ComparisonState, actions: ComparisonAction[]) {
	let deferredApplyFilters = false;

	for (const action of actions) {
		switch (action.type) {
			case ComparisonActionType.ToggleFilter:
				deferredApplyFilters = true;
				applyToggleFilter(draft, action as ToggleFilter);
				break;
			case ComparisonActionType.ToggleShowDifferencesOnly:
				applyToggleShowDifferencesOnly(draft, action as ToggleShowDifferencesOnly);
				break;
			default:
				throw new Error(`Unknown action: ${action}`);
		}
	}

	if (deferredApplyFilters) {
		draft.filteredData = applyFilters(draft.filters, draft.data);
	}
}

function applyToggleFilter(draft: ComparisonState, action: ToggleFilter): void {
	for (const filter of draft.filters) {
		if (filter.hasOptionWithLabel(action.optionLabel)) {
			filter.setOptionSelectedByLabel(action.optionLabel, action.active);
		}
	}
}

function applyToggleShowDifferencesOnly(draft: ComparisonState, action: ToggleShowDifferencesOnly): void {
	draft.showDifferencesOnly = action.on;
}
