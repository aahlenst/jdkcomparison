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
		countryOfOrigin: string;
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
		aixPPC: FeaturePresence;
		solarisSPARC: FeaturePresence;
		solarisx64: FeaturePresence;
		aqavit: FeaturePresence;
		tck: FeaturePresence;
		editions: FeatureDescription;
		customisations: FeatureDescription;
		notableFeatures: FeatureDescription;
		license: FeatureDescription;
		freeInDevelopment: FeaturePresence;
		freeInProduction: FeaturePresence;
		sbom: FeaturePresence;
		paidSupport: FeaturePresence;
		eolDate: FeatureDescription;
		releaseSchedule: FeatureDescription;
		releaseDelay: FeatureDescription;
		remarks: FeatureDescription;
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
