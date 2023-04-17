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
import { Feature } from "@/components/comparison/feature";
import { Model } from "@/src/modelTypes";
import { ComparisonSection } from "./comparisonSection";
import { useShowDifferencesOnly } from "@/hooks/useShowDifferencesOnly";

export type CustomisationsFeaturesSlice = Pick<
	Model.FeatureComparison,
	"id" | "editions" | "customisations" | "notableFeatures"
>;

type CustomisationsSectionProps = {
	productData: CustomisationsFeaturesSlice[];
	showDifferencesOnly: boolean;
};

export function CustomisationsSection({
	productData,
	showDifferencesOnly,
}: CustomisationsSectionProps) {
	const editions = productData.map((product) => ({
		...product.editions,
		id: product.id,
	}));
	const customisations = productData.map((product) => ({
		...product.customisations,
		id: product.id,
	}));
	const notableFeatures = productData.map((product) => ({
		...product.notableFeatures,
		id: product.id,
	}));
	const [showSection, showFeatures] = useShowDifferencesOnly(showDifferencesOnly, {
		editions: editions,
		customisations: customisations,
		notableFeatures: notableFeatures,
	});

	if (!showSection) {
		return <></>;
	}

	return (
		<ComparisonSection id="customisations" label="Customisations">
			{showFeatures.editions && (
				<Feature id="customisations-editions" name="Editions" values={editions} />
			)}
			{showFeatures.customisations && (
				<Feature
					id="customisations-customisations"
					name="Customisations"
					values={customisations}
				>
					Level of customisations applied to OpenJDK baseline. Considers everything from
					bug fixes to user-facing features except ports (for ports, see platform
					support).
				</Feature>
			)}
			{showFeatures.notableFeatures && (
				<Feature
					id="customisations-notable-features"
					name="Notable Features"
					values={notableFeatures}
				>
					Limited to features otherwise not found in JDKs offered by other vendors.
				</Feature>
			)}
		</ComparisonSection>
	);
}
