describe("Home", () => {
	it("should display Technologies", () => {
		cy.visit("http://localhost:3000/");

		cy.title().should("eq", "JDK Comparison");

		cy.get(".featureName").eq(0).should("have.text", "JavaFX");
		cy.get(".featureValue").eq(0).should("have.text", "yes");
		cy.get(".featureValue").eq(1).should("have.text", "no");
		cy.get(".featureName").eq(1).should("have.text", "Flight Recorder (JFR)");
		cy.get(".featureValue").eq(2).should("have.text", "no");
		cy.get(".featureValue").eq(3).should("have.text", "yes");
	});
});

// Prevent TypeScript from reading file as legacy script
export {};
