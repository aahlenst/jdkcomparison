import {FeatureDescription, FeaturePresence, Present, Vendor} from "@/src/vendorDataTypes";
import {micromark} from "micromark";
import {Model} from "@/src/modelTypes";
import FootnoteReference = Model.FootnoteReference;
import {
	AscendingNameComparator,
	AscendingVendorComparator,
	DescendingVersionComparator,
	sortFeatureComparisons
} from "@/src/sorting";

const FeatureComparisonComparatorChain = [
	new DescendingVersionComparator(),
	new AscendingVendorComparator(),
	new AscendingNameComparator()
];

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

	sortFeatureComparisons(aggregatedFeatureComparisons, FeatureComparisonComparatorChain);
	return {productsInComparison: aggregatedFeatureComparisons, footnotes: aggregatedFootnotes};
}

function extractFootnotes(vendor: Vendor, counter: FootnoteCounter) {
	return vendor.footnotes.map(footnote => {
		return {id: footnote.id, number: counter.getAndAdd(), html: micromark(footnote.markdown), backReferences: 0};
	});
}

function extractFeatureComparisons(vendor: Vendor, footnotes: Model.Footnote[]): Model.FeatureComparison[] {
	return vendor.jdks.map(jdk => {
		return {
			id: jdk.id,
			name: jdk.information.name,
			vendor: vendor.vendor,
			version: jdk.information.version,
			downloadUrl: jdk.information.downloadSite,
			websiteUrl: vendor.website,
			virtualMachine: mapFeatureDescription(jdk.features.virtualMachine, footnotes),
			classLibraries: mapFeatureDescription(jdk.features.classLibraries, footnotes),
			jfx: mapFeaturePresence(jdk.features.javaFX, footnotes),
			jfr: mapFeaturePresence(jdk.features.flightRecorder, footnotes),
			jaws: mapFeaturePresence(jdk.features.javaWS, footnotes),
			aqavit: mapFeaturePresence(jdk.features.aqavit, footnotes),
			tck: mapFeaturePresence(jdk.features.tck, footnotes),
			editions: mapFeatureDescription(jdk.features.editions, footnotes),
			customisations: mapFeatureDescription(jdk.features.customisations, footnotes),
			notableFeatures: mapFeatureDescription(jdk.features.notableFeatures, footnotes),
			license: mapFeatureDescription(jdk.features.license, footnotes),
			freeInDevelopment: mapFeaturePresence(jdk.features.freeInDevelopment, footnotes),
			freeInProduction: mapFeaturePresence(jdk.features.freeInProduction, footnotes),
			paidSupport: mapFeaturePresence(jdk.features.paidSupport, footnotes),
			eolDate: mapFeatureDescription(jdk.features.eolDate, footnotes)
		};
	});
}

function resolveFootnote(id: string | undefined, footnotes: Model.Footnote[]): FootnoteReference | undefined {
	if (id === undefined) {
		return undefined;
	}
	for (const footnote of footnotes) {
		if (footnote.id === id) {
			footnote.backReferences += 1;
			return {number: footnote.number, backReference: footnote.backReferences};
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
		retVal.footnoteReference = resolveFootnote(presence.footnote, footnotes);
	}

	return retVal;
}

function mapFeatureDescription(description: FeatureDescription, footnotes: Model.Footnote[]): Model.FeatureDescription {
	const retVal: Model.FeatureDescription = {
		text: description.text
	};

	// Next.JS does not accept properties that are `undefined` because they cannot be serialized to JSON.
	if (description.footnote !== undefined) {
		retVal.footnoteReference = resolveFootnote(description.footnote, footnotes);
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
