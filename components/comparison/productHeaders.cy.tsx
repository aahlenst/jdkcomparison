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
import { ProductHeaders } from "./productHeaders";

describe("<ProductHeaders/>", () => {
	it("renders a product header", () => {
		const productData = [
			{
				id: "coffeecorp-jdk-17",
				name: "Coffeecorp JDK 17",
				vendor: "Coffeecorp",
				version: 17,
				downloadUrl: "https://coffeecorp.com/jdk17",
				websiteUrl: "https://coffeecorp.com/",
			},
		];

		cy.mount(<ProductHeaders headers={productData} />);

		productHeadersComponent.expectProductName("Coffeecorp JDK 17");
		productHeadersComponent.expectVendorName("Coffeecorp");
		productHeadersComponent.expectDownloadUrl("https://coffeecorp.com/jdk17");
		productHeadersComponent.expectWebsiteUrl("https://coffeecorp.com/");
	});
});

const productHeadersComponent = {
	expectDownloadUrl: (url: string) => {
		cy.get(".product-download a").should("have.attr", "href").and("eq", url);
	},
	expectProductName: (name: string) => {
		cy.get(".product-name").should("have.text", name);
	},
	expectVendorName: (name: string) => {
		cy.get(".product-vendor").should("have.text", name);
	},
	expectWebsiteUrl: (url: string) => {
		cy.get(".product-website a").should("have.attr", "href").and("eq", url);
	},
};
