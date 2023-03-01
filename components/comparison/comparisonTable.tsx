import React from "react";
import {ProductData} from "@/src/comparisonTypes";
import {TechnologiesSection} from "@/components/comparison/technologiesSection";

type ComparisonTableProps = {
	productData: ProductData[]
}

export function ComparisonTable({productData}: ComparisonTableProps) {
	return (
		<>
			<TechnologiesSection productData={productData}/>
		</>
	);
}

