import React, {PropsWithChildren} from "react";
import {Model} from "../../src/modelTypes";

type FeaturePresenceProps = {
	present: Model.Present
}

type FeatureProps = {
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

export function Feature({name, values, children}: PropsWithChildren<FeatureProps>) {
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
		<div className="feature grid gap-4 divide-x" data-cy={name}
			 style={{gridTemplateColumns: `repeat(${features.length + 1}, 12rem)`}}>
			<div className="py-2">
				<span className="feature-name">{name}</span>
				<span>{children}</span>
			</div>
			{features}
		</div>
	);
}
