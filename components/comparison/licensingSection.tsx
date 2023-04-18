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

export type LicensingFeaturesSlice = Pick<
	Model.FeatureComparison,
	"id" | "license" | "freeInDevelopment" | "freeInProduction"
>;

type LicensingSectionProps = {
	productData: LicensingFeaturesSlice[];
	showDifferencesOnly: boolean;
};

export function LicensingSection({ productData, showDifferencesOnly }: LicensingSectionProps) {
	const license = productData.map((product) => ({
		...product.license,
		id: product.id,
	}));
	const freeInDev = productData.map((product) => ({
		...product.freeInDevelopment,
		id: product.id,
	}));
	const freeInProd = productData.map((product) => ({
		...product.freeInProduction,
		id: product.id,
	}));
	const [showSection, showFeatures] = useShowDifferencesOnly(showDifferencesOnly, {
		license: license,
		freeInDev: freeInDev,
		freeInProd: freeInProd,
	});

	if (!showSection) {
		return <></>;
	}

	return (
		<ComparisonSection id="licensing" label="Licensing">
			{showFeatures.license && (
				<Feature id="licensing-license" name="License" values={license} />
			)}
			{showFeatures.freeInDev && (
				<Feature
					id="licensing-free-in-development"
					name="Free in Development"
					values={freeInDev}
				/>
			)}
			{showFeatures.freeInProd && (
				<Feature
					id="licensing-free-in-production"
					name="Free in Production"
					values={freeInProd}
				/>
			)}
		</ComparisonSection>
	);
}
