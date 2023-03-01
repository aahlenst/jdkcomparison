import {HelloWorld} from "./hello";

describe("<HelloWorld/>", () => {
	it("displays 'Hello World", () => {
		cy.mount(<HelloWorld/>);

		cy.get("div.hello").should("have.text", "Hello World");
	});
});
