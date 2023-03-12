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
		<div className="overflow-x-auto">
			<input type="checkbox" id="show-differences-only" name="show-differences-only"
				   onChange={(e) => dispatch(new ToggleShowDifferencesOnly(e.target.checked))}/> Show differences only
			<TechnologiesSection productData={comparison.filteredData}
								 showDifferencesOnly={comparison.showDifferencesOnly}/>
		</div>
	);
}

