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
import { describe, expect, test } from "@jest/globals";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/jest-globals";
import { fireEvent, render, screen, within } from "@testing-library/react";
import ResizeObserver from "resize-observer-polyfill";
import { ComparisonProvider } from "./comparisonContext";
import { Filters } from "./filters";
import {
	DynamicSelectionFilter,
	GarbageCollectorsFilter,
	LicensingFilter,
	PlatformsFilter,
	TechnologiesFilter,
} from "@/src/filter";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

describe("<Filters/>", () => {
	// @headlessui/react needs ResizeObserver which is not available in the test environment.
	(global as unknown).ResizeObserver = ResizeObserver;

	const filters = [
		new TechnologiesFilter(),
		new LicensingFilter(),
		new PlatformsFilter(),
		new GarbageCollectorsFilter(),
		new DynamicSelectionFilter("versions", ["8", "11", "17"], (fc) => fc.version.toString()),
		new DynamicSelectionFilter("vendors", ["Coffeecorp", "Dukecorp"], (fc) => fc.vendor),
		new DynamicSelectionFilter("vms", ["CoffeeVM", "DukeVM"], (fc) => fc.virtualMachine.text),
	];

	const component = (
		<MemoryRouterProvider url="/doesnotmatter">
			<ComparisonProvider filters={filters} data={[]} footnotes={[]}>
				<Filters />
			</ComparisonProvider>
		</MemoryRouterProvider>
	);

	test("renders all filters", () => {
		render(component);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Filters");

		fireEvent.click(screen.getByRole("button", { name: "Versions" }));

		const versions = within(screen.getByRole("form", { name: "Selectable Versions" }));
		expect(versions.getAllByRole("checkbox")).toHaveLength(3);
		expect(versions.getByRole("checkbox", { name: "8" })).not.toBeChecked();
		expect(versions.getByRole("checkbox", { name: "11" })).not.toBeChecked();
		expect(versions.getByRole("checkbox", { name: "17" })).not.toBeChecked();

		fireEvent.click(screen.getByRole("button", { name: "Vendors" }));

		const vendors = within(screen.getByRole("form", { name: "Selectable Vendors" }));
		expect(vendors.getAllByRole("checkbox")).toHaveLength(2);
		expect(vendors.getByRole("checkbox", { name: "Coffeecorp" })).not.toBeChecked();
		expect(vendors.getByRole("checkbox", { name: "Dukecorp" })).not.toBeChecked();

		fireEvent.click(screen.getByRole("button", { name: "VMs" }));

		const vms = within(screen.getByRole("form", { name: "Selectable VMs" }));
		expect(vms.getAllByRole("checkbox")).toHaveLength(2);
		expect(vms.getByRole("checkbox", { name: "CoffeeVM" })).not.toBeChecked();
		expect(vms.getByRole("checkbox", { name: "DukeVM" })).not.toBeChecked();

		fireEvent.click(screen.getByRole("button", { name: "Technologies" }));

		const technologies = within(screen.getByRole("form", { name: "Selectable Technologies" }));
		expect(technologies.getAllByRole("checkbox")).toHaveLength(3);
		expect(technologies.getByRole("checkbox", { name: "Flight Recorder" })).not.toBeChecked();
		expect(technologies.getByRole("checkbox", { name: "JavaFX" })).not.toBeChecked();
		expect(technologies.getByRole("checkbox", { name: "Java Web Start" })).not.toBeChecked();

		fireEvent.click(screen.getByRole("button", { name: "GCs" }));

		const gcs = within(screen.getByRole("form", { name: "Selectable GCs" }));
		expect(gcs.getAllByRole("checkbox")).toHaveLength(7);
		expect(gcs.getByRole("checkbox", { name: "CMS" })).not.toBeChecked();
		expect(gcs.getByRole("checkbox", { name: "Z" })).not.toBeChecked();

		fireEvent.click(screen.getByRole("button", { name: "Platforms" }));

		const platforms = within(screen.getByRole("form", { name: "Selectable Platforms" }));
		expect(platforms.getAllByRole("checkbox")).toHaveLength(17);
		expect(platforms.getByRole("checkbox", { name: "AIX, PPC" })).not.toBeChecked();
		expect(platforms.getByRole("checkbox", { name: "Windows, x86, 64-bit" })).not.toBeChecked();

		fireEvent.click(screen.getByRole("button", { name: "Licensing" }));

		const licensing = within(screen.getByRole("form", { name: "Selectable Licensing" }));
		expect(licensing.getAllByRole("checkbox")).toHaveLength(2);
		expect(licensing.getByRole("checkbox", { name: "Free in Development" })).not.toBeChecked();
		expect(licensing.getByRole("checkbox", { name: "Free in Production" })).not.toBeChecked();
	});

	test("updates filters on click", () => {
		render(component);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Filters");

		fireEvent.click(screen.getByRole("button", { name: "Versions" }));

		let versions = within(screen.getByRole("form", { name: "Selectable Versions" }));
		expect(versions.getByRole("checkbox", { name: "8" })).not.toBeChecked();
		expect(versions.getByRole("checkbox", { name: "11" })).not.toBeChecked();
		expect(versions.getByRole("checkbox", { name: "17" })).not.toBeChecked();
		fireEvent.click(versions.getByRole("checkbox", { name: "11" }));

		// Open and close to ensure that state persists. The `1` stands for the number of active
		// filters.
		fireEvent.click(screen.getByRole("button", { name: "Versions 1" }));
		fireEvent.click(screen.getByRole("button", { name: "Versions 1" }));

		versions = within(screen.getByRole("form", { name: "Selectable Versions" }));
		expect(versions.getByRole("checkbox", { name: "8" })).not.toBeChecked();
		expect(versions.getByRole("checkbox", { name: "11" })).toBeChecked();
		expect(versions.getByRole("checkbox", { name: "17" })).not.toBeChecked();

		fireEvent.click(screen.getByRole("button", { name: "Versions 1" }));

		fireEvent.click(screen.getByRole("button", { name: "Vendors" }));

		let vendors = within(screen.getByRole("form", { name: "Selectable Vendors" }));
		expect(vendors.getByRole("checkbox", { name: "Coffeecorp" })).not.toBeChecked();
		expect(vendors.getByRole("checkbox", { name: "Dukecorp" })).not.toBeChecked();
		fireEvent.click(vendors.getByRole("checkbox", { name: "Coffeecorp" }));
		fireEvent.click(vendors.getByRole("checkbox", { name: "Dukecorp" }));

		// Open and close to ensure that state persists. The `2` stands for the number of active
		// filters.
		fireEvent.click(screen.getByRole("button", { name: "Vendors 2" }));
		fireEvent.click(screen.getByRole("button", { name: "Vendors 2" }));

		vendors = within(screen.getByRole("form", { name: "Selectable Vendors" }));
		expect(vendors.getByRole("checkbox", { name: "Coffeecorp" })).toBeChecked();
		expect(vendors.getByRole("checkbox", { name: "Dukecorp" })).toBeChecked();
		fireEvent.click(vendors.getByRole("checkbox", { name: "Coffeecorp" }));

		// Open and close to ensure that state persists. The `1` stands for the number of active
		// filters.
		fireEvent.click(screen.getByRole("button", { name: "Vendors 1" }));
		fireEvent.click(screen.getByRole("button", { name: "Vendors 1" }));

		vendors = within(screen.getByRole("form", { name: "Selectable Vendors" }));
		expect(vendors.getByRole("checkbox", { name: "Coffeecorp" })).not.toBeChecked();
		expect(vendors.getByRole("checkbox", { name: "Dukecorp" })).toBeChecked();
	});
});
