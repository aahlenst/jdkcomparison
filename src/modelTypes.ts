export namespace Model {
	export type Comparison = {
		productsInComparison: FeatureComparison[]
		footnotes: Footnote[]
	}

	export type FeatureComparison = {
		id: string,
		name: string,
		vendor: string,
		version: number,
		downloadUrl: string,
		websiteUrl: string,
		jfx: FeaturePresence,
		jfr: FeaturePresence,
		jaws: FeaturePresence,
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

	export interface Filter {
		readonly id: string,

		readonly options: FilterOption[],

		apply(fc: Model.FeatureComparison): boolean

		hasOption(id: string): boolean

		setOptionSelected(id: string, selected: boolean): void

		setOptionSelectedByLabel(label: string, selected: boolean): void

		numberOfSelectedOptions(): number
	}

	export type FilterOption = {
		id: string,
		label: string,
		selected: boolean
	}

	export type Keyable = {
		id: string
	}
}
