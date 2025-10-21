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
import { beforeEach, describe, expect, test } from "@jest/globals";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/jest-globals";
import { render, screen } from "@testing-library/react";
import { remove } from "@/src/utils";
import { CustomisationsFeaturesSlice, CustomisationsSection } from "./customisationsSection";

describe("<CustomisationsSection/>", () => {
	let data: CustomisationsFeaturesSlice[] = [];

	beforeEach(() => {
		data = [1, 2].map((i) => {
			return {
				id: `jdk-${i}`,
				editions: { text: "JRE" },
				customisations: { text: "few" },
				notableFeatures: { text: "none" },
			};
		});
	});

	test("displays all features", () => {
		render(<CustomisationsSection productData={data} showDifferencesOnly={false} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Customisations");
		expect(screen.getAllByRole("row")).toHaveLength(3);
		expect(screen.getByRole("row", { name: "Editions JRE JRE" })).toBeInTheDocument();
		expect(
			screen.getByRole("row", { name: "Customisations Show explanation few few" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("row", { name: "Notable Features Show explanation none none" }),
		).toBeInTheDocument();
	});

	test("displays all features of a single product despite differences only on", () => {
		data = remove(data, (item) => item.id === "jdk-2");

		render(<CustomisationsSection productData={data} showDifferencesOnly={false} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Customisations");
		expect(screen.getAllByRole("row")).toHaveLength(3);
		expect(screen.getByRole("row", { name: "Editions JRE" })).toBeInTheDocument();
		expect(
			screen.getByRole("row", { name: "Customisations Show explanation few" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("row", { name: "Notable Features Show explanation none" }),
		).toBeInTheDocument();
	});

	test("disappears if all features are identical and differences only is on", () => {
		render(<CustomisationsSection productData={data} showDifferencesOnly={true} />);

		expect(screen.queryByRole("heading")).not.toBeInTheDocument();
		expect(screen.queryByRole("row")).not.toBeInTheDocument();
	});

	test("displays Editions if features are different and differences only is on", () => {
		data[0].editions.text = "none";

		render(<CustomisationsSection productData={data} showDifferencesOnly={true} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Customisations");
		expect(screen.getAllByRole("row")).toHaveLength(1);
		expect(screen.getByRole("row", { name: "Editions none JRE" })).toBeInTheDocument();
	});

	test("displays Customisations if features are different and differences only is on", () => {
		data[0].customisations.text = "many";

		render(<CustomisationsSection productData={data} showDifferencesOnly={true} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Customisations");
		expect(screen.getAllByRole("row")).toHaveLength(1);
		expect(
			screen.getByRole("row", { name: "Customisations Show explanation many few" }),
		).toBeInTheDocument();
	});

	test("displays Notable Features if features are different and differences only is on", () => {
		data[0].notableFeatures.text = "FairyGC";

		render(<CustomisationsSection productData={data} showDifferencesOnly={true} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Customisations");
		expect(screen.getAllByRole("row")).toHaveLength(1);
		expect(
			screen.getByRole("row", { name: "Notable Features Show explanation FairyGC none" }),
		).toBeInTheDocument();
	});
});
