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
import { beforeEach, describe, expect, test } from "@jest/globals";
import { Model } from "@/src/modelTypes";
import { extractComparisonData } from "@/src/comparison";
import {
	AscendingNameComparator,
	AscendingVendorComparator,
	AscendingVersionComparator,
	DescendingNameComparator,
	DescendingVendorComparator,
	DescendingVersionComparator,
	sortFeatureComparisons,
} from "@/src/sorting";

describe("sortFeatureComparisons()", () => {
	let comparisonData: Model.FeatureComparison[];

	beforeEach(async () => {
		const testData = [
			(await import("@/testdata/dukecorp")).default,
			(await import("@/testdata/coffeecorp")).default,
		];
		comparisonData = extractComparisonData(testData).productsInComparison;
	});

	test("sorts with comparator", () => {
		sortFeatureComparisons(comparisonData, [new AscendingVersionComparator()]);

		const sortedData = comparisonData.map((fc) => ({
			vendor: fc.vendor,
			name: fc.name,
		}));

		expect(sortedData).toHaveLength(comparisonData.length);
		expect(sortedData[0]).toEqual({
			vendor: "Coffeecorp",
			name: "Coffeecorp JDK 8",
		});
		expect(sortedData[1]).toEqual({
			vendor: "Coffeecorp",
			name: "Coffeecorp JDK 17",
		});
		expect(sortedData[2]).toEqual({
			vendor: "Dukecorp",
			name: "Dukecorp JDK 17",
		});
	});
});

describe("AscendingVendorComparator", () => {
	test("sorts by vendor name in ascending order", () => {
		const comparator = new AscendingVendorComparator();

		const vendors = [{ vendor: "B" }, { vendor: "C" }, { vendor: "A" }];
		vendors.sort(comparator.compare.bind(comparator));

		expect(vendors).toHaveLength(3);
		expect(vendors[0]).toEqual({ vendor: "A" });
		expect(vendors[1]).toEqual({ vendor: "B" });
		expect(vendors[2]).toEqual({ vendor: "C" });
	});
});

describe("DescendingVendorComparator", () => {
	test("sorts by vendor name in descending order", () => {
		const comparator = new DescendingVendorComparator();

		const vendors = [{ vendor: "B" }, { vendor: "C" }, { vendor: "A" }];
		vendors.sort(comparator.compare.bind(comparator));

		expect(vendors).toHaveLength(3);
		expect(vendors[0]).toEqual({ vendor: "C" });
		expect(vendors[1]).toEqual({ vendor: "B" });
		expect(vendors[2]).toEqual({ vendor: "A" });
	});
});

describe("AscendingVersionComparator", () => {
	test("sorts by version number in ascending order", () => {
		const comparator = new AscendingVersionComparator();

		const versions = [{ version: 17 }, { version: 18 }, { version: 8 }];
		versions.sort(comparator.compare.bind(comparator));

		expect(versions).toHaveLength(3);
		expect(versions[0]).toEqual({ version: 8 });
		expect(versions[1]).toEqual({ version: 17 });
		expect(versions[2]).toEqual({ version: 18 });
	});
});

describe("DescendingVersionComparator", () => {
	test("sorts by version number in descending order", () => {
		const comparator = new DescendingVersionComparator();

		const versions = [{ version: 17 }, { version: 18 }, { version: 8 }];
		versions.sort(comparator.compare.bind(comparator));

		expect(versions).toHaveLength(3);
		expect(versions[0]).toEqual({ version: 18 });
		expect(versions[1]).toEqual({ version: 17 });
		expect(versions[2]).toEqual({ version: 8 });
	});
});

describe("AscendingNameComparator", () => {
	test("sorts by name in ascending order", () => {
		const comparator = new AscendingNameComparator();

		const names = [
			{ name: "Dukecorp JDK 17" },
			{ name: "Dukecorp JDK 16" },
			{ name: "Coffeecorp JDK 17" },
		];
		names.sort(comparator.compare.bind(comparator));

		expect(names).toHaveLength(3);
		expect(names[0]).toEqual({ name: "Coffeecorp JDK 17" });
		expect(names[1]).toEqual({ name: "Dukecorp JDK 16" });
		expect(names[2]).toEqual({ name: "Dukecorp JDK 17" });
	});
});

describe("DescendingNameComparator", () => {
	test("sorts by name in descending order", () => {
		const comparator = new DescendingNameComparator();

		const names = [
			{ name: "Dukecorp JDK 17" },
			{ name: "Dukecorp JDK 16" },
			{ name: "Coffeecorp JDK 17" },
		];
		names.sort(comparator.compare.bind(comparator));

		expect(names).toHaveLength(3);
		expect(names[0]).toEqual({ name: "Dukecorp JDK 17" });
		expect(names[1]).toEqual({ name: "Dukecorp JDK 16" });
		expect(names[2]).toEqual({ name: "Coffeecorp JDK 17" });
	});
});
