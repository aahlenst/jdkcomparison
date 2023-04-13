import React from "react";
import { Feature } from "@/components/comparison/feature";
import { Model } from "@/src/modelTypes";
import { ComparisonSection } from "./comparisonSection";
import { useShowDifferencesOnly } from "@/hooks/useShowDifferencesOnly";

type TechnologiesSectionProps = {
	productData: Model.FeatureComparison[];
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
	const [showSection, showFeatures] = useShowDifferencesOnly(
		showDifferencesOnly,
		{ jfx: jfx, jfr: jfr, jaws: jaws }
	);

	if (!showSection) {
		return <></>;
	}

	return (
		<ComparisonSection id="technologies" label="Technologies">
			{showFeatures.jfx && (
				<Feature id="technologies-jfx" name="JavaFX" values={jfx}>
					JavaFX is a GUI toolkit that was part of Oracle JDK until
					Oracle JDK 10. Since then, it was unbundled and the{" "}
					<a href="https://blogs.oracle.com/java/post/the-future-of-javafx-and-other-java-client-roadmap-updates">
						development has moved to the OpenJFX project
					</a>
					. <a href="https://openjfx.io/">OpenJFX</a> is available as
					a separate download. Developers are supposed to ship it with
					their applications.
				</Feature>
			)}
			{showFeatures.jfr && (
				<Feature
					id="technologies-jfr"
					name="Flight Recorder"
					values={jfr}
				>
					Flight Recorder (JFR) is a low-overhead data collection
					framework for troubleshooting Java applications. It was a
					paid feature of Oracle JDK. JFR has been{" "}
					<a href="https://openjdk.org/jeps/328">
						open-sourced as part of JDK 11
					</a>{" "}
					in 2018 and was subsequently backported to JDK 8.
				</Feature>
			)}
			{showFeatures.jaws && (
				<Feature
					id="technologies-jaws"
					name="Java Web Start"
					values={jaws}
				/>
			)}
		</ComparisonSection>
	);
}
