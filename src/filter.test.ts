import {beforeAll, expect} from "@jest/globals";
import {extractComparisonData} from "@/src/comparison";
import {
	applyFilters,
	createFilters,
	DynamicSelectionFilter,
	LicensingFilter,
	TechnologiesFilter,
	VendorsFilter,
	VersionsFilter,
	VirtualMachinesFilter
} from "@/src/filter";
import {Model} from "@/src/modelTypes";

describe("filter module", () => {
	let comparisonData: Model.FeatureComparison[];

	beforeAll(async () => {
		// Reverse alphabetical order to ensure data is being sorted.
		const testData = [
			(await import("@/testdata/dukecorp")).default,
			(await import("@/testdata/coffeecorp")).default
		];
		comparisonData = extractComparisonData(testData).productsInComparison;
	});

	test("createFilters() includes all filters", () => {
		const filters = createFilters(comparisonData)
			.map(filter => filter.id)
			.sort((a, b) => a.localeCompare(b, "en"));

		expect(filters).toEqual(["licensing", "technologies", "vendors", "versions", "vms"]);
	});

	test("applyFilters() only applies filters with active options", () => {
		const vendorsFilter = new VendorsFilter(comparisonData);
		const versionsFilter = new VersionsFilter(comparisonData);

		let foundJDKs = comparisonData.map(c => {
			return {vendor: c.vendor, version: c.version};
		});

		expect(foundJDKs).toHaveLength(3);
		expect(foundJDKs).toContainEqual({vendor: "Coffeecorp", version: 8});
		expect(foundJDKs).toContainEqual({vendor: "Coffeecorp", version: 17});
		expect(foundJDKs).toContainEqual({vendor: "Dukecorp", version: 17});

		vendorsFilter.setOptionSelectedByLabel("Coffeecorp", true);

		foundJDKs = applyFilters([vendorsFilter, versionsFilter], comparisonData)
			.map(c => {
				return {vendor: c.vendor, version: c.version};
			});

		expect(foundJDKs).toHaveLength(2);
		expect(foundJDKs).toContainEqual({vendor: "Coffeecorp", version: 8});
		expect(foundJDKs).toContainEqual({vendor: "Coffeecorp", version: 17});
	});

	test("applyFilters() applies all filters with active options", () => {
		const vendorsFilter = new VendorsFilter(comparisonData);
		const versionsFilter = new VersionsFilter(comparisonData);

		let foundJDKs = comparisonData.map(c => {
			return {vendor: c.vendor, version: c.version};
		});

		expect(foundJDKs).toHaveLength(3);
		expect(foundJDKs).toContainEqual({vendor: "Coffeecorp", version: 8});
		expect(foundJDKs).toContainEqual({vendor: "Coffeecorp", version: 17});
		expect(foundJDKs).toContainEqual({vendor: "Dukecorp", version: 17});

		vendorsFilter.setOptionSelectedByLabel("Coffeecorp", true);
		versionsFilter.setOptionSelectedByLabel("8", true);

		foundJDKs = applyFilters([vendorsFilter, versionsFilter], comparisonData)
			.map(c => {
				return {vendor: c.vendor, version: c.version};
			});

		expect(foundJDKs).toHaveLength(1);
		expect(foundJDKs).toContainEqual({vendor: "Coffeecorp", version: 8});
	});
});

describe("VendorsFilter", () => {
	let comparisonData: Model.FeatureComparison[];

	beforeAll(async () => {
		// Reverse alphabetical order to ensure data is being sorted.
		const testData = [
			(await import("@/testdata/dukecorp")).default,
			(await import("@/testdata/coffeecorp")).default
		];
		comparisonData = extractComparisonData(testData).productsInComparison;
	});

	test("has options for all JDK vendors", () => {
		const vendorsFilter = new VendorsFilter(comparisonData);

		expect(vendorsFilter.id).toEqual("vendors");
		expect(vendorsFilter.options.length).toEqual(2);
		expect(vendorsFilter.options[0]).toEqual({id: "vendors-0", label: "Coffeecorp", selected: false});
		expect(vendorsFilter.options[1]).toEqual({id: "vendors-1", label: "Dukecorp", selected: false});
	});

	test("accepts all vendors if none is selected", () => {
		const vendorsFilter = new VendorsFilter(comparisonData);

		let foundVendors = comparisonData.map(c => c.vendor);
		expect(foundVendors).toContainEqual("Coffeecorp");
		expect(foundVendors).toContainEqual("Dukecorp");

		const filteredData = applyFilters([vendorsFilter], comparisonData);

		foundVendors = filteredData.map(c => c.vendor);
		expect(foundVendors).toContainEqual("Coffeecorp");
		expect(foundVendors).toContainEqual("Dukecorp");
	});

	test("removes all vendors that are not selected", () => {
		const vendorsFilter = new VendorsFilter(comparisonData);

		let foundVendors = comparisonData.map(c => c.vendor);
		expect(foundVendors).toContainEqual("Coffeecorp");
		expect(foundVendors).toContainEqual("Dukecorp");

		vendorsFilter.setOptionSelectedByLabel("Dukecorp", true);

		const filteredData = applyFilters([vendorsFilter], comparisonData);

		foundVendors = filteredData.map(c => c.vendor);
		expect(foundVendors).not.toContainEqual("Coffeecorp");
		expect(foundVendors).toContainEqual("Dukecorp");
	});

	test("includes all vendors that are selected", () => {
		const vendorsFilter = new VendorsFilter(comparisonData);

		let foundVendors = comparisonData.map(c => c.vendor);
		expect(foundVendors).toContainEqual("Coffeecorp");
		expect(foundVendors).toContainEqual("Dukecorp");

		vendorsFilter.setOptionSelectedByLabel("Coffeecorp", true);
		vendorsFilter.setOptionSelectedByLabel("Dukecorp", true);

		const filteredData = applyFilters([vendorsFilter], comparisonData);

		foundVendors = filteredData.map(c => c.vendor);
		expect(foundVendors).toContainEqual("Coffeecorp");
		expect(foundVendors).toContainEqual("Dukecorp");
	});

	test("returns options that are active", () => {
		const vendorsFilter = new VendorsFilter(comparisonData);

		expect(vendorsFilter.activeOptions()).toHaveLength(0);

		vendorsFilter.setOptionSelectedByLabel("Coffeecorp", true);
		vendorsFilter.setOptionSelectedByLabel("Dukecorp", true);

		expect(vendorsFilter.activeOptions()).toHaveLength(2);
		expect(vendorsFilter.activeOptions()).toContainEqual("Coffeecorp");
		expect(vendorsFilter.activeOptions()).toContainEqual("Dukecorp");
	});

	test("deactivates all options when resetting", () => {
		const vendorsFilter = new VendorsFilter(comparisonData);

		vendorsFilter.setOptionSelectedByLabel("Coffeecorp", true);
		vendorsFilter.setOptionSelectedByLabel("Dukecorp", true);

		expect(vendorsFilter.activeOptions()).toHaveLength(2);
		expect(vendorsFilter.activeOptions()).toContainEqual("Coffeecorp");
		expect(vendorsFilter.activeOptions()).toContainEqual("Dukecorp");

		vendorsFilter.reset();

		expect(vendorsFilter.activeOptions()).toHaveLength(0);
	});

	test("supports testing option existence by label", () => {
		const vendorsFilter = new VendorsFilter(comparisonData);

		expect(vendorsFilter.hasOptionWithLabel("Coffeecorp")).toBeTruthy();
		expect(vendorsFilter.hasOptionWithLabel("Unknown option")).toBeFalsy();
	});
});

describe("VirtualMachinesFilter", () => {
	let comparisonData: Model.FeatureComparison[];

	beforeAll(async () => {
		// Reverse alphabetical order to ensure data is being sorted.
		const testData = [
			(await import("@/testdata/dukecorp")).default,
			(await import("@/testdata/coffeecorp")).default
		];
		comparisonData = extractComparisonData(testData).productsInComparison;
	});

	test("has options for all VMs", () => {
		const virtualMachinesFilter = new VirtualMachinesFilter(comparisonData);

		expect(virtualMachinesFilter.id).toEqual("vms");
		expect(virtualMachinesFilter.options.length).toEqual(2);
		expect(virtualMachinesFilter.options[0]).toEqual({id: "vms-0", label: "CoffeeVM", selected: false});
		expect(virtualMachinesFilter.options[1]).toEqual({id: "vms-1", label: "DukeVM", selected: false});
	});

	test("accepts all VMs if none is selected", () => {
		const virtualMachinesFilter = new VirtualMachinesFilter(comparisonData);

		let foundVMs = comparisonData.map(c => c.virtualMachine.text);
		expect(foundVMs).toContainEqual("CoffeeVM");
		expect(foundVMs).toContainEqual("DukeVM");

		const filteredData = applyFilters([virtualMachinesFilter], comparisonData);

		foundVMs = filteredData.map(c => c.virtualMachine.text);
		expect(foundVMs).toContainEqual("CoffeeVM");
		expect(foundVMs).toContainEqual("DukeVM");
	});

	test("removes all VMs that are not selected", () => {
		const virtualMachinesFilter = new VirtualMachinesFilter(comparisonData);

		let foundVMs = comparisonData.map(c => c.virtualMachine.text);
		expect(foundVMs).toContainEqual("CoffeeVM");
		expect(foundVMs).toContainEqual("DukeVM");

		virtualMachinesFilter.setOptionSelectedByLabel("DukeVM", true);

		const filteredData = applyFilters([virtualMachinesFilter], comparisonData);

		foundVMs = filteredData.map(c => c.virtualMachine.text);
		expect(foundVMs).not.toContainEqual("CoffeeVM");
		expect(foundVMs).toContainEqual("DukeVM");
	});

	test("includes all VMs that are selected", () => {
		const virtualMachinesFilter = new VirtualMachinesFilter(comparisonData);

		let foundVMs = comparisonData.map(c => c.virtualMachine.text);
		expect(foundVMs).toContainEqual("CoffeeVM");
		expect(foundVMs).toContainEqual("DukeVM");

		virtualMachinesFilter.setOptionSelectedByLabel("CoffeeVM", true);
		virtualMachinesFilter.setOptionSelectedByLabel("DukeVM", true);

		const filteredData = applyFilters([virtualMachinesFilter], comparisonData);

		foundVMs = filteredData.map(c => c.virtualMachine.text);
		expect(foundVMs).toContainEqual("CoffeeVM");
		expect(foundVMs).toContainEqual("DukeVM");
	});

	test("returns options that are active", () => {
		const virtualMachinesFilter = new VirtualMachinesFilter(comparisonData);

		expect(virtualMachinesFilter.activeOptions()).toHaveLength(0);

		virtualMachinesFilter.setOptionSelectedByLabel("CoffeeVM", true);
		virtualMachinesFilter.setOptionSelectedByLabel("DukeVM", true);

		expect(virtualMachinesFilter.activeOptions()).toHaveLength(2);
		expect(virtualMachinesFilter.activeOptions()).toContainEqual("CoffeeVM");
		expect(virtualMachinesFilter.activeOptions()).toContainEqual("DukeVM");
	});

	test("deactivates all options when resetting", () => {
		const virtualMachinesFilter = new VirtualMachinesFilter(comparisonData);

		virtualMachinesFilter.setOptionSelectedByLabel("CoffeeVM", true);
		virtualMachinesFilter.setOptionSelectedByLabel("DukeVM", true);

		expect(virtualMachinesFilter.activeOptions()).toHaveLength(2);
		expect(virtualMachinesFilter.activeOptions()).toContainEqual("CoffeeVM");
		expect(virtualMachinesFilter.activeOptions()).toContainEqual("DukeVM");

		virtualMachinesFilter.reset();

		expect(virtualMachinesFilter.activeOptions()).toHaveLength(0);
	});

	test("supports testing option existence by label", () => {
		const virtualMachinesFilter = new VirtualMachinesFilter(comparisonData);

		expect(virtualMachinesFilter.hasOptionWithLabel("DukeVM")).toBeTruthy();
		expect(virtualMachinesFilter.hasOptionWithLabel("Unknown option")).toBeFalsy();
	});
});

describe("VersionsFilter", () => {
	let comparisonData: Model.FeatureComparison[];

	beforeAll(async () => {
		// Reverse alphabetical order to ensure data is being sorted.
		const testData = [
			(await import("@/testdata/dukecorp")).default,
			(await import("@/testdata/coffeecorp")).default
		];
		comparisonData = extractComparisonData(testData).productsInComparison;
	});

	test("has options with all JDK versions", () => {
		const versionFilter = new VersionsFilter(comparisonData);

		expect(versionFilter.id).toEqual("versions");
		expect(versionFilter.options.length).toEqual(2);
		expect(versionFilter.options[0]).toEqual({id: "versions-0", label: "8", selected: false});
		expect(versionFilter.options[1]).toEqual({id: "versions-1", label: "17", selected: false});
	});

	test("accepts all versions if none is selected", () => {
		const versionFilter = new VersionsFilter(comparisonData);

		let foundVersions = comparisonData.map(c => c.version);
		expect(foundVersions).toContainEqual(8);
		expect(foundVersions).toContainEqual(17);

		const filtered = applyFilters([versionFilter], comparisonData);

		foundVersions = filtered.map(c => c.version);
		expect(foundVersions).toContainEqual(8);
		expect(foundVersions).toContainEqual(17);
	});

	test("removes versions that do not match", () => {
		const versionFilter = new VersionsFilter(comparisonData);
		versionFilter.setOptionSelectedByLabel("8", true);

		let foundVersions = comparisonData.map(c => c.version);
		expect(foundVersions).toContainEqual(8);
		expect(foundVersions).toContainEqual(17);

		const filtered = applyFilters([versionFilter], comparisonData);

		foundVersions = filtered.map(c => c.version);
		expect(foundVersions).toContainEqual(8);
		expect(foundVersions).not.toContainEqual(17);
	});

	test("retains all selected versions", () => {
		const versionFilter = new VersionsFilter(comparisonData);
		versionFilter.setOptionSelectedByLabel("8", true);
		versionFilter.setOptionSelectedByLabel("17", true);

		let foundVersions = comparisonData.map(c => c.version);
		expect(foundVersions).toContainEqual(8);
		expect(foundVersions).toContainEqual(17);

		const filtered = applyFilters([versionFilter], comparisonData);

		foundVersions = filtered.map(c => c.version);
		expect(foundVersions).toContainEqual(8);
		expect(foundVersions).toContainEqual(17);
	});

	test("returns options that are active", () => {
		const versionsFilter = new VersionsFilter(comparisonData);

		expect(versionsFilter.activeOptions()).toHaveLength(0);

		versionsFilter.setOptionSelectedByLabel("8", true);
		versionsFilter.setOptionSelectedByLabel("17", true);

		expect(versionsFilter.activeOptions()).toHaveLength(2);
		expect(versionsFilter.activeOptions()).toContainEqual("8");
		expect(versionsFilter.activeOptions()).toContainEqual("17");
	});

	test("deactivates all options when resetting", () => {
		const versionsFilter = new VersionsFilter(comparisonData);

		versionsFilter.setOptionSelectedByLabel("8", true);
		versionsFilter.setOptionSelectedByLabel("17", true);

		expect(versionsFilter.activeOptions()).toHaveLength(2);
		expect(versionsFilter.activeOptions()).toContainEqual("8");
		expect(versionsFilter.activeOptions()).toContainEqual("17");

		versionsFilter.reset();

		expect(versionsFilter.activeOptions()).toHaveLength(0);
	});

	test("supports testing option existence by label", () => {
		const versionsFilter = new VersionsFilter(comparisonData);

		expect(versionsFilter.hasOptionWithLabel("17")).toBeTruthy();
		expect(versionsFilter.hasOptionWithLabel("Unknown option")).toBeFalsy();
	});
});

describe("DynamicSelectionFilter", () => {
	test("returns number of selected options set by option ID", () => {
		const filter = new DynamicSelectionFilter("a-filter", ["A", "B", "C"], fc => fc.vendor);

		expect(filter.numberOfSelectedOptions()).toEqual(0);

		filter.setOptionSelected("a-filter-0", true);
		filter.setOptionSelected("a-filter-1", true);

		expect(filter.numberOfSelectedOptions()).toEqual(2);

		filter.setOptionSelected("a-filter-0", false);

		expect(filter.numberOfSelectedOptions()).toEqual(1);

		filter.setOptionSelected("a-filter-1", false);

		expect(filter.numberOfSelectedOptions()).toEqual(0);
	});

	test("returns number of selected options set by option label", () => {
		const filter = new DynamicSelectionFilter("a-filter", ["A", "B", "C"], fc => fc.vendor);

		expect(filter.numberOfSelectedOptions()).toEqual(0);

		filter.setOptionSelectedByLabel("A", true);
		filter.setOptionSelectedByLabel("C", true);

		expect(filter.numberOfSelectedOptions()).toEqual(2);

		filter.setOptionSelectedByLabel("A", false);

		expect(filter.numberOfSelectedOptions()).toEqual(1);

		filter.setOptionSelectedByLabel("C", false);

		expect(filter.numberOfSelectedOptions()).toEqual(0);
	});

	test("returns options that are active", () => {
		const filter = new DynamicSelectionFilter("a-filter", ["A", "B", "C"], fc => fc.vendor);

		expect(filter.activeOptions()).toHaveLength(0);

		filter.setOptionSelectedByLabel("A", true);
		filter.setOptionSelectedByLabel("C", true);

		expect(filter.activeOptions()).toHaveLength(2);
		expect(filter.activeOptions()).toContainEqual("A");
		expect(filter.activeOptions()).toContainEqual("C");
	});

	test("deactivates all options when resetting", () => {
		const filter = new DynamicSelectionFilter("a-filter", ["A", "B", "C"], fc => fc.vendor);

		filter.setOptionSelectedByLabel("A", true);
		filter.setOptionSelectedByLabel("C", true);

		expect(filter.activeOptions()).toHaveLength(2);
		expect(filter.activeOptions()).toContainEqual("A");
		expect(filter.activeOptions()).toContainEqual("C");

		filter.reset();

		expect(filter.activeOptions()).toHaveLength(0);
	});

	test("supports testing option existence by label", () => {
		const filter = new DynamicSelectionFilter("a-filter", ["A", "B", "C"], fc => fc.vendor);

		expect(filter.hasOptionWithLabel("B")).toBeTruthy();
		expect(filter.hasOptionWithLabel("Unknown option")).toBeFalsy();
	});
});

describe("TechnologiesFilter", () => {
	let comparisonData: Model.FeatureComparison[];

	beforeAll(async () => {
		// Reverse alphabetical order to ensure data is being sorted.
		const testData = [
			(await import("@/testdata/dukecorp")).default,
			(await import("@/testdata/coffeecorp")).default
		];
		comparisonData = extractComparisonData(testData).productsInComparison;
	});

	test("has options for all technologies", () => {
		const technologiesFilter = new TechnologiesFilter();

		expect(technologiesFilter.id).toEqual("technologies");
		expect(technologiesFilter.options.length).toEqual(3);
		expect(technologiesFilter.options[0]).toEqual({
			id: "technologies-jfr",
			label: "Flight Recorder",
			selected: false
		});
		expect(technologiesFilter.options[1]).toEqual({
			id: "technologies-jfx",
			label: "JavaFX",
			selected: false
		});
		expect(technologiesFilter.options[2]).toEqual({
			id: "technologies-jaws",
			label: "Java Web Start",
			selected: false
		});
	});

	test("does not remove items with missing technologies if none is selected", () => {
		const technologiesFilter = new TechnologiesFilter();

		let foundProducts = comparisonData.map(c => ({vendor: c.vendor, version: c.version, jfx: c.jfx.present}));
		expect(foundProducts).toContainEqual({vendor: "Coffeecorp", version: 8, jfx: Model.Present.YES});
		expect(foundProducts).toContainEqual({vendor: "Coffeecorp", version: 17, jfx: Model.Present.NO});
		expect(foundProducts).toContainEqual({vendor: "Dukecorp", version: 17, jfx: Model.Present.NO});

		const filteredData = applyFilters([technologiesFilter], comparisonData);

		foundProducts = filteredData.map(c => ({vendor: c.vendor, version: c.version, jfx: c.jfx.present}));
		expect(foundProducts).toContainEqual({vendor: "Coffeecorp", version: 8, jfx: Model.Present.YES});
		expect(foundProducts).toContainEqual({vendor: "Coffeecorp", version: 17, jfx: Model.Present.NO});
		expect(foundProducts).toContainEqual({vendor: "Dukecorp", version: 17, jfx: Model.Present.NO});
	});

	test("removes items with missing technologies", () => {
		const technologiesFilter = new TechnologiesFilter();

		let foundProducts = comparisonData.map(c => ({vendor: c.vendor, version: c.version, jfx: c.jfx.present}));
		expect(foundProducts).toContainEqual({vendor: "Coffeecorp", version: 8, jfx: Model.Present.YES});
		expect(foundProducts).toContainEqual({vendor: "Coffeecorp", version: 17, jfx: Model.Present.NO});
		expect(foundProducts).toContainEqual({vendor: "Dukecorp", version: 17, jfx: Model.Present.NO});

		technologiesFilter.setOptionSelectedByLabel("JavaFX", true);
		let filteredData = applyFilters([technologiesFilter], comparisonData);

		foundProducts = filteredData.map(c => ({vendor: c.vendor, version: c.version, jfx: c.jfx.present}));
		expect(foundProducts).toContainEqual({vendor: "Coffeecorp", version: 8, jfx: Model.Present.YES});
		expect(foundProducts).not.toContainEqual({vendor: "Coffeecorp", version: 17, jfx: Model.Present.NO});
		expect(foundProducts).not.toContainEqual({vendor: "Dukecorp", version: 17, jfx: Model.Present.NO});

		technologiesFilter.setOptionSelectedByLabel("JavaFX", true);
		technologiesFilter.setOptionSelectedByLabel("Flight Recorder", true);
		filteredData = applyFilters([technologiesFilter], comparisonData);

		foundProducts = filteredData.map(c => ({vendor: c.vendor, version: c.version, jfx: c.jfx.present}));
		expect(foundProducts).not.toContainEqual({vendor: "Coffeecorp", version: 8, jfx: Model.Present.YES});
		expect(foundProducts).not.toContainEqual({vendor: "Coffeecorp", version: 17, jfx: Model.Present.NO});
		expect(foundProducts).not.toContainEqual({vendor: "Dukecorp", version: 17, jfx: Model.Present.NO});
	});

	test("filters by presence of Java Web Start", () => {
		const technologiesFilter = new TechnologiesFilter();

		let foundProducts = comparisonData.map(c => ({vendor: c.vendor, version: c.version, jaws: c.jaws.present}));
		expect(foundProducts).toContainEqual({vendor: "Coffeecorp", version: 8, jaws: Model.Present.NO});
		expect(foundProducts).toContainEqual({vendor: "Coffeecorp", version: 17, jaws: Model.Present.NO});
		expect(foundProducts).toContainEqual({vendor: "Dukecorp", version: 17, jaws: Model.Present.NO});

		technologiesFilter.setOptionSelectedByLabel("Java Web Start", true);
		let filteredData = applyFilters([technologiesFilter], comparisonData);

		expect(filteredData.length).toBe(0);
	});

	test("returns number of selected options set by option label", () => {
		const filter = new TechnologiesFilter();

		expect(filter.numberOfSelectedOptions()).toEqual(0);

		filter.setOptionSelectedByLabel("Flight Recorder", true);
		filter.setOptionSelectedByLabel("JavaFX", true);

		expect(filter.numberOfSelectedOptions()).toEqual(2);

		filter.setOptionSelectedByLabel("Flight Recorder", false);

		expect(filter.numberOfSelectedOptions()).toEqual(1);

		filter.setOptionSelectedByLabel("JavaFX", false);

		expect(filter.numberOfSelectedOptions()).toEqual(0);
	});

	test("returns number of selected options set by option ID", () => {
		const filter = new TechnologiesFilter();

		expect(filter.numberOfSelectedOptions()).toEqual(0);

		filter.setOptionSelected("technologies-jfr", true);
		filter.setOptionSelected("technologies-jfx", true);

		expect(filter.numberOfSelectedOptions()).toEqual(2);

		filter.setOptionSelected("technologies-jfr", false);

		expect(filter.numberOfSelectedOptions()).toEqual(1);

		filter.setOptionSelected("technologies-jfx", false);

		expect(filter.numberOfSelectedOptions()).toEqual(0);
	});

	test("returns options that are active", () => {
		const technologiesFilter = new TechnologiesFilter();

		expect(technologiesFilter.activeOptions()).toHaveLength(0);

		technologiesFilter.setOptionSelectedByLabel("JavaFX", true);
		technologiesFilter.setOptionSelectedByLabel("Flight Recorder", true);

		expect(technologiesFilter.activeOptions()).toHaveLength(2);
		expect(technologiesFilter.activeOptions()).toContainEqual("JavaFX");
		expect(technologiesFilter.activeOptions()).toContainEqual("Flight Recorder");
	});

	test("deactivates all options when resetting", () => {
		const technologiesFilter = new TechnologiesFilter();

		technologiesFilter.setOptionSelectedByLabel("JavaFX", true);
		technologiesFilter.setOptionSelectedByLabel("Flight Recorder", true);

		expect(technologiesFilter.activeOptions()).toHaveLength(2);
		expect(technologiesFilter.activeOptions()).toContainEqual("JavaFX");
		expect(technologiesFilter.activeOptions()).toContainEqual("Flight Recorder");

		technologiesFilter.reset();

		expect(technologiesFilter.activeOptions()).toHaveLength(0);
	});

	test("supports testing option existence by label", () => {
		const technologiesFilter = new TechnologiesFilter();

		expect(technologiesFilter.hasOptionWithLabel("JavaFX")).toBeTruthy();
		expect(technologiesFilter.hasOptionWithLabel("Unknown option")).toBeFalsy();
	});
});

describe("LicensingFilter", () => {
	let comparisonData: Model.FeatureComparison[];

	beforeAll(async () => {
		// Reverse alphabetical order to ensure data is being sorted.
		const testData = [
			(await import("@/testdata/dukecorp")).default,
			(await import("@/testdata/coffeecorp")).default
		];
		comparisonData = extractComparisonData(testData).productsInComparison;
	});

	test("has filter for all licensing options", () => {
		const licensingFilter = new LicensingFilter();

		expect(licensingFilter.id).toEqual("licensing");
		expect(licensingFilter.options.length).toEqual(2);
		expect(licensingFilter.options[0]).toEqual({
			id: "licensing-free-in-development",
			label: "Free in Development",
			selected: false
		});
		expect(licensingFilter.options[1]).toEqual({
			id: "licensing-free-in-production",
			label: "Free in Production",
			selected: false
		});
	});

	test("keeps items with missing options if none is selected", () => {
		const licensingFilter = new LicensingFilter();

		let foundProducts = comparisonData.map(c => ({
			vendor: c.vendor,
			version: c.version,
			free: c.freeInProduction.present
		}));
		expect(foundProducts).toContainEqual({vendor: "Coffeecorp", version: 8, free: Model.Present.YES});
		expect(foundProducts).toContainEqual({vendor: "Coffeecorp", version: 17, free: Model.Present.YES});
		expect(foundProducts).toContainEqual({vendor: "Dukecorp", version: 17, free: Model.Present.NO});

		const filteredData = applyFilters([licensingFilter], comparisonData);

		foundProducts = filteredData.map(c => ({
			vendor: c.vendor,
			version: c.version,
			free: c.freeInProduction.present
		}));
		expect(foundProducts).toContainEqual({vendor: "Coffeecorp", version: 8, free: Model.Present.YES});
		expect(foundProducts).toContainEqual({vendor: "Coffeecorp", version: 17, free: Model.Present.YES});
		expect(foundProducts).toContainEqual({vendor: "Dukecorp", version: 17, free: Model.Present.NO});
	});

	test("removes items with missing options", () => {
		const licensingFilter = new LicensingFilter();

		let foundProducts = comparisonData.map(c => ({
			vendor: c.vendor,
			version: c.version,
			free: c.freeInProduction.present
		}));
		expect(foundProducts).toContainEqual({vendor: "Coffeecorp", version: 8, free: Model.Present.YES});
		expect(foundProducts).toContainEqual({vendor: "Coffeecorp", version: 17, free: Model.Present.YES});
		expect(foundProducts).toContainEqual({vendor: "Dukecorp", version: 17, free: Model.Present.NO});

		licensingFilter.setOptionSelectedByLabel("Free in Production", true);
		let filteredData = applyFilters([licensingFilter], comparisonData);

		foundProducts = filteredData.map(c => ({
			vendor: c.vendor,
			version: c.version,
			free: c.freeInProduction.present
		}));
		expect(foundProducts).toContainEqual({vendor: "Coffeecorp", version: 8, free: Model.Present.YES});
		expect(foundProducts).toContainEqual({vendor: "Coffeecorp", version: 17, free: Model.Present.YES});
		expect(foundProducts).not.toContainEqual({vendor: "Dukecorp", version: 17, free: Model.Present.NO});

		licensingFilter.setOptionSelectedByLabel("Free in Development", true);
		licensingFilter.setOptionSelectedByLabel("Free in Production", true);
		filteredData = applyFilters([licensingFilter], comparisonData);

		foundProducts = filteredData.map(c => ({
			vendor: c.vendor,
			version: c.version,
			free: c.freeInProduction.present
		}));
		expect(foundProducts).toContainEqual({vendor: "Coffeecorp", version: 8, free: Model.Present.YES});
		expect(foundProducts).toContainEqual({vendor: "Coffeecorp", version: 17, free: Model.Present.YES});
		expect(foundProducts).not.toContainEqual({vendor: "Dukecorp", version: 17, free: Model.Present.NO});
	});

	test("returns number of selected options set by option ID", () => {
		const licensingFilter = new LicensingFilter();

		expect(licensingFilter.numberOfSelectedOptions()).toEqual(0);

		licensingFilter.setOptionSelected("licensing-free-in-development", true);
		licensingFilter.setOptionSelected("licensing-free-in-production", true);

		expect(licensingFilter.numberOfSelectedOptions()).toEqual(2);

		licensingFilter.setOptionSelected("licensing-free-in-development", false);

		expect(licensingFilter.numberOfSelectedOptions()).toEqual(1);

		licensingFilter.setOptionSelected("licensing-free-in-production", false);

		expect(licensingFilter.numberOfSelectedOptions()).toEqual(0);
	});

	test("returns number of selected options set by option label", () => {
		const licensingFilter = new LicensingFilter();

		expect(licensingFilter.numberOfSelectedOptions()).toEqual(0);

		licensingFilter.setOptionSelectedByLabel("Free in Development", true);
		licensingFilter.setOptionSelectedByLabel("Free in Production", true);

		expect(licensingFilter.numberOfSelectedOptions()).toEqual(2);

		licensingFilter.setOptionSelectedByLabel("Free in Development", false);

		expect(licensingFilter.numberOfSelectedOptions()).toEqual(1);

		licensingFilter.setOptionSelectedByLabel("Free in Production", false);

		expect(licensingFilter.numberOfSelectedOptions()).toEqual(0);
	});

	test("returns options that are active", () => {
		const licensingFilter = new LicensingFilter();

		expect(licensingFilter.activeOptions()).toHaveLength(0);

		licensingFilter.setOptionSelectedByLabel("Free in Development", true);
		licensingFilter.setOptionSelectedByLabel("Free in Production", true);

		expect(licensingFilter.activeOptions()).toHaveLength(2);
		expect(licensingFilter.activeOptions()).toContainEqual("Free in Development");
		expect(licensingFilter.activeOptions()).toContainEqual("Free in Production");
	});

	test("deactivates all options when resetting", () => {
		const licensingFilter = new LicensingFilter();

		licensingFilter.setOptionSelectedByLabel("Free in Development", true);
		licensingFilter.setOptionSelectedByLabel("Free in Production", true);

		expect(licensingFilter.activeOptions()).toHaveLength(2);
		expect(licensingFilter.activeOptions()).toContainEqual("Free in Development");
		expect(licensingFilter.activeOptions()).toContainEqual("Free in Production");

		licensingFilter.reset();

		expect(licensingFilter.activeOptions()).toHaveLength(0);
	});

	test("supports testing option existence by label", () => {
		const licensingFilter = new LicensingFilter();

		expect(licensingFilter.hasOptionWithLabel("Free in Development")).toBeTruthy();
		expect(licensingFilter.hasOptionWithLabel("Unknown option")).toBeFalsy();
	});
});
