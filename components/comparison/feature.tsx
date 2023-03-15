import React, {PropsWithChildren} from "react";
import {Model} from "../../src/modelTypes";
import {FeatureExplanation} from "./featureExplanation";
import {FeaturePresence} from "./featurePresence";

type FeatureProps = {
	id: string,
	name: string,
	values: (Model.FeaturePresence & Model.Keyable)[] | (Model.FeatureDescription & Model.Keyable)[],
}

export function Feature({id, name, values, children}: PropsWithChildren<FeatureProps>) {
	const features = values.map(value => {
		return (
			<div key={value.id} className="feature-value py-2 px-4">
				{"present" in value &&
					<FeaturePresence present={value.present}/>
				}
				{"text" in value &&
					value.text
				}
			</div>
		);
	});

	return (
		<div id={id} className="feature grid divide-x"
			 style={{gridTemplateColumns: `repeat(${features.length + 1}, 12rem)`}}>
			<div className="group inline-flex items-center py-2">
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
