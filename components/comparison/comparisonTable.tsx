import React from "react";
import {TechnologiesSection} from "@/components/comparison/technologiesSection";
import {useComparison} from "@/components/comparison/comparisonContext";
import {ProductHeaders} from "@/components/comparison/productHeaders";
import {SupportSection} from "@/components/comparison/supportSection";
import {PropertiesSection} from "@/components/comparison/propertiesSection";
import {LicensingSection} from "@/components/comparison/licensingSection";
import {CertificationsSection} from "@/components/comparison/certificationsSection";
import {CustomisationsSection} from "@/components/comparison/customisationsSection";

export function ComparisonTable() {
	const comparison = useComparison();

	return (
		<div className="relative top-12 overflow-auto ml-2 sm:ml-6 lg:ml-8">
			<div className="w-max divide-y space-y-4 py-2 sm:py-4 pr-2 sm:pr-6 lg:pr-8">
				<ProductHeaders headers={comparison.filteredData}/>
				<PropertiesSection productData={comparison.filteredData}
								   showDifferencesOnly={comparison.showDifferencesOnly}/>
				<TechnologiesSection productData={comparison.filteredData}
									 showDifferencesOnly={comparison.showDifferencesOnly}/>
				<CertificationsSection productData={comparison.filteredData}
									   showDifferencesOnly={comparison.showDifferencesOnly}/>
				<CustomisationsSection productData={comparison.filteredData}
									   showDifferencesOnly={comparison.showDifferencesOnly}/>
				<LicensingSection productData={comparison.filteredData}
								  showDifferencesOnly={comparison.showDifferencesOnly}/>
				<SupportSection productData={comparison.filteredData}
								showDifferencesOnly={comparison.showDifferencesOnly}/>
			</div>
		</div>
	);
}

