import {FeatureDescription, FeaturePresence, Present, Vendor} from "@/src/vendorDataTypes";
import {micromark} from "micromark";
import {Comparison} from "@/src/comparisonTypes";

class FootnoteCounter {
	#counter: number = 1;

	getAndAdd(): number {
		const value = this.#counter;
		this.#counter++;
		return value;
	}
}

export function extractComparisonData(vendors: Vendor[]): Comparison.Comparison {
	vendors.sort((a, b) => a.vendor.localeCompare(b.vendor, "en"));

	let footnoteCounter: FootnoteCounter = new FootnoteCounter();
	const aggregatedFootnotes: Comparison.Footnote[] = [];
	for (const vendor of vendors) {
		aggregatedFootnotes.push(...extractFootnotes(vendor, footnoteCounter));
	}

	const aggregatedFeatureComparisons: Comparison.FeatureComparison[] = [];
	for (const vendor of vendors) {
		aggregatedFeatureComparisons.push(...extractFeatureComparisons(vendor, aggregatedFootnotes));
	}
	return { productsInComparison: aggregatedFeatureComparisons, footnotes: aggregatedFootnotes};
}

function extractFootnotes(vendor: Vendor, counter: FootnoteCounter) {
	return vendor.footnotes.map(footnote => {
		return {id: footnote.id, number: counter.getAndAdd(), html: micromark(footnote.markdown)};
	});
}

function extractFeatureComparisons(vendor: Vendor, footnotes: Comparison.Footnote[]): Comparison.FeatureComparison[] {
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

function resolveFootnote(id: string | undefined, footnotes: Comparison.Footnote[]): number | undefined {
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

function mapFeaturePresence(presence: FeaturePresence, footnotes: Comparison.Footnote[]): Comparison.FeaturePresence {
	const retVal: Comparison.FeaturePresence = {
		present: mapPresent(presence.present)
	};

	// Next.JS does not accept properties that are `undefined` because they cannot be serialized to JSON.
	if (presence.footnote !== undefined) {
		retVal.footnoteNumber = resolveFootnote(presence.footnote, footnotes);
	}

	return retVal;
}

function mapFeatureDescription(description: FeatureDescription, footnotes: Comparison.Footnote[]): Comparison.FeatureDescription {
	const retVal: Comparison.FeatureDescription = {
		text: description.text
	};

	// Next.JS does not accept properties that are `undefined` because they cannot be serialized to JSON.
	if (description.footnote !== undefined) {
		retVal.footnoteNumber = resolveFootnote(description.footnote, footnotes);
	}

	return retVal;
}

function mapPresent(present: Present): Comparison.Present {
	switch (present) {
		case Present.YES:
			return Comparison.Present.YES;
		case Present.PARTIALLY:
			return Comparison.Present.PARTIALLY;
		case Present.NO:
			return Comparison.Present.NO;
		case Present.UNKNOWN:
			return Comparison.Present.UNKNOWN;
		default:
			throw new Error(`Unknown presence: ${present}`);
	}
}

