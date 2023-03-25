import React from "react";
import {TechnologiesSection} from "@/components/comparison/technologiesSection";
import {useComparison} from "@/components/comparison/comparisonContext";
import {ProductHeaders} from "@/components/comparison/productHeaders";
import {SupportSection} from "@/components/comparison/supportSection";
import {PropertiesSection} from "@/components/comparison/propertiesSection";
import {LicensingSection} from "@/components/comparison/licensingSection";
import {CertificationsSection} from "@/components/comparison/certificationsSection";

export function ComparisonTable() {
	const comparison = useComparison();

	return (
		<div className="overflow-x-auto m-4 sm:m-6 divide-y space-y-4">
			<ProductHeaders headers={comparison.filteredData}/>
			<PropertiesSection productData={comparison.filteredData}
							   showDifferencesOnly={comparison.showDifferencesOnly}/>
			<TechnologiesSection productData={comparison.filteredData}
								 showDifferencesOnly={comparison.showDifferencesOnly}/>
			<CertificationsSection productData={comparison.filteredData}
								   showDifferencesOnly={comparison.showDifferencesOnly}/>
			<LicensingSection productData={comparison.filteredData}
							  showDifferencesOnly={comparison.showDifferencesOnly}/>
			<SupportSection productData={comparison.filteredData}
							showDifferencesOnly={comparison.showDifferencesOnly}/>
		</div>
	);
}

