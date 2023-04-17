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

type CertificationsSectionProps = {
	productData: Model.FeatureComparison[];
	showDifferencesOnly: boolean;
};

export function CertificationsSection({
	productData,
	showDifferencesOnly,
}: CertificationsSectionProps) {
	const aqavit = productData.map((product) => ({
		...product.aqavit,
		id: product.id,
	}));
	const tck = productData.map((product) => ({
		...product.tck,
		id: product.id,
	}));
	const [showSection, showFeatures] = useShowDifferencesOnly(showDifferencesOnly, {
		aqavit: aqavit,
		tck: tck,
	});

	if (!showSection) {
		return <></>;
	}

	return (
		<ComparisonSection id="certifications" label="Certifications">
			{showFeatures.aqavit && (
				<Feature id="certifications-aqavit" name="Eclipse AQAvit" values={aqavit}>
					<a href="https://adoptium.net/de/aqavit/">Eclipse AQAvit</a> tests whether a
					Java runtime is ready for production use. Tested quality criteria include
					performance, security, resilience and endurance, and the ability to pass a
					variety of application test suites.
				</Feature>
			)}
			{showFeatures.tck && (
				<Feature id="certifications-tck" name="TCK for Java SE" values={tck}>
					The{" "}
					<a href="https://openjdk.org/groups/conformance/JckAccess/">TCK for Java SE</a>{" "}
					(also: JCK) ensures the compliance of a runtime with the Java SE specification.
					Only runtimes that have passed the TCK for Java SE may claim compatibility with
					Java SE and to be Java implementations.
				</Feature>
			)}
		</ComparisonSection>
	);
}
