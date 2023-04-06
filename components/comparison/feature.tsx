import React, {PropsWithChildren} from "react";
import {Model} from "../../src/modelTypes";
import {FeatureExplanation} from "./featureExplanation";
import {FeaturePresence} from "./featurePresence";
import {FootnoteReference} from "./footnoteReference";

type FeatureProps = {
	id: string,
	name: string,
	values: (Model.FeaturePresence & Model.Keyable)[] | (Model.FeatureDescription & Model.Keyable)[],
}

export function Feature({id, name, values, children}: PropsWithChildren<FeatureProps>) {
	const features = values.map(value => {
		return (
			<div key={value.id} className="feature-value py-2 px-4 border-r last:border-r-transparent">
				{"present" in value &&
					<FeaturePresence present={value.present}/>
				}
				{"text" in value &&
					value.text
				}
				{"footnoteReference" in value &&
					<FootnoteReference footnoteReference={value.footnoteReference}/>
				}
			</div>
		);
	});

	return (
		<div id={id} className="feature grid overflow-visible"
			 style={{gridTemplateColumns: `repeat(${features.length + 1}, 12rem)`}}>
			<div className="sticky left-0 z-10 group inline-flex items-center bg-white pl-2 sm:pl-6 lg:pl-8 pr-2 border-r">
				<span className="feature-name mr-1 text-sm font-medium">{name}</span>
				{children &&
					<FeatureExplanation>
						{children}
					</FeatureExplanation>
				}
			</div>
			{features}
		</div>
	);
}
