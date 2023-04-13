import { Model } from "@/src/modelTypes";
import { useShowDifferencesOnly } from "@/hooks/useShowDifferencesOnly";
import { ComparisonSection } from "@/components/comparison/comparisonSection";
import { Feature } from "@/components/comparison/feature";
import React from "react";

type PropertiesSectionProps = {
	productData: Model.FeatureComparison[];
	showDifferencesOnly: boolean;
};

export function PropertiesSection({
	productData,
	showDifferencesOnly,
}: PropertiesSectionProps) {
	const featureVersion = productData.map((product) => ({
		text: product.version.toString(),
		id: product.id,
	}));
	const vm = productData.map((product) => ({
		...product.virtualMachine,
		id: product.id,
	}));
	const classLibraries = productData.map((product) => ({
		...product.classLibraries,
		id: product.id,
	}));
	const [showSection, showFeatures] = useShowDifferencesOnly(
		showDifferencesOnly,
		{
			featureVersion: featureVersion,
			vm: vm,
			classLibraries: classLibraries,
		}
	);

	if (!showSection) {
		return <></>;
	}

	return (
		<ComparisonSection id="properties" label="Properties">
			{showFeatures.featureVersion && (
				<Feature
					id="properties-feature-version"
					name="Feature Version"
					values={featureVersion}
				/>
			)}
			{showFeatures.vm && (
				<Feature
					id="properties-vm"
					name="Virtual Machine"
					values={vm}
				/>
			)}
			{showFeatures.classLibraries && (
				<Feature
					id="properties-class-libraries"
					name="Class Libraries"
					values={classLibraries}
				/>
			)}
		</ComparisonSection>
	);
}
