import React, {createContext, PropsWithChildren, useContext} from "react";
import {useImmerReducer} from "use-immer";
import {Model} from "@/src/modelTypes";

type ComparisonProviderProps = {
	filters: Model.Filter[]
	data: Model.FeatureComparison[]
	footnotes: Model.Footnote[]
}

type ComparisonState = {
	filters: Model.Filter[]
	data: Model.FeatureComparison[]
	filteredData: Model.FeatureComparison[]
	footnotes: Model.Footnote[],
	showDifferencesOnly: boolean
}

enum ComparisonActionType {
	ToggleShowDifferencesOnly = "TOGGLE_SHOW_DIFFERENCES_ONLY",
	ApplyCheckboxFilter = "APPLY_FILTER"
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

export class ApplyCheckboxFilter implements ComparisonAction {
	type = ComparisonActionType.ApplyCheckboxFilter;
	filterId: string;
	checked: boolean;

	constructor(filterId: string, checked: boolean) {
		this.filterId = filterId;
		this.checked = checked;
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
	switch (action.type) {
		case ComparisonActionType.ToggleShowDifferencesOnly:
			draft.showDifferencesOnly = (action as ToggleShowDifferencesOnly).on;
			return draft;
		case ComparisonActionType.ApplyCheckboxFilter:
			const filterAction = action as ApplyCheckboxFilter;
			for (const filter of draft.filters) {
				for (const option of filter.options) {
					if (option.id === filterAction.filterId) {
						option.checked = filterAction.checked;
						return draft;
					}
				}
			}
			return draft;
	}

	return draft;
}

