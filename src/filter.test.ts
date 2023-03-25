import {beforeAll, expect} from "@jest/globals";
import {extractComparisonData} from "@/src/comparison";
import {
	applyFilters,
	createFilters,
	createLicensingFilter,
	createTechnologiesFilter,
	createVendorsFilter,
	createVersionsFilter,
	createVirtualMachinesFilter,
	DynamicSelectionFilter
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

	test("createVersionsFilter() produces a filter with all JDK versions", () => {
		const versionFilter = createVersionsFilter(comparisonData);

		expect(versionFilter.id).toEqual("versions");
		expect(versionFilter.options.length).toEqual(2);
		expect(versionFilter.options[0]).toEqual({id: "versions-0", label: "8", selected: false});
		expect(versionFilter.options[1]).toEqual({id: "versions-1", label: "17", selected: false});
	});

	test("createVersionFilter() accepts all versions if none is selected", () => {
		const versionFilter = createVersionsFilter(comparisonData);

		let foundVersions = comparisonData.map(c => c.version);
		expect(foundVersions).toContainEqual(8);
		expect(foundVersions).toContainEqual(17);

		const filtered = applyFilters([versionFilter], comparisonData);

		foundVersions = filtered.map(c => c.version);
		expect(foundVersions).toContainEqual(8);
		expect(foundVersions).toContainEqual(17);
	});

	test("createVersionFilter() creates a filter that removes versions that do not match", () => {
		const versionFilter = createVersionsFilter(comparisonData);
		versionFilter.setOptionSelectedByLabel("8", true);

		let foundVersions = comparisonData.map(c => c.version);
		expect(foundVersions).toContainEqual(8);
		expect(foundVersions).toContainEqual(17);

		const filtered = applyFilters([versionFilter], comparisonData);

		foundVersions = filtered.map(c => c.version);
		expect(foundVersions).toContainEqual(8);
		expect(foundVersions).not.toContainEqual(17);
	});

	test("createVersionFilter() creates a filter that includes all selected versions", () => {
		const versionFilter = createVersionsFilter(comparisonData);
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

	test("createVendorsFilter() produces a filter with all JDK vendors", () => {
		const vendorsFilter = createVendorsFilter(comparisonData);

		expect(vendorsFilter.id).toEqual("vendors");
		expect(vendorsFilter.options.length).toEqual(2);
		expect(vendorsFilter.options[0]).toEqual({id: "vendors-0", label: "Coffeecorp", selected: false});
		expect(vendorsFilter.options[1]).toEqual({id: "vendors-1", label: "Dukecorp", selected: false});
	});

	test("createVendorsFilter() produces a filter that accepts all vendors if none is selected", () => {
		const vendorsFilter = createVendorsFilter(comparisonData);

		let foundVendors = comparisonData.map(c => c.vendor);
		expect(foundVendors).toContainEqual("Coffeecorp");
		expect(foundVendors).toContainEqual("Dukecorp");

		const filteredData = applyFilters([vendorsFilter], comparisonData);

		foundVendors = filteredData.map(c => c.vendor);
		expect(foundVendors).toContainEqual("Coffeecorp");
		expect(foundVendors).toContainEqual("Dukecorp");
	});

	test("createVendorsFilter() produces a filter that removes all vendors that are not selected", () => {
		const vendorsFilter = createVendorsFilter(comparisonData);

		let foundVendors = comparisonData.map(c => c.vendor);
		expect(foundVendors).toContainEqual("Coffeecorp");
		expect(foundVendors).toContainEqual("Dukecorp");

		vendorsFilter.setOptionSelectedByLabel("Dukecorp", true);

		const filteredData = applyFilters([vendorsFilter], comparisonData);

		foundVendors = filteredData.map(c => c.vendor);
		expect(foundVendors).not.toContainEqual("Coffeecorp");
		expect(foundVendors).toContainEqual("Dukecorp");
	});

	test("createVendorsFilter() produces a filter that includes all vendors that are selected", () => {
		const vendorsFilter = createVendorsFilter(comparisonData);

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

	test("createVirtualMachinesFilter() produces a filter with all VMs", () => {
		const virtualMachinesFilter = createVirtualMachinesFilter(comparisonData);

		expect(virtualMachinesFilter.id).toEqual("vms");
		expect(virtualMachinesFilter.options.length).toEqual(2);
		expect(virtualMachinesFilter.options[0]).toEqual({id: "vms-0", label: "CoffeeVM", selected: false});
		expect(virtualMachinesFilter.options[1]).toEqual({id: "vms-1", label: "DukeVM", selected: false});
	});

	test("createVirtualMachinesFilter() produces a filter that accepts all VMs if none is selected", () => {
		const virtualMachinesFilter = createVirtualMachinesFilter(comparisonData);

		let foundVMs = comparisonData.map(c => c.virtualMachine.text);
		expect(foundVMs).toContainEqual("CoffeeVM");
		expect(foundVMs).toContainEqual("DukeVM");

		const filteredData = applyFilters([virtualMachinesFilter], comparisonData);

		foundVMs = filteredData.map(c => c.virtualMachine.text);
		expect(foundVMs).toContainEqual("CoffeeVM");
		expect(foundVMs).toContainEqual("DukeVM");
	});

	test("createVirtualMachinesFilter() produces a filter that removes all VMs that are not selected", () => {
		const virtualMachinesFilter = createVirtualMachinesFilter(comparisonData);

		let foundVMs = comparisonData.map(c => c.virtualMachine.text);
		expect(foundVMs).toContainEqual("CoffeeVM");
		expect(foundVMs).toContainEqual("DukeVM");

		virtualMachinesFilter.setOptionSelectedByLabel("DukeVM", true);

		const filteredData = applyFilters([virtualMachinesFilter], comparisonData);

		foundVMs = filteredData.map(c => c.virtualMachine.text);
		expect(foundVMs).not.toContainEqual("CoffeeVM");
		expect(foundVMs).toContainEqual("DukeVM");
	});

	test("createVirtualMachinesFilter() produces a filter that includes all VMs that are selected", () => {
		const virtualMachinesFilter = createVirtualMachinesFilter(comparisonData);

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

	test("TechnologiesFilter produces a filter that filters by technologies", () => {
		const technologiesFilter = createTechnologiesFilter();

		expect(technologiesFilter.id).toEqual("technologies");
		expect(technologiesFilter.options.length).toEqual(3);
		expect(technologiesFilter.options[0]).toEqual({
			id: "technologies-jfr",
			label: "Flight Recorder",
			selected: false
		});
		expect(technologiesFilter.options[1]).toEqual({id: "technologies-jfx", label: "JavaFX", selected: false});
		expect(technologiesFilter.options[2]).toEqual({
			id: "technologies-jaws",
			label: "Java Web Start",
			selected: false
		});
	});

	test("TechnologiesFilter does not remove items with missing technologies if none is selected", () => {
		const technologiesFilter = createTechnologiesFilter();

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

	test("TechnologiesFilter removes items with missing technologies", () => {
		const technologiesFilter = createTechnologiesFilter();

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

	test("TechnologiesFilter filters by presence of Java Web Start", () => {
		const technologiesFilter = createTechnologiesFilter();

		let foundProducts = comparisonData.map(c => ({vendor: c.vendor, version: c.version, jaws: c.jaws.present}));
		expect(foundProducts).toContainEqual({vendor: "Coffeecorp", version: 8, jaws: Model.Present.NO});
		expect(foundProducts).toContainEqual({vendor: "Coffeecorp", version: 17, jaws: Model.Present.NO});
		expect(foundProducts).toContainEqual({vendor: "Dukecorp", version: 17, jaws: Model.Present.NO});

		technologiesFilter.setOptionSelectedByLabel("Java Web Start", true);
		let filteredData = applyFilters([technologiesFilter], comparisonData);

		expect(filteredData.length).toBe(0);
	});

	test("DynamicSelectionFilter returns number of selected options set by option ID", () => {
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

	test("DynamicSelectionFilter returns number of selected options set by option label", () => {
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

	test("TechnologiesFilter returns number of selected options set by option ID", () => {
		const filter = createTechnologiesFilter();

		expect(filter.numberOfSelectedOptions()).toEqual(0);

		filter.setOptionSelected("technologies-jfr", true);
		filter.setOptionSelected("technologies-jfx", true);

		expect(filter.numberOfSelectedOptions()).toEqual(2);

		filter.setOptionSelected("technologies-jfr", false);

		expect(filter.numberOfSelectedOptions()).toEqual(1);

		filter.setOptionSelected("technologies-jfx", false);

		expect(filter.numberOfSelectedOptions()).toEqual(0);
	});

	test("TechnologiesFilter returns number of selected options set by option label", () => {
		const filter = createTechnologiesFilter();

		expect(filter.numberOfSelectedOptions()).toEqual(0);

		filter.setOptionSelectedByLabel("Flight Recorder", true);
		filter.setOptionSelectedByLabel("JavaFX", true);

		expect(filter.numberOfSelectedOptions()).toEqual(2);

		filter.setOptionSelectedByLabel("Flight Recorder", false);

		expect(filter.numberOfSelectedOptions()).toEqual(1);

		filter.setOptionSelectedByLabel("JavaFX", false);

		expect(filter.numberOfSelectedOptions()).toEqual(0);
	});

	test("LicensingFilter produces a filter that filters by licensing options", () => {
		const licensingFilter = createLicensingFilter();

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

	test("LicensingFilter keeps items with missing options if none is selected", () => {
		const licensingFilter = createLicensingFilter();

		let foundProducts = comparisonData.map(c => ({vendor: c.vendor, version: c.version, free: c.freeInProduction.present}));
		expect(foundProducts).toContainEqual({vendor: "Coffeecorp", version: 8, free: Model.Present.YES});
		expect(foundProducts).toContainEqual({vendor: "Coffeecorp", version: 17, free: Model.Present.YES});
		expect(foundProducts).toContainEqual({vendor: "Dukecorp", version: 17, free: Model.Present.NO});

		const filteredData = applyFilters([licensingFilter], comparisonData);

		foundProducts = filteredData.map(c => ({vendor: c.vendor, version: c.version, free: c.freeInProduction.present}));
		expect(foundProducts).toContainEqual({vendor: "Coffeecorp", version: 8, free: Model.Present.YES});
		expect(foundProducts).toContainEqual({vendor: "Coffeecorp", version: 17, free: Model.Present.YES});
		expect(foundProducts).toContainEqual({vendor: "Dukecorp", version: 17, free: Model.Present.NO});
	});

	test("LicensingFilter removes items with missing options", () => {
		const licensingFilter = createLicensingFilter();

		let foundProducts = comparisonData.map(c => ({vendor: c.vendor, version: c.version, free: c.freeInProduction.present}));
		expect(foundProducts).toContainEqual({vendor: "Coffeecorp", version: 8, free: Model.Present.YES});
		expect(foundProducts).toContainEqual({vendor: "Coffeecorp", version: 17, free: Model.Present.YES});
		expect(foundProducts).toContainEqual({vendor: "Dukecorp", version: 17, free: Model.Present.NO});

		licensingFilter.setOptionSelectedByLabel("Free in Production", true);
		let filteredData = applyFilters([licensingFilter], comparisonData);

		foundProducts = filteredData.map(c => ({vendor: c.vendor, version: c.version, free: c.freeInProduction.present}));
		expect(foundProducts).toContainEqual({vendor: "Coffeecorp", version: 8, free: Model.Present.YES});
		expect(foundProducts).toContainEqual({vendor: "Coffeecorp", version: 17, free: Model.Present.YES});
		expect(foundProducts).not.toContainEqual({vendor: "Dukecorp", version: 17, free: Model.Present.NO});

		licensingFilter.setOptionSelectedByLabel("Free in Development", true);
		licensingFilter.setOptionSelectedByLabel("Free in Production", true);
		filteredData = applyFilters([licensingFilter], comparisonData);

		foundProducts = filteredData.map(c => ({vendor: c.vendor, version: c.version, free: c.freeInProduction.present}));
		expect(foundProducts).toContainEqual({vendor: "Coffeecorp", version: 8, free: Model.Present.YES});
		expect(foundProducts).toContainEqual({vendor: "Coffeecorp", version: 17, free: Model.Present.YES});
		expect(foundProducts).not.toContainEqual({vendor: "Dukecorp", version: 17, free: Model.Present.NO});
	});

	test("LicensingFilter returns number of selected options set by option ID", () => {
		const licensingFilter = createLicensingFilter();

		expect(licensingFilter.numberOfSelectedOptions()).toEqual(0);

		licensingFilter.setOptionSelected("licensing-free-in-development", true);
		licensingFilter.setOptionSelected("licensing-free-in-production", true);

		expect(licensingFilter.numberOfSelectedOptions()).toEqual(2);

		licensingFilter.setOptionSelected("licensing-free-in-development", false);

		expect(licensingFilter.numberOfSelectedOptions()).toEqual(1);

		licensingFilter.setOptionSelected("licensing-free-in-production", false);

		expect(licensingFilter.numberOfSelectedOptions()).toEqual(0);
	});

	test("LicensingFilter returns number of selected options set by option label", () => {
		const licensingFilter = createLicensingFilter();

		expect(licensingFilter.numberOfSelectedOptions()).toEqual(0);

		licensingFilter.setOptionSelectedByLabel("Free in Development", true);
		licensingFilter.setOptionSelectedByLabel("Free in Production", true);

		expect(licensingFilter.numberOfSelectedOptions()).toEqual(2);

		licensingFilter.setOptionSelectedByLabel("Free in Development", false);

		expect(licensingFilter.numberOfSelectedOptions()).toEqual(1);

		licensingFilter.setOptionSelectedByLabel("Free in Production", false);

		expect(licensingFilter.numberOfSelectedOptions()).toEqual(0);
	});
});
