import { Model } from "@/src/modelTypes";
import { useShowDifferencesOnly } from "@/hooks/useShowDifferencesOnly";
import { ComparisonSection } from "@/components/comparison/comparisonSection";
import { Feature } from "@/components/comparison/feature";
import React from "react";

type LicensingSectionProps = {
	productData: Model.FeatureComparison[];
	showDifferencesOnly: boolean;
};

export function LicensingSection({
	productData,
	showDifferencesOnly,
}: LicensingSectionProps) {
	const license = productData.map((product) => ({
		...product.license,
		id: product.id,
	}));
	const freeInDev = productData.map((product) => ({
		...product.freeInDevelopment,
		id: product.id,
	}));
	const freeInProd = productData.map((product) => ({
		...product.freeInProduction,
		id: product.id,
	}));
	const [showSection, showFeatures] = useShowDifferencesOnly(
		showDifferencesOnly,
		{ license: license, freeInDev: freeInDev, freeInProd: freeInProd }
	);

	if (!showSection) {
		return <></>;
	}

	return (
		<ComparisonSection id="licensing" label="Licensing">
			{showFeatures.license && (
				<Feature
					id="licensing-license"
					name="License"
					values={license}
				/>
			)}
			{showFeatures.freeInDev && (
				<Feature
					id="licensing-free-in-development"
					name="Free in Development"
					values={freeInDev}
				/>
			)}
			{showFeatures.freeInProd && (
				<Feature
					id="licensing-free-in-production"
					name="Free in Production"
					values={freeInProd}
				/>
			)}
		</ComparisonSection>
	);
}
