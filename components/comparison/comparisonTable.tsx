import React from "react";
import {TechnologiesSection} from "@/components/comparison/technologiesSection";
import {useComparison} from "@/components/comparison/comparisonContext";

export function ComparisonTable() {
	const comparison = useComparison();

	return (
		<>
			<TechnologiesSection productData={comparison.filteredData}/>
		</>
	);
}

