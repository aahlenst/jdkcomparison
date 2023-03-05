import React, {PropsWithChildren} from "react";
import {Model} from "../../src/modelTypes";
import {Keyable} from "../../src/keyable";

type FeaturePresenceProps = {
	present: Model.Present
}

type FeatureProps = {
	name: string,
	values: (Model.FeaturePresence & Keyable)[] | (Model.FeatureDescription & Keyable)[],
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
		<div className="featureValue">{presentText}</div>
	);
}

export function Feature({name, values, children}: PropsWithChildren<FeatureProps>) {
	const features = values.map(value => {
		return (
			<React.Fragment key={value.id}>
				{"present" in value &&
					<FeaturePresence present={value.present}/>
				}
				{"text" in value &&
					<div className="featureValue">{value.text}</div>
				}
			</React.Fragment>
		);
	});

	return (
		<div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
			<div>
				<span className="featureName">{name}</span>
				<span>{children}</span>
			</div>
			{features}
		</div>
	);
}
