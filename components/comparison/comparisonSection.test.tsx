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
import { fireEvent, render, screen } from "@testing-library/react";
import { ComparisonSection } from "./comparisonSection";
import { Feature } from "./feature";
import { Model } from "../../src/modelTypes";
import Present = Model.Present;

describe("<ComparisonSection/>", () => {
	const children = (
		<>
			<Feature
				id="feature-a"
				name="Feature A"
				values={[{ id: "product-1", present: Present.YES }]}
			/>
			<Feature
				id="feature-b"
				name="Feature B"
				values={[{ id: "product-1", present: Present.NO }]}
			/>
		</>
	);

	test("displays section with all features", () => {
		render(
			<ComparisonSection id="a-section" label="A section">
				{children}
			</ComparisonSection>,
		);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("A section");
		expect(screen.getAllByRole("row")).toHaveLength(2);
		expect(screen.getByRole("row", { name: "Feature A yes" })).toBeInTheDocument();
		expect(screen.getByRole("row", { name: "Feature B no" })).toBeInTheDocument();
	});

	test("hides and reveals section with all features", () => {
		render(
			<ComparisonSection id="a-section" label="A section">
				{children}
			</ComparisonSection>,
		);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("A section");
		expect(screen.getAllByRole("row")).toHaveLength(2);
		expect(screen.getByRole("row", { name: "Feature A yes" })).toBeInTheDocument();
		expect(screen.getByRole("row", { name: "Feature B no" })).toBeInTheDocument();

		fireEvent.click(screen.getByRole("button", { name: "Hide section A section" }));

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("A section");
		expect(screen.queryAllByRole("row")).toHaveLength(0);

		fireEvent.click(screen.getByRole("button", { name: "Show section A section" }));

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("A section");
		expect(screen.getAllByRole("row")).toHaveLength(2);
		expect(screen.getByRole("row", { name: "Feature A yes" })).toBeInTheDocument();
		expect(screen.getByRole("row", { name: "Feature B no" })).toBeInTheDocument();
	});
});
