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
import { useShowDifferencesOnly } from "@/hooks/useShowDifferencesOnly";
import { ComparisonSection } from "@/components/comparison/comparisonSection";

export type OtherPlatformsFeaturesSlice = Pick<
	Model.FeatureComparison,
	"id" | "aixPPC" | "solarisSPARC" | "solarisx64"
>;

type OtherPlatformsSectionProps = {
	productData: OtherPlatformsFeaturesSlice[];
	showDifferencesOnly: boolean;
};

export function OtherPlatformsSection({
	productData,
	showDifferencesOnly,
}: OtherPlatformsSectionProps) {
	const aixPPC = productData.map((product) => ({
		...product.aixPPC,
		id: product.id,
	}));
	const solarisSPARC = productData.map((product) => ({
		...product.solarisSPARC,
		id: product.id,
	}));
	const solarisx64 = productData.map((product) => ({
		...product.solarisx64,
		id: product.id,
	}));
	const [showSection, showFeatures] = useShowDifferencesOnly(showDifferencesOnly, {
		aixPPC: aixPPC,
		solarisSPARC: solarisSPARC,
		solarisx64: solarisx64,
	});

	if (!showSection) {
		return <></>;
	}

	return (
		<ComparisonSection id="other" label="Platforms: Other">
			{showFeatures.aixPPC && <Feature id="aix-ppc" name="AIX, PPC" values={aixPPC} />}
			{showFeatures.solarisSPARC && (
				<Feature id="solaris-sparc" name="Solaris, SPARC" values={solarisSPARC} />
			)}
			{showFeatures.solarisx64 && (
				<Feature id="solaris-x64" name="Solaris, x86, 64-bit" values={solarisx64} />
			)}
		</ComparisonSection>
	);
}
