export const faqPage = {
	expectTitle: (title: string) => {
		cy.get("main h1").should("have.text", title);
	},
	expectSubtitle: (excerpt: string) => {
		cy.get("main h2").should("contain.text", excerpt);
	},
};
