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

export type PropertiesFeaturesSlice = Pick<
	Model.FeatureComparison,
	"id" | "version" | "virtualMachine" | "classLibraries"
>;

type PropertiesSectionProps = {
	productData: PropertiesFeaturesSlice[];
	showDifferencesOnly: boolean;
};

export function PropertiesSection({ productData, showDifferencesOnly }: PropertiesSectionProps) {
	const featureVersion = productData.map((product) => ({
		text: product.version.toString(),
		id: product.id,
	}));
	const vm = productData.map((product) => ({
		...product.virtualMachine,
		id: product.id,
	}));
	const classLibraries = productData.map((product) => ({
		...product.classLibraries,
		id: product.id,
	}));
	const [showSection, showFeatures] = useShowDifferencesOnly(showDifferencesOnly, {
		featureVersion: featureVersion,
		vm: vm,
		classLibraries: classLibraries,
	});

	if (!showSection) {
		return <></>;
	}

	return (
		<ComparisonSection id="properties" label="Properties">
			{showFeatures.featureVersion && (
				<Feature
					id="properties-feature-version"
					name="Feature Version"
					values={featureVersion}
				/>
			)}
			{showFeatures.vm && <Feature id="properties-vm" name="Virtual Machine" values={vm} />}
			{showFeatures.classLibraries && (
				<Feature
					id="properties-class-libraries"
					name="Class Libraries"
					values={classLibraries}
				/>
			)}
		</ComparisonSection>
	);
}
