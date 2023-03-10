import {ComparisonProvider} from "./comparisonContext";
import {Filters} from "./filters";
import {DynamicSelectionFilter, TechnologiesFilter} from "../../src/filter";

describe("<Filters/>", () => {
	const filters = [
		new TechnologiesFilter(),
		new DynamicSelectionFilter("versions", ["8", "11", "17"], (fc) => fc.version.toString()),
		new DynamicSelectionFilter("vendors", ["Coffeecorp", "Dukecorp"], (fc) => fc.vendor)
	];

	const component = (
		<ComparisonProvider filters={filters} data={[]} footnotes={[]}>
			<Filters/>
		</ComparisonProvider>
	);

	it("renders all filters", () => {
		cy.mount(component);

		cy.get("fieldset:nth-of-type(1) legend").should("have.text", "Versions");
		cy.get("fieldset:nth-of-type(1) label[for=versions-0]").should("have.text", "8");
		cy.get("fieldset:nth-of-type(1) input[id=versions-0]").should("not.be.checked");
		cy.get("fieldset:nth-of-type(1) label[for=versions-1]").should("have.text", "11");
		cy.get("fieldset:nth-of-type(1) input[id=versions-1]").should("not.be.checked");
		cy.get("fieldset:nth-of-type(1) label[for=versions-2]").should("have.text", "17");
		cy.get("fieldset:nth-of-type(1) input[id=versions-2]").should("not.be.checked");

		cy.get("fieldset:nth-of-type(2) legend").should("have.text", "Vendors");
		cy.get("fieldset:nth-of-type(2) label[for=vendors-0]").should("have.text", "Coffeecorp");
		cy.get("fieldset:nth-of-type(2) input[id=vendors-0]").should("not.be.checked");
		cy.get("fieldset:nth-of-type(2) label[for=vendors-1]").should("have.text", "Dukecorp");
		cy.get("fieldset:nth-of-type(2) input[id=vendors-1]").should("not.be.checked");

		cy.get("fieldset:nth-of-type(3) legend").should("have.text", "Technologies");
		cy.get("fieldset:nth-of-type(3) label[for=technologies-jfr]").should("have.text", "Flight Recorder");
		cy.get("fieldset:nth-of-type(3) input[id=technologies-jfr]").should("not.be.checked");
		cy.get("fieldset:nth-of-type(3) label[for=technologies-jfx]").should("have.text", "JavaFX");
		cy.get("fieldset:nth-of-type(3) input[id=technologies-jfx]").should("not.be.checked");
	});

	it("updates filters on click", () => {
		cy.mount(component);

		cy.get("fieldset:nth-of-type(1) input[id=versions-0]").should("not.be.checked");
		cy.get("fieldset:nth-of-type(1) input[id=versions-1]").should("not.be.checked");
		cy.get("fieldset:nth-of-type(1) input[id=versions-2]").should("not.be.checked");

		cy.get("fieldset:nth-of-type(2) input[id=vendors-0]").should("not.be.checked");
		cy.get("fieldset:nth-of-type(2) input[id=vendors-1]").should("not.be.checked");

		cy.get("fieldset:nth-of-type(1) input[id=versions-1]").click();
		cy.get("fieldset:nth-of-type(2) input[id=vendors-0]").click();
		cy.get("fieldset:nth-of-type(2) input[id=vendors-1]").click();

		cy.get("fieldset:nth-of-type(1) input[id=versions-0]").should("not.be.checked");
		cy.get("fieldset:nth-of-type(1) input[id=versions-1]").should("be.checked");
		cy.get("fieldset:nth-of-type(1) input[id=versions-2]").should("not.be.checked");

		cy.get("fieldset:nth-of-type(2) input[id=vendors-0]").should("be.checked");
		cy.get("fieldset:nth-of-type(2) input[id=vendors-1]").should("be.checked");

		cy.get("fieldset:nth-of-type(2) input[id=vendors-0]").click();

		cy.get("fieldset:nth-of-type(2) input[id=vendors-0]").should("not.be.checked");
		cy.get("fieldset:nth-of-type(2) input[id=vendors-1]").should("be.checked");
	});
});
