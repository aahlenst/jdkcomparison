import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {
	BatchApplyActions,
	ComparisonAction,
	ComparisonState,
	ToggleFilter
} from "@/components/comparison/comparisonContext";
import {difference, symmetricDifference} from "../src/utils";

export type SearchParams = {
	[key: string]: undefined | string | string[]
}

export function useApplySearchParams(comparison: ComparisonState, dispatch: React.Dispatch<ComparisonAction>) {
	const router = useRouter();

	useEffect(() => {
		if (!router.isReady) {
			return;
		}

		applySearchParamsToState(router.query, comparison, dispatch);
	}, [router, comparison, dispatch]);
}

export function applySearchParamsToState(
	searchParams: SearchParams,
	comparison: ComparisonState,
	dispatch: React.Dispatch<ComparisonAction>
) {
	const pendingActions: ComparisonAction[] = [];

	for (const filter of comparison.filters) {
		const activeOptions = filter.activeOptions();
		activeOptions.sort();

		let optionsRequestedBySearchParams: string[] = [];
		if (Object.hasOwn(searchParams, filter.id)) {
			optionsRequestedBySearchParams = extractFilterLabels(searchParams[filter.id])
				.filter(o => filter.hasOptionWithLabel(o))
				.sort();
		}

		// Search Params match internal state of filter. Therefore, no updates are required.
		if (symmetricDifference(activeOptions, optionsRequestedBySearchParams).length == 0) {
			continue;
		}

		const optionsToActivate = difference(optionsRequestedBySearchParams, activeOptions);
		const optionsToDisable = difference(activeOptions, optionsRequestedBySearchParams);

		for (const optionToActivate of optionsToActivate) {
			pendingActions.push(new ToggleFilter(filter.id, optionToActivate, true));
		}
		for (const optionToDisable of optionsToDisable) {
			pendingActions.push(new ToggleFilter(filter.id, optionToDisable, false));
		}
	}

	if (pendingActions.length < 1) {
		return;
	}
	dispatch(new BatchApplyActions(pendingActions));
}

function extractFilterLabels(searchParamValues: undefined | string | string[]): string[] {
	if (searchParamValues === undefined) {
		return [];
	}

	if (typeof searchParamValues == "string") {
		return [searchParamValues];
	}

	return searchParamValues;
}
