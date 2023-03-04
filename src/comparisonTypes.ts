export namespace Comparison {
	export type Comparison = {
		productsInComparison: FeatureComparison[]
		footnotes: Footnote[]
	}

	export type FeatureComparison = {
		id: string,
		jfx: FeaturePresence,
		jfr: FeaturePresence,
		paidSupport: FeaturePresence,
		eolDate: FeatureDescription
	}

	export type Footnote = {
		id: string,
		number: number,
		html: string
	}

	export enum Present {
		YES,
		PARTIALLY,
		NO,
		UNKNOWN
	}

	export type FeaturePresence = {
		present: Present
		footnoteNumber?: number
	}

	export type FeatureDescription = {
		text: string
		footnoteNumber?: number
	}
}
