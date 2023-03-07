import React from "react";
import {TechnologiesSection} from "@/components/comparison/technologiesSection";
import {
	ToggleShowDifferencesOnly,
	useComparison,
	useComparisonDispatch
} from "@/components/comparison/comparisonContext";

export function ComparisonTable() {
	const comparison = useComparison();
	const dispatch = useComparisonDispatch();

	return (
		<>
			<input type="checkbox" id="showDifferencesOnly" name="showDifferencesOnly"
				   onChange={(e) => dispatch(new ToggleShowDifferencesOnly(e.target.checked))}/> Show differences only
			<TechnologiesSection productData={comparison.filteredData}
								 showDifferencesOnly={comparison.showDifferencesOnly}/>
		</>
	);
}

