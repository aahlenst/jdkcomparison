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
import { Model } from "@/src/modelTypes";
import { useShowDifferencesOnly } from "@/hooks/useShowDifferencesOnly";
import { ComparisonSection } from "@/components/comparison/comparisonSection";
import { Feature } from "@/components/comparison/feature";
import React from "react";

export type SecurityFeaturesSlice = Pick<
	Model.FeatureComparison,
	"id" | "sbom"
>;

type SecuritySectionProps = {
	productData: SecurityFeaturesSlice[];
	showDifferencesOnly: boolean;
};

export function SecuritySection({
	productData,
	showDifferencesOnly,
}: SecuritySectionProps) {
	const sbom = productData.map((product) => ({
		...product.sbom,
		id: product.id,
	}));
	const [showSection, showFeatures] = useShowDifferencesOnly(
		showDifferencesOnly,
		{ sbom: sbom }
	);

	if (!showSection) {
		return <></>;
	}

	return (
		<ComparisonSection id="security" label="Security">
			{showFeatures.sbom && (
				<Feature id="security-sbom" name="SBOM" values={sbom}>
					Indicates whether a{" "}
					<a href="https://ntia.gov/page/software-bill-materials">
						Software Bill of Materials
					</a>{" "}
					(SBOM) is published for the JDK.
				</Feature>
			)}
		</ComparisonSection>
	);
}
