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
import { ComparisonProvider } from "./comparisonContext";
import { Filters } from "./filters";
import {
	DynamicSelectionFilter,
	GarbageCollectorsFilter,
	LicensingFilter,
	PlatformsFilter,
	TechnologiesFilter,
	VersionsFilter,
} from "../../src/filter";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

describe("<Filters/>", () => {
	const filters = [
		new TechnologiesFilter(),
		new LicensingFilter(),
		new PlatformsFilter(),
		new GarbageCollectorsFilter(),
		new DynamicSelectionFilter("versions", ["8", "11", "17"], (fc) => fc.version.toString()),
		new DynamicSelectionFilter("vendors", ["Coffeecorp", "Dukecorp"], (fc) => fc.vendor),
		new DynamicSelectionFilter("vms", ["CoffeeVM", "DukeVM"], (fc) =>
			fc.virtualMachine.toString()
		),
	];

	const component = (
		<MemoryRouterProvider url="/doesnotmatter">
			<ComparisonProvider filters={filters} data={[]} footnotes={[]}>
				<Filters />
			</ComparisonProvider>
		</MemoryRouterProvider>
	);

	it("renders all filters", () => {
		cy.mount(component);

		cy.get(".filter-name").eq(0).should("have.text", "Versions");
		cy.get(".filter-name").eq(0).click();
		cy.get("label[for=versions-0]").should("have.text", "8");
		cy.get("input[id=versions-0]").should("not.be.checked");
		cy.get("label[for=versions-1]").should("have.text", "11");
		cy.get("input[id=versions-1]").should("not.be.checked");
		cy.get("label[for=versions-2]").should("have.text", "17");
		cy.get("input[id=versions-2]").should("not.be.checked");

		cy.get(".filter-name").eq(1).should("have.text", "Vendors");
		cy.get(".filter-name").eq(1).click();
		cy.get("label[for=vendors-0]").should("have.text", "Coffeecorp");
		cy.get("input[id=vendors-0]").should("not.be.checked");
		cy.get("label[for=vendors-1]").should("have.text", "Dukecorp");
		cy.get("input[id=vendors-1]").should("not.be.checked");

		cy.get(".filter-name").eq(2).should("have.text", "VMs");
		cy.get(".filter-name").eq(2).click();
		cy.get("label[for=vms-0]").should("have.text", "CoffeeVM");
		cy.get("input[id=vms-0]").should("not.be.checked");
		cy.get("label[for=vms-1]").should("have.text", "DukeVM");
		cy.get("input[id=vms-1]").should("not.be.checked");

		cy.get(".filter-name").eq(3).should("have.text", "Technologies");
		cy.get(".filter-name").eq(3).click();
		cy.get("label[for=technologies-jfr]").should("have.text", "Flight Recorder");
		cy.get("input[id=technologies-jfr]").should("not.be.checked");
		cy.get("label[for=technologies-jfx]").should("have.text", "JavaFX");
		cy.get("input[id=technologies-jfx]").should("not.be.checked");
		cy.get("label[for=technologies-jaws]").should("have.text", "Java Web Start");
		cy.get("input[id=technologies-jaws]").should("not.be.checked");

		cy.get(".filter-name").eq(4).should("have.text", "GCs");
		cy.get(".filter-name").eq(4).click();
		cy.get("label[for=gcs-cms]").should("have.text", "CMS");
		cy.get("input[id=gcs-cms]").should("not.be.checked");
		cy.get("label[for=gcs-z]").should("have.text", "Z");
		cy.get("input[id=gcs-z]").should("not.be.checked");

		cy.get(".filter-name").eq(5).should("have.text", "Platforms");
		cy.get(".filter-name").eq(5).click();
		cy.get("label[for=platforms-aix-ppc]").should("have.text", "AIX, PPC");
		cy.get("input[id=platforms-aix-ppc]").should("not.be.checked");
		cy.get("label[for=platforms-windows-x64]").should("have.text", "Windows, x86, 64-bit");
		cy.get("input[id=platforms-windows-x64]").should("not.be.checked");

		cy.get(".filter-name").eq(6).should("have.text", "Licensing");
		cy.get(".filter-name").eq(6).click();
		cy.get("label[for=licensing-free-in-development]").should(
			"have.text",
			"Free in Development"
		);
		cy.get("input[id=licensing-free-in-development]").should("not.be.checked");
		cy.get("label[for=licensing-free-in-production]").should("have.text", "Free in Production");
		cy.get("input[id=licensing-free-in-production]").should("not.be.checked");
	});

	it("updates filters on click", () => {
		cy.mount(component);

		cy.get(".filter-name").eq(0).click();
		cy.get("input[id=versions-0]").should("not.be.checked");
		cy.get("input[id=versions-1]").should("not.be.checked");
		cy.get("input[id=versions-2]").should("not.be.checked");

		cy.get(".filter-name").eq(0).click();

		cy.get(".filter-name").eq(1).click();
		cy.get("input[id=vendors-0]").should("not.be.checked");
		cy.get("input[id=vendors-1]").should("not.be.checked");

		cy.get(".filter-name").eq(1).click();

		cy.get(".filter-name").eq(0).click();
		cy.get("input[id=versions-1]").click();

		cy.get(".filter-name").eq(0).click();
		cy.get(".filter-name").eq(0).click();

		cy.get("input[id=versions-0]").should("not.be.checked");
		cy.get("input[id=versions-1]").should("be.checked");
		cy.get("input[id=versions-2]").should("not.be.checked");

		cy.get(".filter-name").eq(1).click();
		cy.get("input[id=vendors-0]").click();
		cy.get("input[id=vendors-1]").click();

		cy.get(".filter-name").eq(1).click();
		cy.get(".filter-name").eq(1).click();

		cy.get("input[id=vendors-0]").should("be.checked");
		cy.get("input[id=vendors-1]").should("be.checked");

		cy.get("input[id=vendors-0]").click();

		cy.get("input[id=vendors-0]").should("not.be.checked");
		cy.get("input[id=vendors-1]").should("be.checked");
	});
});
