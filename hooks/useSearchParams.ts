import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {ApplyFilterFromQueryParameter, ComparisonAction} from "../components/comparison/comparisonContext";

function extractFilterLabels(searchParamValues: undefined | string | string[]) {
	let labels = new Set<string>();

	if (searchParamValues === undefined) {
		return labels;
	}

	if (typeof searchParamValues == "string") {
		labels.add(searchParamValues);
		return labels;
	}

	for (const option of searchParamValues) {
		labels.add(option);
	}

	return labels;
}

export function useSearchParams(validFilterIDs: Set<string>, dispatch: React.Dispatch<ComparisonAction>) {
	const router = useRouter();

	useEffect(() => {
		if (!router.isReady) {
			return;
		}

		for (const filterID of Object.keys(router.query)) {
			if (!validFilterIDs.has(filterID)) {
				continue;
			}

			const filterLabels = extractFilterLabels(router.query[filterID]);
			for (const filterLabel of filterLabels) {
				dispatch(new ApplyFilterFromQueryParameter(filterID, filterLabel));
			}
		}
	}, [validFilterIDs, dispatch, router]);
}
