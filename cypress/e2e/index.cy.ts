describe("Home", () => {
	it("should display 'Get started'", () => {
		cy.visit("http://localhost:3000/");
		cy.get("body").contains("Get started");
	});
});

// Prevent TypeScript from reading file as legacy script
export {};
