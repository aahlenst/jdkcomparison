import {FeatureDescription, FeaturePresence, Present, Vendor} from "@/src/vendorDataTypes";
import {micromark} from "micromark";
import {Model} from "@/src/modelTypes";

class FootnoteCounter {
	#counter: number = 1;

	getAndAdd(): number {
		const value = this.#counter;
		this.#counter++;
		return value;
	}
}

export function extractComparisonData(vendors: Vendor[]): Model.Comparison {
	vendors.sort((a, b) => a.vendor.localeCompare(b.vendor, "en"));

	let footnoteCounter: FootnoteCounter = new FootnoteCounter();
	const aggregatedFootnotes: Model.Footnote[] = [];
	for (const vendor of vendors) {
		aggregatedFootnotes.push(...extractFootnotes(vendor, footnoteCounter));
	}

	const aggregatedFeatureComparisons: Model.FeatureComparison[] = [];
	for (const vendor of vendors) {
		aggregatedFeatureComparisons.push(...extractFeatureComparisons(vendor, aggregatedFootnotes));
	}
	return {productsInComparison: aggregatedFeatureComparisons, footnotes: aggregatedFootnotes};
}

export function deriveFilters(vendors: Vendor[]): Model.Filters {
	return {
		vendors: deriveVendorFilter(vendors),
		versions: deriveVersionFilter(vendors)
	};
}

function extractFootnotes(vendor: Vendor, counter: FootnoteCounter) {
	return vendor.footnotes.map(footnote => {
		return {id: footnote.id, number: counter.getAndAdd(), html: micromark(footnote.markdown)};
	});
}

function extractFeatureComparisons(vendor: Vendor, footnotes: Model.Footnote[]): Model.FeatureComparison[] {
	return vendor.jdks.map(jdk => {
		return {
			id: jdk.id,
			jfx: mapFeaturePresence(jdk.features.javaFX, footnotes),
			jfr: mapFeaturePresence(jdk.features.flightRecorder, footnotes),
			paidSupport: mapFeaturePresence(jdk.features.paidSupport, footnotes),
			eolDate: mapFeatureDescription(jdk.features.eolDate, footnotes)
		};
	});
}

function resolveFootnote(id: string | undefined, footnotes: Model.Footnote[]): number | undefined {
	if (id === undefined) {
		return undefined;
	}
	for (const footnote of footnotes) {
		if (footnote.id === id) {
			return footnote.number;
		}
	}
	throw Error(`Unresolvable footnote: ${id}`);
}

function mapFeaturePresence(presence: FeaturePresence, footnotes: Model.Footnote[]): Model.FeaturePresence {
	const retVal: Model.FeaturePresence = {
		present: mapPresent(presence.present)
	};

	// Next.JS does not accept properties that are `undefined` because they cannot be serialized to JSON.
	if (presence.footnote !== undefined) {
		retVal.footnoteNumber = resolveFootnote(presence.footnote, footnotes);
	}

	return retVal;
}

function mapFeatureDescription(description: FeatureDescription, footnotes: Model.Footnote[]): Model.FeatureDescription {
	const retVal: Model.FeatureDescription = {
		text: description.text
	};

	// Next.JS does not accept properties that are `undefined` because they cannot be serialized to JSON.
	if (description.footnote !== undefined) {
		retVal.footnoteNumber = resolveFootnote(description.footnote, footnotes);
	}

	return retVal;
}

function mapPresent(present: Present): Model.Present {
	switch (present) {
		case Present.YES:
			return Model.Present.YES;
		case Present.PARTIALLY:
			return Model.Present.PARTIALLY;
		case Present.NO:
			return Model.Present.NO;
		case Present.UNKNOWN:
			return Model.Present.UNKNOWN;
		default:
			throw new Error(`Unknown presence: ${present}`);
	}
}

function deriveVersionFilter(vendors: Vendor[]) {
	const id = "versions";

	const versions = new Set<number>();
	for (const vendor of vendors) {
		for (const jdk of vendor.jdks) {
			versions.add(jdk.information.version);
		}
	}

	const sortedVersions: number[] = [...versions];
	sortedVersions.sort((a, b) => a - b);

	const options = sortedVersions.map((version, index) => {
		return {id: `${id}-${index}`, label: `${version}`, checked: false};
	});

	return {id: id, options: options};
}

function deriveVendorFilter(vendors: Vendor[]) {
	const id = "vendors";

	const names = new Set<string>();
	for (const vendor of vendors) {
		names.add(vendor.vendor);
	}

	const sortedNames: string[] = [...names];
	sortedNames.sort((a, b) => a.localeCompare(b, "en"));

	const options = sortedNames.map((name, index) => {
		return {id: `${id}-${index}`, label: `${name}`, checked: false};
	});

	return {id: id, options: options};
}

