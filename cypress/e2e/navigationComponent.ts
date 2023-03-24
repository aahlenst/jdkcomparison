export const navigationComponent = {
	clickOnLogo: () => {
		cy.get("#logo").click();
	},
	expectNavigationOptions: (name: string[]) => {
		cy.get(".desktop-navigation-option").should("have.length", name.length);
		for (let i = 0; i < name.length; i++) {
			cy.get(".desktop-navigation-option").eq(i).should("have.text", name[i]);
		}
	},
	expectPageTitle: (title: string) => {
		cy.title().should("eq", title);
	},
	navigateTo: (name: string) => {
		const targetName = name.toLocaleLowerCase("en").replace(/\s/, "-");
		cy.get(`.desktop-navigation-option-${targetName}`).click();
	},
};
