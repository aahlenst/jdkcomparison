import {Model} from "../../src/modelTypes";
import React from "react";
import {CircleHalfStrokeIcon, CircleIcon, MinusIcon, QuestionIcon} from "../icons";

type FeaturePresenceProps = {
	present: Model.Present
}

export function FeaturePresence({present}: FeaturePresenceProps) {
	let presenceIcon: JSX.Element;
	switch (present) {
		case Model.Present.YES:
			presenceIcon = <CircleIcon className="present-yes h-4 w-4"/>;
			break;
		case Model.Present.PARTIALLY:
			presenceIcon = <CircleHalfStrokeIcon className="present-partially h-4 w-4"/>;
			break;
		case Model.Present.NO:
			presenceIcon = <MinusIcon className="present-no h-4 w-4"/>;
			break;
		case Model.Present.UNKNOWN:
			presenceIcon = <QuestionIcon className="present-unknown h-4 w-4"/>;
			break;
		default:
			throw new Error(`Unknown presence: ${present}`);
	}

	return (
		<>
			{presenceIcon}
		</>
	);
}
