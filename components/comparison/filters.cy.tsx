import {ComparisonProvider} from "./comparisonContext";
import {Filters} from "./filters";

describe("<Filters/>", () => {
	const filters = [
		{
			id: "technologies",
			options: [
				{id: "technologies-0", label: "Flight Recorder", checked: false},
				{id: "technologies-1", label: "JavaFX", checked: false},
			]
		},
		{
			id: "versions",
			options: [
				{id: "versions-0", label: "8", checked: false},
				{id: "versions-1", label: "11", checked: false},
				{id: "versions-2", label: "17", checked: false},
			]
		},
		{
			id: "vendors",
			options: [
				{id: "vendors-0", label: "Oracle", checked: false},
				{id: "vendors-1", label: "Azul", checked: true},
			]
		}
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
		cy.get("fieldset:nth-of-type(2) label[for=vendors-0]").should("have.text", "Oracle");
		cy.get("fieldset:nth-of-type(2) input[id=vendors-0]").should("not.be.checked");
		cy.get("fieldset:nth-of-type(2) label[for=vendors-1]").should("have.text", "Azul");
		cy.get("fieldset:nth-of-type(2) input[id=vendors-1]").should("be.checked");

		cy.get("fieldset:nth-of-type(3) legend").should("have.text", "Technologies");
		cy.get("fieldset:nth-of-type(3) label[for=technologies-0]").should("have.text", "Flight Recorder");
		cy.get("fieldset:nth-of-type(3) input[id=technologies-0]").should("not.be.checked");
		cy.get("fieldset:nth-of-type(3) label[for=technologies-1]").should("have.text", "JavaFX");
		cy.get("fieldset:nth-of-type(3) input[id=technologies-1]").should("not.be.checked");
	});

	it("updates filters on click", () => {
		cy.mount(component);

		cy.get("fieldset:nth-of-type(1) input[id=versions-0]").should("not.be.checked");
		cy.get("fieldset:nth-of-type(1) input[id=versions-1]").should("not.be.checked");
		cy.get("fieldset:nth-of-type(1) input[id=versions-2]").should("not.be.checked");

		cy.get("fieldset:nth-of-type(2) input[id=vendors-0]").should("not.be.checked");
		cy.get("fieldset:nth-of-type(2) input[id=vendors-1]").should("be.checked");

		cy.get("fieldset:nth-of-type(1) input[id=versions-1]").click();
		cy.get("fieldset:nth-of-type(2) input[id=vendors-0]").click();
		cy.get("fieldset:nth-of-type(2) input[id=vendors-1]").click();

		cy.get("fieldset:nth-of-type(1) input[id=versions-0]").should("not.be.checked");
		cy.get("fieldset:nth-of-type(1) input[id=versions-1]").should("be.checked");
		cy.get("fieldset:nth-of-type(1) input[id=versions-2]").should("not.be.checked");

		cy.get("fieldset:nth-of-type(2) input[id=vendors-0]").should("be.checked");
		cy.get("fieldset:nth-of-type(2) input[id=vendors-1]").should("not.be.checked");
	});
});
