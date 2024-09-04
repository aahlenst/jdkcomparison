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
import { describe, expect, test } from "@jest/globals";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/jest-globals";
import { render, screen } from "@testing-library/react";
import { ProductHeaders } from "./productHeaders";

describe("<ProductHeaders/>", () => {
	test("renders a product header", () => {
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

		render(<ProductHeaders headers={productData} />);

		expect(screen.getByTestId("product-vendor")).toHaveTextContent("Coffeecorp");
		expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Coffeecorp JDK 17");
		expect(screen.getByRole("link", { name: "Download" })).toHaveAttribute(
			"href",
			"https://coffeecorp.com/jdk17",
		);
		expect(screen.getByRole("link", { name: "Website" })).toHaveAttribute(
			"href",
			"https://coffeecorp.com/",
		);
	});
});
