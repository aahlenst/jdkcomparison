import {Feature} from "./feature";
import {Model} from "../../src/modelTypes";

describe("<Feature/>", () => {
	it("renders feature's presence per product", () => {
		const data: (Model.FeaturePresence & Model.Keyable)[] = [
			{id: "coffeecorp-jdk-11", present: Model.Present.YES},
			{id: "dukecorp-jdk-11", present: Model.Present.NO},
		];

		cy.mount(<Feature id="technologies-jfx" name="JavaFX" values={data}/>);

		cy.get(".feature-name").should("have.text", "JavaFX");
		cy.get(".feature-value svg").eq(0).should("have.class", "present-yes");
		cy.get(".feature-value svg").eq(1).should("have.class", "present-no");
	});
});
