import {Model} from "@/src/modelTypes";

type SectionFeatures = {
	[key: string]: Model.FeaturePresence[] | Model.FeatureDescription[];
};

type DisplayStatus = [boolean, { [key: string]: boolean }]

function hasDifferences(values: Model.FeaturePresence[] | Model.FeatureDescription[]): boolean {
	return new Set(values.map(v => extractValue(v))).size > 1;
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

export const useShowDifferencesOnly = (showDifferencesOnly: boolean, data: SectionFeatures): DisplayStatus => {
	const showFeatures: { [key: string]: boolean } = {};

	if (!showDifferencesOnly) {
		for (const key of Object.keys(data)) {
			showFeatures[key] = true;
		}
		return [true, showFeatures];
	}

	let anyDifferences = false;
	for (const key of Object.keys(data)) {
		showFeatures[key] = hasDifferences(data[key]);

		if (showFeatures[key]) {
			anyDifferences = true;
		}
	}

	return [anyDifferences, showFeatures];
};
