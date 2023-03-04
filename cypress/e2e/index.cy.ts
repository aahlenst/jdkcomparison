describe("Home", () => {
	it("should display Technologies", () => {
		cy.visit("http://localhost:3000/");

		cy.title().should("eq", "JDK Comparison");

		cy.get(".featureName").eq(0).should("have.text", "JavaFX");
		cy.get(".featureValue").eq(0).should("have.text", "yes");
		cy.get(".featureValue").eq(1).should("have.text", "no");
	});
});

// Prevent TypeScript from reading file as legacy script
export {};
