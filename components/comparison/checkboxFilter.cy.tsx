import {CheckboxFilter} from "./checkboxFilter";
import {Model} from "@/src/modelTypes";
import {ApplyCheckboxFilter, ComparisonAction} from "./comparisonContext";

describe("<CheckboxFilter/>", () => {
	it("renders all options", () => {
		const filter: Model.Filter = {
			id: "vendors",
			options: [
				{id: "vendors-0", label: "Oracle", checked: false},
				{id: "vendors-1", label: "Azul", checked: true},
			]
		};
		const onChangeHandler = function () {
			// Do nothing.
		};

		cy.mount(<CheckboxFilter label="Vendors" filter={filter} onChangeHandler={onChangeHandler}/>);

		cy.get("legend").should("have.text", "Vendors");

		cy.get("label[for=vendors-0]").should("have.text", "Oracle");
		cy.get("input[id=vendors-0]").should("not.be.checked");

		cy.get("label[for=vendors-1]").should("have.text", "Azul");
		cy.get("input[id=vendors-1]").should("be.checked");
	});

	it("enables and disables options on click", () => {
		const filter = {
			id: "versions",
			options: [
				{id: "versions-0", label: "8", checked: false},
				{id: "versions-1", label: "11", checked: false},
				{id: "versions-2", label: "17", checked: false},
			]
		};

		const onChangeHandler = function (action: ApplyCheckboxFilter) {
			for (const option of filter.options) {
				if (option.id === action.filterId) {
					option.checked = action.checked;
				}
			}
		};

		cy.mount(<CheckboxFilter label="Versions" filter={filter} onChangeHandler={onChangeHandler}/>)
			.then(({rerender}) => {
				cy.get("legend").should("have.text", "Versions");

				cy.get("label[for=versions-0]").should("have.text", 8);
				cy.get("input[id=versions-0]").should("not.be.checked");

				cy.get("label[for=versions-1]").should("have.text", 11);
				cy.get("input[id=versions-1]").should("not.be.checked");

				cy.get("input[id=versions-0]").click();

				rerender(<CheckboxFilter label="Versions" filter={filter} onChangeHandler={onChangeHandler}/>);

				cy.get("input[id=versions-0]").should("be.checked");
				cy.get("input[id=versions-1]").should("not.be.checked");

				cy.get("input[id=versions-0]").click();

				rerender(<CheckboxFilter label="Versions" filter={filter} onChangeHandler={onChangeHandler}/>);

				cy.get("input[id=versions-0]").should("not.be.checked");
				cy.get("input[id=versions-1]").should("not.be.checked");

				cy.get("input[id=versions-0]").click();
				cy.get("input[id=versions-1]").click();

				rerender(<CheckboxFilter label="Versions" filter={filter} onChangeHandler={onChangeHandler}/>);

				cy.get("input[id=versions-0]").should("be.checked");
				cy.get("input[id=versions-1]").should("be.checked");
			});
	});
});
