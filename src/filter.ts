import {Model} from "../src/modelTypes";

export function createFilters(comparisons: Model.FeatureComparison[]): Model.Filter[] {
	return [
		new VersionsFilter(comparisons),
		new VendorsFilter(comparisons),
		new VirtualMachinesFilter(comparisons),
		new TechnologiesFilter(),
		new LicensingFilter(),
	];
}

export function applyFilters(filters: Model.Filter[], comparisons: Model.FeatureComparison[]): Model.FeatureComparison[] {
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

abstract class AbstractFilter implements Model.Filter {
	readonly abstract id: string;

	readonly abstract options: Model.FilterOption[];

	abstract apply(fc: Model.FeatureComparison): boolean;

	reset() {
		for (const option of this.options) {
			option.selected = false;
		}
	}

	activeOptions(): string[] {
		return this.options.filter(o => o.selected).map(o => o.label);
	}

	hasOption(id: string): boolean {
		return this.options.some(option => option.id === id);
	}

	hasOptionWithLabel(label: string): boolean {
		return this.options.some(option => option.label === label);
	}

	setOptionSelected(id: string, selected: boolean): void {
		const option = this.options.find(option => option.id === id);
		if (option !== undefined) {
			option.selected = selected;
		}
	}

	setOptionSelectedByLabel(label: string, selected: boolean): void {
		const option = this.options.find(option => option.label === label);
		if (option !== undefined) {
			this.setOptionSelected(option.id, selected);
		}
	}

	numberOfSelectedOptions(): number {
		return this.options.filter(o => o.selected).length;
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
			return {id: `${id}-${idx}`, label: option, selected: false};
		});
		this.supplier = supplier;
	}

	apply(fc: Model.FeatureComparison): boolean {
		const selectedOptions = new Set(this.options.filter(option => option.selected).map(option => option.label));
		return selectedOptions.size < 1 || selectedOptions.has(this.supplier(fc));
	}
}

export class VendorsFilter extends DynamicSelectionFilter {
	constructor(comparisons: Model.FeatureComparison[]) {
		const vendors = new Set(comparisons.map(c => c.vendor));
		const sortedVendors = [...vendors].sort((a, b) => a.localeCompare(b, "en"));
		super("vendors", sortedVendors, fc => fc.vendor);
	}
}

export class VersionsFilter extends DynamicSelectionFilter {
	constructor(comparisons: Model.FeatureComparison[]) {
		const versions = new Set(comparisons.map(c => c.version));
		const sortedVersions = [...versions]
			.sort((a, b) => a - b)
			.map(v => v.toString());

		super("versions", sortedVersions, fc => fc.version.toString());
	}
}

export class VirtualMachinesFilter extends DynamicSelectionFilter {
	constructor(comparisons: Model.FeatureComparison[]) {
		const vms = new Set(comparisons.map(c => c.virtualMachine.text));
		const sortedVMs = [...vms].sort((a, b) => a.localeCompare(b, "en"));
		super("vms", sortedVMs, fc => fc.virtualMachine.text);
	}
}

export class TechnologiesFilter extends AbstractFilter {

	readonly id: string = "technologies";

	readonly options: Model.FilterOption[] = [
		{id: "technologies-jfr", label: "Flight Recorder", selected: false},
		{id: "technologies-jfx", label: "JavaFX", selected: false},
		{id: "technologies-jaws", label: "Java Web Start", selected: false}
	];

	apply(fc: Model.FeatureComparison): boolean {
		const jfrRequired = this.options.some(o => o.id === "technologies-jfr" && o.selected);
		const jfxRequired = this.options.some(o => o.id === "technologies-jfx" && o.selected);
		const jawsRequired = this.options.some(o => o.id === "technologies-jaws" && o.selected);
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
		{id: "licensing-free-in-development", label: "Free in Development", selected: false},
		{id: "licensing-free-in-production", label: "Free in Production", selected: false}
	];

	apply(fc: Model.FeatureComparison): boolean {
		const freeInDev = this.options.some(o => o.id === "licensing-free-in-development" && o.selected);
		const freeInProd = this.options.some(o => o.id === "licensing-free-in-production" && o.selected);
		const acceptedPresences = new Set([Model.Present.YES, Model.Present.PARTIALLY]);
		return (
			(!freeInDev || acceptedPresences.has(fc.freeInDevelopment.present)) &&
			(!freeInProd || acceptedPresences.has(fc.freeInProduction.present))
		);
	}
}
