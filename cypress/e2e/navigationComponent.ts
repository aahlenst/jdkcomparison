export const navigationComponent = {
	clickOnLogo: () => {
		cy.get("#logo").click();
	},
	expectNavigationOptions: (name: string[]) => {
		cy.get(".desktop-navigation-option").should("have.length", name.length);
		for (let i = 0; i < name.length; i++) {
			cy.get(".desktop-navigation-option")
				.eq(i)
				.should("have.text", name[i]);
		}
	},
	expectSecondaryNavigationOption: (
		id: string,
		title: string,
		url: string
	) => {
		cy.get(`#${id}`).should("exist");
		cy.get(`#${id} svg title`).should("have.text", title);
		cy.get(`a#${id}`).should("have.attr", "href").and("eq", url);
	},
	expectPageTitle: (title: string) => {
		cy.title().should("eq", title);
	},
	navigateTo: (name: string) => {
		const targetName = name.toLocaleLowerCase("en").replace(/\s/, "-");
		cy.get(`.desktop-navigation-option-${targetName}`).click();
	},
};
