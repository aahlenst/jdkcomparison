import React, {PropsWithChildren, ReactNode} from "react";
import {FeaturePresence, FeatureText} from "@/src/comparisonTypes";
import {Keyable} from "@/src/keyable";

type FeatureProps = {
	name: string,
	values: (FeaturePresence & Keyable)[] | (FeatureText & Keyable)[],
}

export function Feature({name, values, children}: PropsWithChildren<FeatureProps>) {
	const features = values.map(value => {
		return (
			<React.Fragment key={value.id}>
				{"present" in value &&
					<div className="featureValue">{value.present}</div>
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
