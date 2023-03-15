import React from "react";
import {TechnologiesSection} from "@/components/comparison/technologiesSection";
import {useComparison} from "@/components/comparison/comparisonContext";
import {ProductHeaders} from "@/components/comparison/productHeaders";

export function ComparisonTable() {
	const comparison = useComparison();

	return (
		<div className="overflow-x-auto m-4 sm:m-6 divide-y space-y-4">
			<ProductHeaders headers={comparison.filteredData}/>
			<TechnologiesSection productData={comparison.filteredData}
								 showDifferencesOnly={comparison.showDifferencesOnly}/>
		</div>
	);
}

