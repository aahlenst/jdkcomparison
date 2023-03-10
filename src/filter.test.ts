import {beforeAll, expect} from "@jest/globals";
import {extractComparisonData} from "@/src/comparison";
import {
	applyFilters,
	createFilters,
	createTechnologiesFilter,
	createVendorsFilter,
	createVersionsFilter
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

		expect(filters).toEqual(["technologies", "vendors", "versions"]);
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

	test("createTechnologiesFilter() produces a filter that filters by technologies", () => {
		const technologiesFilter = createTechnologiesFilter();

		expect(technologiesFilter.id).toEqual("technologies");
		expect(technologiesFilter.options.length).toEqual(2);
		expect(technologiesFilter.options[0]).toEqual({
			id: "technologies-jfr",
			label: "Flight Recorder",
			selected: false
		});
		expect(technologiesFilter.options[1]).toEqual({id: "technologies-jfx", label: "JavaFX", selected: false});
	});

	test("createTechnologiesFilter() does not remove items with missing technologies if none is selected", () => {
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

	test("createTechnologiesFilter() removes items with missing technologies", () => {
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
});