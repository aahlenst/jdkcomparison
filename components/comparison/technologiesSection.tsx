import React from "react";
import {Feature} from "@/components/comparison/feature";
import {Model} from "@/src/modelTypes";

type TechnologiesSectionProps = {
	productData: Model.FeatureComparison[]
}

function extractValue(feature: Model.FeaturePresence | Model.FeatureDescription): string {
	if ("present" in feature) {
		switch (feature.present) {
			case Model.Present.YES:
				return "yes";
			case Model.Present.PARTIALLY:
				return "partially";
			case Model.Present.NO:
				return "no";
			case Model.Present.UNKNOWN:
				return "unknown";
		}
	} else if ("text" in feature) {
		return feature.text;
	}

	throw Error("Unknown feature type");
}

export function TechnologiesSection({productData}: TechnologiesSectionProps) {
	const jfx = productData.map(product => ({...product.jfx, id: product.id}));
	const jfr = productData.map(product => ({...product.jfr, id: product.id}));

	function hasDifferences(values: Model.FeaturePresence[] | Model.FeatureDescription[]): boolean {
		return new Set(values.map(v => extractValue(v))).size > 1;
	}

	if (!([jfx, jfr].some(hasDifferences))) {
		return (<></>);
	}

	return (
		<section>
			<h2>Technologies</h2>
			{hasDifferences(jfx) &&
				<Feature name="JavaFX" values={jfx}>
					JavaFX was part of Oracle JDK until Oracle JDK 10. Since then, <a
					href="https://blogs.oracle.com/java/post/the-future-of-javafx-and-other-java-client-roadmap-updates">development
					has moved to the OpenJFX project</a>. <a href="https://openjfx.io/">OpenJFX</a> is available as a
					separate download.
				</Feature>
			}
			{hasDifferences(jfr) &&
				<Feature name="Flight Recorder (JFR)" values={jfr}>
					Flight Recorder (JFR) is a low-overhead data collection framework for troubleshooting Java
					applications. It was a proprietary feature of Oracle JDK. JFR has been <a
					href="https://openjdk.org/jeps/328">open-sourced as part of JDK 11</a> in 2018 and was subsequently
					backported to JDK 8.
				</Feature>
			}
		</section>
	);
}
