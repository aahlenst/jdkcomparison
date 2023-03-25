import {ComparisonProvider} from "./comparisonContext";
import {Filters} from "./filters";
import {DynamicSelectionFilter, TechnologiesFilter} from "../../src/filter";

describe("<Filters/>", () => {
	const filters = [
		new TechnologiesFilter(),
		new DynamicSelectionFilter("versions", ["8", "11", "17"], (fc) => fc.version.toString()),
		new DynamicSelectionFilter("vendors", ["Coffeecorp", "Dukecorp"], (fc) => fc.vendor),
		new DynamicSelectionFilter("vms", ["CoffeeVM", "DukeVM"], (fc) => fc.virtualMachine.toString())
	];

	const component = (
		<ComparisonProvider filters={filters} data={[]} footnotes={[]}>
			<Filters/>
		</ComparisonProvider>
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
