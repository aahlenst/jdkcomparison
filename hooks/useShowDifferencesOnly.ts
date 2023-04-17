/*
 * Copyright 2023 the original author or authors.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */
import { Model } from "@/src/modelTypes";

type SectionFeatures = {
	[key: string]: Model.FeaturePresence[] | Model.FeatureDescription[];
};

type DisplayStatus = [boolean, { [key: string]: boolean }];

function hasDifferences(values: Model.FeaturePresence[] | Model.FeatureDescription[]): boolean {
	return new Set(values.map((v) => extractValue(v))).size > 1;
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

export const useShowDifferencesOnly = (
	showDifferencesOnly: boolean,
	data: SectionFeatures
): DisplayStatus => {
	const showFeatures: { [key: string]: boolean } = {};

	if (!showDifferencesOnly) {
		for (const key of Object.keys(data)) {
			showFeatures[key] = true;
		}
		return [true, showFeatures];
	}

	let anyDifferences = false;
	for (const key of Object.keys(data)) {
		showFeatures[key] = data[key].length === 1 || hasDifferences(data[key]);

		if (showFeatures[key]) {
			anyDifferences = true;
		}
	}

	return [anyDifferences, showFeatures];
};
