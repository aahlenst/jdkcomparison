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

export type MacFeaturesSlice = Pick<
	Model.FeatureComparison,
	"id" | "macx64" | "macAArch64" | "macInstallers"
>;

type MacSectionProps = {
	productData: MacFeaturesSlice[];
	showDifferencesOnly: boolean;
};

export function MacSection({ productData, showDifferencesOnly }: MacSectionProps) {
	const x64 = productData.map((product) => ({
		...product.macx64,
		id: product.id,
	}));
	const aarch64 = productData.map((product) => ({
		...product.macAArch64,
		id: product.id,
	}));
	const installers = productData.map((product) => ({
		...product.macInstallers,
		id: product.id,
	}));
	const [showSection, showFeatures] = useShowDifferencesOnly(showDifferencesOnly, {
		x64: x64,
		aarch64: aarch64,
		installers: installers,
	});

	if (!showSection) {
		return <></>;
	}

	return (
		<ComparisonSection id="mac" label="Platforms: macOS">
			{showFeatures.x64 && <Feature id="mac-x64" name="x86, 64-bit" values={x64} />}
			{showFeatures.aarch64 && (
				<Feature id="mac-aarch64" name="ARM, 64-bit" values={aarch64} />
			)}
			{showFeatures.installers && (
				<Feature id="mac-installers" name="Installers" values={installers} />
			)}
		</ComparisonSection>
	);
}
