/*
 * Copyright 2023 the original author or authors.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import {
	ComparisonAction,
	ComparisonState,
	ToggleFilter,
} from "@/components/comparison/comparisonContext";
import { difference, symmetricDifference } from "../src/utils";

export type SearchParams = {
	[key: string]: undefined | string | string[];
};

export function useApplySearchParams(
	comparison: ComparisonState,
	dispatch: React.Dispatch<ComparisonAction[]>
) {
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
	dispatch: React.Dispatch<ComparisonAction[]>
) {
	const pendingActions: ComparisonAction[] = [];

	for (const filter of comparison.filters) {
		const activeOptions = filter.activeOptions();
		activeOptions.sort();

		let optionsRequestedBySearchParams: string[] = [];
		if (Object.hasOwn(searchParams, filter.id)) {
			optionsRequestedBySearchParams = extractFilterLabels(searchParams[filter.id])
				.filter((o) => filter.hasOptionWithLabel(o))
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
	dispatch(pendingActions);
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
