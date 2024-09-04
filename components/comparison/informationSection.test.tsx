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
import {
	InformationFeaturesSlice,
	InformationSection,
} from "@/components/comparison/informationSection";
import { remove } from "../../src/utils";

describe("<InformationSection/>", () => {
	let data: InformationFeaturesSlice[] = [];

	beforeEach(() => {
		data = [1, 2].map((i) => {
			return {
				id: `jdk-${i}`,
				countryOfOrigin: "Dukeland",
				remarks: { text: "Lorem ipsum" },
			};
		});
	});

	test("displays all features", () => {
		render(<InformationSection productData={data} showDifferencesOnly={false} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Information");
		expect(screen.getAllByRole("row")).toHaveLength(2);
		expect(
			screen.getByRole("row", {
				name: "Country of Origin Show explanation Dukeland Dukeland",
			}),
		).toBeInTheDocument();
		expect(
			screen.getByRole("row", { name: "Remarks Lorem ipsum Lorem ipsum" }),
		).toBeInTheDocument();
	});

	test("displays all features of a single product despite differences only on", () => {
		data = remove(data, (item) => item.id === "jdk-2");

		render(<InformationSection productData={data} showDifferencesOnly={false} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Information");
		expect(screen.getAllByRole("row")).toHaveLength(2);
		expect(
			screen.getByRole("row", { name: "Country of Origin Show explanation Dukeland" }),
		).toBeInTheDocument();
		expect(screen.getByRole("row", { name: "Remarks Lorem ipsum" })).toBeInTheDocument();
	});

	test("disappears if all features are identical and differences only is on", () => {
		render(<InformationSection productData={data} showDifferencesOnly={true} />);

		expect(screen.queryByRole("heading")).not.toBeInTheDocument();
		expect(screen.queryByRole("row")).not.toBeInTheDocument();
	});

	test("displays Country of Origin if features are different and differences only is on", () => {
		data[0].countryOfOrigin = "United States of Duke";

		render(<InformationSection productData={data} showDifferencesOnly={true} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Information");
		expect(screen.getAllByRole("row")).toHaveLength(1);
		expect(
			screen.getByRole("row", {
				name: "Country of Origin Show explanation United States of Duke Dukeland",
			}),
		).toBeInTheDocument();
	});

	test("displays Remarks if features are different and differences only is on", () => {
		data[0].remarks.text = "Mug included";

		render(<InformationSection productData={data} showDifferencesOnly={true} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Information");
		expect(screen.getAllByRole("row")).toHaveLength(1);
		expect(
			screen.getByRole("row", { name: "Remarks Mug included Lorem ipsum" }),
		).toBeInTheDocument();
	});
});
