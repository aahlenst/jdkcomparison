import React, {useState} from "react";
import {Feature} from "@/components/comparison/feature";
import {Model} from "@/src/modelTypes";
import {SquareMinusIcon, SquarePlusIcon} from "@/components/icons";

type TechnologiesSectionProps = {
	productData: Model.FeatureComparison[],
	showDifferencesOnly: boolean
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

export function TechnologiesSection({productData, showDifferencesOnly}: TechnologiesSectionProps) {
	const [open, setOpen] = useState(true);

	const jfx = productData.map(product => ({...product.jfx, id: product.id}));
	const jfr = productData.map(product => ({...product.jfr, id: product.id}));
	const jaws = productData.map(product => ({...product.jaws, id: product.id}));

	function hasDifferences(values: Model.FeaturePresence[] | Model.FeatureDescription[]): boolean {
		return new Set(values.map(v => extractValue(v))).size > 1;
	}

	if (showDifferencesOnly && !([jfx, jfr, jaws].some(hasDifferences))) {
		return (<></>);
	}

	return (
		<section id="technologies" className="py-4">
			<button className="toggle-section flex inline-flex items-center" onClick={() => setOpen(!open)}>
				<h2 className="font-semibold">Technologies</h2>
				{open &&
					<SquareMinusIcon className="ml-2 h-4 w-4"/>
				}
				{!open &&
					<SquarePlusIcon className="ml-2 h-4 w-4"/>
				}
			</button>
			{(!showDifferencesOnly || hasDifferences(jfx)) && open &&
				<Feature id="technologies-jfx" name="JavaFX" values={jfx}>
					JavaFX is a GUI toolkit that was part of Oracle JDK until Oracle JDK 10. Since then, it was
					unbundled and the <a
					href="https://blogs.oracle.com/java/post/the-future-of-javafx-and-other-java-client-roadmap-updates">development
					has moved to the OpenJFX project</a>. <a href="https://openjfx.io/">OpenJFX</a> is available as a
					separate download.
				</Feature>
			}
			{(!showDifferencesOnly || hasDifferences(jfr)) && open &&
				<Feature id="technologies-jfr" name="Flight Recorder (JFR)" values={jfr}>
					Flight Recorder (JFR) is a low-overhead data collection framework for troubleshooting Java
					applications. It was a paid feature of Oracle JDK. JFR has been <a
					href="https://openjdk.org/jeps/328">open-sourced as part of JDK 11</a> in 2018 and was subsequently
					backported to JDK 8.
				</Feature>
			}
			{(!showDifferencesOnly || hasDifferences(jaws)) && open &&
				<Feature id="technologies-jaws" name="Java Web Start" values={jaws}/>
			}
		</section>
	);
}
