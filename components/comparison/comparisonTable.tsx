import React from "react";
import {Model} from "@/src/modelTypes";
import {TechnologiesSection} from "@/components/comparison/technologiesSection";

type ComparisonTableProps = {
	productData: Model.FeatureComparison[]
}

export function ComparisonTable({productData}: ComparisonTableProps) {
	return (
		<>
			<TechnologiesSection productData={productData}/>
		</>
	);
}

