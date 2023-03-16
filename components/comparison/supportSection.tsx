import React from "react";
import {Feature} from "@/components/comparison/feature";
import {Model} from "@/src/modelTypes";
import {ComparisonSection} from "./comparisonSection";

type SupportSectionProps = {
	productData: Model.FeatureComparison[],
	showDifferencesOnly: boolean
}

function extractValue(feature: Model.FeaturePresence | Model.FeatureDescription): string {
	if ("present" in feature) {
		switch (feature.present) {
			case Model.Present.YES:
				return "yes";
			case Model.Present.PARTIALLY:
				return "partially";
			case Model.Present.NO:
				return "no";
			case Model.Present.UNKNOWN:
				return "unknown";
		}
	} else if ("text" in feature) {
		return feature.text;
	}

	throw Error("Unknown feature type");
}

export function SupportSection({productData, showDifferencesOnly}: SupportSectionProps) {
	const eolDate = productData.map(product => ({...product.eolDate, id: product.id}));
	const paidSupport = productData.map(product => ({...product.paidSupport, id: product.id}));

	function hasDifferences(values: Model.FeaturePresence[] | Model.FeatureDescription[]): boolean {
		return new Set(values.map(v => extractValue(v))).size > 1;
	}

	if (showDifferencesOnly && !([eolDate, paidSupport].some(hasDifferences))) {
		return (<></>);
	}

	return (
		<ComparisonSection id="support" label="Support">
			{(!showDifferencesOnly || hasDifferences(eolDate)) &&
				<Feature id="support-eol-date" name="Patches until" values={eolDate}>
					Date (Year-Month) until the JDK receives patches from the vendor.
				</Feature>
			}
			{(!showDifferencesOnly || hasDifferences(paidSupport)) &&
				<Feature id="support-paid" name="Paid support" values={paidSupport}/>
			}
		</ComparisonSection>
	);
}
