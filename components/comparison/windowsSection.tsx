import React from "react";
import { Feature } from "@/components/comparison/feature";
import { Model } from "@/src/modelTypes";
import { useShowDifferencesOnly } from "@/hooks/useShowDifferencesOnly";
import { ComparisonSection } from "@/components/comparison/comparisonSection";

export type WindowsFeaturesSlice = Pick<
	Model.FeatureComparison,
	| "id"
	| "windowsx32"
	| "windowsx64"
	| "windowsAArch64"
	| "windowsInstallers"
	| "windowsContainerImages"
>;

type WindowsSectionProps = {
	productData: WindowsFeaturesSlice[];
	showDifferencesOnly: boolean;
};

export function WindowsSection({
	productData,
	showDifferencesOnly,
}: WindowsSectionProps) {
	const x32 = productData.map((product) => ({
		...product.windowsx32,
		id: product.id,
	}));
	const x64 = productData.map((product) => ({
		...product.windowsx64,
		id: product.id,
	}));
	const aarch64 = productData.map((product) => ({
		...product.windowsAArch64,
		id: product.id,
	}));
	const installers = productData.map((product) => ({
		...product.windowsInstallers,
		id: product.id,
	}));
	const containerImages = productData.map((product) => ({
		...product.windowsContainerImages,
		id: product.id,
	}));
	const [showSection, showFeatures] = useShowDifferencesOnly(
		showDifferencesOnly,
		{
			x32: x32,
			x64: x64,
			aarch64: aarch64,
			installers: installers,
			containerImages: containerImages,
		}
	);

	if (!showSection) {
		return <></>;
	}

	return (
		<ComparisonSection id="windows" label="Platforms: Windows">
			{showFeatures.x64 && (
				<Feature id="windows-x64" name="x86, 64-bit" values={x64} />
			)}
			{showFeatures.x32 && (
				<Feature id="windows-x32" name="x86, 32-bit" values={x32} />
			)}
			{showFeatures.aarch64 && (
				<Feature
					id="windows-aarch64"
					name="ARM, 64-bit"
					values={aarch64}
				/>
			)}
			{showFeatures.installers && (
				<Feature
					id="windows-installers"
					name="Installers"
					values={installers}
				/>
			)}
			{showFeatures.containerImages && (
				<Feature
					id="windows-container-images"
					name="Container Images"
					values={containerImages}
				/>
			)}
		</ComparisonSection>
	);
}
