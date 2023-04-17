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
export const faqPage = {
	expectTitle: (title: string) => {
		cy.get("main h1").should("have.text", title);
	},
	expectSubtitle: (excerpt: string) => {
		cy.get("main h2").should("contain.text", excerpt);
	},
	expectValidOverview: () => {
		// Takes all links in the overview section.
		cy.get("h2:nth-of-type(1) + ul li a").each((e) => {
			const text = e.text();
			const href = e.attr("href");
			const anchor = href?.substring(1); // Chop off #.

			// Checks whether the anchor exists outside "Overview".
			cy.get(`h2:nth-of-type(n+2)#${anchor}`).should("exist");

			// Checks whether there is a matching title outside "Overview".
			cy.get(`h2:nth-of-type(n+2)#${anchor}`).should("have.text", text);
		});
	},
	expectAllFAQInOverview: () => {
		// Look at each heading after "Overview".
		cy.get("h2:nth-of-type(n+2)").each((e) => {
			const text = e.text();
			const id = e.attr("id");

			// Check if there is a matching link in "Overview".
			cy.get(`h2:nth-of-type(1) + ul li a[href='#${id}']`).should("exist");
			cy.get(`h2:nth-of-type(1) + ul li a[href='#${id}']`).should("have.text", text);
		});
	},
};
