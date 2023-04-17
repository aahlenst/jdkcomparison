/*
 * Copyright 2023 the original author or authors.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */
import React from "react";
import { TechnologiesSection } from "@/components/comparison/technologiesSection";
import { useComparison } from "@/components/comparison/comparisonContext";
import { ProductHeaders } from "@/components/comparison/productHeaders";
import { SupportSection } from "@/components/comparison/supportSection";
import { PropertiesSection } from "@/components/comparison/propertiesSection";
import { LicensingSection } from "@/components/comparison/licensingSection";
import { CertificationsSection } from "@/components/comparison/certificationsSection";
import { CustomisationsSection } from "@/components/comparison/customisationsSection";
import { GarbageCollectorsSection } from "@/components/comparison/garbageCollectorsSection";
import { WindowsSection } from "@/components/comparison/windowsSection";
import { MacSection } from "@/components/comparison/macSection";
import { LinuxSection } from "@/components/comparison/linuxSection";
import { OtherPlatformsSection } from "@/components/comparison/otherPlatformsSection";
import { SecuritySection } from "@/components/comparison/securitySection";
import { ComparisonMessage } from "@/components/comparison/comparisonMessage";
import { InformationSection } from "@/components/comparison/informationSection";

export function ComparisonTable() {
	const comparison = useComparison();

	if (comparison.filteredData.length < 1) {
		return <ComparisonMessage message="No JDKs match your selection." />;
	}

	return (
		<>
			<div className="relative top-12 w-max px-2 sm:px-6 lg:px-8 [&>section:not(:last-child)]:border-b [&>section]:py-2">
				<ProductHeaders headers={comparison.filteredData} />
				<PropertiesSection
					productData={comparison.filteredData}
					showDifferencesOnly={comparison.showDifferencesOnly}
				/>
				<TechnologiesSection
					productData={comparison.filteredData}
					showDifferencesOnly={comparison.showDifferencesOnly}
				/>
				<GarbageCollectorsSection
					productData={comparison.filteredData}
					showDifferencesOnly={comparison.showDifferencesOnly}
				/>
				<LinuxSection
					productData={comparison.filteredData}
					showDifferencesOnly={comparison.showDifferencesOnly}
				/>
				<MacSection
					productData={comparison.filteredData}
					showDifferencesOnly={comparison.showDifferencesOnly}
				/>
				<WindowsSection
					productData={comparison.filteredData}
					showDifferencesOnly={comparison.showDifferencesOnly}
				/>
				<OtherPlatformsSection
					productData={comparison.filteredData}
					showDifferencesOnly={comparison.showDifferencesOnly}
				/>
				<CertificationsSection
					productData={comparison.filteredData}
					showDifferencesOnly={comparison.showDifferencesOnly}
				/>
				<CustomisationsSection
					productData={comparison.filteredData}
					showDifferencesOnly={comparison.showDifferencesOnly}
				/>
				<LicensingSection
					productData={comparison.filteredData}
					showDifferencesOnly={comparison.showDifferencesOnly}
				/>
				<SecuritySection
					productData={comparison.filteredData}
					showDifferencesOnly={comparison.showDifferencesOnly}
				/>
				<SupportSection
					productData={comparison.filteredData}
					showDifferencesOnly={comparison.showDifferencesOnly}
				/>
				<InformationSection
					productData={comparison.filteredData}
					showDifferencesOnly={comparison.showDifferencesOnly}
				/>
			</div>
			{/* Portal anchor for modals, popovers, etc. Without it, it is impossible to layer modals, popovers on top
			    of sticky elements. See usage and explanation in clientOnlyPortal.tsx. */}
			<div id="comparison-modals"></div>
		</>
	);
}
