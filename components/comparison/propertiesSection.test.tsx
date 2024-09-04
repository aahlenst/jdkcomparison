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
import { remove } from "../../src/utils";
import { PropertiesFeaturesSlice, PropertiesSection } from "./propertiesSection";

describe("<PropertiesSection/>", () => {
	let data: PropertiesFeaturesSlice[] = [];

	beforeEach(() => {
		data = [1, 2].map((i) => {
			return {
				id: `jdk-${i}`,
				version: 8,
				virtualMachine: { text: "DukeVM" },
				classLibraries: { text: "DukeLibs" },
			};
		});
	});

	test("displays all features", () => {
		render(<PropertiesSection productData={data} showDifferencesOnly={false} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Properties");
		expect(screen.getAllByRole("row")).toHaveLength(3);
		expect(screen.getByRole("row", { name: "Feature Version 8 8" })).toBeInTheDocument();
		expect(
			screen.getByRole("row", { name: "Virtual Machine DukeVM DukeVM" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("row", { name: "Class Libraries DukeLibs DukeLibs" }),
		).toBeInTheDocument();
	});

	test("displays all features of a single product despite differences only on", () => {
		data = remove(data, (item) => item.id === "jdk-2");

		render(<PropertiesSection productData={data} showDifferencesOnly={false} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Properties");
		expect(screen.getAllByRole("row")).toHaveLength(3);
		expect(screen.getByRole("row", { name: "Feature Version 8" })).toBeInTheDocument();
		expect(screen.getByRole("row", { name: "Virtual Machine DukeVM" })).toBeInTheDocument();
		expect(screen.getByRole("row", { name: "Class Libraries DukeLibs" })).toBeInTheDocument();
	});

	test("disappears if all features are identical and differences only is on", () => {
		render(<PropertiesSection productData={data} showDifferencesOnly={true} />);

		expect(screen.queryByRole("heading")).not.toBeInTheDocument();
		expect(screen.queryByRole("row")).not.toBeInTheDocument();
	});

	test("displays Feature Version if features are different and differences only is on", () => {
		data[0].version = 17;

		render(<PropertiesSection productData={data} showDifferencesOnly={true} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Properties");
		expect(screen.getAllByRole("row")).toHaveLength(1);
		expect(screen.getByRole("row", { name: "Feature Version 17 8" })).toBeInTheDocument();
	});

	test("displays Virtual Machine if features are different and differences only is on", () => {
		data[0].virtualMachine.text = "CoffeeVM";

		render(<PropertiesSection productData={data} showDifferencesOnly={true} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Properties");
		expect(screen.getAllByRole("row")).toHaveLength(1);
		expect(
			screen.getByRole("row", { name: "Virtual Machine CoffeeVM DukeVM" }),
		).toBeInTheDocument();
	});

	test("displays Class Libraries if features are different and differences only is on", () => {
		data[0].classLibraries.text = "CoffeeLibs";

		render(<PropertiesSection productData={data} showDifferencesOnly={true} />);

		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Properties");
		expect(screen.getAllByRole("row")).toHaveLength(1);
		expect(
			screen.getByRole("row", { name: "Class Libraries CoffeeLibs DukeLibs" }),
		).toBeInTheDocument();
	});
});
