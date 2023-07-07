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
import { Model } from "../src/modelTypes";

export function createFilters(comparisons: Model.FeatureComparison[]): Model.Filter[] {
	return [
		new VersionsFilter(comparisons),
		new VendorsFilter(comparisons),
		new VirtualMachinesFilter(comparisons),
		new TechnologiesFilter(),
		new PlatformsFilter(),
		new LicensingFilter(),
		new GarbageCollectorsFilter(),
	];
}

export function applyFilters(
	filters: Model.Filter[],
	comparisons: Model.FeatureComparison[],
): Model.FeatureComparison[] {
	const filteredComparisons = [];
	for (const fc of comparisons) {
		let include = true;
		for (const filter of filters) {
			if (!filter.apply(fc)) {
				include = false;
				break;
			}
		}
		if (include) {
			filteredComparisons.push(fc);
		}
	}
	return filteredComparisons;
}

interface FeatureSupplier<T> {
	supplier: (fc: T) => Model.FeaturePresence;
}

abstract class AbstractFilter implements Model.Filter {
	abstract readonly id: string;

	abstract readonly options: Model.FilterOption[];

	abstract apply(fc: Model.FeatureComparison): boolean;

	reset() {
		for (const option of this.options) {
			option.selected = false;
		}
	}

	activeOptions(): string[] {
		return this.options.filter((o) => o.selected).map((o) => o.label);
	}

	hasOption(id: string): boolean {
		return this.options.some((option) => option.id === id);
	}

	hasOptionWithLabel(label: string): boolean {
		return this.options.some((option) => option.label === label);
	}

	setOptionSelected(id: string, selected: boolean): void {
		const option = this.options.find((option) => option.id === id);
		if (option !== undefined) {
			option.selected = selected;
		}
	}

	setOptionSelectedByLabel(label: string, selected: boolean): void {
		const option = this.options.find((option) => option.label === label);
		if (option !== undefined) {
			this.setOptionSelected(option.id, selected);
		}
	}

	numberOfSelectedOptions(): number {
		return this.options.filter((o) => o.selected).length;
	}
}

export class DynamicSelectionFilter extends AbstractFilter {
	readonly id: string;

	readonly options: Model.FilterOption[];

	private readonly supplier: (fc: Model.FeatureComparison) => string;

	constructor(id: string, options: string[], supplier: (fc: Model.FeatureComparison) => string) {
		super();

		this.id = id;
		this.options = options.map((option, idx) => {
			return { id: `${id}-${idx}`, label: option, selected: false };
		});
		this.supplier = supplier;
	}

	apply(fc: Model.FeatureComparison): boolean {
		const selectedOptions = new Set(
			this.options.filter((option) => option.selected).map((option) => option.label),
		);
		return selectedOptions.size < 1 || selectedOptions.has(this.supplier(fc));
	}
}

export class VendorsFilter extends DynamicSelectionFilter {
	constructor(comparisons: Model.FeatureComparison[]) {
		const vendors = new Set(comparisons.map((c) => c.vendor));
		const sortedVendors = [...vendors].sort((a, b) => a.localeCompare(b, "en"));
		super("vendors", sortedVendors, (fc) => fc.vendor);
	}
}

export class VersionsFilter extends DynamicSelectionFilter {
	constructor(comparisons: Model.FeatureComparison[]) {
		const versions = new Set(comparisons.map((c) => c.version));
		const sortedVersions = [...versions].sort((a, b) => a - b).map((v) => v.toString());

		super("versions", sortedVersions, (fc) => fc.version.toString());
	}
}

export class VirtualMachinesFilter extends DynamicSelectionFilter {
	constructor(comparisons: Model.FeatureComparison[]) {
		const vms = new Set(comparisons.map((c) => c.virtualMachine.text));
		const sortedVMs = [...vms].sort((a, b) => a.localeCompare(b, "en"));
		super("vms", sortedVMs, (fc) => fc.virtualMachine.text);
	}
}

export class TechnologiesFilter extends AbstractFilter {
	readonly id: string = "technologies";

	readonly options: Model.FilterOption[] = [
		{ id: "technologies-jfr", label: "Flight Recorder", selected: false },
		{ id: "technologies-jfx", label: "JavaFX", selected: false },
		{ id: "technologies-jaws", label: "Java Web Start", selected: false },
	];

	apply(fc: Model.FeatureComparison): boolean {
		const jfrRequired = this.options.some((o) => o.id === "technologies-jfr" && o.selected);
		const jfxRequired = this.options.some((o) => o.id === "technologies-jfx" && o.selected);
		const jawsRequired = this.options.some((o) => o.id === "technologies-jaws" && o.selected);
		const acceptedPresences = new Set([Model.Present.YES, Model.Present.PARTIALLY]);
		return (
			(!jfrRequired || acceptedPresences.has(fc.jfr.present)) &&
			(!jfxRequired || acceptedPresences.has(fc.jfx.present)) &&
			(!jawsRequired || acceptedPresences.has(fc.jaws.present))
		);
	}
}

export class LicensingFilter extends AbstractFilter {
	readonly id: string = "licensing";

	readonly options: Model.FilterOption[] = [
		{
			id: "licensing-free-in-development",
			label: "Free in Development",
			selected: false,
		},
		{
			id: "licensing-free-in-production",
			label: "Free in Production",
			selected: false,
		},
	];

	apply(fc: Model.FeatureComparison): boolean {
		const freeInDev = this.options.some(
			(o) => o.id === "licensing-free-in-development" && o.selected,
		);
		const freeInProd = this.options.some(
			(o) => o.id === "licensing-free-in-production" && o.selected,
		);
		const acceptedPresences = new Set([Model.Present.YES, Model.Present.PARTIALLY]);
		return (
			(!freeInDev || acceptedPresences.has(fc.freeInDevelopment.present)) &&
			(!freeInProd || acceptedPresences.has(fc.freeInProduction.present))
		);
	}
}

export type PlatformsFilterFeatures = Pick<
	Model.FeatureComparison,
	| "aixPPC"
	| "linuxAArch32"
	| "linuxAArch64"
	| "linuxAArch64Musl"
	| "linuxPPC64"
	| "linuxRISCV64"
	| "linuxs390x"
	| "linuxx32"
	| "linuxx64"
	| "linuxx64Musl"
	| "solarisSPARC"
	| "solarisx64"
	| "windowsAArch64"
	| "windowsx32"
	| "windowsx64"
	| "macAArch64"
	| "macx64"
>;

export class PlatformsFilter extends AbstractFilter {
	readonly id: string = "platforms";
	readonly options: (Model.FilterOption & FeatureSupplier<PlatformsFilterFeatures>)[] = [
		{
			id: "platforms-aix-ppc",
			label: "AIX, PPC",
			selected: false,
			supplier: (f: PlatformsFilterFeatures) => f.aixPPC,
		},
		{
			id: "platforms-macos-aarch64",
			label: "macOS, ARM, 64-bit",
			selected: false,
			supplier: (f: PlatformsFilterFeatures) => f.macAArch64,
		},
		{
			id: "platforms-macos-x64",
			label: "macOS, x86, 64-bit",
			selected: false,
			supplier: (f: PlatformsFilterFeatures) => f.macx64,
		},
		{
			id: "platforms-linux-aarch32",
			label: "Linux, ARM, 32-bit",
			selected: false,
			supplier: (f: PlatformsFilterFeatures) => f.linuxAArch32,
		},
		{
			id: "platforms-linux-aarch64",
			label: "Linux, ARM, 64-bit",
			selected: false,
			supplier: (f: PlatformsFilterFeatures) => f.linuxAArch64,
		},
		{
			id: "platforms-linux-aarch64-musl",
			label: "Linux, ARM, 64-bit, musl",
			selected: false,
			supplier: (f: PlatformsFilterFeatures) => f.linuxAArch64Musl,
		},
		{
			id: "platforms-linux-ppc64",
			label: "Linux, PPC, 64-bit",
			selected: false,
			supplier: (f: PlatformsFilterFeatures) => f.linuxPPC64,
		},
		{
			id: "platforms-linux-riscv64",
			label: "Linux, RISC-V, 64-bit",
			selected: false,
			supplier: (f: PlatformsFilterFeatures) => f.linuxRISCV64,
		},
		{
			id: "platforms-linux-s390x",
			label: "Linux, S390, 64-bit",
			selected: false,
			supplier: (f: PlatformsFilterFeatures) => f.linuxs390x,
		},
		{
			id: "platforms-linux-x32",
			label: "Linux, x86, 32-bit",
			selected: false,
			supplier: (f: PlatformsFilterFeatures) => f.linuxx32,
		},
		{
			id: "platforms-linux-x64",
			label: "Linux, x86, 64-bit",
			selected: false,
			supplier: (f: PlatformsFilterFeatures) => f.linuxx64,
		},
		{
			id: "platforms-linux-x64-musl",
			label: "Linux, x86, 64-bit, musl",
			selected: false,
			supplier: (f: PlatformsFilterFeatures) => f.linuxx64Musl,
		},
		{
			id: "platforms-solaris-sparc",
			label: "Solaris, SPARC",
			selected: false,
			supplier: (f: PlatformsFilterFeatures) => f.solarisSPARC,
		},
		{
			id: "platforms-solaris-x64",
			label: "Solaris, x86, 64-bit",
			selected: false,
			supplier: (f: PlatformsFilterFeatures) => f.solarisx64,
		},
		{
			id: "platforms-windows-aarch64",
			label: "Windows, ARM, 64-bit",
			selected: false,
			supplier: (f: PlatformsFilterFeatures) => f.windowsAArch64,
		},
		{
			id: "platforms-windows-x32",
			label: "Windows, x86, 32-bit",
			selected: false,
			supplier: (f: PlatformsFilterFeatures) => f.windowsx32,
		},
		{
			id: "platforms-windows-x64",
			label: "Windows, x86, 64-bit",
			selected: false,
			supplier: (f: PlatformsFilterFeatures) => f.windowsx64,
		},
	];

	apply(f: PlatformsFilterFeatures): boolean {
		for (const option of this.options.filter((option) => option.selected)) {
			const presence = option.supplier(f);

			if (
				presence.present !== Model.Present.YES &&
				presence.present !== Model.Present.PARTIALLY
			) {
				return false;
			}
		}

		return true;
	}
}

export type GarbageCollectorsFilterFeatures = Pick<
	Model.FeatureComparison,
	"cms" | "epsilon" | "g1" | "parallel" | "serial" | "shenandoah" | "z"
>;

export class GarbageCollectorsFilter extends AbstractFilter {
	readonly id: string = "gcs";
	readonly options: (Model.FilterOption & FeatureSupplier<GarbageCollectorsFilterFeatures>)[] = [
		{
			id: "gcs-cms",
			label: "CMS",
			selected: false,
			supplier: (f: GarbageCollectorsFilterFeatures) => f.cms,
		},
		{
			id: "gcs-epsilon",
			label: "Epsilon",
			selected: false,
			supplier: (f: GarbageCollectorsFilterFeatures) => f.epsilon,
		},
		{
			id: "gcs-g1",
			label: "G1",
			selected: false,
			supplier: (f: GarbageCollectorsFilterFeatures) => f.g1,
		},
		{
			id: "gcs-parallel",
			label: "Parallel",
			selected: false,
			supplier: (f: GarbageCollectorsFilterFeatures) => f.parallel,
		},
		{
			id: "gcs-serial",
			label: "Serial",
			selected: false,
			supplier: (f: GarbageCollectorsFilterFeatures) => f.serial,
		},
		{
			id: "gcs-shenandoah",
			label: "Shenandoah",
			selected: false,
			supplier: (f: GarbageCollectorsFilterFeatures) => f.shenandoah,
		},
		{
			id: "gcs-z",
			label: "Z",
			selected: false,
			supplier: (f: GarbageCollectorsFilterFeatures) => f.z,
		},
	];

	apply(f: GarbageCollectorsFilterFeatures): boolean {
		for (const option of this.options.filter((option) => option.selected)) {
			const presence = option.supplier(f);

			if (
				presence.present !== Model.Present.YES &&
				presence.present !== Model.Present.PARTIALLY
			) {
				return false;
			}
		}

		return true;
	}
}
