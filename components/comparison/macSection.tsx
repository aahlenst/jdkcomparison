import React from "react";
import {Feature} from "@/components/comparison/feature";
import {Model} from "@/src/modelTypes";
import {useShowDifferencesOnly} from "@/hooks/useShowDifferencesOnly";
import {ComparisonSection} from "@/components/comparison/comparisonSection";

type MacSectionProps = {
	productData: Model.FeatureComparison[],
	showDifferencesOnly: boolean
}

export function MacSection({productData, showDifferencesOnly}: MacSectionProps) {
	const x64 = productData.map(product => ({...product.macx64, id: product.id}));
	const aarch64 = productData.map(product => ({...product.macAArch64, id: product.id}));
	const installers = productData.map(product => ({...product.macInstallers, id: product.id}));
	const [showSection, showFeatures] = useShowDifferencesOnly(showDifferencesOnly, {
		x64: x64,
		aarch64: aarch64,
		installers: installers
	});

	if (!showSection) {
		return (<></>);
	}

	return (
		<ComparisonSection id="mac" label="Platforms: macOS">
			{showFeatures.x64 &&
				<Feature id="mac-x64" name="x86, 64-bit" values={x64}/>
			}
			{showFeatures.aarch64 &&
				<Feature id="mac-aarch64" name="ARM, 64-bit" values={aarch64}/>
			}
			{showFeatures.installers &&
				<Feature id="mac-installers" name="Installers" values={installers}/>
			}
		</ComparisonSection>
	);
}
