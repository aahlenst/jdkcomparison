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
		productHeadersComponent.expectDownloadUrl(
			"https://coffeecorp.com/jdk17"
		);
		productHeadersComponent.expectWebsiteUrl("https://coffeecorp.com/");
	});
});

const productHeadersComponent = {
	expectDownloadUrl: (url: string) => {
		cy.get(".product-download a")
			.should("have.attr", "href")
			.and("eq", url);
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
