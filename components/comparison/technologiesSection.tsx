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
import Link from "next/link";

export type TechnologiesFeaturesSlice = Pick<
	Model.FeatureComparison,
	"id" | "jfx" | "jfr" | "jaws"
>;

type TechnologiesSectionProps = {
	productData: TechnologiesFeaturesSlice[];
	showDifferencesOnly: boolean;
};

export function TechnologiesSection({
	productData,
	showDifferencesOnly,
}: TechnologiesSectionProps) {
	const jfx = productData.map((product) => ({
		...product.jfx,
		id: product.id,
	}));
	const jfr = productData.map((product) => ({
		...product.jfr,
		id: product.id,
	}));
	const jaws = productData.map((product) => ({
		...product.jaws,
		id: product.id,
	}));
	const [showSection, showFeatures] = useShowDifferencesOnly(showDifferencesOnly, {
		jfx: jfx,
		jfr: jfr,
		jaws: jaws,
	});

	if (!showSection) {
		return <></>;
	}

	return (
		<ComparisonSection id="technologies" label="Technologies">
			{showFeatures.jfx && (
				<Feature id="technologies-jfx" name="JavaFX" values={jfx}>
					JavaFX is a GUI toolkit that was part of Oracle JDK until Oracle JDK 10. Please
					see the{" "}
					<Link href="/faq/#what-are-my-options-if-i-need-javafx">
						FAQ entry about replacements for JavaFX
					</Link>{" "}
					for further information.
				</Feature>
			)}
			{showFeatures.jfr && (
				<Feature id="technologies-jfr" name="Flight Recorder" values={jfr}>
					Flight Recorder (JFR) is a low-overhead data collection framework for
					troubleshooting Java applications. It was a paid feature of Oracle JDK. JFR has
					been <a href="https://openjdk.org/jeps/328">open-sourced as part of JDK 11</a>{" "}
					in 2018 and was subsequently backported to JDK 8.
				</Feature>
			)}
			{showFeatures.jaws && (
				<Feature id="technologies-jaws" name="Java Web Start" values={jaws}>
					Java Web Start allows to start applications directly from the internet using
					JNLP files. It was part of Oracle JDK. The last maintained version containing
					Java Web Start is Oracle JDK 8. Please see the{" "}
					<Link href="/faq/#what-are-my-options-if-i-need-java-web-start">
						FAQ entry about replacements for Java Web Start
					</Link>
					.
				</Feature>
			)}
		</ComparisonSection>
	);
}
