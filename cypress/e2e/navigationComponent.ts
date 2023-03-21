export const navigationComponent = {
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

export const mobileNavigationComponent = {
	closeMobileMenu: () => {
		cy.get("#mobile-menu-toggle").click();
	},
	expectNavigationOptions: (name: string[]) => {
		cy.get(".mobile-navigation-option").should("have.length", name.length);
		for (let i = 0; i < name.length; i++) {
			cy.get(".mobile-navigation-option").eq(i).should("have.text", name[i]);
		}
	},
	expectPageTitle: (title: string) => {
		cy.title().should("eq", title);
	},
	navigateTo: (name: string) => {
		const targetName = name.toLocaleLowerCase("en").replace(/\s/, "-");

		// Using classes because it seems impossible to attach an ID to Disclosure.Button.
		cy.get(`.mobile-navigation-option-${targetName}`).click();
	},
	showMobileMenu: () => {
		cy.get("#mobile-menu-toggle").click();
	}
};
