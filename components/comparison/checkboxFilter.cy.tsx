import {CheckboxFilter} from "./checkboxFilter";
import {ApplyCheckboxFilter} from "./comparisonContext";
import {DynamicSelectionFilter} from "../../src/filter";

describe("<CheckboxFilter/>", () => {
	it("renders all options", () => {
		const filter = new DynamicSelectionFilter("vendors", ["Coffeecorp", "Dukecorp"], (fc) => fc.vendor);

		const onChangeHandler = function () {
			// Do nothing.
		};

		cy.mount(<CheckboxFilter label="Vendors" filter={filter} onChangeHandler={onChangeHandler}/>);

		cy.get("legend").should("have.text", "Vendors");

		cy.get("label[for=vendors-0]").should("have.text", "Coffeecorp");
		cy.get("input[id=vendors-0]").should("not.be.checked");

		cy.get("label[for=vendors-1]").should("have.text", "Dukecorp");
		cy.get("input[id=vendors-1]").should("not.be.checked");
	});

	it("enables and disables options on click", () => {
		const filter = new DynamicSelectionFilter("versions", ["8", "11", "17"], (fc) => fc.version.toString());

		const onChangeHandler = function (action: ApplyCheckboxFilter) {
			for (const option of filter.options) {
				if (option.id === action.optionId) {
					option.selected = action.checked;
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