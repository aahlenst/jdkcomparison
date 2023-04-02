import {useRouter} from "next/router";
import {ComparisonState, useComparison} from "@/components/comparison/comparisonContext";
import {remove} from "../src/utils";

export type SearchParams = {
	[key: string]: undefined | string | string[]
}

interface SearchParamsAction {
	type: SearchParamsActionType
}

enum SearchParamsActionType {
	ApplyFilter = "APPLY_FILTER"
}

export class ApplyFilter implements SearchParamsAction {
	type = SearchParamsActionType.ApplyFilter;

	filterId: string;

	option: string;

	active: boolean;

	constructor(filterId: string, option: string, active: boolean) {
		this.filterId = filterId;
		this.option = option;
		this.active = active;
	}
}

export function usePropagateToSearchParams() {
	const router = useRouter();
	const comparison = useComparison();

	const handleSearchParamsAction = (action: SearchParamsAction) => {
		let searchParams: SearchParams = {};
		switch (action.type) {
			case SearchParamsActionType.ApplyFilter:
				searchParams = handleApplyFilter(action as ApplyFilter, comparison);
				break;
			default:
				throw new Error(`Unknown action: ${action}`);
		}

		async function handleRouterChange() {
			await router.push({query: searchParams}, undefined, {shallow: true});
		}

		void handleRouterChange();
	};

	return handleSearchParamsAction;
}

export function handleApplyFilter(action: ApplyFilter, comparison: ComparisonState): SearchParams {
	const searchParams: SearchParams = {};
	for (const filter of comparison.filters) {
		let activeOptions = filter.activeOptions();

		if (filter.id == action.filterId && filter.hasOptionWithLabel(action.option)) {
			if (action.active) {
				activeOptions.push(action.option);
			} else {
				activeOptions = remove(activeOptions, item => item === action.option);
			}
		}

		if (activeOptions.length === 0) {
			continue;
		}

		searchParams[filter.id] = activeOptions;
	}

	return searchParams;
}
