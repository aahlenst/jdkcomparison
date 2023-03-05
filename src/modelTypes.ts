export namespace Model {
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

	export type Filters = {
		vendors: Filter
		versions: Filter
	}

	export type Filter = {
		id: string,
		options: FilterOption[]
	}

	export type FilterOption = {
		id: string,
		label: string,
		checked: boolean
	}

	export type Keyable = {
		id: string
	}
}
