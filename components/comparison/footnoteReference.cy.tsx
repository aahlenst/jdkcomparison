import {FootnoteReference} from "./footnoteReference";

describe("<FootnoteReference/>", () => {
	it("displays footnote if number is defined",() => {
		cy.mount(<FootnoteReference footnoteNumber={3}/>);

		footnoteReferenceComponent.expectFootnoteNumber(3);
		footnoteReferenceComponent.expectLinkToFootnote(3);
		footnoteReferenceComponent.expectBacklinkAnchor(3);
	});

	it("should not display footnote if number is not defined", () => {
		cy.mount(<FootnoteReference/>);

		cy.get("sup").should("not.exist");
	});
});

const footnoteReferenceComponent = {
	expectBacklinkAnchor: (number: number) => {
		cy.get("sup").should("have.attr", "id").and("eq", `fnref-${number}`);
	},
	expectFootnoteNumber: (number: number) => {
		cy.get("sup a ").should("contain.text", number);
	},
	expectLinkToFootnote: (number: number) => {
		cy.get("sup a").should("have.attr", "href").and("eq", `#fn-${number}`);
	},
};
