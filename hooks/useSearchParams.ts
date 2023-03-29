import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {ApplyFilterFromQueryParameter, ComparisonAction} from "../components/comparison/comparisonContext";

function extractFilterLabels(queryParameterValues: undefined | string | string[]) {
	let labels = new Set<string>();

	if (queryParameterValues === undefined) {
		return labels;
	}

	if (typeof queryParameterValues == "string") {
		labels.add(queryParameterValues);
		return labels;
	}

	for (const option of queryParameterValues) {
		labels.add(option);
	}

	return labels;
}

export function useSearchParams(filterIDs: Set<string>, dispatch: React.Dispatch<ComparisonAction>) {
	const router = useRouter();

	useEffect(() => {
		if (!router.isReady) {
			return;
		}

		for (const key of Object.keys(router.query)) {
			if (!filterIDs.has(key)) {
				continue;
			}

			const filterLabels = extractFilterLabels(router.query[key]);
			for (const val of filterLabels) {
				dispatch(new ApplyFilterFromQueryParameter(key, val));
			}
		}
	}, [router]);
}
