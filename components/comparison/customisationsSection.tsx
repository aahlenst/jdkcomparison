import React from "react";
import { Feature } from "@/components/comparison/feature";
import { Model } from "@/src/modelTypes";
import { ComparisonSection } from "./comparisonSection";
import { useShowDifferencesOnly } from "@/hooks/useShowDifferencesOnly";

type CustomisationsSectionProps = {
	productData: Model.FeatureComparison[];
	showDifferencesOnly: boolean;
};

export function CustomisationsSection({
	productData,
	showDifferencesOnly,
}: CustomisationsSectionProps) {
	const editions = productData.map((product) => ({
		...product.editions,
		id: product.id,
	}));
	const customisations = productData.map((product) => ({
		...product.customisations,
		id: product.id,
	}));
	const notableFeatures = productData.map((product) => ({
		...product.notableFeatures,
		id: product.id,
	}));
	const [showSection, showFeatures] = useShowDifferencesOnly(
		showDifferencesOnly,
		{
			editions: editions,
			customisations: customisations,
			notableFeatures: notableFeatures,
		}
	);

	if (!showSection) {
		return <></>;
	}

	return (
		<ComparisonSection id="customisations" label="Customisations">
			{showFeatures.editions && (
				<Feature
					id="customisations-editions"
					name="Editions"
					values={editions}
				/>
			)}
			{showFeatures.customisations && (
				<Feature
					id="customisations-customisations"
					name="Customisations"
					values={customisations}
				>
					Level of customisations applied to OpenJDK baseline.
					Considers everything from bug fixes to user-facing features
					except ports (for ports, see platform support).
				</Feature>
			)}
			{showFeatures.notableFeatures && (
				<Feature
					id="customisations-notable-features"
					name="Notable Features"
					values={notableFeatures}
				>
					Limited to features otherwise not found in JDKs offered by
					other vendors.
				</Feature>
			)}
		</ComparisonSection>
	);
}
