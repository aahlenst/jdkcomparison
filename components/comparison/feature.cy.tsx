import {Feature} from "./feature";
import {FeaturePresence} from "@/src/comparisonTypes";
import {Keyable} from "@/src/keyable";

describe("<Feature/>", () => {
	it("renders feature's presence per product", () => {
		const data: (FeaturePresence & Keyable)[] = [
			{id: "coffeecorp-jdk-11", present: "yes"},
			{id: "dukecorp-jdk-11", present: "no"},
		];

		cy.mount(<Feature name="JavaFX" values={data}/>);

		cy.get(".featureName").should("have.text", "JavaFX");
		cy.get(".featureValue").eq(0).should("have.text", "yes");
		cy.get(".featureValue").eq(1).should("have.text", "no");
	});
});
