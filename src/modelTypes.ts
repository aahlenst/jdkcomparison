export namespace Model {
	export type Comparison = {
		productsInComparison: FeatureComparison[];
		footnotes: Footnote[];
	};

	export type FeatureComparison = {
		id: string;
		name: string;
		vendor: string;
		version: number;
		downloadUrl: string;
		websiteUrl: string;
		virtualMachine: FeatureDescription;
		classLibraries: FeatureDescription;
		jfx: FeaturePresence;
		jfr: FeaturePresence;
		jaws: FeaturePresence;
		cms: FeaturePresence;
		epsilon: FeaturePresence;
		g1: FeaturePresence;
		parallel: FeaturePresence;
		serial: FeaturePresence;
		shenandoah: FeaturePresence;
		z: FeaturePresence;
		customGCs: FeatureDescription;
		linuxx32: FeaturePresence;
		linuxx64: FeaturePresence;
		linuxx64Musl: FeaturePresence;
		linuxAArch64: FeaturePresence;
		linuxAArch64Musl: FeaturePresence;
		linuxAArch32: FeaturePresence;
		linuxPPC64: FeaturePresence;
		linuxRISCV64: FeaturePresence;
		linuxs390x: FeaturePresence;
		linuxAPK: FeaturePresence;
		linuxDeb: FeaturePresence;
		linuxRPM: FeaturePresence;
		linuxContainerImages: FeaturePresence;
		macx64: FeaturePresence;
		macAArch64: FeaturePresence;
		macInstallers: FeaturePresence;
		windowsx32: FeaturePresence;
		windowsx64: FeaturePresence;
		windowsAArch64: FeaturePresence;
		windowsInstallers: FeaturePresence;
		windowsContainerImages: FeaturePresence;
		aqavit: FeaturePresence;
		tck: FeaturePresence;
		editions: FeatureDescription;
		customisations: FeatureDescription;
		notableFeatures: FeatureDescription;
		license: FeatureDescription;
		freeInDevelopment: FeaturePresence;
		freeInProduction: FeaturePresence;
		paidSupport: FeaturePresence;
		eolDate: FeatureDescription;
		releaseSchedule: FeatureDescription;
		releaseDelay: FeatureDescription;
	};

	export type Footnote = {
		id: string;
		number: number;
		html: string;
		backReferences: number;
	};

	export type FootnoteReference = {
		number: number;
		backReference: number;
	};

	export enum Present {
		YES,
		PARTIALLY,
		NO,
		UNKNOWN,
	}

	export type FeaturePresence = {
		present: Present;
		footnoteReference?: FootnoteReference;
	};

	export type FeatureDescription = {
		text: string;
		footnoteReference?: FootnoteReference;
	};

	export interface Filter {
		readonly id: string;

		readonly options: FilterOption[];

		apply(fc: Model.FeatureComparison): boolean;

		reset(): void;

		activeOptions(): string[];

		hasOption(id: string): boolean;

		hasOptionWithLabel(label: string): boolean;

		setOptionSelected(id: string, selected: boolean): void;

		setOptionSelectedByLabel(label: string, selected: boolean): void;

		numberOfSelectedOptions(): number;
	}

	export type FilterOption = {
		id: string;
		label: string;
		selected: boolean;
	};

	export type Keyable = {
		id: string;
	};

	export interface Comparator<T> {
		id: string;
		label: string;
		compare(a: T, b: T): number;
	}
}
