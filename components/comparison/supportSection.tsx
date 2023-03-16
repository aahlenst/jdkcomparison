import React from "react";
import {Feature} from "@/components/comparison/feature";
import {Model} from "@/src/modelTypes";
import {ComparisonSection} from "./comparisonSection";
import {useShowDifferencesOnly} from "@/hooks/useShowDifferencesOnly";

type SupportSectionProps = {
	productData: Model.FeatureComparison[],
	showDifferencesOnly: boolean
}

export function SupportSection({productData, showDifferencesOnly}: SupportSectionProps) {
	const eolDate = productData.map(product => ({...product.eolDate, id: product.id}));
	const paidSupport = productData.map(product => ({...product.paidSupport, id: product.id}));
	const [showSection, showFeatures] = useShowDifferencesOnly(showDifferencesOnly, {eolDate: eolDate, paidSupport: paidSupport});

	if (!showSection) {
		return (<></>);
	}

	return (
		<ComparisonSection id="support" label="Support">
			{showFeatures.eolDate &&
				<Feature id="support-eol-date" name="Patches until" values={eolDate}>
					Date (Year-Month) until the JDK receives patches from the vendor.
				</Feature>
			}
			{showFeatures.paidSupport &&
				<Feature id="support-paid" name="Paid support" values={paidSupport}/>
			}
		</ComparisonSection>
	);
}
