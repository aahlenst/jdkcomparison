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
		<>
			<div
				className="relative top-12 w-max px-2 sm:px-6 lg:px-8 [&>section:not(:last-child)]:border-b [&>section]:py-4">
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
			{/* Portal anchor for modals, popovers, etc. Without it, it is impossible to layer modals, popovers on top
			    of sticky elements. See usage and explanation in clientOnlyPortal.tsx. */}
			<div id="comparison-modals"></div>
		</>
	);
}

