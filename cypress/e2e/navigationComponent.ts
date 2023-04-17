/*
 * Copyright 2023 the original author or authors.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */
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
	expectSecondaryNavigationOption: (id: string, title: string, url: string) => {
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
