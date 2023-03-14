import React from "react";
import {TechnologiesSection} from "@/components/comparison/technologiesSection";
import {
	ToggleShowDifferencesOnly,
	useComparison,
	useComparisonDispatch
} from "@/components/comparison/comparisonContext";
import {ProductHeaders} from "@/components/comparison/productHeaders";

export function ComparisonTable() {
	const comparison = useComparison();
	const dispatch = useComparisonDispatch();

	return (
		<div className="overflow-x-auto">
			<input type="checkbox" id="show-differences-only" name="show-differences-only"
				   onChange={(e) => dispatch(new ToggleShowDifferencesOnly(e.target.checked))}/> Show differences only
			<ProductHeaders headers={comparison.filteredData}/>
			<TechnologiesSection productData={comparison.filteredData}
								 showDifferencesOnly={comparison.showDifferencesOnly}/>
		</div>
	);
}

