import React from "react";
import {Comparison} from "@/src/comparisonTypes";
import {TechnologiesSection} from "@/components/comparison/technologiesSection";

type ComparisonTableProps = {
	productData: Comparison.FeatureComparison[]
}

export function ComparisonTable({productData}: ComparisonTableProps) {
	return (
		<>
			<TechnologiesSection productData={productData}/>
		</>
	);
}

