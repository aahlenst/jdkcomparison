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

export type InformationFeaturesSlice = Pick<
	Model.FeatureComparison,
	"id" | "countryOfOrigin" | "remarks"
>;

type InformationSectionProps = {
	productData: InformationFeaturesSlice[];
	showDifferencesOnly: boolean;
};

export function InformationSection({ productData, showDifferencesOnly }: InformationSectionProps) {
	const countryOfOrigin = productData.map((product) => ({
		text: product.countryOfOrigin,
		id: product.id,
	}));
	const remarks = productData.map((product) => ({
		...product.remarks,
		id: product.id,
	}));
	const [showSection, showFeatures] = useShowDifferencesOnly(showDifferencesOnly, {
		countryOfOrigin: countryOfOrigin,
		remarks: remarks,
	});

	if (!showSection) {
		return <></>;
	}

	return (
		<ComparisonSection id="information" label="Additional Information">
			{showFeatures.countryOfOrigin && (
				<Feature
					id="information-country-of-origin"
					name="Country of Origin"
					values={countryOfOrigin}
				>
					Country where the vendor has its headquarters.
				</Feature>
			)}
			{showFeatures.remarks && (
				<Feature id="information-remarks" name="Remarks" values={remarks} />
			)}
		</ComparisonSection>
	);
}
