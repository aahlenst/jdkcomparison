import React, {PropsWithChildren} from "react";
import {Model} from "../../src/modelTypes";
import {FeatureExplanation} from "./featureExplanation";

type FeaturePresenceProps = {
	present: Model.Present
}

type FeatureProps = {
	id: string,
	name: string,
	values: (Model.FeaturePresence & Model.Keyable)[] | (Model.FeatureDescription & Model.Keyable)[],
}

function FeaturePresence({present}: FeaturePresenceProps) {
	let presentText: string;
	switch (present) {
		case Model.Present.YES:
			presentText = "yes";
			break;
		case Model.Present.PARTIALLY:
			presentText = "partially";
			break;
		case Model.Present.NO:
			presentText = "no";
			break;
		case Model.Present.UNKNOWN:
			presentText = "unknown";
			break;
		default:
			throw new Error(`Unknown presence: ${present}`);
	}

	return (
		<div className="feature-value py-2 px-4">{presentText}</div>
	);
}

export function Feature({id, name, values, children}: PropsWithChildren<FeatureProps>) {
	const features = values.map(value => {
		return (
			<React.Fragment key={value.id}>
				{"present" in value &&
					<FeaturePresence present={value.present}/>
				}
				{"text" in value &&
					<div className="feature-value py-2 px-4">{value.text}</div>
				}
			</React.Fragment>
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
